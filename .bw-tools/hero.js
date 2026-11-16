const { chromium } = require('playwright');
(async () => {
  const [w, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: parseInt(w, 10), height: 1000 } })).newPage();
  await p.goto('https://aroxfitness.dk/pages/black-week?preview_theme_id=191537611081&bw_phase=pre', { waitUntil: 'load', timeout: 90000 });
  await p.waitForTimeout(2500);
  const r = await p.evaluate(() => { const h = document.querySelector('h1'); const r = h.getBoundingClientRect(); return { left: Math.round(r.left), right: Math.round(r.right), sw: h.scrollWidth, cw: h.clientWidth, vw: innerWidth }; });
  console.log(w, JSON.stringify(r));
  await p.screenshot({ path: out });
  await b.close();
})();
