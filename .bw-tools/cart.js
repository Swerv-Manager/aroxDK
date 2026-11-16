// node cart.js <width> <phase> <out.png> <handle[:qty]>... → adds products to the cart in the work-theme preview, opens the drawer, screenshots it
const { chromium } = require('playwright');
(async () => {
  const [w, phase, out, ...items] = process.argv.slice(2);
  const width = parseInt(w, 10);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width, height: width < 700 ? 844 : 900 }, deviceScaleFactor: 1, locale: 'da-DK' });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const base = 'https://aroxfitness.dk';
  await p.goto(base + '/?preview_theme_id=191537611081&bw_phase=' + phase, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(1500);
  for (const it of items) {
    const [h, q] = it.split(':');
    const res = await p.evaluate(async ({ h, q }) => {
      const pr = await (await fetch('/products/' + h + '.js')).json();
      const v = pr.variants.find(v => v.available) || pr.variants[0];
      const r = await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: v.id, quantity: parseInt(q || '1', 10) }] }) });
      return r.status + ' ' + pr.title + ' ' + v.price;
    }, { h, q });
    console.log(res);
  }
  await p.goto(base + '/?preview_theme_id=191537611081&bw_phase=' + phase, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  const total = await p.evaluate(async () => (await (await fetch('/cart.js')).json()).total_price);
  console.log('cart total', total);
  await p.evaluate(() => { const d = document.querySelector('cart-drawer'); d && d.show ? d.show() : document.querySelector('[aria-controls="cart-drawer"]')?.click(); });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: out });
  if (process.env.DUMP) {
    const html = await p.evaluate(() => document.querySelector('cart-drawer')?.outerHTML || 'none');
    require('fs').writeFileSync(process.env.DUMP, html);
  }
  await b.close();
})();
