// End-to-end: 3 for 2 (test code) + 0 kr. gifts in the work-theme preview, through the real drawer JS.
const { chromium } = require('playwright');
const V = { hoodie: 53479196819785, anti: 52073263104329, comfort: 51653239144777, shorts: 53297933910345 };
(async () => {
  const [out] = process.argv.slice(2);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const url = 'https://aroxfitness.dk/collections/black-week-3for2?preview_theme_id=191537611081&bw_phase=live';
  const cart = () => p.evaluate(async () => { const c = await (await fetch('/cart.js')).json(); return 'total ' + c.total_price / 100 + ' kr · ' + c.items.map(i => i.title.slice(0, 26) + ' ' + i.final_line_price / 100 + (i.properties && i.properties._bw_gift ? ' [' + i.properties._bw_gift + ']' : '')).join(' | '); });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(1500);
  const r = await p.evaluate(async (V) => {
    const a = await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: V.anti, quantity: 1 }, { id: V.comfort, quantity: 1 }, { id: V.shorts, quantity: 1 }, { id: V.hoodie, quantity: 1 }] }) });
    await fetch('/cart/update.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ discount: 'BWTEST3FOR2' }) });
    return a.status;
  }, V);
  console.log('add status', r);
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(6000);
  console.log('1) 3 for 2 + 1247 kr after discount:\n   ' + await cart());
  await p.evaluate(async (V) => { await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: V.hoodie, quantity: 1 }] }) }); }, V);
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(5000);
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(1500);
  const pick = p.locator('[data-bw-gift-pick][data-key="g3"]');
  console.log('2) over 1299 → socks picker visible:', await pick.isVisible().catch(() => false));
  if (await pick.isVisible().catch(() => false)) {
    await pick.locator('select').selectOption({ index: 5 });
    await pick.locator('[data-bw-gift-add]').click();
    await p.waitForTimeout(5000);
  }
  console.log('3) socks picked:\n   ' + await cart());
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(2000);
  await p.screenshot({ path: out });
  // drop below 799: remove both hoodies
  const keys = await p.evaluate(async () => (await (await fetch('/cart.js')).json()).items.filter(i => /hoodie/i.test(i.title)).map(i => i.key));
  for (const k of keys) await p.evaluate(async (k) => { await fetch('/cart/change.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: k, quantity: 0 }) }); }, k);
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(6000);
  console.log('4) hoodies removed (below 799):\n   ' + await cart());
  await p.evaluate(() => fetch('/cart/clear.js', { method: 'POST' }));
  await b.close();
})();
