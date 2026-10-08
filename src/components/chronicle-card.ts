import { LitElement, html, css, nothing } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { HomeAssistant } from '../types';
import { ChronicleCardConfig, DEFAULT_CONFIG } from '../models/config';
import { ChronicleEvent, EventGroup } from '../models/event';
import { EventStore } from '../store/event-store';
import { setLocale } from '../localize';
import './layouts/vertical-timeline';
import './layouts/horizontal-timeline';
import './elements/detail-dialog';

@customElement('chronicle-card-local-snaps')
export class ChronicleCard extends LitElement {
  @state() private _config!: ChronicleCardConfig;
  @state() private _items: Array<ChronicleEvent | EventGroup> = [];
  @state() private _layout: 'vertical' | 'horizontal' = 'vertical';
  @state() private _selectedDate = '';
  @state() private _visibleDate = '';

  @query('chronicle-detail-dialog') private _dialog?: any;

  private _store = new EventStore();
  private _storeUnsub?: () => void;
  private _hass?: HomeAssistant;
  private _liveSubscribed = false;

  static getConfigElement() {
    return document.createElement('chronicle-card-local-snaps-editor');
  }

  static getStubConfig() {
    return {
      type: 'custom:chronicle-card-local-snaps',
      title: 'Timeline',
      layout: 'vertical',
      sources: [],
    };
  }

  setConfig(config: ChronicleCardConfig): void {
    if (!config) throw new Error('No configuration provided');

    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      filters: { ...DEFAULT_CONFIG.filters, ...config.filters },
      grouping: { ...DEFAULT_CONFIG.grouping, ...config.grouping },
      appearance: { ...DEFAULT_CONFIG.appearance, ...config.appearance },
    } as ChronicleCardConfig;

    this._layout = this._config.layout ?? 'vertical';
    this._syncLocale();
    this._store.configure(this._config);
    if (!this._config.show_date_picker) this._selectedDate = '';
    this._store.setSelectedDate(this._selectedDate || null).catch(() => {});

    this._storeUnsub?.();
    this._storeUnsub = this._store.subscribe(() => {
      this._items = [...this._store.items];
    });
  }

  /**
   * Sync the module-level locale from `config.language` (explicit override)
   * or the HA frontend language (auto-detect). Called again at render time so
   * multiple cards with different `language` settings each render correctly.
   */
  private _syncLocale(): void {
    setLocale(
      this._config?.language || this._hass?.locale?.language || this._hass?.language || 'en',
    );
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._syncLocale();
    this.requestUpdate();

    this._store.fetch(hass).catch((err: unknown) => {
      console.warn('[chronicle-card] Fetch error:', err);
    });

    if (!this._liveSubscribed) {
      this._liveSubscribed = true;
      this._store.subscribeLive(hass).catch(() => {});
    }
  }

  get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this._hass) {
      this._store.subscribeLive(this._hass).catch(() => {});
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._store.unsubscribeLive();
    this._liveSubscribed = false;
    this._storeUnsub?.();
  }

  protected willUpdate(): void {
    // Reflect a `fill` attribute so :host([fill]) styles stretch the card to
    // the height the dashboard hands us (Panel layout, fixed-height grids).
    const h = this._config?.appearance?.card_height;
    this.toggleAttribute('fill', h === 'fill' || h === '100%');
  }

  static styles = css`
    :host {
      display: block;
      contain: content;
    }

    /* Fill mode (card_height: fill / 100%) — stretch the whole chain to the
       height the dashboard gives us, e.g. Panel layout. */
    :host([fill]) {
      height: 100%;
    }

    ha-card {
      overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: var(--ha-card-border-radius, 12px);
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
      color: var(--primary-text-color, #333);
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
    .layout-toggle.active {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      box-shadow: 0 1px 4px rgba(3,169,244,0.25);
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
    .date-picker input[type='date'] {
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
    const appearance = this._config.appearance ?? {};
    const timeFormat = this._config.time_format ?? '24h';
    const compact = appearance.compact ?? false;
    const animate = appearance.animate_new_events !== false;
    // Sticky date + visible header → show the current day in the card header.
    const headerDate = showHeader && appearance.sticky_date_headers === true && this._layout === 'vertical';

    return html`
      <ha-card>
        ${showHeader ? html`
          <div class="card-header">
            <span class="title-wrap">
              <span class="title">${this._config.title ?? ''}</span>
              ${headerDate && this._visibleDate ? html`<span class="current-date">${this._visibleDate}</span>` : ''}
            </span>
            ${this._config.show_date_picker ? this._renderDatePicker() : ''}
            ${showToggle ? html`
              <div class="header-actions">
                <button
                  class="layout-toggle ${this._layout === 'vertical' ? 'active' : ''}"
                  @click=${() => this._setLayout('vertical')}
                  title="Vertical timeline"
                >
                  <ha-icon icon="mdi:view-sequential"></ha-icon>
                </button>
                <button
                  class="layout-toggle ${this._layout === 'horizontal' ? 'active' : ''}"
                  @click=${() => this._setLayout('horizontal')}
                  title="Horizontal timeline"
                >
                  <ha-icon icon="mdi:view-carousel"></ha-icon>
                </button>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <div class="card-content" @chronicle-show-detail=${this._onShowDetail} @chronicle-toggle-group=${this._onToggleGroup}>
          ${this._layout === 'vertical'
            ? html`
              <chronicle-vertical-timeline
                .items=${this._items}
                .appearance=${appearance}
                .hass=${this.hass}
                .timeFormat=${timeFormat}
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
                .hass=${this.hass}
                .timeFormat=${timeFormat}
              ></chronicle-horizontal-timeline>
            `
          }
        </div>

        <chronicle-detail-dialog .hass=${this.hass}></chronicle-detail-dialog>
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
        <input
          type="date"
          class=${sel ? 'active' : ''}
          .value=${sel || today}
          max=${today}
          title="Show events from this day"
          @change=${(e: Event) => this._setDate((e.target as HTMLInputElement).value)}
        />
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
    this._selectedDate = value;
    this._store.setSelectedDate(value || null, this._hass).catch((err: unknown) => {
      console.warn('[chronicle-card] Date fetch error:', err);
    });
  }

  private _setLayout(layout: 'vertical' | 'horizontal') {
    this._layout = layout;
  }

  private _onShowDetail(e: CustomEvent) {
    const event = e.detail.event as ChronicleEvent;
    if (this._dialog) {
      this._dialog.show(event);
    }
  }

  private _onToggleGroup(e: CustomEvent) {
    const group = e.detail.group as EventGroup;
    this._store.toggleGroup(group);
  }

  getCardSize(): number {
    return 4;
  }
}
