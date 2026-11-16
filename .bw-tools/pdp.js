// node pdp.js <width> <handle> <out.png> → product page in the preview: full screenshot, then picks the 2nd available
// size (if any), checks the price text follows, clicks "Læg i kurv" and reports the cart count + whether the drawer opened.
const { chromium } = require('playwright');
(async () => {
  const [w, handle, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: parseInt(w, 10), height: parseInt(w, 10) < 700 ? 844 : 900 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  await p.goto('https://aroxfitness.dk/products/' + handle + '?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: out, fullPage: true });
  const price = () => p.evaluate(() => document.querySelector('.bw-pdp-price__row')?.textContent.replace(/\s+/g, ' ').trim());
  console.log('price', await price());
  const sw = p.locator('.shopify-section--main-product label.block-swatch:not(.is-disabled)');
  const n = await sw.count();
  if (n > 1) {
    await sw.nth(1).click();
    await p.waitForTimeout(2000);
    console.log('variant', p.url().split('?')[1], '| price', await price(), '| selected', await p.evaluate(() => document.querySelector('.shopify-section--main-product :checked + .block-swatch')?.textContent.trim()));
  }
  await p.locator('.shopify-section--main-product .product-info__buy-buttons button[type="submit"]').first().click();
  await p.waitForTimeout(3000);
  const st = await p.evaluate(async () => ({ count: (await (await fetch('/cart.js')).json()).item_count, drawer: document.querySelector('cart-drawer')?.hasAttribute('open') }));
  console.log('after add', JSON.stringify(st));
  await b.close();
})();
