// Gift sync logic against an in-memory cart (no store requests): every request to the fake origin is answered locally.
const { chromium } = require('playwright');
const fs = require('fs');
const BWJS = fs.readFileSync('/home/user/aroxDK/assets/bw.js', 'utf8');
const G2 = { product: 101, variant: 1001 }, G3 = { product: 102, variant: 1002 };
const html = `<!doctype html><html class="bw-early"><head><script>window.BW={phase:'early',times:{},countdown:{}}</script></head><body>
<script type="application/json" data-bw-gifts>{"on":true,"phases":["early","live","sidste"],"tiers":[{"key":"g2","min":79900,"product":101,"variant":1001,"auto":true},{"key":"g3","min":129900,"product":102,"variant":1002,"auto":false}]}</script>
<script src="/bw.js"></script></body></html>`;
function run(label, items, check) { return { label, items, check }; }
const cases = [
  run('H) første change-kald får 429 → nyt forsøg', [{ id: 5, product_id: 5, price: 49900, q: 2 }, { id: 1001, product_id: 101, price: 0, q: 3, g: 'g2' }], c => c.find(i => i.product_id === 101)?.quantity === 1),
  run('C) flaske-gave 3 stk. ved 998 kr. → 1 stk.', [{ id: 5, product_id: 5, price: 49900, q: 2 }, { id: 1001, product_id: 101, price: 0, q: 3, g: 'g2' }], c => c.find(i => i.product_id === 101)?.quantity === 1),
  run('C2) to flaske-gavelinjer → én', [{ id: 5, product_id: 5, price: 49900, q: 2 }, { id: 1001, product_id: 101, price: 0, q: 1, g: 'g2' }, { id: 1001, product_id: 101, price: 0, q: 1, g: 'g2', k: 'x2' }], c => c.filter(i => i.product_id === 101).reduce((a, i) => a + i.quantity, 0) === 1),
  run('D) 748 kr. med begge gaver → begge væk', [{ id: 5, product_id: 5, price: 74800, q: 1 }, { id: 1001, product_id: 101, price: 0, q: 1, g: 'g2' }, { id: 1002, product_id: 102, price: 0, q: 1, g: 'g3' }], c => !c.some(i => i.product_id === 101 || i.product_id === 102)),
  run('A) 998 kr. uden gave → flaske tilføjes', [{ id: 5, product_id: 5, price: 49900, q: 2 }], c => c.find(i => i.product_id === 101)?.quantity === 1),
  run('F) 1.400 kr.: strømper 2 stk. → 1 stk., flaske tilføjes', [{ id: 5, product_id: 5, price: 70000, q: 2 }, { id: 1002, product_id: 102, price: 0, q: 2, g: 'g3' }], c => c.find(i => i.product_id === 102)?.quantity === 1 && c.find(i => i.product_id === 101)?.quantity === 1),
  run('G) gave der koster penge (ingen rabat) → fjernes', [{ id: 5, product_id: 5, price: 49900, q: 2 }, { id: 1001, product_id: 101, price: 19900, q: 1, g: 'g2' }], c => !c.some(i => i.product_id === 101)),
];
(async () => {
  const b = await chromium.launch();
  for (const tc of cases) {
    let cart = tc.items.map((it, n) => ({ key: it.k || ('k' + n), id: it.id, variant_id: it.id, product_id: it.product_id, quantity: it.q, price: it.price, original_price: it.price, properties: it.g ? { _bw_gift: it.g } : {} }));
    const view = () => { const items = cart.map(i => ({ ...i, original_line_price: i.price * i.quantity, final_line_price: i.price * i.quantity })); return { items, total_price: items.reduce((a, i) => a + i.final_line_price, 0) }; };
    const ctx = await b.newContext(); const p = await ctx.newPage();
    const calls = [];
    await p.route('https://aroxfitness.dk/**', async r => {
      const u = new URL(r.request().url()); const body = r.request().postData() ? JSON.parse(r.request().postData()) : null;
      if (u.pathname === '/') return r.fulfill({ contentType: 'text/html', body: html });
      if (u.pathname === '/bw.js') return r.fulfill({ contentType: 'text/javascript', body: BWJS });
      if (u.pathname === '/cart.js') return r.fulfill({ json: view() });
      if (u.pathname === '/cart/change.js' && tc.label.startsWith('H') && !calls.some(c => c.startsWith('429'))) { calls.push('429'); return r.fulfill({ status: 429, contentType: 'text/html', body: '<!DOCTYPE html>' }); }
      if (u.pathname === '/cart/change.js') { calls.push('change ' + body.id + '→' + body.quantity); const l = cart.find(i => i.key === body.id); if (l) l.quantity = body.quantity; cart = cart.filter(i => i.quantity > 0); return r.fulfill({ json: view() }); }
      if (u.pathname === '/cart/add.js') { calls.push('add ' + body.items.map(i => i.id + 'x' + i.quantity).join(',')); body.items.forEach(it => { const pid = it.id === 1001 ? 101 : it.id === 1002 ? 102 : it.id; cart.push({ key: 'n' + Math.random(), id: it.id, variant_id: it.id, product_id: pid, quantity: it.quantity, price: 0, original_price: 0, properties: it.properties || {} }); }); return r.fulfill({ json: { items: body.items } }); }
      return r.fulfill({ status: 404, body: '' });
    });
    await p.goto('https://aroxfitness.dk/'); await p.waitForTimeout(tc.label.startsWith('H') ? 4000 : 1500);
    const ok = tc.check(view().items);
    console.log((ok ? 'OK  ' : 'FEJL') + ' ' + tc.label + '  · kald: ' + (calls.join('; ') || '-') + ' · kurv: ' + view().items.map(i => i.quantity + '×' + i.product_id).join(' '));
    await ctx.close();
  }
  await b.close();
})();
