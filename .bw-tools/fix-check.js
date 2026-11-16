// Checks on a product page in the work-theme preview:
// 1) is the na-side-cart app embed gone from the HTML, 2) a simulated Kiwi link inserted next to "Læg i kurv" is moved
// under the sizes and the button stays on the quantity row, 3) screenshot of the reviews area (SSR feed made visible).
const { chromium } = require('playwright');
(async () => {
  const [handle, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const res = await p.goto('https://aroxfitness.dk/products/' + handle + '?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  const html = await res.text();
  console.log('na-side-cart in HTML:', /na-side-cart/i.test(html), '| loox widget:', /id="looxReviews"/.test(html));
  await p.waitForTimeout(2500);
  const rows = () => p.evaluate(() => {
    const q = document.querySelector('.shopify-section--main-product [data-block-type="quantity-selector"]').getBoundingClientRect();
    const bb = document.querySelector('.shopify-section--main-product [data-block-type="buy-buttons"] button[type="submit"]').getBoundingClientRect();
    return 'qty top ' + Math.round(q.top) + ' · button top ' + Math.round(bb.top) + ' · button left ' + Math.round(bb.left - q.right);
  });
  console.log('before', await rows());
  await p.evaluate(() => {
    const host = document.querySelector('.shopify-section--main-product .product-info__buy-buttons');
    const d = document.createElement('div'); d.className = 'ks-chart-container'; d.innerHTML = '<a href="#" class="ks-chart-modal-link">STØRRELSESGUIDE</a>';
    host.prepend(d);
  });
  await p.waitForTimeout(500);
  console.log('after ', await rows(), '| kiwi parent:', await p.evaluate(() => document.querySelector('.ks-chart-container').parentElement.className), '| slot after:', await p.evaluate(() => document.querySelector('.bw-pdp-extra').previousElementSibling.getAttribute('data-block-type')));
  await p.addStyleTag({ content: '#loox-reviews-feed{display:block !important}' });
  const box = await p.evaluate(() => { const e = document.querySelector('#looxReviews'); e.scrollIntoView(); const r = e.getBoundingClientRect(); return { y: r.top + scrollY, h: r.height }; });
  await p.waitForTimeout(400);
  await p.screenshot({ path: out, fullPage: true, clip: { x: 0, y: Math.max(0, box.y - 160), width: 1440, height: Math.min(900, box.h + 320) } });
  await b.close();
})();
