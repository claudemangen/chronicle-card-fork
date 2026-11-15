import { HomeAssistant } from '../types';
import { CARD_VERSION } from '../constants';

/**
 * Opt-in tracing (`debug: true` in the card config) for problems that only
 * show on devices without a console, e.g. the HA iOS app. Entries go to the
 * browser console and, batched, to Home Assistant's system log
 * (Settings → System → Logs) via `system_log/write`.
 */
let enabled = false;
let hassRef: HomeAssistant | undefined;
let queue: string[] = [];
let timer: ReturnType<typeof setTimeout> | undefined;
const t0 = Date.now();
let envLogged = false;

export function setDebug(on: boolean, hass?: HomeAssistant): void {
  enabled = on;
  if (hass) hassRef = hass;
  if (on && hassRef && !envLogged) {
    envLogged = true;
    trace(`version ${CARD_VERSION}`);
    trace(`env ua="${navigator.userAgent}" vendor="${navigator.vendor}" vw=${window.innerWidth}x${window.innerHeight} touch=${'ontouchstart' in window}`);
    window.addEventListener('resize', () => trace(`window resize ${window.innerWidth}x${window.innerHeight}`));
    window.visualViewport?.addEventListener('resize', () => trace(`visualViewport resize ${Math.round(window.visualViewport!.width)}x${Math.round(window.visualViewport!.height)}`));
  }
}

export function isDebug(): boolean {
  return enabled;
}

export function trace(msg: string): void {
  if (!enabled) return;
  const line = `+${Date.now() - t0}ms ${msg}`;
  console.info('[chronicle-card debug]', line);
  queue.push(line);
  if (!timer) timer = setTimeout(flush, 1500);
}

function flush(): void {
  timer = undefined;
  if (!hassRef || queue.length === 0) return;
  const lines = queue;
  queue = [];
  const message = `[chronicle-card debug] user=${(hassRef as unknown as { user?: { name?: string } }).user?.name ?? "?"}\n${lines.join('\n')}`;
  // The system_log.write service is callable by any user; the
  // system_log/write websocket command needs admin.
  hassRef.callService('system_log', 'write', { message, level: 'warning', logger: 'chronicle_card.debug' })
    .catch(() => hassRef!.callWS({ type: 'system_log/write', logger: 'chronicle_card.debug', level: 'warning', message }))
    .catch((err: unknown) => console.warn('[chronicle-card debug] could not write to HA log', err));
}

/** Short description of an event target for traces. */
export function describe(node: EventTarget | null | undefined): string {
  const el = node as Element | null;
  if (!el || !el.tagName) return String(node);
  const cls = typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/).join('.') : '';
  return `${el.tagName.toLowerCase()}${cls}`;
}
