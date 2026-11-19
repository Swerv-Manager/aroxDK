// Arox DE (Dawn) · Black Week on/off check + screenshots. Usage: node modetest-de.js <base> <theme id> <out dir>
const { chromium } = require('playwright');
const [base, theme, out] = process.argv.slice(2);
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
(async () => {
  const b = await chromium.launch();
  const probe = p => p.evaluate(() => {
    const vis = el => !!el && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
    const q = s => [...document.querySelectorAll(s)];
    const cls = [...document.documentElement.classList].filter(c => /^bw-/.test(c)).join(' ');
    const bwSec = q('.shopify-section.bw-section').filter(vis).length;
    const tplSecs = q('main > .shopify-section[id^="shopify-section-template--"]').filter(vis).length;
    const marquee = vis(document.querySelector('.bw-marquee'));
    const nav = q('[data-bw-nav]').filter(vis).length;
    const box = document.querySelector('[data-bw-pdp]');
    const boxPlaced = !!box && !!box.closest('.product__info-container') && vis(box);
    const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
    const errs = (window.__errs || []).length;
    return { cls, bwSec, tplSecs, marquee, nav, boxPlaced, overflow, errs };
  });
  async function scenario(name, steps) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, userAgent: UA });
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs|pandectes|cdn\.shopify\.com\/extensions/, r => r.abort());
    for (const [path, shot] of steps) {
      await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme, { waitUntil: 'domcontentloaded', timeout: 90000 });
      await p.waitForTimeout(3000);
      const r = await probe(p);
      console.log(`${name.padEnd(20)} ${path.slice(0, 44).padEnd(44)} ${r.cls.padEnd(30)} bwSec=${r.bwSec} tpl=${r.tplSecs} ticker=${r.marquee} nav=${r.nav} pdpBox=${r.boxPlaced} overflow=${r.overflow} jsErr=${errs.length}`);
      if (shot) await p.screenshot({ path: `${out}/${shot}.png`, fullPage: shot.endsWith('-full') });
    }
    if (errs.length) console.log('   JS errors:', [...new Set(errs)].slice(0, 5).join(' | '));
    await ctx.close();
  }
  await scenario('early, normal', [['/?bw_phase=early', 'n-home'], ['/products/arox-anti-slip-grips', 'n-pdp'], ['/collections/black-week-3for2', 'n-bwcoll']]);
  await scenario('early, VIP', [['/pages/black-week?bw_phase=early', 'vip-landing-full'], ['/', 'vip-home-full'], ['/products/arox-anti-slip-grips', 'vip-pdp']]);
  await scenario('live', [['/?bw_phase=live', null], ['/pages/black-week-geschenk', 'live-gift-full'], ['/pages/black-week-bedingungen', 'live-terms-full'], ['/collections/black-week-limited-edition', 'live-limited-full']]);
  await scenario('ended', [['/?bw_phase=ended', null]]);
  await b.close();
})();
