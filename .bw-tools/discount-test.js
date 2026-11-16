// End-to-end discount + gift test with the private test codes in the work-theme preview.
// 1) three 3 for 2 products + test codes → cheapest free; 2) total >= 799 → Hydration Bottle gift auto-added and free;
// 3) total >= 1299 → pick socks in the drawer → free. Prints the cart after each step, screenshots the drawer.
const { chromium } = require('playwright');
(async () => {
  const [out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const url = 'https://aroxfitness.dk/collections/black-week-3for2?preview_theme_id=191537611081&bw_phase=live';
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2000);
  const cart = () => p.evaluate(async () => { const c = await (await fetch('/cart.js')).json(); return c.item_count + ' items · subtotal ' + c.items_subtotal_price / 100 + ' · total ' + c.total_price / 100 + ' kr · codes ' + (c.discount_codes || []).map(d => d.code + (d.applicable ? '' : '(n/a)')).join(',') + '\n   ' + c.items.map(i => i.title + ' x' + i.quantity + ' ' + i.final_line_price / 100 + (i.properties && i.properties._bw_gift ? ' [gift ' + i.properties._bw_gift + ']' : '') + (i.line_level_discount_allocations || []).map(a => ' {' + a.discount_application.title + ' -' + a.amount / 100 + '}').join('')).join('\n   '); });
  await p.evaluate(async () => {
    const add = async (h, q) => { const pr = await (await fetch('/products/' + h + '.js')).json(); const v = pr.variants.find(v => v.available); await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: v.id, quantity: q }] }) }); };
    await add('arox-anti-slip-grips', 1); await add('arox-comfort-grips-pro', 1); await add('hybrid-shorts-navy-blue', 1);
    await fetch('/cart/update.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ discount: 'BWTEST3FOR2,BWTEST4FOR2,BWTESTGAVE799,BWTESTGAVE1299' }) });
  });
  console.log('step 1 (3 for 2 products + codes):\n  ' + await cart());
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(6000);
  console.log('step 2 (after page load, gift sync):\n  ' + await cart());
  // over 1299: add a hoodie (3 for 2 too) and let the drawer render
  await p.evaluate(async () => { const pr = await (await fetch('/products/active-hoodie-sort.js')).json(); const v = pr.variants.find(v => v.available); await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: v.id, quantity: 1 }] }) }); });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(5000);
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(1500);
  const pick = p.locator('[data-bw-gift-pick][data-key="g3"] [data-bw-gift-add]');
  console.log('socks picker visible:', await pick.isVisible().catch(() => false));
  if (await pick.isVisible().catch(() => false)) { await pick.click(); await p.waitForTimeout(6000); }
  console.log('step 3 (over 1299, socks picked):\n  ' + await cart());
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(2500);
  await p.screenshot({ path: out });
  await b.close();
})();
