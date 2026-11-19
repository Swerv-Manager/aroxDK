// Black Week on/off check: per scenario, html classes, which header/footer/home/PDP pieces are visible, drawer variant.
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
    const hdr = q('.shopify-section[id$="__header"]').some(vis) ? 'impact-header' : (q('.shopify-section[id$="__bw_header"]').some(vis) ? 'bw-header' : 'none');
    const ftr = q('.shopify-section[id$="__footer"]:not(.bw-section)').some(vis) ? 'impact-footer' : (q('.shopify-section[id$="__bw_footer"]').some(vis) ? 'bw-footer' : 'none');
    const tplSecs = q('main > .shopify-section[id^="shopify-section-template--"]').filter(vis).length;
    const blocks = q('.product-info__block-item').filter(vis).map(e => e.getAttribute('data-block-id').replace(/^.*__/, '').replace(/-1$/, '')).join(',');
    const offerBadges = q('.bw-offer-badge').filter(vis).length;
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    return { cls, bwSec, hdr, ftr, tplSecs, blocks: blocks.slice(0, 260), offerBadges, bodyBg };
  });
  async function scenario(name, steps) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, userAgent: UA });
    const p = await ctx.newPage();
    await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs/, r => r.abort());
    for (const [path, shot] of steps) {
      await p.goto(base + path + (path.includes('?') ? '&' : '?') + 'preview_theme_id=' + theme, { waitUntil: 'domcontentloaded', timeout: 90000 });
      await p.waitForTimeout(2500);
      const r = await probe(p);
      console.log(`${name.padEnd(22)} ${path.slice(0, 48).padEnd(48)} ${r.cls.padEnd(34)} bwSec=${r.bwSec} ${r.hdr} ${r.ftr} tplSecs=${r.tplSecs} badges=${r.offerBadges} bg=${r.bodyBg}` + (r.blocks ? `\n${''.padEnd(23)}blocks: ${r.blocks}` : ''));
      if (shot) await p.screenshot({ path: `${out}/${shot}.png` });
    }
    await ctx.close();
  }
  await scenario('early, normal visitor', [['/?bw_phase=early', 'early-home'], ['/products/arox-anti-slip-grips', 'early-pdp'], ['/collections/training-clothing', 'early-coll'], ['/collections/black-week-3for2', 'early-bwcoll']]);
  await scenario('early, VIP (landing)', [['/pages/black-week?bw_phase=early', 'vip-landing'], ['/', 'vip-home'], ['/products/arox-anti-slip-grips', 'vip-pdp']]);
  await scenario('live, everyone', [['/?bw_phase=live', 'live-home'], ['/products/arox-anti-slip-grips', 'live-pdp']]);
  await scenario('ended, everyone', [['/?bw_phase=ended', 'ended-home'], ['/pages/black-week', null]]);
  await b.close();
})();
