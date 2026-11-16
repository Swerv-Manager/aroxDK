// Isolated cart checks of the test codes (variant ids, no product.js calls → no rate limit).
const { chromium } = require('playwright');
const V = { hoodie: 53479196819785, anti: 52073263104329, comfort: 51653239144777, shorts: 53297933910345, bottle: 55876741890377, socks: 53284884644169 };
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext()).newPage();
  await p.goto('https://aroxfitness.dk/?preview_theme_id=191537611081', { waitUntil: 'domcontentloaded', timeout: 90000 });
  const run = (label, items, codes) => p.evaluate(async ({ items, codes }) => {
    await fetch('/cart/clear.js', { method: 'POST' });
    const r = await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items }) });
    if (!r.ok) return 'add failed ' + r.status;
    await fetch('/cart/update.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ discount: codes }) });
    const c = await (await fetch('/cart.js')).json();
    return 'total ' + c.total_price / 100 + ' · codes ' + c.discount_codes.map(d => d.code + (d.applicable ? '✓' : '✗')).join(',') + ' · ' + c.items.map(i => i.title.slice(0, 18) + ' ' + i.final_line_price / 100).join(' | ');
  }, { items, codes }).then(r => console.log(label + ': ' + r));
  const g = (id, key) => ({ id, quantity: 1, properties: { _bw_gift: key } });
  await run('A gift only (2 hoodies + bottle)', [{ id: V.hoodie, quantity: 2 }, g(V.bottle, 'g2')], 'BWTESTGAVE799');
  await run('B 3for2 + gift (3x3for2 + hoodie + bottle)', [{ id: V.anti, quantity: 1 }, { id: V.comfort, quantity: 1 }, { id: V.shorts, quantity: 1 }, { id: V.hoodie, quantity: 1 }, g(V.bottle, 'g2')], 'BWTEST3FOR2,BWTESTGAVE799');
  await run('C same cart, gift code only', [{ id: V.anti, quantity: 1 }, { id: V.comfort, quantity: 1 }, { id: V.shorts, quantity: 1 }, { id: V.hoodie, quantity: 1 }, g(V.bottle, 'g2')], 'BWTESTGAVE799');
  await run('D socks gift (3 hoodies + socks)', [{ id: V.hoodie, quantity: 3 }, g(V.socks, 'g3')], 'BWTESTGAVE1299');
  await run('E both gifts (3 hoodies + bottle + socks)', [{ id: V.hoodie, quantity: 3 }, g(V.bottle, 'g2'), g(V.socks, 'g3')], 'BWTESTGAVE799,BWTESTGAVE1299');
  await p.evaluate(() => fetch('/cart/clear.js', { method: 'POST' }));
  await b.close();
})();
