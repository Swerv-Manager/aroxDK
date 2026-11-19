# Black Week 2026 · Arox DK · handoff

Branch `black-week-2026` holds only the theme files the Black Week work touches (first commit = untouched
baseline copies). The real, complete theme is in Shopify:

- Store: Arox Fitness Denmark (aroxfitness.dk / aroxfitness.myshopify.com)
- Work theme: **"Black Week 2026 – Alt i ét"**, `gid://shopify/OnlineStoreTheme/191537611081` (unpublished duplicate
  of the live theme "Test Product USPS", 171990384969 — never edit the live theme)
- Preview: https://aroxfitness.myshopify.com/?preview_theme_id=191537611081 (`&bw_phase=pre|early|live|sidste|ended`)

## Design source

The Claude Design export is in `.bw-design/` (main file `Black Week 2026 ALT I ET.dc.html`, its `img/`, `_ds/`
tokens and `support.js` runtime). Board line ranges: 02 Forside ~93–484, 03 Landing ~485–586, 04 Limited ~587, 05 3 for 2
~687, 06 4 for 2 ~812, 07 Kollektioner ~950, 08 PDP ~1034, 09 Gaver ~1134, 10 Kurv ~1248, 11 Vilkår+FAQ ~1342,
12 Footer ~1421, 13 Noter ~1470, logic/data ~1510–1845.

## Goal

Every page must look **exactly** like the Claude Design file `Black Week 2026 ALT I ET.dc.html` (client-approved),
in all four phases (pre, early, live, sidste) at mobile 390 and desktop 1440. No interpretation.
The separate per-phase announcement bar stays hidden (user decision): pages show only the scrolling ticker.

## Status

- Done and compared: header (`sections/bw-header.liquid`), ticker (`bw-marquee`), phase picker in theme settings
  (`Black Week 2026 → Vis fase i temaeditoren`, editor only), automatic phase switching (snippet `bw-head`).
- Homepage (board 02), landing page (03, template `page.black-week`), footer (12): ported 1:1 from the design markup;
  see the git log / agent report for what is compared.
- Cart drawer (board 10), 16.11: `sections/cart-drawer.liquid` + snippets `bw-cart-line`, `bw-cart-progress`,
  `bw-cart-gift`, styles `.bw-cart` in `assets/bw.css`. Dark drawer 440 px on desktop, full width on mobile.
  Quantity input and "Fjern" are kept (not in the design) so the cart still works. Total no longer adds the 35 kr.
  base freight (design: "Levering · Fra 35 kr.", total excl. shipping). Recommendations: 2 `bw-product-card`s from the
  first cart item's Black Week collection, else the drawer's product list (empty today, so non-BW carts show none).
- Stepped progress bar in the cart drawer (client request 16.11, not in the design file): 499 kr. fri fragt ·
  799 kr. gratis Hydration Bottle (`arox-hydration-bottle-1000-ml`) · 1299 kr. gratis 3-pak strømper (`stromper-3-pak`).
  Steps are evenly spaced, reached at `cart.total_price >=` amount. Amounts, texts, gift products and phases
  (default `early live sidste` since 19.11, so no gifts before the campaign starts 20.11 kl. 12:00; theme's own free
  shipping bar (499 kr.) in the other phases) are cart drawer settings.
  `bw.js` swaps the bar at once on `cart:change`. Tested at 0–1500 kr. with `.bw-tools/progress-test.js` and in the
  preview with `.bw-tools/cart.js` / `qty.js`.
- Homepage 16.11: sections not in the design are disabled (not deleted, re-enable 01.12): the old "5 år" banner,
  the four "Shop knæbind/overdele/grips/sjippetove" grids and the Loox video slider. Section order now matches
  board 02. Rows with fewer cards than the design (Limited, julegaver, Gaver under) are product data: the Limited
  blackout products and both flextape products are drafts, Thermo stålflaske and Drikkedunk 500ML are sold out,
  and product rows only show products that are available for sale.
- Offer collections 16.11 (boards 04–06): new section `bw-collection-grid` (BW product cards, 4/2 per row,
  available products only) replaces Impact's main-collection (disabled) on all three templates; 3 for 2 / 4 for 2
  have the "Med i 3/4 for 2" heading, "Se alle" and the offer line above the progress panel; 4 for 2 focus tiles
  use sportstech-unisex-t-shirt-sort and arox-performance-tights. Limited edition: the three product groups
  (Limited blackout / Favoritter til fast pris / Tape) have no products picked yet, because the products are drafts;
  pick them when they are activated (then the grid below can be hidden).
- Gift page (09) and terms + FAQ (11) are live and close to the design (compared at 1440).
- Board 07 (16.11): /collections/black-week-* use the live collection layout of the design: head with offer line,
  offer nav (chevron cards), filter + sort bar (snippet `bw-coll-toolbar`: the store's own storefront filters as
  pills, "Brand" hidden, "Produkttype" shown as "Kategori"; plain GET form, `bw.js` submits on change), progress
  panel (3 for 2 / 4 for 2), `bw-coll-grid` and the note. 07d: static section `bw-collection-live`, rendered from
  `layout/theme.liquid` on collection pages, gives ordinary collections (templates standard, traeningsudstyr,
  traeningstoej, hyrox, elektrolytter; editable list) the same layout in early/live/sidste and hides the template's
  circle menu, countdown banner and main-collection by CSS in those phases only. Its nav/crumbs/lines are text settings
  (url defaults are not allowed in static section defaults). Filters and sorting tested in the preview.
- Boards 04–06 (16.11): the offer landing pages are now real pages as in the design: `/pages/limited-blackout`,
  `/pages/3-for-2`, `/pages/4-for-2` (templates page.limited-blackout / page.3-for-2 / page.4-for-2, published).
  Their content (Med i …, steps, hero, focus, gift reminder, Limited groups) is disabled on the collection templates.
- Board 08 (16.11): product pages restyled (Impact main-product keeps variants/gallery/add to cart): breadcrumb
  section `bw-pdp-crumb`, dark section colours, uppercase title, offer + "Limited blackout" badges, price block
  `bw-pdp-price` ("Salgspris / Normalpris", re-rendered on variant change), USP list, size pills, quantity + white
  "Læg i kurv" on one row, mechanic box, Trustpilot line, delivery line, accordions with +/– (Beskrivelse open via
  bw.js), "Kundernes favoritter" accordion (`bw-pdp-favs`, cross-traeningbestsellers), producer box, related products.
  Disabled (not deleted): Loox stars under the title, Impact price block, empty USP block, payment icons/Trustpilot
  widget, product video section + anchor, Impact "Kundernes favoritter" section. Variant change and add to cart tested.
  App widgets (Loox reviews, Kiwi size chart, Kaching) load from cdn.shopify.com, which is blocked in the cloud
  environment, so they were not visible in the checks; the Loox section below related products keeps its own
  (white) background.

- Fixes 16.11 after the client's check in a real browser: (1) the "na-side-cart" app embed (green side cart with
  upsells and "Vælg et godt formål") took over the cart in real browsers; it is switched off in this work theme
  (config/settings_data.json, App embeds), so the Black Week drawer with the 3-step bar shows. The live theme keeps
  the app. (2) Kiwi "Størrelsesguide" pushed "Læg i kurv" onto a new line; bw.js moves it under the size picker.
  (3) Loox reviews section under related products: dark section, Loox widget in a white rounded card (Loox draws its
  own colours; a fully dark widget needs the colours changed in the Loox admin).

- 16.11 (round 3): quick add on Black Week cards in collection grids (`<bw-quick-add>`: one variant → straight in the
  cart, otherwise a variant picker on the card; drawer opens). Free gifts: cart drawer outputs `[data-bw-gifts]`;
  bw.js adds the 799 gift (Hydration Bottle) as its own line with property `_bw_gift=g2`, the 1299 gift (Strømper
  3-pak, 8 variants) via a picker in the drawer (`g3`), removes gifts below the tier, and removes a gift again if it is
  not free (no discount) — so nothing is charged while the discounts are missing. Presale form: foreign 40/48 px form
  padding removed, button text centred. Landing hero: text column fixed at 512 px (overflowed above 1440).
- Discounts (created 16.11 on the client's go, tag `black-week-2026`, combine with product + shipping discounts, not
  with order discounts): automatic Buy X get Y, 20.11 12:00 → 30.11 23:59 CET (live store, all visitors):
  "3 for 2 · Black Week" (buy 2 from black-week-3for2, 1 more free; "3 for 2" was taken by an expired discount, the
  cart shows the title up to " · ") and "4 for 2" (buy 2, 2 more free, black-week-4for2). Private test codes, active
  now → 20.11 11:59, 20 uses each (tags `black-week-2026`, `test`; delete after testing): BWTEST3FOR2, BWTEST4FOR2.
  Apply via /discount/CODE. Tested: 3 for 2, 4 for 2 and both together work.
- Free gifts: Shopify does not let Buy X get Y gifts combine with 3 for 2 / 4 for 2 or with each other (items used
  for one discount don't count for the next), so the gifts are two hidden 0 kr. products: "AROX Hydration Bottle
  1000 ml (gave)" (`bw-gave-hydration-bottle`) and "Strømper 3-pak (gave)" (`bw-gave-stromper-3-pak`, 8 variants).
  18.11, after Sebastian's remark (no stock deduction, no duplicate SKUs): both are now variant fixed BUNDLES. Each
  gift variant has exactly one component, the real variant (bottle → AROX_HYDRATIONBOTTLE, socks → AR3PS…), fixed
  price 0 kr., requiresComponents = true, no SKU of its own. Shopify computes the gift's stock from the real item
  (bottle gift showed 489 = the real bottle) and deducts the real item's stock; fulfillment orders carry the real
  SKUs. The components were set by the Shopify admin app used in this session, so only that app can edit them; to
  change, delete and recreate. Someone had set both products to draft on 18.11; they were set active and published to
  Webshop again (needed for the theme to add them). Still to check with Peak WMS: one real test order (bundle
  components) is picked as the real item. Tag `bw-gave`, seo.hidden = 1, Webshop only, not in any collection; the
  theme adds/removes them (bw.js syncGifts) and never lists bw-gave products. A 0 kr. gift added outside the theme
  (cart permalink) is only removed on the next cart view. Tested end to end 18.11.

- Client feedback 19.11 (commit c5f18a6; uploaded to SE, DK upload pending until the connector is back on DK):
  product pages get two carousels at the bottom, "Med i 3 for 2" / "Med i 4 for 2" (sections `bw_row_3for2`,
  `bw_row_4for2`, bw-product-row with the new settings `carousel` + `quick_add`; the product itself is skipped; phases
  pre early live sidste); the producer box (`liquid_bw_gpsr`, Sai Fitness) is disabled (GPSR: the manufacturer's name
  and address must still be available for EU product listings, e.g. in the description); product card badges sit in
  one wrapping row (no overlap on narrow cards); the offer nav cards (Single offers / 3 for 2 / 4 for 2) stack on
  phones; circles row without scrollbar. Phase switching verified with a fake clock (`phaseclock.js`): pre until 20.11
  12:00, early until 22.11 20:00, live, sidste from 30.11 00:00, ended after 30.11 23:59; content per phase as in the
  design (early = live hero with the "Tidlig adgang slutter om" countdown; signup hidden in live). The early (VIP)
  phase is open to everybody: the automatic discounts start 20.11 12:00 (Frederik's choice 16.11).

## Normal shop ↔ Black Week (client decision 19.11, commit 8721d61 +)

Fre 20.11 kl. 12:00 → søn 22.11 kl. 20:00 the Black Week landing page (/pages/black-week), the offer pages
(limited-blackout, 3-for-2, 4-for-2, black-week-gaver, black-week-vilkaar) and the three offer collections are live for
VIP mail/SMS; the rest of the shop stays the normal shop (home, menu, cart, product pages, badges) until søn 20:00.
The discounts start fre 12:00 for everybody. One theme, switching by itself in the browser (no manual publish):
- `snippets/bw-head` sets `html.bw-on` when the template is a Black Week page/collection, or the phase is live/sidste,
  or (phase pre/early) the browser is a VIP: it has been on a Black Week page or came with `?vip=1`
  (localStorage `bw_vip`; `?bw_vip=0` clears it). Otherwise `html.bw-off` = the normal shop (also after 30.11).
  Theme editor: no VIP; "Vis fase i temaeditoren" live/sidste shows the Black Week shop.
- `assets/bw.css` (end of file): bw-off hides `.shopify-section.bw-section` (every bw-* section has it) and `.bw-site`;
  bw-on hides `.bw-norm`, the Impact header/announcement/footer/USP sections (by id suffix), the homepage template
  sections, the live product blocks (price, Loox stars, USP block, trust/payment blocks, live shipping text) and
  product sections (videos, related). Product page and drawer styles are scoped to `html.bw-on`; the Black Week block
  order is CSS `order` (the template keeps the live order).
- Homepage: Black Week sections live in the section group `sections/bw-home-group.json` (type custom.bwhome), rendered
  from layout/theme.liquid on the homepage; `templates/index.json` is the live homepage again (25-section limit).
- Header/footer groups: live sections back exactly as live (they had been restyled before the bw-* sections existed).
- Product template: live colours, buy button, blocks and order; Black Week blocks added (`bw_*`, `liquid_bw_*`,
  `bw_collapsible_ship` = shipping text with 499 kr.).
- settings_data: live header colours and free shipping threshold 799 (normal drawer); the Black Week drawer takes
  "fri fragt" from the first step of its bar (499). na-side-cart stays off: the normal shop uses Impact's own drawer.
- Cart drawer: Impact's own drawer markup (.bw-norm) and the Black Week drawer (.bw-site) inside the one
  `.cart-drawer__inner` / `[slot="footer"]` that Impact re-renders. Gifts and the PDP extras only run in bw-on.
- Tested 19.11 (`modetest.js`): early normal visitor → normal home/PDP/collections, Black Week collection page in
  Black Week; VIP after the landing page → Black Week everywhere; live → Black Week; ended → normal.
  Drawer with items (section rendering API, `?section_id=cart-drawer`): both variants render, no Liquid errors or
  missing translations; normal = Impact drawer ("Indkøbskurv", line items, free shipping bar, "I alt"), Black Week =
  board 10 drawer with bar and gift config; one `.cart-drawer__inner`, one footer slot.
- Free shipping: the Black Week pages promise 499 kr. from fre 12:00, so Zippendo must give free shipping from 499 kr.
  from fre 12:00 (the normal shop texts say 799).
- An unused theme "Black Week 2026 – VIP (fre 12 til søn 20)" (191893537097) was made first and can be deleted.

## Launch check 19.11 (DK)

Checked: live theme unchanged since the work theme was made (nothing lost on publish); every repo file matches the work
theme (only Shopify's own JSON re-formatting differs). Crawl of 19 pages × 5 phases × 390/1440 (190 loads,
`crawl.js`): no Liquid errors, no horizontal overflow, no broken images, all 129 internal links 200; only JS errors are
blocked third-party scripts (cdn.shopify.com) in the cloud environment. Cart in the preview (test codes, phase early):
3 for 2 gives the cheapest of 3 free; 4 for 2 gives the 2 cheapest of 4 free and nothing at 3; both together work;
Hydration Bottle is added at 0 kr. at 799 kr.; the socks picker shows at 1.299 kr. and adds the socks at 0 kr.;
both gifts leave again below 799 kr.; a gift put in the cart without reaching the amount is removed. Gift logic with a
simulated cart (`giftmock.js`, no store calls): 7/7 cases incl. quantity back to 1, duplicates, paid gift removed,
retry after a 429 (added 19.11: the store answered 429 during the live test, and Black Week traffic can do the same).
Fixed 19.11 (commit 7470a1f): gifts + stepped bar only in early/live/sidste; 799/1299 gifts added to the terms and
FAQ (`page.black-week-vilkaar`); BW footer carries `shopify-section--footer` (Impact's floating filter threw on
collection/search pages); toolbar count = products shown; socks gift product got its missing `bw-gave` tag.

Go-live list (client / Frederik):
1. Publish the work theme before fredag 20.11 kl. 12:00 (the phase switches by itself in the browser).
2. Limited blackout: "Anti slip grips pro (BLACKWEEK EDITION)" and "Fusion grips pro (BLACKWEEK LIMITED)" are drafts
   with 0 stock; black Elite belt and speedrope elite do not exist yet. Activate, stock, add to
   `black-week-limited-edition` and pick them in the Limited groups on `/pages/limited-blackout`. Until then the page only
   shows Strømper 3-pak. Also drafts: Flextape 10 ruller, active hoodie dark grey, two stone grey shorts.
3. Compare-at prices are shown as "Normalpris" (§ 9 a: must be the lowest price of the last 30 days). New products
   with a compare-at price (Anti slip grips BLACKWEEK EDITION 399, Fusion grips BLACKWEEK LIMITED 349) have no such
   price history.
4. Thermo stålflaske 1,06 L (first 100 orders) shows 0 in stock in Shopify; decide how the 100 are packed.
5. One real test order with a gift (bundle) through Peak WMS.
6. Check in a real checkout: free shipping from exactly 499 kr. (Zippendo), gifts at 0 kr.
7. Checkout message (checkout editor), see "Admin actions".
8. Klaviyo (Nexus sync 19.11): all "BW26v2 DK 01–08" campaigns are drafts, none scheduled, incl. 03 presale 20.11
   kl. 12:00.
9. After the test: delete BWTEST3FOR2 / BWTEST4FOR2 (they expire 20.11 kl. 11:59 anyway).
10. After 30.11 kl. 23:59 the theme still shows the offers (phase `ended` hides only a few elements): publish the
    normal theme again right after, or build an ended state first.

## SE and DE (started 19.11)

Decisions (Frederik 19.11): same offers and dates as DK; first step of the cart bar = the store's real free shipping
threshold; gift tiers rounded: SE 1 199 / 1 999 kr, DE 109 / 179 €; Claude writes and approves the SE/DE texts from
the copy agents (`arox-fitness-copy`, `arox-fitness-de-copy`); Trustpilot and customer counts may be used in all
markets (clients.trustpilot_allowed = true). DE (Dawn theme): a lighter Black Week version (pages, collections,
discounts, gifts, Dawn's own cart), not the full DK experience. Network: aroxfitness.se/.de allowed since 19.11.

### SE (aroxfitness.se = aroxfitnesscom.myshopify.com), done 19.11
- Work theme **"Black Week 2026 – SE"** `gid://shopify/OnlineStoreTheme/191890456905` (duplicate of the live theme
  "Impact Theme | Markets" 171481301321, Impact 6.6.0). Preview: https://aroxfitness.se/?preview_theme_id=191890456905
- Built by `python3 stores/se/build.py` → `stores/se/theme/**` (80 files), uploaded from
  `raw.githubusercontent.com/.../<commit>/stores/se/theme/<path>`; 79/80 checksums match (settings_data is re-formatted).
  Shared code + DK templates at the repo root, Swedish strings in `stores/se/sv_code.py` (code) and `sv_text.py`
  (template values, product/URL/image maps, per-section overrides), SE bases in `stores/se/base` (layout, product
  template, settings data, exact copies of SE's live files). Any change to the shared code or DK templates:
  rebuild, check "no problems", upload the changed SE files. Prices: SEK `{{amount_no_decimals}} kr` → "1 199 kr".
- SE header/footer groups hold only the Black Week sections (SE's own header/footer are in the live theme).
  na-side-cart app embed off in the work theme (as DK). bw-collection-live settings are in SE's settings_data.
- Store data: collections black-week-3for2 (13), black-week-4for2 (46) and black-week-limited (renamed
  black-week-limited-edition, redirect) existed unpublished; now templates set, published to Online Store, titles
  "Black Week 2026 – 3/4 för 2". Limited now also has the vattenflaska 1000 ml and Sebastian's SE Black Week items
  (Elite Speed Rope – Black Week 2026 (active), Anti Slip Grips Pro – Black Week Edition, Fusion Grips Pro – Black
  Week Limited, Metcon lyftarbälte – Black Week Edition (drafts, 0 stock)). Pages (published, templates set):
  black-week (existed, had a Klaviyo form body), limited-blackout, 3-for-2, 4-for-2, black-week-presenter (gift page),
  black-week-villkor (terms + FAQ). Automatic discounts "3 för 2 · Black Week" and "4 för 2 · Black Week" (tag
  black-week-2026) 20.11 12:00 → 30.11 23:59 CET; test codes BWTEST3FOR2 / BWTEST4FOR2 until 20.11 11:59 (20 uses).
  Gift bundles: `bw-gave-hydration-bottle` (→ AROX_HYDRATIONBOTTLE) and `bw-gave-stromper-3-pak` (4 sizes →
  AR3PSBLS/M/L/XL, black only; the SE product "Strumpor 3-PACK" is a draft), 0 kr., tag bw-gave, seo.hidden, Online
  Store only. 13 campaign images copied from DK to SE Files (5 got a name suffix, mapped in sv_text.URLS).
- Tested 19.11 (preview, phase early, test codes): 3 för 2, 4 för 2, both together, vattenflaska at 1 199 kr,
  strumpväljare at 1 999 kr, gifts removed below; crawl of 17 pages: no Liquid errors, no overflow, no broken images.
- SE notes: free shipping 899 kr (theme setting, header, footer, PDP), freight from 75 kr; the old SE homepage also
  says "Fri frakt över 749 kr" (replaced by the Black Week homepage). Active automatic BXGY "4for3" (sweatbands
  svedbaand-2, does not combine with product discounts) and "SOCKS" (no products) exist in SE.
- SE Klaviyo: "BW26v2 SE 01–08" are drafts, not scheduled (Nexus sync 19.11).

- **SE normal shop ↔ Black Week (19.11, same switch as DK above):** build now takes SE's live homepage
  (`stores/se/base/templates/index.json`, exact copy of live), SE's live header/footer groups and product template
  with the Black Week sections/blocks added (`KEYMAP` maps DK's `cs_announcement_bar_RX8nib` to SE's
  `cs_announcement_bar_jEXaEY`), the Swedish `bw-home-group.json`, and keeps SE live's Klaviyo "Added to Cart" script
  at the end of the cart drawer (DK's drawer never had it). Uploaded 19.11 (commit 4d6ffc8 + 6ffa06f), checksums of all
  changed files match; JSON groups/settings checked by content.
  Tested (`modetest-se.js`, mobile): early normal visitor → SE live home (12 sections) / PDP (live blocks, Loox stars,
  price) / training-clothing, Black Week collection in Black Week; VIP after /pages/black-week → Black Week home, PDP
  and footer; live → Black Week; ended → normal. Drawer: render with the group section id
  (`?section_id=sections--28881808785737__cart-drawer`; plain `cart-drawer` renders schema defaults = Danish):
  no Liquid errors or missing translations, Black Week bar 899 / 1 199 / 1 999 kr in Swedish, normal drawer identical
  to SE live (incl. live's own English "Freight / Free freight" lines, a translation gap in SE live's locale).
  Fixed: "anmeldelser" → "recension(er)" on Black Week product cards.
  The ProfitMetrics app embed in SE's settings_data no longer exists (fails to render on live too; Shopify drops it
  on upload); Arox no longer uses ProfitMetrics.

### DE (aroxfitness.de = aroxfitness-se.myshopify.com, sic), built 19.11 (lighter version in Dawn)
- Live theme **Dawn 6.0.2** (131330343099). Work theme **"Black Week 2026 – DE"** `gid://shopify/OnlineStoreTheme/213258928459`
  (duplicate of live). Preview: https://aroxfitness.de/?preview_theme_id=213258928459 (`&bw_phase=…`, VIP as DK).
  Shop language en (primary) + de; aroxfitness.de serves de; theme JSON text is German (falls back for de).
- Built by `python3 stores/de/build.py` → `stores/de/theme/**` (45 files): the bw-* sections the DE pages use
  (`SECTIONS` in build.py) + their snippets, German strings in `de_code.py` / `de_text.py`, Dawn-only files in
  `stores/de/src` (gift bar `bw-dawn-progress`, gift config `bw-dawn-gifts`, PDP offer box `bw-dawn-pdp`, `bw-dawn.css`
  appended to bw.css, `bw-dawn-cart.js` replaces bw.js's Impact cart helpers), bases in `stores/de/base` (layout =
  exact live copy; cart-drawer = stock Dawn 6.0.2 = live; settings_data = live).
- What DE gets: the same normal/Black Week switch (bw-head). Black Week on → ticker (static `bw-marquee` in
  `<main>`; Dawn's body grid allows no extra rows outside main), the Black Week homepage (section group
  `bw-home-group`, 9 sections; Dawn's homepage sections hidden), a BLACK WEEK link first in Dawn's menu (bw.js),
  an offer box under the price on products in an offer, and the gift bar in Dawn's cart drawer. Dawn keeps its own
  header, footer, product page and cart. `cart_type` drawer (live: notification + NA Side Cart app); NA Side Cart
  app embed off in the work theme (as DK/SE; its script is on cdn.shopify.com, which this session cannot load).
  Dawn 6 sends no cart events: bw.js wraps fetch and announces Dawn's /cart/add|change|update|clear as cart:change.
- Store data 19.11: collections black-week-limited-edition ("Black Week 2026 – Einzelangebote", 7: Sebastian's 4
  Black Week editions (3 drafts, 0 stock) + Trinkflasche 1000 ml, Edelstahl-Trinkflasche, Trinkflasche 500 ml (0
  stock)), black-week-3for2 (12) and black-week-4for2 (40) (DK lists matched by SKU; no DE product for active-hoodie
  dark brown, 6 women's tank tops, oversized tee light grey, 3-pak strømper), templates set, Online Store only.
  Pages black-week (existed with a Klaviyo form body; now template black-week, published), black-week-geschenk,
  black-week-bedingungen. Automatic BXGY "3 für 2 · Black Week" / "4 für 2 · Black Week" 20.11 12:00 → 30.11 23:59
  CET; test codes BWTEST3FOR2 / BWTEST4FOR2 until 20.11 11:59. One gift (Frederik 19.11: no 3-pack socks in DE):
  `bw-gave-hydration-bottle` "AROX Trinkflasche 1000 ml (Geschenk)", 0 € bundle → AROX_HYDRATIONBOTTLE, from 109 €
  (after discount). 5 campaign images copied from DK's Files (same names).
- DE facts: shipping DHL 2,99 €, free from 69,99 € (Shopify rates; the Lieferung page still says 129 € / 6,99 €),
  delivery 2–4 Werktage, 30 Tage Widerrufsrecht (DE's own pages).
- Tested 19.11: no Liquid errors / missing translations on 8 pages; modes (early normal → Dawn shop; Black Week
  collection → Black Week; VIP → Black Week home, ticker, PDP box; live; ended → normal); cart: Dawn add → drawer +
  bar ("Noch 20,99 € bis zum gratis Versand"), ≥ 109 € → gift line 0 € ("Gratis Geschenk"), 3 für 2 code → 98 € →
  gift removed; 3 für 2 + 4 für 2 + gift together (curl): grip free, 2 tees free, gift 0 €.

## Thermo bottle removed, gifts combine with the offers (client 19.11, all three markets)
No free Thermo bottle for the first 100 orders anywhere. DK: gift page (both tier gifts, three rules incl. "Med 3 for
2 og 4 for 2"), landing/homepage gift blocks, homepage FAQ, terms (Thermo term and the two Thermo FAQs removed; term
"Gaver ved køb" and the FAQ "Får jeg en gave …" stay), gift reminder on the offer pages, PDP gift row (tier gifts),
cart drawer (Thermo info line removed; snippet bw-cart-gift unused), section defaults. SE: same in Swedish (1 199 /
1 999 kr). DE: one gift (109 €). Checked with the test codes (curl, 19.11): DK 3 for 2 + 4 for 2 + both gifts →
3 092 → 1 995 kr., gifts 0 kr.; SE 4 320 → 2 747 kr.; DE 349 → 206 €. The gifts are 0 kr. products, not discounts,
so they always combine; the tiers count the cart after discount (as the terms say).
**Status: committed (3d2efa5); uploaded to DE and DK (19.11, 16 files, code checksums match; DK preview: no Thermo text on home, landing, gift, terms, 3/4 for 2 pages, PDP and drawer, no Liquid errors); uploaded to SE 19.11 (16 files, all checksums match; SE preview: no Thermo text on home, landing, presenter, villkor, 3/4 för 2 pages, PDP and drawer, no Liquid errors). Done on all three markets.**

## 3 for 2 / 4 for 2: "Alt tøj" / "Alt udstyr" fields (Sebastian 19.11, DK; SE/DE after his OK)
Final version after two rounds (tabs at the top, then category sliders, both rejected): two fields right above the
products on 3 for 2 and 4 for 2 (not on Single offers).
- Section `bw-collection-split` (blocks `field`: label + collection url; setting `all_url`): two fields side by side
  (also on phones) between the progress bar and the grid. A field links to a category collection that uses the
  offer's own template, so the page looks the same and that field is selected (white, "Vis alle produkter", ×);
  clicking the selected field goes back to the whole offer. Counts = products for sale (as the toolbar).
- Collections (manual, Online Store only): "Alt tøj (3 for 2)" `black-week-3for2-toj` (20) and "Alt udstyr (3 for 2)"
  `black-week-3for2-udstyr` (18: grips, knee sleeves), template `black-week-3for2`; "Alt tøj (4 for 2)"
  `black-week-4for2-toj` (47, was "Alt kvinde tøj") and "Alt udstyr (4 for 2)" `black-week-4for2-udstyr` (10: grips,
  belts, sweatbands), template `black-week-4for2`. "Alt herre tøj (4 for 2)" was deleted. Manual = a product
  Sebastian adds to 3 for 2 / 4 for 2 must also go into "Alt tøj" or "Alt udstyr" of that offer.
- `bw-offer-progress` `more_collections` = the offer's two category collections (Liquid reads 50 products per
  collection; 4 for 2 has 57), so all products count on every page. The discounts are on the whole offer
  collections, so tøj and udstyr combine.
- Leftovers (unused): `bw-collection-header` `sub` blocks (tabs), `bw-product-row` up to 48 products, and the template
  `collection.black-week-4for2-del` still in the DK work theme (theme files cannot be deleted from here; delete it in
  the code editor if wanted). SE/DE builds leave out the fields and `more_collections`.
- Uploaded to the DK work theme 19.11 (commit da24a9a); preview checked on all six pages (counts 18/18 and 46/10,
  selected states, progress 38/57 ids, no Liquid errors). Screenshots: `screenshots/4for2-*.png`, `3for2-udstyr-*.png`.

## Fast workflow (needs network access to aroxfitness.myshopify.com and aroxfitness.dk)

The environment's network policy now allows the store (added 16.11); `cdn.shopify.com` is still blocked, which only
affects a few third-party scripts in the preview. `theme_bash` returned upstream errors on 16.11; not needed.
Tools: copy `.bw-tools/*.js` to a scratch folder and run `npm i react@18.3.1 react-dom@18.3.1 @babel/standalone@7.29.0
@shopify/liquid-html-parser liquidjs` there (scripts expect `node_modules` next to them; the repo is at
/home/user/aroxDK). `node ref.js live <out> 10` renders only board 10; `node cart.js 390 live out.png
stromper-3-pak:2 …` fills a cart in the work-theme preview and screenshots the drawer.

1. Design references: render the design locally with Playwright (React/Babel are routed to local npm copies because
   unpkg is not reachable from the browser) and screenshot each board's 390/1440 frame per phase:
   `node .bw-tools/ref.js <phase> <outdir>` (needs `npm i playwright react@18.3.1 react-dom@18.3.1 @babel/standalone@7.29.0` next to it; paths inside point at the old session — adjust). It opens the .dc.html with
   `<base href="file:///…/project/">`, replace the `fase` default in `data-props`, screenshot
   `div[style*="width: 390px"], div[style*="width: 1440px"]` inside each `[data-screen-label]` section.
2. Edit files in this repo, commit, push.
3. Upload to the work theme with GraphQL `themeFilesUpsert` using URL bodies
   (`https://raw.githubusercontent.com/Swerv-Manager/aroxDK/<commit>/<path>`), max 50 files per call; sections before
   the JSON templates that reference them; poll the returned job; verify with `checksumMd5`.
   Shopify drops a file silently when: section/block name > 25 bytes, `header` setting content > 50 chars, select option
   label > 50 chars, url-setting defaults, richtext default not starting with `<p>`, JSON template > 25 sections.
   It re-formats `settings_data.json`, `product.json` and `index.json`, so their checksums differ even when accepted.
4. Screenshot the preview URL with local Playwright (1440 and 390 wide, full page, each phase via `bw_phase=`),
   compare side by side with the design frames, fix, repeat.
5. Do **not** use `theme_bash`/`theme_screenshot` for the loop: they work on a separate copy of the theme that was
   frozen on 13 Nov and allow ~1 call per minute.

## Conventions

- Port the design markup with its inline styles and `clamp()`/`cqw` sizes; wrap section roots in
  `style="container-type:inline-size"`. Hover styles → small scoped CSS.
- Root element `class="bw …{% render 'bw-only', phases: section.settings.phases %}"`; every section has a `phases`
  text setting; copy is the design's Danish text verbatim as setting defaults.
- Products via `snippets/bw-product-card.liquid`; offer badge via `snippets/bw-offer.liquid`
  (collections `black-week-limited-edition`, `black-week-3for2`, `black-week-4for2`).
- Hide replaced live sections with `"disabled": true`; never delete. Menus come from Shopify menus (`link_list`).
- Images in Shopify Files: Billede-00748.jpg, Billede-08057.jpg, Billede-08011.jpg,
  Billede-08431_c2413a7b-6dfc-42df-9b99-e1990905d132.jpg, Billede-00931.jpg, Billede-00921.jpg,
  Design_uden_navn-186.png, Design_uden_navn-191.png, 427_496bbe8d-72cc-421a-9db6-f83a5b270081.png,
  428_720d86b7-f092-4cf7-803c-1e6214e6ae1f.png, bw26-Billede-08199.jpg, bw26-Billede-08153.jpg, bw26-arox-r-white.png,
  bw26-landing-hero-studio.jpg (18.11: hero on /pages/black-week, client's studio photo, source in .bw-assets/;
  focal point 22 % / 25 %, settable in the section).

## Admin actions

Done 16.11 (client OK that they are live while not linked from the live theme): collection `black-week-limited`
renamed to `black-week-limited-edition` (redirect from the old URL), templates assigned to `black-week-limited-edition`,
`black-week-3for2`, `black-week-4for2`, all three published to Webshop; page `black-week` given template `black-week`
and published; pages `black-week-gaver` ("Gave i Black Week") and `black-week-vilkaar` ("Black Week kampagnevilkår")
created with their templates and published. On the live theme these URLs fall back to its default templates.

Still needed: activate the Limited products (drafts) and pick them in the Limited groups; automatic discounts for
3 for 2 and 4 for 2 (none active on 16.11); free shipping over 499 kr. in shipping rates;
checkout message ("Black Week · rabatten er trukket" / "Rabatten er trukket automatisk. Er din ordre blandt de første
100, får du en gratis Thermo stålflaske 1,06 L med."); publish the theme after approval.

Gift steps in the cart progress bar: on 16.11 no active automatic discount gives the Hydration Bottle or the
3-pak strømper (active automatic discounts: "Fast Bundle (DO NOT DELETE)" and "Kaching Bundles"). Two automatic
Buy X get Y discounts are needed (minimum 799 kr. → Hydration Bottle 100 %, minimum 1299 kr. → Strømper 3-pak
100 %). The socks have sizes, so the customer adds them in their size; the step label links to the product.
A 0 kr. gift line shows "Gratis gave" in the drawer. Shipping is calculated by the "Zippendo Shipping" app; check
that its free shipping rule also applies at exactly 499 kr. (the bar and the "Levering" line use >= 499).

## Tools (`.bw-tools/`, not part of the theme)

`ref.js` design reference renderer (optional 3rd arg: board prefix, e.g. `10`) · `page.js` full-page preview
screenshot + section list · `filter.js` filter/sort check · `pdp.js` variant + add-to-cart check · `overview.py` theme vs design side by side · `cart.js` cart drawer screenshot in
the preview · `qty.js` live quantity-change check · `progress-test.js` progress bar at many cart totals (liquidjs) ·
`crawl.js` all BW pages × phases × widths (Liquid errors, JS errors, overflow, broken images, links) · `e2e.js` /
`e2e2.js` cart: offers with test codes, gifts, removal · `giftmock.js` gift sync against a simulated cart · `sheet.py` long screenshots as one contact sheet ·
`cmp.py` side-by-side crops · `lint.js` Liquid/JSON parse check
(needs `@shopify/liquid-html-parser`) · `schemacheck.py` Shopify schema limits · `xcheck.py` / `valcheck.py`
template ↔ schema checks · `tj.py` load/dump theme JSON keeping the comment header. Paths inside are from the old
session; adjust before use.
