// node page.js <width> <phase> <path> <out.png> → full-page screenshot of a page in the work-theme preview;
// also prints the list of top-level sections (id, height) so extra/missing sections are easy to spot.
const { chromium } = require('playwright');
(async () => {
  const [w, phase, pth, out] = process.argv.slice(2);
  const width = parseInt(w, 10);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width, height: width < 700 ? 844 : 900 }, deviceScaleFactor: 1, locale: 'da-DK' });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const sep = pth.includes('?') ? '&' : '?';
  const res = await p.goto('https://aroxfitness.dk' + pth + sep + 'preview_theme_id=191537611081&bw_phase=' + phase, { waitUntil: 'domcontentloaded', timeout: 90000 });
  console.log('status', res.status(), p.url());
  await p.waitForTimeout(2500);
  // scroll through to trigger lazy content
  const h = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 700) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(800);
  const secs = await p.evaluate(() => Array.from(document.querySelectorAll('.shopify-section, main > section, main > div')).filter(e => e.closest('main') || e.matches('.shopify-section')).map(e => {
    const r = e.getBoundingClientRect();
    return (e.id || e.className).toString().slice(0, 70) + '  y=' + Math.round(r.top + scrollY) + ' h=' + Math.round(r.height);
  }));
  console.log(secs.join('\n'));
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
})();
