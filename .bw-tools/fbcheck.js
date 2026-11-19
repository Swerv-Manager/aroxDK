const { chromium } = require('playwright');
const [base, theme, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
  const p = await ctx.newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs/, r => r.abort());
  const go = async path => { await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme + '&bw_phase=early', { waitUntil: 'domcontentloaded', timeout: 90000 }); await p.waitForTimeout(3000); };
  // 1) collection head + first cards
  await go('/collections/black-week-limited-edition');
  const head = await p.locator('.bw-ch__nav').first().boundingBox();
  await p.screenshot({ path: out + '/fb-coll.png', clip: { x: 0, y: Math.max(0, head.y - 120), width: 390, height: 760 } });
  console.log('nav cards:', await p.evaluate(() => [...document.querySelectorAll('.bw-ch__card')].map(c => { const r = c.getBoundingClientRect(); return Math.round(r.left) + ',' + Math.round(r.top) + ' w' + Math.round(r.width); }).join(' | ')), '· page width', await p.evaluate(() => document.documentElement.scrollWidth));
  const ov = await p.evaluate(() => [...document.querySelectorAll('.bw-card')].slice(0, 6).map(c => { const bs = [...c.querySelectorAll('a span, .bw-card__media span')].filter(s => /edition|week|för|for|limited/i.test(s.textContent)); if (bs.length < 2) return 'single'; const a = bs[0].getBoundingClientRect(), z = bs[1].getBoundingClientRect(); return (a.right > z.left && a.bottom > z.top && z.bottom > a.top) ? 'OVERLAP' : 'ok'; }).join(' '));
  console.log('badges:', ov);
  // 2) product page bottom carousels
  await go('/products/arox-anti-slip-grips');
  const car = p.locator('[data-bw-car]').first();
  await car.scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
  const cb = await car.boundingBox();
  await p.screenshot({ path: out + '/fb-pdp-car.png', clip: { x: 0, y: Math.max(0, cb.y + (await p.evaluate(() => scrollY)) - 140), width: 390, height: 600 }, fullPage: true });
  console.log('carousels:', await p.evaluate(() => [...document.querySelectorAll('[data-bw-car]')].map(c => c.children.length + ' cards, scrollW ' + c.scrollWidth + ' > w ' + c.clientWidth + ', self excluded: ' + !c.innerHTML.includes('/products/arox-anti-slip-grips"')).join(' | ')));
  console.log('producer box visible:', await p.evaluate(() => !!document.querySelector('.bw-pdp-gpsr, [class*="gpsr"]')));
  // 3) homepage circles
  await go('/');
  const circ = p.locator('.bw-noscrollbar').first();
  await circ.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
  const ci = await circ.boundingBox();
  await p.screenshot({ path: out + '/fb-circles.png', clip: { x: 0, y: Math.max(0, ci.y - 100), width: 390, height: 300 } });
  await b.close();
})();
