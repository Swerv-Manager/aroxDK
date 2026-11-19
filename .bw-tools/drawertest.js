const { chromium } = require('playwright');
const [base, theme, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  for (const [name, first] of [['normal', '/?bw_phase=early'], ['vip', '/pages/black-week?bw_phase=early']]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
    const p = await ctx.newPage();
    await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs/, r => r.abort());
    const go = async path => { await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme, { waitUntil: 'domcontentloaded', timeout: 90000 }); await p.waitForTimeout(3000); };
    await go(first);
    await p.evaluate(async () => {
      await fetch('/cart/clear.js', { method: 'POST' });
      for (let k = 0; k < 6; k++) { const r = await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: 53479196819785, quantity: 2 }] }) }); if (r.ok) break; await new Promise(z => setTimeout(z, 8000)); }
    });
    await go('/products/arox-anti-slip-grips');
    await p.waitForTimeout(4000);
    await p.evaluate(() => document.querySelector('cart-drawer').show()); await p.waitForTimeout(2000);
    const r = await p.evaluate(async () => {
      const vis = el => !!el && el.getClientRects().length > 0;
      let c; for (let k = 0; k < 6; k++) { const r = await fetch('/cart.js'); if (r.ok) { c = await r.json(); break; } await new Promise(z => setTimeout(z, 8000)); }
      return { mode: document.documentElement.classList.contains('bw-on') ? 'bw-on' : 'bw-off', bwDrawer: vis(document.querySelector('cart-drawer .bw-site')), normDrawer: [...document.querySelectorAll('cart-drawer .bw-norm')].some(vis),
        lines: c.items.map(i => i.quantity + '× ' + i.product_title.slice(0, 24) + ' ' + i.final_line_price / 100).join(' | '), total: c.total_price / 100 };
    });
    console.log(name, JSON.stringify(r));
    await p.screenshot({ path: `${out}/drawer-${name}.png` });
    await p.evaluate(() => fetch('/cart/clear.js', { method: 'POST' }));
    await ctx.close();
  }
  await b.close();
})();
