# Arox Fitness Design System

Design system for **aroxfitness.dk** — a Danish webshop for crossfit and functional fitness gear, "skabt af atleter, delt med alle som ønsker en aktiv livsstil." Products are developed in collaboration with Danish top crossfit athletes.

## Company & product context

- **Brand:** Arox Fitness Denmark (AROX®). Danish, proud of it — "AROX ER DANSK & DET ER VI STOLTE AF". 20.000+ customers, 50+ Danish retailers, 4.9/5 on Trustpilot.
- **Catalog:** Træningsudstyr (grips, sjippetove/speed ropes, knæbind, løfteudstyr, tape, recovery, tilbehør) and Træningstøj (SportsTech apparel line for kvinde/herre/unisex).
- **Product naming:** English-leaning model names ("Anti slip grips pro", "Speed rope elite 2.0", "Carbon grips pro") mixed with Danish descriptors ("5 MM - Hybrid knæbind sort").
- **Platform:** Shopify storefront (declared theme color `#f0f0f0`). One product surface: the webshop (desktop + mobile web).
- **Markets:** DK (primary), SE, DE — flag switcher in the header.

### Sources
- Live site: https://aroxfitness.dk (homepage + product pages read June 2026)
- Uploaded brand photos: `assets/hero-anti-slip-grips.webp`, `assets/hero-dansk-udviklet.webp`
- Uploaded wordmark: converted to `assets/arox-logo-black.png` / `assets/arox-logo-white.png`
- Live logo CDN: `https://aroxfitness.dk/cdn/shop/files/Arox_Black.png` (black), `logotrademark.png` (white, footer)
- Swerv Drive asset folder (Arox Fitness): https://drive.google.com/drive/folders/1351Sr-Zp0xEQ64zSLj7-tQ36oVJRhYXi — `Content/All content/` holds Brand (wordmark `arox-r-white.png/.jpg`), Grips, Speed rope, Elite (`In action/`, `Grafik/Layout 1–7`), Lifestyle, Annonce Materiale (`Billeder/`, `Google Billeder/`), Black Friday, Marbella, Community Challenge; `Content/From Frame.io/` has athlete test videos (9 hurtige, max C2B/TTB/BMU tests, triple unders). `Kampagneplaner/` holds the Oct 2026 e-mail plan (source for the e-mail voice below). Read Oct 2026; imagery not yet copied into `assets/`.
- ⚠️ No theme codebase or Figma was provided — visual foundations are reconstructed from the live site's content, imagery and meta, not from theme CSS. See CAVEATS in project chat.

## CONTENT FUNDAMENTALS

- **Language:** Danish, informal **du/dig/din** form throughout ("Din kurv er tom", "så du kan spare kræfter"). Brand speaks as **vi/vores** ("Vi anbefaler…", "Vores nyeste model…").
- **Casing:** Two registers. UPPERCASE for promotional display copy and section headings ("BESTSELLERE LIGE NU", "SHOP KNÆBIND", "DANSK UDVIKLET GEAR", "UDSALG"). Sentence case for body, product titles and UI labels ("Føj til indkøbskurv", "Se alle").
- **Tone:** Direct, energetic, athlete-to-athlete. Sells through concrete benefit + scenario: "Har du selv oplevet hvor frustrerende det er at miste grebet…?" Rhetorical questions are on-brand. Hype words used plainly: "fantastiske", "klæbrende", "grebsstærk".
- **Trust signals everywhere:** "1-3 dages levering med GLS ∙ Over 20.000 glade kunder ∙ Fri fragt v. køb over 799,-" runs as a ticker; payment marks (Dankort, Visa, Mastercard, MobilePay) and Trustpilot score sit by the buy button.
- **Commerce vocabulary (use verbatim):** Salgspris / Normalpris / Spar 17% / Bestseller / NYHED / Kundernes favorit / På tilbud / Føj til indkøbskurv / Se alle / Farve / Størrelse / Antal / Fri fragt.
- **Prices:** Danish format with comma decimals and trailing `kr`: "399,00 kr", "Fra 299,00 kr".
- **No emoji.** Letter-spaced uppercase used as decoration instead ("M E N U", "K U N D E S E R V I C E").

### E-mail & campaign voice (from the Oct 2026 Klaviyo plan)
- **Headline formula:** small uppercase overline (context) → two short uppercase lines, each ending in a full stop. "EFTERÅRETS TRÆNINGSTØJ / FØR OPVARMNING. / EFTER SIDSTE SÆT." · "VINTERTID / KORTERE DAGE. / SAMME RYTME." · "BAG OM UDSTYRET / DET LIGGER / I DETALJERNE." Questions work too: "GLAT BARRE? / START MED DINE GRIPS."
- **Numbered markers:** `01 / PÅ VEJ TIL BOKSEN`, `02 / NÅR DU ER I GANG` — large 01/02 numerals structure product stories and steps ("01  Vælg, hvornår du vil træne.").
- **Body:** one or two short, calm sentences; concrete material facts over hype ("300 gsm børstet fleece", "bomuld, polyester og elastan", "Kraftige syninger, testet af professionelle atleter"). Crossfit vernacular used naturally: boksen, WOD, PR, hookgrip, pull-up-barre, kalk.
- **Proof line:** "LAVET TIL AT HOLDE." — the recurring brand claim; product development credited to "vores ambassadør og interne atleter".
- **CTAs:** "Se [produktnavn]", "Vælg 5 mm", "Se detaljerne" — verb + specific object, never "Køb nu!".
- **Prices in e-mail:** short form "299 kr" (webshop UI keeps "299,00 kr").
- **Sign-off:** first-person from Sebastian — "Er du i tvivl om model eller størrelse, så svar bare på mailen. / De bedste hilsner, / Sebastian / Arox Fitness". Personal mails invite a reply: "En linje eller to er helt fint."
- **Layout rules stated in the plan:** two large alternating product images instead of product grids; a **red** interstitial band or red markers as the only accent; dark mails use big white type; personal mails have no banner, images or buttons.

## VISUAL FOUNDATIONS

- **Palette:** Monochrome athletic. Near-black ink `#111` on light grey page `#f0f0f0`; white product cards. **Red `--red-600` is reserved for sale/discount** (Spar-badges, UDSALG). Product photography carries the only other color (navy, ranger green, dark brown apparel; volt-yellow strap details).
- **Type:** One sans family, two voices — heavy (800/900) uppercase display with tight tracking for headings/heroes, regular 400/500 for body. Footer headings letter-spaced out to `--tracking-menu`. *Font substitution:* live theme files unavailable; **Archivo** (Google Fonts) stands in — replace via `tokens/fonts.css` if licensed files arrive.
- **Imagery:** Dark, moody gym photography — concrete, black walls with red accents, dramatic directional light, athletes mid-effort. Hero banners are **full-bleed photos with a dark scrim** and white uppercase copy + pill CTA. Product shots: clean studio renders on white/light grey, second image swaps in on hover (lifestyle photo).
- **Backgrounds:** Flat `#f0f0f0` page; white cards; full-bleed photo bands between product rows; black footer-adjacent blocks. No gradients (except scrims over photos), no patterns, no illustration.
- **Buttons:** Primary = solid near-black, white text, **pill**; hover lightens to `#2b2b2b`. Secondary = 1px black outline pill, fills black on hover. Tertiary = underlined text link ("Se alle").
- **Badges:** Small uppercase chips — black/white for status (Bestseller, NYHED), red for discount (Spar 17%). Square-ish `--radius-sm`.
- **Cards:** Flat — no shadow, hairline `--line` border or none, `--radius-md`. Elevation only on floating layers (cart drawer, popovers) via `--shadow-pop`/`--shadow-drawer`.
- **Borders:** Hairline `#e4e4e4` dividers; strong 1px `#111` for emphasis (outline buttons, focused inputs).
- **Radii:** Restrained — 4px badges/swatches, 8px cards/inputs, 12px media, pill CTAs only.
- **Motion:** Quick, matter-of-fact: 120–220ms ease-out fades/translates; image crossfade on product-card hover; ticker scrolls linearly. No bounce, no spring.
- **Hover/press:** Hover = slight darken/lighten + image swap; links get underline. Press = none fancier than a darker fill.
- **Layout:** 1280px max content width, 24px gutters; thin announcement ticker pinned above a white sticky header; product grids 4-up desktop / 2-up mobile; horizontal scroll rows with Forrige/Næste arrows.
- **Transparency/blur:** Not used; overlays are solid scrims (rgba black).

## ICONOGRAPHY

- **No icon font.** The shop uses a handful of functional line icons (search, account, cart, carets) from its Shopify theme — thin 1.5px stroke, round caps, drawn in `currentColor`.
- **Substitute set:** Use **Lucide** (CDN: `https://unpkg.com/lucide@latest`) at 1.5px stroke to match — `search`, `user`, `shopping-bag`, `menu`, `chevron-down/left/right`, `x`, `truck`, `store`, `message-circle`. FLAGGED as substitution; copy real theme SVGs in if provided.
- **USP icons:** Footer/USP rows pair a line icon with bold title + one-line body (Fri fragt / 50+ forhandlere / Live-chat).
- **Feature callouts on PDPs** use simple black pictogram SVGs (layers, pull-up bar, hand) hosted on the shop CDN.
- **Flags:** Round country flags (DK/SE/DE) in the announcement bar for market switching.
- **No emoji, no unicode-as-icon** (the "∙" separator dot in the ticker is the one exception).

## Index

| Path | What |
| --- | --- |
| `styles.css` | Global CSS entry — imports everything below |
| `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css` | Foundations |
| `assets/` | Logos (black/white PNG), hero photography |
| `guidelines/` | Specimen cards rendered in the Design System tab |
| `components/core/` | Button, Badge, Price, SectionHeading, Icon |
| `components/commerce/` | ProductCard, VariantPicker, QuantityPicker |
| `components/layout/` | AnnouncementBar, SiteHeader, HeroBanner, UspRow, SiteFooter |
| `ui_kits/webshop/` | Interactive shop recreation — HomeScreen, ProductScreen, CartDrawer, `index.html` click-through (home → PDP → add to cart → drawer) |
| `SKILL.md` | Agent-skill entry point |

Component usage: load `_ds_bundle.js`, read components from `window.AroxFitnessDesignSystem_84b1f4`, style via the CSS custom properties — never hardcode hex. Product imagery in the UI kit is hotlinked from the shop CDN (needs network); logos and hero photos are local in `assets/`.
