// node crawl.js <outdir> [phases] [widths] → loads each BW page in the work-theme preview per phase and width,
// reports Liquid errors, JS exceptions, horizontal overflow, broken images, empty BW sections; saves full-page shots;
// writes links.txt with every same-site link found.
const { chromium } = require('playwright');
const fs = require('fs');
const [out, ph = 'pre,early,live,sidste,ended', ws = '390,1440'] = process.argv.slice(2);
const PAGES = ['/', '/pages/black-week', '/pages/limited-blackout', '/pages/3-for-2', '/pages/4-for-2', '/pages/black-week-gaver',
  '/pages/black-week-vilkaar', '/collections/black-week-3for2', '/collections/black-week-4for2', '/collections/black-week-limited-edition',
  '/collections/traeningstoej', '/collections/traeningsudstyr', '/collections/all', '/products/arox-anti-slip-grips',
  '/products/sportstech-unisex-t-shirt-sort', '/products/stromper-3-pak', '/products/arox-hydration-bottle-1000-ml', '/cart', '/search?q=str%C3%B8mper'];
const links = new Set();
(async () => {
  const b = await chromium.launch();
  const jobs = [];
  for (const phase of ph.split(',')) for (const w of ws.split(',').map(Number)) for (const path of PAGES) jobs.push({ phase, w, path });
  const results = [];
  async function run(job) {
    const ctx = await b.newContext({ viewport: { width: job.w, height: job.w < 700 ? 844 : 900 }, locale: 'da-DK',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
    const p = await ctx.newPage();
    await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram|hotjar|clarity/, r => r.abort());
    const errs = [];
    p.on('pageerror', e => errs.push('PAGEERROR ' + String(e.message).slice(0, 160)));
    p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|ERR_|net::|CORS|blocked|403|Refused/.test(m.text())) errs.push('console ' + m.text().slice(0, 160)); });
    const sep = job.path.includes('?') ? '&' : '?';
    let res;
    try { res = await p.goto('https://aroxfitness.dk' + job.path + sep + 'preview_theme_id=191537611081&bw_phase=' + job.phase, { waitUntil: 'domcontentloaded', timeout: 90000 }); }
    catch (e) { results.push({ ...job, fail: String(e).slice(0, 100) }); await ctx.close(); return; }
    await p.waitForTimeout(2500);
    const h = await p.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += 700) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(90); }
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.waitForTimeout(700);
    const m = await p.evaluate(() => {
      const html = document.documentElement.outerHTML;
      const liquid = (html.match(/Liquid (syntax )?error[^<]{0,120}/g) || []).concat(html.match(/translation missing[^<]{0,80}/gi) || []);
      const W = window.innerWidth;
      const over = document.documentElement.scrollWidth > W + 1;
      const wide = [];
      if (over) document.querySelectorAll('body *').forEach(e => { const r = e.getBoundingClientRect(); if (r.right > W + 2 && r.width > 0 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('[aria-hidden="true"], .marquee, [class*="marquee"], [class*="ticker"]')) wide.push((e.tagName + '.' + String(e.className).split(' ').slice(0, 2).join('.')).slice(0, 60) + ' r=' + Math.round(r.right)); });
      const broken = Array.from(document.images).filter(i => i.complete && i.naturalWidth === 0 && i.currentSrc && !/cdn\.shopify\.com\/(s\/files|extensions)|trustpilot|loox|kiwi|klaviyo/.test(i.currentSrc) && i.getBoundingClientRect().width > 0).map(i => i.currentSrc.slice(0, 90));
      const emptyBw = Array.from(document.querySelectorAll('.shopify-section')).filter(s => s.querySelector('.bw') && s.offsetHeight > 0 && s.querySelector('[class*="grid"], [class*="row"]') && !s.querySelector('.bw-card, img, a, input, button')).map(s => s.id.slice(-40));
      const ls = Array.from(document.querySelectorAll('a[href]')).filter(a => a.offsetParent !== null || a.closest('.bw')).map(a => a.getAttribute('href')).filter(h => h && (h.startsWith('/') || h.includes('aroxfitness.dk')) && !h.startsWith('//'));
      return { liquid: [...new Set(liquid)].slice(0, 5), over, wide: wide.slice(0, 6), broken: [...new Set(broken)].slice(0, 5), emptyBw, ls, title: document.title.slice(0, 60), h: document.body.scrollHeight };
    });
    m.ls.forEach(l => links.add(l.replace(/https?:\/\/(www\.)?aroxfitness\.dk/, '').split('#')[0]));
    const slug = job.path.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
    await p.screenshot({ path: `${out}/${job.phase}-${job.w}-${slug}.png`, fullPage: true }).catch(() => {});
    delete m.ls;
    const r = { ...job, status: res.status(), errs: [...new Set(errs)].slice(0, 6), ...m };
    results.push(r);
    fs.appendFileSync(out + '/stream.jsonl', JSON.stringify(r) + '\n');
    fs.writeFileSync(out + '/links.txt', [...links].sort().join('\n'));
    await ctx.close();
  }
  const N = 4; let i = 0;
  await Promise.all(Array.from({ length: N }, async () => { while (i < jobs.length) { const j = jobs[i++]; await run(j).catch(e => results.push({ ...j, fail: String(e).slice(0, 120) })); } }));
  fs.writeFileSync(out + '/links.txt', [...links].sort().join('\n'));
  fs.writeFileSync(out + '/results.json', JSON.stringify(results, null, 1));
  for (const r of results.sort((a, b) => (a.path + a.phase + a.w).localeCompare(b.path + b.phase + b.w))) {
    const issues = [];
    if (r.fail) issues.push('FAIL ' + r.fail);
    if (r.status && r.status !== 200) issues.push('status ' + r.status);
    if (r.liquid && r.liquid.length) issues.push('LIQUID ' + r.liquid.join(' | '));
    if (r.errs && r.errs.length) issues.push(r.errs.join(' | '));
    if (r.over) issues.push('OVERFLOW ' + r.wide.join(', '));
    if (r.broken && r.broken.length) issues.push('BROKEN IMG ' + r.broken.join(', '));
    if (r.emptyBw && r.emptyBw.length) issues.push('EMPTY ' + r.emptyBw.join(','));
    if (issues.length) console.log(`${r.phase} ${r.w} ${r.path}: ${issues.join(' || ')}`);
  }
  console.log('done', results.length, 'loads,', links.size, 'links');
  await b.close();
})();
