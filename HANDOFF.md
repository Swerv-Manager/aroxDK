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

Decisions (Frederik 19.11): same offers and dates as DK; amounts = DKK converted and rounded to whole amounts
(SEK at 1,49 per DKK, XE 18.11; EUR at 7,46 DKK, the peg): 799 → 1.191 kr / 107 €, 1.299 → 1.936 kr / 174 €;
Claude writes and approves the SE/DE texts from the copy agents (`arox-fitness-copy`, `arox-fitness-de-copy`);
Trustpilot and customer counts may be used in all markets (clients.trustpilot_allowed = true).
Network: aroxfitness.se and aroxfitness.de are allowed since 19.11.

- SE: aroxfitness.se = `aroxfitnesscom.myshopify.com`, live theme "Impact Theme | Markets" (Impact 6.6.0,
  171481301321), locale sv, SEK, money format `{{amount_no_decimals}} kr`. Apps on the homepage: Kaching, Klaviyo,
  na-side-cart, Pandectes, ProfitMetrics, Clarity. Free shipping is stated twice and differently: "Fri frakt över 899
  kr" (announcement bar) and "Fri frakt över 749 kr" (USP row); converted 499 DKK = 744 kr. The bar's first step must
  match what checkout really charges.
- DE: aroxfitness.de = `aroxfitness-se.myshopify.com` (sic), live theme **Dawn 6.0.2** (131330343099), not Impact:
  the Impact changes (cart drawer, product page, gallery, collection integration) cannot be copied; the bw-* sections
  themselves are mostly self-contained. "Versandkostenfrei ab 69,99 €" (converted 499 DKK = 67 €).
- Same stock numbers as DK for shared products (one warehouse); SE/DE have their own prices and partly other handles.
- Connector: switching store needs a new Shopify sign-in on claude.ai (Connectors); verify with get-shop-info first.

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
