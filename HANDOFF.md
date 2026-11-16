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
  (default `pre early live sidste`; theme's own free shipping bar in the other phases) are cart drawer settings.
  `bw.js` swaps the bar at once on `cart:change`. Tested at 0–1500 kr. with `.bw-tools/progress-test.js` and in the
  preview with `.bw-tools/cart.js` / `qty.js`.
- Not yet design-matched: collections + offer pages (boards 04–07), product pages (08), gift page (09),
  terms + FAQ (11).

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
  428_720d86b7-f092-4cf7-803c-1e6214e6ae1f.png, bw26-Billede-08199.jpg, bw26-Billede-08153.jpg, bw26-arox-r-white.png.

## Admin actions still needed (not theme work)

Create collection `black-week-limited-edition`; assign templates `black-week-limited-edition`, `black-week-3for2`,
`black-week-4for2` to the three collections; give page "black-week" the template `black-week` and publish it; create
pages `black-week-gaver` and `black-week-vilkaar` with their templates; free shipping over 499 kr. in shipping rates;
checkout message ("Black Week · rabatten er trukket" / "Rabatten er trukket automatisk. Er din ordre blandt de første
100, får du en gratis Thermo stålflaske 1,06 L med."); publish the theme after approval.

Gift steps in the cart progress bar: on 16.11 no active automatic discount gives the Hydration Bottle or the
3-pak strømper (active automatic discounts: "Fast Bundle (DO NOT DELETE)" and "Kaching Bundles"). Two automatic
Buy X get Y discounts are needed (minimum 799 kr. → Hydration Bottle 100 %, minimum 1299 kr. → Strømper 3-pak
100 %). The socks have sizes, so the customer adds them in their size; the step label links to the product.
A 0 kr. gift line shows "Gratis gave" in the drawer. Shipping is calculated by the "Zippendo Shipping" app; check
that its free shipping rule also applies at exactly 499 kr. (the bar and the "Levering" line use >= 499).

## Tools (`.bw-tools/`, not part of the theme)

`ref.js` design reference renderer (optional 3rd arg: board prefix, e.g. `10`) · `cart.js` cart drawer screenshot in
the preview · `qty.js` live quantity-change check · `progress-test.js` progress bar at many cart totals (liquidjs) ·
`cmp.py` side-by-side crops · `lint.js` Liquid/JSON parse check
(needs `@shopify/liquid-html-parser`) · `schemacheck.py` Shopify schema limits · `xcheck.py` / `valcheck.py`
template ↔ schema checks · `tj.py` load/dump theme JSON keeping the comment header. Paths inside are from the old
session; adjust before use.
