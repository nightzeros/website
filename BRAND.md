# NightZeros brand

Use this when writing copy, designing pages, or referring to the studio in other repos.

## Name

- **NightZeros** — one word, capital N and Z. Never “Night Zeros”, “NightsZeros”, or “NZ Studios”.
- Short mark: **N0**
- Domain: **nightszeros.com**
- GitHub / npm: **nightzeros**

Project identifiers use `NZ/` plus a three-digit number.

| ID | Meaning |
| --- | --- |
| NZ/000 | Origin (the studio itself) |
| NZ/001 | ChatAI |

## Statement

**Build beyond the obvious.**

Positioning: open-source AI and developer tools.

## Voice

Write like a careful engineer talking to another engineer.

- Short sentences. Concrete products. No invented metrics, customers, or certifications.
- Prefer “we build / we ship / we share” over marketing superlatives.
- Do not invent security contact emails. Point people to [docs.nightzeros.com/security](https://docs.nightzeros.com/security) and [/security](https://nightszeros.com/security).

## Mark

The N0 mark is a rounded square (`#0f0f12`) with a light hairline and centered **N0** in Geist Mono.

| Asset | Use |
| --- | --- |
| [`public/favicon.svg`](public/favicon.svg) | Favicon, small UI |
| [`public/favicon-32.png`](public/favicon-32.png) | 32×32 favicon |
| [`public/favicon-192.png`](public/favicon-192.png) | PWA / high-DPI |
| [`public/apple-touch-icon.png`](public/apple-touch-icon.png) | Apple touch icon |
| [`public/og.png`](public/og.png) | Open Graph / social (1200×630) |
| [`public/icon.png`](public/icon.png) | App icon |

Keep generous padding around N0. Don’t stretch, recolor to neon, or drop drop-shadows on the mark.

## Color

Dark by default. Source of truth: [`src/styles.css`](src/styles.css).

| Token | Approx. hex | Role |
| --- | --- | --- |
| Background | `#0F0F12` | Page, theme-color |
| Foreground | `#F4F4F5` | Primary text |
| Surface | `#1A1A1F` | Panels |
| Hairline | `rgba(255,255,255,0.08)` | Borders |
| Violet | `#8B5CF6` | Accent |
| Azure | `#3B82F6` | Accent pair |

Accent gradient is violet → azure at ~100deg. Use it sparingly (glows, small rules), not as a full-page wash.

## Type

- UI: [Geist](https://vercel.com/font)
- Labels, IDs, code: [Geist Mono](https://vercel.com/font)

Mono labels look like `NightZeros / About` or `STATUS / ACTIVE` — slash-separated, not title-case marketing chips.

## Layout

- Max content width ~72rem
- Large section padding, lots of negative space
- Motion: fade/rise on scroll, staggered; respect `prefers-reduced-motion`

## Links

- Studio: https://nightszeros.com
- App: https://app.nightzeros.com
- Docs: https://docs.nightzeros.com
- GitHub: https://github.com/nightzeros
- npm: https://www.npmjs.com/org/nightzeros
