// Automatic phase switching with a fake clock (no ?bw_phase): html class, countdown texts, hero headline,
// presale form, Black Week cart bar config. Usage: node phaseclock.js <base url incl. preview_theme_id>
const { chromium } = require('playwright');
const base = process.argv[2];
const T = [
  ['2026-11-20T11:59:30+01:00', 'pre'], ['2026-11-20T12:00:30+01:00', 'early'], ['2026-11-22T19:59:30+01:00', 'early'],
  ['2026-11-22T20:00:30+01:00', 'live'], ['2026-11-29T23:59:30+01:00', 'live'], ['2026-11-30T00:00:30+01:00', 'sidste'],
  ['2026-11-30T23:58:30+01:00', 'sidste'], ['2026-12-01T00:00:30+01:00', 'ended'],
];
(async () => {
  const b = await chromium.launch();
  for (const [t, want] of T) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
    const p = await ctx.newPage();
    await p.clock.setFixedTime(new Date(t));
    await p.route(/googletagmanager|klaviyo|trustpilot|facebook|clarity|loox|kiwi|ahrefs/, r => r.abort());
    await p.goto(base + (base.includes('?') ? '&' : '?') + 'bw_phase=auto', { waitUntil: 'domcontentloaded', timeout: 90000 });
    await p.waitForTimeout(2500);
    const r = await p.evaluate(() => {
      const vis = el => el && el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden';
      const phase = [...document.documentElement.classList].filter(c => /^bw-(pre|early|live|sidste|ended)$/.test(c)).join(',');
      const cd = [...document.querySelectorAll('[data-bw-cd-top]')].filter(vis).map(e => e.textContent.trim() + ' / ' + (e.parentElement.querySelector('[data-bw-cd-label]') || {}).textContent).slice(0, 1).join('');
      const h1 = [...document.querySelectorAll('h1, h2')].filter(vis).map(e => e.textContent.replace(/\s+/g, ' ').trim()).slice(0, 1).join('');
      const forms = [...document.querySelectorAll('form#bw-presale-form, [id^="bw-presale"]')].filter(vis).length;
      const gifts = (document.querySelector('[data-bw-gifts]') || {}).textContent || '';
      return { phase, cd, h1, forms, giftPhases: (gifts.match(/"phases": *(\[[^\]]*\])/) || [])[1] || '(tom kurv)' };
    });
    console.log(`${t.slice(5, 16).replace('T', ' ')} want ${want.padEnd(6)} got ${r.phase.padEnd(10)} ${r.phase === 'bw-' + want ? 'OK ' : 'FEJL'} | ${r.h1.slice(0, 44).padEnd(44)} | ${r.cd.slice(0, 70)} | presale-form ${r.forms}`);
    await ctx.close();
  }
  await b.close();
})();
