import { LitElement, html, css, nothing, PropertyValues } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { HomeAssistant } from '../types';
import { AppearanceConfig, ChronicleCardConfig, DEFAULT_CONFIG, SourceConfig } from '../models/config';
import { ChronicleEvent, EventGroup } from '../models/event';
import { EventStore } from '../store/event-store';
import { setLocale } from '../localize';
import { setFormatContext } from '../utils/date-utils';
import { EDITOR_NAME } from '../constants';
import { setDebug, trace } from '../utils/debug';
import type { DetailDialog } from './elements/detail-dialog';
import './layouts/vertical-timeline';
import './layouts/horizontal-timeline';
import './elements/detail-dialog';

@customElement('chronicle-card-local-snaps')
export class ChronicleCard extends LitElement {
  @state() private _config?: ChronicleCardConfig;
  @state() private _items: Array<ChronicleEvent | EventGroup> = [];
  @state() private _layout: 'vertical' | 'horizontal' = 'vertical';
  @state() private _selectedDate = '';
  @state() private _visibleDate = '';
  @state() private _calOpen = false;
  /** Month shown in the calendar popup, as YYYY-MM. */
  @state() private _calMonth = '';
  private _outsideClick = (e: Event) => {
    if (!e.composedPath().includes(this)) {
      this._calOpen = false;
      document.removeEventListener('click', this._outsideClick, { capture: true } as EventListenerOptions);
    }
  };
  /** Bumped when hass settings that affect rendering (language, time format/zone) change. */
  @state() private _localeKey = '';

  @query('chronicle-detail-dialog') private _dialog?: DetailDialog;

  private _store = new EventStore();
  private _storeUnsub?: () => void;
  private _pollTimer?: ReturnType<typeof setInterval>;
  private _hass?: HomeAssistant;
  private _rawConfig?: ChronicleCardConfig;

  static getConfigElement() {
    return document.createElement(EDITOR_NAME);
  }

  /** Card-picker preview: a timeline of something this instance actually has. */
  static getStubConfig(hass?: HomeAssistant): Partial<ChronicleCardConfig> {
    const ids = Object.keys(hass?.states ?? {});
    const calendar = ids.find((id) => id.startsWith('calendar.'));
    const tracked = ids
      .filter((id) => /^(binary_sensor|lock|cover|person|light)\./.test(id))
      .slice(0, 3);
    const sources: SourceConfig[] = calendar
      ? [{ type: 'calendar', entity: calendar }]
      : tracked.length
        ? [{ type: 'history', entities: tracked }]
        : [];
    return { title: 'Timeline', sources };
  }

  setConfig(config: ChronicleCardConfig): void {
    if (!config) throw new Error('No configuration provided');
    if (config.sources !== undefined && !Array.isArray(config.sources)) {
      throw new Error('"sources" must be a list');
    }
    // HA calls setConfig again with an identical object on many re-renders
    if (this._rawConfig && JSON.stringify(this._rawConfig) === JSON.stringify(config)) return;
    const layoutChanged = this._rawConfig?.layout !== config.layout;
    this._rawConfig = config;

    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      sources: config.sources ?? [],
      filters: { ...DEFAULT_CONFIG.filters, ...config.filters },
      grouping: { ...DEFAULT_CONFIG.grouping, ...config.grouping },
      appearance: { ...DEFAULT_CONFIG.appearance, ...config.appearance },
    } as ChronicleCardConfig;

    setDebug(this._config.debug === true, this._hass);
    if (layoutChanged) this._layout = this._config.layout ?? 'vertical';
    this._store.configure(this._config);
    if (!this._config.show_date_picker) this._selectedDate = '';
    this._store.setSelectedDate(this._selectedDate || null).catch(() => {});
    if (this._hass && this.isConnected) this._fetch(true);
    if (this.isConnected) this._startPolling();
  }

  set hass(hass: HomeAssistant) {
    const old = this._hass;
    this._hass = hass;
    if (!old && this._config?.debug) setDebug(true, hass);

    // Only re-render for hass changes that affect formatting — the timeline
    // itself re-renders through the store subscription.
    const localeKey = [
      this._config?.language, hass.locale?.language, hass.language,
      hass.locale?.time_format, hass.locale?.time_zone, hass.config?.time_zone,
    ].join('|');
    if (localeKey !== this._localeKey) this._localeKey = localeKey;

    if (!this.isConnected || !this._config) return;
    if (!old) {
      this._fetch(false);
    } else {
      this._store.processStateChanges(hass, old).catch((err: unknown) => {
        console.warn('[chronicle-card] Live update error:', err);
      });
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  connectedCallback(): void {
    super.connectedCallback();
    trace('card connected');
    this._storeUnsub?.();
    this._storeUnsub = this._store.subscribe(() => {
      this._items = [...this._store.items];
    });
    this._items = [...this._store.items];
    this._startPolling();
    // Catch up on anything missed while detached (fetch is staleness-throttled)
    if (this._hass && this._config) this._fetch(false);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    trace('card DISCONNECTED');
    document.removeEventListener('click', this._outsideClick, { capture: true } as EventListenerOptions);
    this._storeUnsub?.();
    this._storeUnsub = undefined;
    this._stopPolling();
  }

  private _fetch(force: boolean): void {
    if (!this._hass) return;
    this._syncLocale();
    this._store.fetch(this._hass, force).catch((err: unknown) => {
      console.warn('[chronicle-card] Fetch error:', err);
    });
  }

  /** Poll on a timer so REST/logbook/calendar sources refresh even when no states change. */
  private _startPolling(): void {
    this._stopPolling();
    if (!this._config) return;
    this._pollTimer = setInterval(() => this._fetch(true), this._store.pollInterval);
  }

  private _stopPolling(): void {
    if (this._pollTimer) clearInterval(this._pollTimer);
    this._pollTimer = undefined;
  }

  /**
   * Sync module-level language and date formatting from `config.language`
   * (explicit override) or the HA user profile. Called at render time so
   * multiple cards with different `language` settings each render correctly.
   */
  private _syncLocale(): void {
    const language = this._config?.language || this._hass?.locale?.language || this._hass?.language || 'en';
    setLocale(language);
    setFormatContext(this._hass, language, this._config?.time_format);
  }

  /** card_height: fill, or a row count set in the sections-view layout editor. */
  private get _fill(): boolean {
    const h = this._config?.appearance?.card_height;
    return h === 'fill' || h === '100%' || typeof this._config?.grid_options?.rows === 'number';
  }

  protected willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);
    // Reflect a `fill` attribute so :host([fill]) styles stretch the card to
    // the height the dashboard hands us (Panel layout, sized grid sections).
    this.toggleAttribute('fill', this._fill);
    this.toggleAttribute('cal-open', this._calOpen);
  }

  static styles = css`
    :host {
      display: block;
      contain: content;
    }

    /* Fill mode — stretch the whole chain to the height the dashboard gives us. */
    :host([fill]) {
      height: 100%;
    }

    /* Let the calendar popup overflow the card while open */
    :host([cal-open]) {
      contain: none;
      position: relative;
      z-index: 5;
    }
    :host([cal-open]) ha-card {
      overflow: visible;
    }

    ha-card {
      overflow: hidden;
    }

    :host([fill]) ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    :host([fill]) .card-content {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }

    :host([fill]) .card-content > * {
      flex: 1 1 auto;
      min-height: 0;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 6px;
    }

    .title {
      font-size: 15px;
      font-weight: 700;
      color: var(--ha-card-header-color, var(--primary-text-color, #333));
      letter-spacing: -0.3px;
    }

    .header-actions {
      display: flex;
      gap: 3px;
    }

    .layout-toggle {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #999);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .layout-toggle:hover {
      background: var(--secondary-background-color, rgba(127,127,127,0.08));
      color: var(--primary-text-color, #333);
    }
    .layout-toggle:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 1px;
    }
    .layout-toggle.active {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .layout-toggle ha-icon {
      --mdc-icon-size: 17px;
    }

    .title-wrap {
      display: flex;
      align-items: baseline;
      gap: 8px;
      min-width: 0;
    }
    .current-date {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--secondary-text-color, #888);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .layout-toggle[disabled] {
      opacity: 0.35;
      cursor: default;
    }

    .date-picker {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-left: auto;
      margin-right: 6px;
    }
    .date-field {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.25));
      color: var(--primary-text-color, #333);
      font-size: 12.5px;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      white-space: nowrap;
    }
    .date-field.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
      font-weight: 600;
    }
    .date-field ha-icon {
      --mdc-icon-size: 15px;
      opacity: 0.7;
    }
    .date-field {
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      height: 28px;
      padding: 0 8px;
      background: transparent;
    }
    .date-field.active { font-weight: 600; }
    .date-picker { position: relative; }
    .cal {
      position: absolute;
      top: 36px;
      right: 0;
      z-index: 10;
      width: 252px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 12px;
      /* Opaque base (themes often use translucent card backgrounds) with the
         card colour layered on top */
      background-color: var(--primary-background-color, #fafafa);
      background-image: linear-gradient(
        var(--card-background-color, #fff),
        var(--card-background-color, #fff)
      );
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      box-shadow: 0 6px 24px rgba(0,0,0,0.25);
      color: var(--primary-text-color, #333);
      font-size: 12.5px;
    }
    .cal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      text-align: center;
    }
    .cal-wd {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--secondary-text-color, #888);
      padding: 4px 0;
    }
    .cal-day {
      height: 30px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
      font-variant-numeric: tabular-nums;
    }
    .cal-day:hover:not([disabled]) {
      background: var(--secondary-background-color, rgba(127,127,127,0.1));
    }
    .cal-day.today { font-weight: 700; color: var(--primary-color, #03a9f4); }
    .cal-day.sel {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .cal-day[disabled] { opacity: 0.3; cursor: default; }
    .date-picker input.legacy {
      height: 30px;
      box-sizing: border-box;
      padding: 0 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.25));
      background: transparent;
      color: var(--primary-text-color, #333);
      font: inherit;
      font-size: 12.5px;
      color-scheme: light dark;
      cursor: pointer;
    }
    .date-picker input[type='date']:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    .date-picker input.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
      font-weight: 600;
    }

    .card-content {
      padding: 0 16px 14px;
    }
  `;

  protected render() {
    if (!this._config) return nothing;
    this._syncLocale();

    const showHeader = this._config.show_header !== false;
    const showToggle = this._config.show_layout_toggle !== false;
    const appearance: AppearanceConfig = {
      ...this._config.appearance,
      ...(this._fill ? { card_height: 'fill' } : {}),
    };
    const compact = appearance.compact ?? false;
    const animate = appearance.animate_new_events !== false;
    // Sticky date + visible header → show the current day in the card header.
    const headerDate = showHeader && appearance.sticky_date_headers === true && this._layout === 'vertical';

    return html`
      <ha-card>
        ${showHeader && (this._config.title || showToggle) ? html`
          <div class="card-header">
            <span class="title-wrap">
              <span class="title">${this._config.title ?? ''}</span>
              ${headerDate && this._visibleDate ? html`<span class="current-date">${this._visibleDate}</span>` : ''}
            </span>
            ${this._config.show_date_picker ? this._renderDatePicker() : ''}
            ${showToggle ? html`
              <div class="header-actions">
                ${this._renderToggle('vertical', 'mdi:view-sequential', 'Vertical timeline')}
                ${this._renderToggle('horizontal', 'mdi:view-carousel', 'Horizontal timeline')}
              </div>
            ` : nothing}
          </div>
        ` : nothing}

        <div class="card-content" @chronicle-show-detail=${this._onShowDetail} @chronicle-toggle-group=${this._onToggleGroup}>
          ${this._layout === 'vertical'
            ? html`
              <chronicle-vertical-timeline
                .items=${this._items}
                .appearance=${appearance}
                ?compact=${compact}
                ?animateNew=${animate}
                ?headerDate=${headerDate}
                @chronicle-visible-date=${(e: CustomEvent) => { this._visibleDate = e.detail.label; }}
              ></chronicle-vertical-timeline>
            `
            : html`
              <chronicle-horizontal-timeline
                .items=${this._items}
                .appearance=${appearance}
              ></chronicle-horizontal-timeline>
            `
          }
        </div>

        <chronicle-detail-dialog .severityColors=${appearance.severity_colors}></chronicle-detail-dialog>
      </ha-card>
    `;
  }

  private _todayStr(offsetDays = 0): string {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  private _renderDatePicker() {
    const today = this._todayStr();
    const sel = this._selectedDate;
    return html`
      <div class="date-picker">
        <button class="layout-toggle" title="Previous day"
          @click=${() => this._shiftDate(-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <button class="date-field ${sel ? 'active' : ''}" title="Show events from this day"
          @click=${this._toggleCal}>
          <ha-icon icon="mdi:calendar"></ha-icon>
          <span>${this._formatDate(sel || today)}</span>
        </button>
        ${this._calOpen ? this._renderCalendar(sel || today, today) : ''}
        <button class="layout-toggle" title="Next day"
          ?disabled=${!sel || sel >= today}
          @click=${() => this._shiftDate(1)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
        ${sel ? html`
          <button class="layout-toggle" title="Back to latest events"
            @click=${() => this._setDate('')}>
            <ha-icon icon="mdi:calendar-today"></ha-icon>
          </button>
        ` : ''}
      </div>
    `;
  }

  /**
   * Resolve the date order: card `date_format` override, else the HA profile
   * setting (hass.locale.date_format), else day/month/year.
   */
  private _dateOrder(): 'DMY' | 'MDY' | 'YMD' {
    const cfg = this._config?.date_format;
    if (cfg === 'DMY' || cfg === 'MDY' || cfg === 'YMD') return cfg;
    const prof = (this._hass as any)?.locale?.date_format as string | undefined;
    if (prof === 'DMY' || prof === 'MDY' || prof === 'YMD') return prof;
    if (prof === 'language' || prof === 'system') {
      const lang = prof === 'system' ? undefined : (this._hass as any)?.locale?.language || this._hass?.language;
      try {
        const parts = new Intl.DateTimeFormat(lang, { year: 'numeric', month: '2-digit', day: '2-digit' })
          .formatToParts(new Date(2026, 11, 31))
          .map((p) => p.type)
          .filter((t) => t === 'day' || t === 'month' || t === 'year');
        const order = parts.map((t) => t[0].toUpperCase()).join('');
        if (order === 'DMY' || order === 'MDY' || order === 'YMD') return order;
      } catch { /* fall through */ }
    }
    return 'DMY';
  }

  private _formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    switch (this._dateOrder()) {
      case 'MDY': return `${m}/${d}/${y}`;
      case 'YMD': return `${y}-${m}-${d}`;
      default:    return `${d}/${m}/${y}`;
    }
  }

  private _toggleCal(e: Event) {
    e.stopPropagation();
    this._calOpen = !this._calOpen;
    if (this._calOpen) {
      this._calMonth = (this._selectedDate || this._todayStr()).slice(0, 7);
      setTimeout(() => document.addEventListener('click', this._outsideClick, { capture: true }), 0);
    }
  }

  /** First day of week: HA profile (hass.locale.first_weekday) if set, else Monday. 0=Sun..6=Sat */
  private _firstWeekday(): number {
    const fw = (this._hass as any)?.locale?.first_weekday as string | undefined;
    const map: Record<string, number> = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };
    return fw && fw in map ? map[fw] : 1;
  }

  private _renderCalendar(sel: string, today: string) {
    const [y, m] = this._calMonth.split('-').map(Number);
    const first = new Date(y, m - 1, 1);
    const daysInMonth = new Date(y, m, 0).getDate();
    const fw = this._firstWeekday();
    const lead = (first.getDay() - fw + 7) % 7;
    const lang = this._config?.language || (this._hass as any)?.locale?.language || this._hass?.language;
    let fmtLang: string | undefined = lang;
    try { new Intl.DateTimeFormat(fmtLang); } catch { fmtLang = undefined; }
    const monthLabel = first.toLocaleDateString(fmtLang, { month: 'long', year: 'numeric' });
    const wd = Array.from({ length: 7 }, (_, i) =>
      new Date(2024, 0, 7 + ((fw + i) % 7)).toLocaleDateString(fmtLang, { weekday: 'short' }).replace('.', ''));
    const p = (n: number) => String(n).padStart(2, '0');
    const cells = [];
    for (let i = 0; i < lead; i++) cells.push(html`<span></span>`);
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${y}-${p(m)}-${p(d)}`;
      cells.push(html`<button
        class="cal-day ${iso === sel ? 'sel' : ''} ${iso === today ? 'today' : ''}"
        ?disabled=${iso > today}
        @click=${(e: Event) => { e.stopPropagation(); this._calOpen = false; this._setDate(iso === today ? '' : iso); }}
      >${d}</button>`);
    }
    const canNext = `${y}-${p(m)}` < today.slice(0, 7);
    return html`
      <div class="cal" @click=${(e: Event) => e.stopPropagation()}>
        <div class="cal-head">
          <button class="layout-toggle" @click=${() => this._shiftMonth(-1)}><ha-icon icon="mdi:chevron-left"></ha-icon></button>
          <span>${monthLabel}</span>
          <button class="layout-toggle" ?disabled=${!canNext} @click=${() => canNext && this._shiftMonth(1)}><ha-icon icon="mdi:chevron-right"></ha-icon></button>
        </div>
        <div class="cal-grid">
          ${wd.map((w) => html`<span class="cal-wd">${w}</span>`)}
          ${cells}
        </div>
      </div>
    `;
  }

  private _shiftMonth(delta: number) {
    const [y, m] = this._calMonth.split('-').map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    this._calMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  private _shiftDate(days: number) {
    const base = this._selectedDate || this._todayStr();
    const [y, m, d] = base.split('-').map(Number);
    const dt = new Date(y, m - 1, d + days);
    const p = (n: number) => String(n).padStart(2, '0');
    const next = `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())}`;
    if (next > this._todayStr()) return;
    this._setDate(next);
  }

  private _setDate(date: string) {
    const today = this._todayStr();
    const value = date && date <= today ? date : '';
    if (value === this._selectedDate) return; // input + change both fire
    this._selectedDate = value;
    this._store.setSelectedDate(value || null, this._hass).catch((err: unknown) => {
      console.warn('[chronicle-card] Date fetch error:', err);
    });
  }

  private _renderToggle(layout: 'vertical' | 'horizontal', icon: string, label: string) {
    const active = this._layout === layout;
    return html`
      <button
        class="layout-toggle ${active ? 'active' : ''}"
        aria-pressed=${active ? 'true' : 'false'}
        aria-label=${label}
        title=${label}
        @click=${() => { this._layout = layout; }}
      >
        <ha-icon .icon=${icon}></ha-icon>
      </button>
    `;
  }

  private _onShowDetail(e: CustomEvent) {
    trace(`show-detail received, dialog element ${this._dialog ? (this._dialog.isConnected ? 'connected' : 'NOT connected') : 'MISSING'}`);
    this._dialog?.show(e.detail.event as ChronicleEvent, this._hass);
  }

  private _onToggleGroup(e: CustomEvent) {
    this._store.toggleGroup(e.detail.group as EventGroup);
  }

  /** 1 unit = 50px (masonry view). */
  getCardSize(): number {
    const header = this._config?.show_header !== false ? 1 : 0;
    const h = this._config?.appearance?.card_height ?? '400px';
    const px = /^(\d+)px$/.exec(h);
    return header + (px ? Math.ceil(Number(px[1]) / 50) : 6);
  }

  /** Sections view: full width by default, auto height unless resized. */
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6,
      min_rows: 3,
    };
  }
}
