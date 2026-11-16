// Opens a collection in the preview, ticks the first value of the 2nd filter pill, then picks the 2nd sort option,
// and prints URL + product count after each step; screenshots the open dropdown.
const { chromium } = require('playwright');
(async () => {
  const [w, path, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: parseInt(w, 10), height: 900 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  await p.goto('https://aroxfitness.dk' + path + '?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2000);
  const info = () => p.evaluate(() => [location.search, document.querySelector('.bw-tb__count')?.textContent, document.querySelectorAll('.bw-cg .bw-card, .bw-cl__body .bw-card').length, Array.from(document.querySelectorAll('.bw-fp__pill')).map(x => x.textContent.trim()).join(' | ')].join('  ·  '));
  console.log('start ', await info());
  const pill = p.locator('.bw-fp:not(.bw-fp--sort)').nth(1);
  await pill.locator('summary').click();
  await p.waitForTimeout(400);
  await p.screenshot({ path: out });
  const opt = pill.locator('.bw-fp__opt:not(.is-empty) input').first();
  await Promise.all([p.waitForNavigation({ timeout: 30000 }), opt.check()]);
  await p.waitForTimeout(1500);
  console.log('filter', await info());
  await p.locator('.bw-fp--sort summary').click();
  await Promise.all([p.waitForNavigation({ timeout: 30000 }), p.locator('.bw-fp--sort input:not(:checked)').nth(1).check()]);
  await p.waitForTimeout(1500);
  console.log('sort  ', await info(), await p.evaluate(() => document.querySelector('.bw-tb__sort')?.textContent.trim()));
  await b.close();
})();
