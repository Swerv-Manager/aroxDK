// node sec.js <width> <phase> <path> <selector> <out.png> → screenshot of one element in the work-theme preview + computed styles of its form parts
const { chromium } = require('playwright');
(async () => {
  const [w, phase, path, sel, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: parseInt(w, 10), height: 900 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  await p.goto('https://aroxfitness.dk' + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=191537611081&bw_phase=' + phase, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(600);
  await el.screenshot({ path: out });
  const st = await el.evaluate(root => ['input[type=text]', 'input[type=checkbox]', 'label', 'button[type=submit]', 'h2'].map(s => { const e = root.querySelector(s); if (!e) return s + ': -'; const c = getComputedStyle(e); return s + ': ' + [c.fontFamily.split(',')[0], c.fontSize, c.fontWeight, c.textAlign, c.borderRadius, c.lineHeight, c.letterSpacing, c.textTransform, c.appearance, c.width, c.height, c.justifyContent, c.display].join(' | '); }).join('\n'));
  console.log(st);
  await b.close();
})();
