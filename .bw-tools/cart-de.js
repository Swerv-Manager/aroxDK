// Arox DE (Dawn) · cart test: Dawn add to cart → drawer + gift bar; ≥ 109 € → gift line (0 €); test code 3 für 2 → under
// 109 € → gift removed. Usage: node cart-de.js <base> <theme id> <out dir>
const { chromium } = require('playwright');
const [base, theme, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => { if (!/shop-js|shopifycloud/.test(e.message)) errs.push(e.message); });
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|pandectes|cdn\.shopify\.com\/extensions/, r => r.abort());
  const go = async path => { await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme, { waitUntil: 'domcontentloaded', timeout: 90000 }); await p.waitForTimeout(3000); };
  const cart = () => p.evaluate(async () => { const c = await (await fetch('/cart.js')).json(); return { total: c.total_price / 100, lines: c.items.map(i => `${i.quantity}× ${i.product_title.slice(0, 32)} ${i.final_line_price / 100}${i.properties && i.properties._bw_gift ? ' [gift]' : ''}`), discounts: c.cart_level_discount_applications.map(d => d.title).concat(c.items.flatMap(i => i.discounts.map(d => d.title))) }; });
  const drawer = () => p.evaluate(() => {
    const d = document.querySelector('cart-drawer');
    const msg = d && d.querySelector('.bw-dawn-progress__msg');
    return { open: !!d && d.classList.contains('active'), bar: msg ? msg.textContent.trim().replace(/\s+/g, ' ') : null, giftTag: !!(d && d.querySelector('.bw-dawn-gift-tag')), bubble: (document.querySelector('#cart-icon-bubble .cart-count-bubble') || {}).textContent };
  });
  await go('/pages/black-week?bw_phase=early');
  await p.evaluate(() => fetch('/cart/clear.js', { method: 'POST' }));
  console.log('nav link (desktop):', await p.evaluate(() => [...document.querySelectorAll('[data-bw-nav] a')].map(a => a.textContent.trim() + ' → ' + a.getAttribute('href') + (a.querySelector('.bw-ping') ? ' (ping)' : ''))));
  await go('/products/arox-anti-slip-grips');
  await p.click('product-form button[name="add"]');
  await p.waitForTimeout(4000);
  console.log('1 Dawn add:', JSON.stringify(await drawer()), JSON.stringify(await cart()));
  await p.screenshot({ path: `${out}/cart-1.png` });
  // two more → 3 × 49 € = 147 € ≥ 109 € → the gift should be added by bw.js
  await p.evaluate(async () => { const v = document.querySelector('product-form input[name="id"]').value; await fetch(window.routes.cart_add_url + '.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: +v, quantity: 2 }] }) }); });
  await p.waitForTimeout(6000);
  console.log('2 ≥109 €:', JSON.stringify(await drawer()), JSON.stringify(await cart()));
  await p.evaluate(() => document.querySelector('cart-drawer').open());
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `${out}/cart-2.png` });
  // test code 3 für 2 (BWTEST3FOR2, until 20.11 11:59): 3 grips → 98 € < 109 € → gift removed
  await go('/discount/BWTEST3FOR2?redirect=/products/arox-anti-slip-grips');
  await p.waitForTimeout(5000);
  console.log('3 with 3 für 2:', JSON.stringify(await drawer()), JSON.stringify(await cart()));
  await p.evaluate(() => document.querySelector('cart-drawer').open());
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `${out}/cart-3.png` });
  // normal visitor (no VIP, early): no gift bar, no gift
  await p.evaluate(() => { localStorage.removeItem('bw_vip'); });
  await go('/collections/all-clothing?bw_vip=0&bw_phase=early');
  console.log('4 normal visitor:', await p.evaluate(() => document.documentElement.className.match(/bw-\S+/g).join(' ')), JSON.stringify(await drawer()));
  await p.evaluate(() => fetch('/cart/clear.js', { method: 'POST' }));
  console.log('JS errors:', errs.slice(0, 5));
  await b.close();
})();
