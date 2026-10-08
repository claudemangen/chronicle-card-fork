import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChronicleEvent, EventGroup, isEventGroup } from '../../models/event';
import { AppearanceConfig } from '../../models/config';
import { localize, getLocale } from '../../localize';
import '../elements/event-item';
import '../elements/event-group';
import '../elements/date-header';

/** Items rendered initially / added per scroll step (progressive rendering). */
const RENDER_PAGE_SIZE = 30;
import '../elements/empty-state';

interface DateSection {
  dateKey: string;
  label: string;
  items: Array<ChronicleEvent | EventGroup>;
}

@customElement('chronicle-vertical-timeline')
export class VerticalTimeline extends LitElement {
  @property({ attribute: false }) items: Array<ChronicleEvent | EventGroup> = [];
  @property({ attribute: false }) appearance?: AppearanceConfig;
  @property({ attribute: false }) hass?: any;
  @property({ type: Boolean, reflect: true }) compact = false;
  /** When true the card header shows the current day, so in-list headers are not pinned. */
  @property({ type: Boolean }) headerDate = false;
  @property({ type: String }) timeFormat: '12h' | '24h' = '24h';
  @property({ type: Boolean }) animateNew = true;

  /** How many items are currently rendered (grows as the user scrolls). */
  private _renderLimit = RENDER_PAGE_SIZE;
  private _observer?: IntersectionObserver;
  private _firstId?: string;

  static styles = css`
    :host {
      display: block;
    }

    /* Fill mode — host + container stretch to the parent's available height
       (set by chronicle-card's :host([fill]) flex chain). */
    :host(.fill) {
      height: 100%;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    :host(.fill) .timeline-container {
      flex: 1 1 auto;
      min-height: 0;
    }

    .timeline-container {
      position: relative;
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
      scrollbar-color: var(--divider-color, rgba(127,127,127,0.15)) transparent;
    }
    .timeline-container::-webkit-scrollbar {
      width: 4px;
    }
    .timeline-container::-webkit-scrollbar-track {
      background: transparent;
    }
    .timeline-container::-webkit-scrollbar-thumb {
      background: var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 4px;
    }

    .timeline-inner {
      position: relative;
    }

    /* Vertical timeline line — centered on icon column (17px = half of 34px icon) */
    .timeline-inner::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 28px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        var(--divider-color, rgba(127,127,127,0.15)) 4%,
        var(--divider-color, rgba(127,127,127,0.15)) 92%,
        transparent 100%
      );
      border-radius: 2px;
    }

    .date-section {
      margin-bottom: 2px;
    }

    /* Skip layout/paint work for rows that are scrolled out of view. */
    chronicle-event-item,
    chronicle-event-group {
      content-visibility: auto;
      contain-intrinsic-size: auto 72px;
    }
    :host([compact]) chronicle-event-item,
    :host([compact]) chronicle-event-group {
      contain-intrinsic-size: auto 48px;
    }

    .load-sentinel {
      height: 1px;
    }
    /* Sticky date headers — each header pins to the top of the scroll
       container until the next day's section pushes it away. */
    :host(.sticky-dates) chronicle-date-header {
      position: sticky;
      top: 0;
      z-index: 3;
      background: var(--ha-card-background, var(--card-background-color, #fff));
    }
    .date-section:last-child {
      margin-bottom: 0;
    }
  `;

  protected render() {
    if (!this.items || this.items.length === 0) {
      return html`<chronicle-empty-state></chronicle-empty-state>`;
    }

    // Progressive rendering: only build the first N rows; more are added
    // when the sentinel at the bottom scrolls into view.
    const total = this.items.length;
    const visibleItems = total > this._renderLimit ? this.items.slice(0, this._renderLimit) : this.items;
    const sections = this._groupByDate(visibleItems);
    const height = this.appearance?.card_height ?? '400px';
    const fill = height === 'fill' || height === '100%';
    const style = fill || height === 'auto' ? '' : `max-height: ${height}`;
    this.classList.toggle('fill', fill);
    this.classList.toggle('sticky-dates', this.appearance?.sticky_date_headers === true && !this.headerDate);

    return html`
      <div class="timeline-container" style=${style} @scroll=${this._onScroll}>
        <div class="timeline-inner">
          ${sections.map((section) => html`
            <div class="date-section" data-label=${section.label}>
              <chronicle-date-header
                .label=${section.label}
                .eventCount=${this._countEvents(section.items)}
              ></chronicle-date-header>
              ${section.items.map((item) =>
                isEventGroup(item)
                  ? html`
                    <chronicle-event-group
                      .group=${item}
                      .appearance=${this.appearance}
                      .hass=${this.hass}
                      .timeFormat=${this.timeFormat}
                      ?compact=${this.compact}
                    ></chronicle-event-group>
                  `
                  : html`
                    <chronicle-event-item
                      .event=${item}
                      .appearance=${this.appearance}
                      .hass=${this.hass}
                      .timeFormat=${this.timeFormat}
                      ?compact=${this.compact}
                    ></chronicle-event-item>
                  `,
              )}
            </div>
          `)}
          ${total > this._renderLimit ? html`<div class="load-sentinel"></div>` : ''}
        </div>
      </div>
    `;
  }

  protected willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('items')) {
      // Reset paging when the list is replaced by a different one (e.g. a new
      // date was picked) — but not when live events are merely prepended.
      const items = this.items ?? [];
      const prevFirst = this._firstId;
      const first = items[0];
      const firstId = first ? (isEventGroup(first) ? first.representative.id : first.id) : undefined;
      const stillPresent = prevFirst !== undefined && items.some((i) =>
        (isEventGroup(i) ? i.events.some((e) => e.id === prevFirst) : i.id === prevFirst));
      if (!stillPresent) this._renderLimit = RENDER_PAGE_SIZE;
      this._firstId = firstId;
    }
  }

  private _lastLabel?: string;
  private _raf = 0;
  private _winScroll = () => this._onScroll();

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('scroll', this._winScroll, { passive: true, capture: true });
  }

  /** Find the day section at the top of the viewport and tell the card. */
  private _onScroll() {
    if (!this.headerDate || this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      const container = this.renderRoot.querySelector('.timeline-container') as HTMLElement | null;
      if (!container) return;
      const sections = Array.from(this.renderRoot.querySelectorAll<HTMLElement>('.date-section'));
      if (!sections.length) return;
      const scrolls = container.scrollHeight > container.clientHeight + 1;
      const top = scrolls ? container.getBoundingClientRect().top : Math.max(0, container.getBoundingClientRect().top);
      let label = sections[0].dataset.label ?? '';
      for (const s of sections) {
        if (s.getBoundingClientRect().bottom > top + 4) { label = s.dataset.label ?? ''; break; }
      }
      this._emitLabel(label);
    });
  }

  private _emitLabel(label: string) {
    if (label === this._lastLabel) return;
    this._lastLabel = label;
    this.dispatchEvent(new CustomEvent('chronicle-visible-date', {
      detail: { label }, bubbles: true, composed: true,
    }));
  }

  protected updated(): void {
    if (this.headerDate) {
      const first = this.renderRoot.querySelector<HTMLElement>('.date-section');
      if (!first) this._emitLabel('');
      else if (this._lastLabel === undefined || !this.renderRoot.querySelector(`.date-section[data-label="${CSS.escape(this._lastLabel)}"]`)) {
        this._lastLabel = undefined;
        this._onScroll();
      }
    }
    const sentinel = this.renderRoot.querySelector('.load-sentinel');
    const container = this.renderRoot.querySelector('.timeline-container') as HTMLElement | null;
    this._observer?.disconnect();
    if (!sentinel) return;
    // With a fixed height the container scrolls; otherwise the page does.
    const scrolls = container && getComputedStyle(container).maxHeight !== 'none';
    this._observer = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        this._observer?.disconnect();
        this._renderLimit += RENDER_PAGE_SIZE;
        this.requestUpdate();
      }
    }, { root: scrolls || this.classList.contains('fill') ? container : null, rootMargin: '400px 0px' });
    this._observer.observe(sentinel);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._observer?.disconnect();
    window.removeEventListener('scroll', this._winScroll, { capture: true } as EventListenerOptions);
  }

  private _groupByDate(items: Array<ChronicleEvent | EventGroup>): DateSection[] {
    const sections = new Map<string, DateSection>();
    const now = new Date();
    const today = this._dateKey(now);
    const yesterday = this._dateKey(new Date(now.getTime() - 86400000));

    for (const item of items) {
      const startStr = isEventGroup(item) ? item.representative.start : item.start;
      const key = this._dateKey(new Date(startStr));

      if (!sections.has(key)) {
        let label: string;
        if (key === today) {
          label = localize('chronicle.today');
        } else if (key === yesterday) {
          label = localize('chronicle.yesterday');
        } else {
          const d = new Date(startStr);
          let locale: string | undefined = getLocale();
          try { new Intl.DateTimeFormat(locale); } catch { locale = undefined; }
          label = d.toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric' });
        }
        sections.set(key, { dateKey: key, label, items: [] });
      }
      sections.get(key)!.items.push(item);
    }

    return Array.from(sections.values());
  }

  private _dateKey(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private _countEvents(items: Array<ChronicleEvent | EventGroup>): number {
    let count = 0;
    for (const item of items) {
      count += isEventGroup(item) ? item.events.length : 1;
    }
    return count;
  }
}
