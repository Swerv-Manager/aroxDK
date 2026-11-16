// Renders snippets/bw-cart-progress.liquid with liquidjs for several cart totals → prints text/fill, writes a test page,
// and screenshots it at the drawer's 390 px width (Shopify filters stubbed: money_without_currency).
const { Liquid } = require('liquidjs');
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const out = process.argv[2];
const engine = new Liquid({ root: '/home/user/aroxDK/snippets', extname: '.liquid', dynamicPartials: true, strictFilters: true });
engine.registerFilter('money_without_currency', c => {
  const n = Number(c) / 100;
  const [i, d] = n.toFixed(2).split('.');
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + d;
});
(async () => {
  const totals = [0, 32800, 49800, 49900, 60000, 79900, 105000, 129800, 129900, 150000];
  let html = '<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&display=swap"><style>body{margin:0;background:#0a0a0a;color:#fff;font-family:Archivo,sans-serif}.case{width:390px;box-sizing:border-box;padding:16px 20px;border-bottom:1px solid #2b2b2b}.t{font-size:10px;color:#6e6e6e;margin-bottom:6px}</style></head><body>';
  for (const t of totals) {
    const src = `{% render 'bw-cart-progress', phases: '', gift2: g2, gift3: g3 %}`;
    const r = await engine.parseAndRender(src, { g2: { url: '/products/arox-hydration-bottle-1000-ml' }, g3: { url: '/products/stromper-3-pak' } }, { globals: { cart: { total_price: t } } });
    const msg = (r.match(/data-bw-msg>([^<]*)</) || [])[1];
    const fill = (r.match(/data-bw-fill style="height:100%;width:([^;]*);/) || [])[1];
    const now = (r.match(/aria-valuenow="([^"]*)"/) || [])[1];
    console.log(String(t / 100).padStart(5), '|', fill.padEnd(7), '|', msg, '| valuenow', now);
    html += `<div class="case"><div class="t">kurv ${t / 100} kr.</div>${r}</div>`;
  }
  html += '</body></html>';
  fs.writeFileSync(path.join(out, 'progress-test.html'), html);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.join(out, 'progress-test.html'));
  await p.waitForTimeout(1500);
  await p.screenshot({ path: path.join(out, 'progress-test.png'), fullPage: true });
  await b.close();
})();
