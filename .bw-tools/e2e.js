// Full cart check in the work-theme preview: 3 for 2, 4 for 2 (test codes), Kaching overlap, gifts at 799/1299, removal.
const { chromium } = require('playwright');
const out = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const errs = []; p.on('pageerror', e => errs.push(String(e.message).slice(0, 150)));
  const URL = 'https://aroxfitness.dk/pages/black-week-vilkaar?preview_theme_id=191537611081&bw_phase=early';
  const go = async (ms = 6000) => { await p.goto(URL, { waitUntil: 'domcontentloaded', timeout: 90000 }); await p.waitForTimeout(ms); };
  const api = (fn, arg) => p.evaluate(fn, arg);
  const post = (path, body) => api(async ([path, body]) => { const r = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); return r.status; }, [path, body]);
  const variant = h => api(async h => { let pr; for (let k = 0; k < 6; k++) { const r = await fetch('/products/' + h + '.js'); if (r.ok) { pr = await r.json(); break; } await new Promise(z => setTimeout(z, 4000)); } const v = pr.variants.filter(v => v.available); return v.map(v => ({ id: v.id, price: v.price / 100, t: v.title })); }, h);
  const cart = async () => api(async () => { const c = await (await fetch('/cart.js')).json(); return { total: c.total_price / 100, orig: c.original_total_price / 100, disc: c.cart_level_discount_applications.map(d => d.title).concat([...new Set(c.items.flatMap(i => (i.line_level_discount_allocations || []).map(a => a.discount_application.title)))]), lines: c.items.map(i => `${i.quantity}× ${i.product_title.slice(0, 22)}${i.variant_title ? ' (' + i.variant_title.slice(0, 14) + ')' : ''} ${i.final_line_price / 100}/${i.original_line_price / 100}${i.properties && i.properties._bw_gift ? ' [' + i.properties._bw_gift + ']' : ''}`) }; });
  const show = async (label) => { const c = await cart(); console.log(`\n${label}\n  total ${c.total} kr (før rabat ${c.orig}) · rabatter: ${c.disc.join(', ') || '-'}\n  ` + c.lines.join('\n  ')); return c; };
  await go(2000);
  await post('/cart/clear.js', {});
  const anti = (await variant('arox-anti-slip-grips'))[0], comfort = (await variant('arox-comfort-grips-pro'))[0],
    shorts = (await variant('arox-dri-tech-performance-shorts-2-0'))[0], hoodie = (await variant('active-hoodie'))[0],
    tee = await variant('sportstech-unisex-t-shirt-sort'), top = (await variant('sportstech-kvinde-top-sort'))[0];
  console.log('variants', anti.price, comfort.price, shorts.price, hoodie.price, tee[0].price, top.price);
  await post('/cart/update.js', { discount: 'BWTEST3FOR2,BWTEST4FOR2' });
  // 1) 3 for 2: three different products
  await post('/cart/add.js', { items: [{ id: anti.id, quantity: 1 }, { id: comfort.id, quantity: 1 }, { id: shorts.id, quantity: 1 }] });
  await go(); await show('1) 3 for 2: grips 399 + grips 329 + shorts 349 → billigste gratis');
  // 2) 4th 3for2 item → over 799 → bottle auto
  await post('/cart/add.js', { items: [{ id: hoodie.id, quantity: 1 }] });
  await go(); await show('2) + hoodie 499 (4 varer i 3 for 2) → over 799: flaske skal komme af sig selv');
  // 3) 4 for 2: 3 tees, then 4
  await post('/cart/add.js', { items: [{ id: tee[0].id, quantity: 1 }, { id: tee[1].id, quantity: 1 }, { id: top.id, quantity: 1 }] });
  await go(); await show('3) + 3 varer fra 4 for 2');
  await post('/cart/add.js', { items: [{ id: tee[2].id, quantity: 1 }] });
  await go(); const c4 = await show('4) + 4. vare fra 4 for 2 → 2 billigste gratis; over 1299: strømpevælger');
  await p.evaluate(() => document.querySelector('cart-drawer').show()); await p.waitForTimeout(1500);
  const pick = p.locator('[data-bw-gift-pick][data-key="g3"]');
  console.log('   strømpevælger synlig:', await pick.isVisible().catch(() => false));
  if (await pick.isVisible().catch(() => false)) { await pick.locator('select').selectOption({ index: 1 }); await pick.locator('[data-bw-gift-add]').click(); await p.waitForTimeout(5000); }
  await show('5) strømper valgt');
  await p.evaluate(() => document.querySelector('cart-drawer').show()); await p.waitForTimeout(2500);
  await p.screenshot({ path: out + '/e2e-drawer.png' });
  // 6) try to raise gift qty to 3
  const gk = await api(async () => (await (await fetch('/cart.js')).json()).items.find(i => i.properties && i.properties._bw_gift === 'g2')?.key);
  if (gk) { await post('/cart/change.js', { id: gk, quantity: 3 }); await go(); await show('6) flaske-gave sat til 3 stk. → skal tilbage til 1'); }
  // 7) drop below 799: remove everything except 2 grips
  const keep = [anti.id, comfort.id];
  const keys = await api(async keep => (await (await fetch('/cart.js')).json()).items.filter(i => !keep.includes(i.variant_id) && !(i.properties && i.properties._bw_gift)).map(i => i.key), keep);
  const upd = {}; keys.forEach(k => upd[k] = 0);
  await post('/cart/update.js', { updates: upd });
  await go(); await show('7) kun 2 grips tilbage (under 799) → gaver skal være væk');
  // 8) Kaching overlap: 3 of the same grips
  await post('/cart/clear.js', {});
  await post('/cart/update.js', { discount: 'BWTEST3FOR2,BWTEST4FOR2' });
  await post('/cart/add.js', { items: [{ id: anti.id, quantity: 3 }] });
  await go(); await show('8) 3× samme grips (Kaching mængderabat + 3 for 2?)');
  // 9) gift added directly without reaching the tier
  await post('/cart/clear.js', {});
  const gv = (await variant('bw-gave-hydration-bottle'))[0];
  await post('/cart/add.js', { items: [{ id: gv.id, quantity: 1, properties: { _bw_gift: 'g2' } }, { id: shorts.id, quantity: 1 }] });
  await go(); await show('9) gave lagt i kurven direkte uden at nå 799 → skal fjernes');
  await post('/cart/clear.js', {});
  console.log('\nJS errors:', errs.length ? errs.join(' | ') : 'ingen');
  await b.close();
})();
