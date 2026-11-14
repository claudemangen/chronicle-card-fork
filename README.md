# Chronicle Card Fork

Fork of [KadenThomp36/chronicle-card](https://github.com/KadenThomp36/chronicle-card), currently based on **upstream v1.15.0**.
All upstream options work as documented in the [upstream README](https://github.com/KadenThomp36/chronicle-card#readme).

The card is registered under its own type so it can be installed next to the original:

```yaml
type: custom:chronicle-card-local-snaps
```

## Fork-only additions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_date_picker` | boolean | `false` | Date picker in the card header. Picking a day loads only that day's events (00:00–24:00 local time) instead of the `days_back` window. Arrows step a day back/forward; the calendar button returns to the latest events. Week starts on the HA profile's first weekday (Monday otherwise). REST/Frigate sources honour the selected day too. |
| `date_format` | string | `profile` | Date picker format: `profile` (HA user profile), `DMY`, `MDY` or `YMD`. |
| `appearance.sticky_date_headers` | boolean | `false` | Pins the day header while scrolling the vertical timeline. With the card header visible, the current day is shown next to the title instead. |

Other changes:

- **Faster long lists**: the timeline is painted first and images/clips are resolved in the background, only for displayed events; rows render progressively while scrolling (`content-visibility`).
- **`/media/…` image paths** returned by `image_template` (e.g. a NAS share mounted as HA media storage) are resolved through `media_source` so `<img>` can load them. Clips are signed by upstream's clip player.
- REST adapter resolves bare-relative URLs against the HA base URL.

## Example

```yaml
type: custom:chronicle-card-local-snaps
title: Garage Recordings
show_date_picker: true
date_format: DMY
appearance:
  sticky_date_headers: true
sources:
  - type: history
    entity: binary_sensor.garage_person
    state_filter: ["on"]
    image_template: >-
      /local/reolink_media/garage/person_{{ as_timestamp(timestamp) | timestamp_custom('%Y%m%d-%H%M%S', true) }}.jpg
    clip_url_template: >-
      /local/reolink_media/garage/person_{{ as_timestamp(timestamp) | timestamp_custom('%Y%m%d-%H%M%S', true) }}.mp4
```

## Build

```bash
npm install
npm run build   # → dist/chronicle-card.js (committed, served by HACS)
```

## Syncing with upstream

```bash
git remote add upstream https://github.com/KadenThomp36/chronicle-card.git   # once
git fetch upstream --tags
git merge vX.Y.Z
```
