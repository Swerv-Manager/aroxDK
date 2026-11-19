// DK: 3 for 2 / 4 for 2 (private test codes) together with the free gifts at 799 / 1299 kr. (amount after discount).
// Usage: node combo-dk.js <base> <theme id> <out dir>
const { chromium } = require('playwright');
const [base, theme, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs|cdn\.shopify\.com\/extensions/, r => r.abort());
  const go = async path => { await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme, { waitUntil: 'domcontentloaded', timeout: 90000 }); await p.waitForTimeout(6000); };
  const cart = () => p.evaluate(async () => {
    const c = await (await fetch('/cart.js')).json();
    return `total ${c.total_price / 100} kr · codes ${(c.discount_codes || []).map(d => d.code + (d.applicable ? '' : '(n/a)')).join(',')}\n   ` +
      c.items.map(i => `${i.quantity}× ${i.product_title.slice(0, 34)} ${i.final_line_price / 100}${i.properties && i.properties._bw_gift ? ' [gift ' + i.properties._bw_gift + ']' : ''}${(i.line_level_discount_allocations || []).map(a => ' {' + a.discount_application.title + ' -' + a.amount / 100 + '}').join('')}`).join('\n   ');
  });
  const drawerInfo = () => p.evaluate(() => {
    const d = document.querySelector('cart-drawer');
    const bar = d && d.querySelector('[data-bw-cart-progress]');
    const pick = d && d.querySelector('[data-bw-gift-pick]');
    return { bar: bar ? bar.textContent.replace(/\s+/g, ' ').trim().slice(0, 160) : null, socksPicker: !!(pick && pick.getClientRects().length) };
  });
  const post = (url, body) => p.evaluate(async ([u, b]) => { let s = 0; for (let k = 0; k < 6; k++) { const r = await fetch(u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) }); s = r.status; if (r.ok) break; await new Promise(z => setTimeout(z, 15000)); } return s; }, [url, body]);
  await go('/pages/black-week?bw_phase=early');             // VIP mark + early phase
  await post('/cart/clear.js', {});
  // A: 3 for 2 → 3 grips (399) + 1 hoodie (499) = 1696 kr.; 3 for 2 makes the cheapest free → 1297 kr. → gift 799 only
  console.log('add A', await post('/cart/add.js', { items: [{ id: 52073263104329, quantity: 3 }, { id: 53479196819785, quantity: 1 }] }));
  console.log('codes', await post('/cart/update.js', { discount: 'BWTEST3FOR2,BWTEST4FOR2' }));
  await go('/collections/black-week-3for2');
  console.log('A 3 for 2:', await cart()); console.log('  drawer', JSON.stringify(await drawerInfo()));
  // B: + 4 for 2 → 4 tees (349) = 1396 kr., 2 free → +698 kr. → 1995 kr. → gift 799 + 1299 (socks picked in the drawer)
  console.log('add B', await post('/cart/add.js', { items: [{ id: 53361346937161, quantity: 2 }, { id: 49279478169929, quantity: 2 }] }));
  await go('/collections/black-week-4for2');
  console.log('B 3 for 2 + 4 for 2:', await cart());
  await p.evaluate(() => document.querySelector('cart-drawer').show()); await p.waitForTimeout(2500);
  console.log('  drawer', JSON.stringify(await drawerInfo()));
  await p.screenshot({ path: `${out}/dk-combo-drawer.png` });
  // pick the socks gift in the drawer
  const added = await p.evaluate(async () => { const b = document.querySelector('[data-bw-gift-add]'); if (!b) return false; b.click(); return true; });
  await p.waitForTimeout(5000);
  console.log('C socks picked (' + added + '):', await cart());
  await post('/cart/clear.js', {});
  await b.close();
})();
