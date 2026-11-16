// node ref.js <phase> <outdir> [labelPrefix] → renders the design with the given fase and screenshots each board frame
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const phase = process.argv[2] || 'pre';
  const filter = process.argv[4] || '';
  const dir = '/home/user/aroxDK/.bw-design/';
  const src = dir + 'Black Week 2026 ALT I ET.dc.html';
  let html = fs.readFileSync(src, 'utf8');
  html = html.replace('&quot;default&quot;:&quot;pre&quot;', '&quot;default&quot;:&quot;' + phase + '&quot;');
  html = html.replace('<head>', '<head><base href="file://' + dir + '">');
  const tmp = path.join(__dirname, '_ref_' + phase + '.html');
  fs.writeFileSync(tmp, html);
  const out = path.join(process.argv[3], phase); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2200, height: 1400 }, deviceScaleFactor: 1 });
  const NM = __dirname + '/node_modules/';
  const MAP = { 'react@18.3.1/umd/react.production.min.js': 'react/umd/react.production.min.js', 'react-dom@18.3.1/umd/react-dom.production.min.js': 'react-dom/umd/react-dom.production.min.js', '@babel/standalone@7.29.0/babel.min.js': '@babel/standalone/babel.min.js' };
  await p.route('https://unpkg.com/**', r => { const k = r.request().url().replace('https://unpkg.com/', ''); return MAP[k] ? r.fulfill({ path: NM + MAP[k], contentType: 'application/javascript' }) : r.abort(); });
  await p.goto('file://' + tmp, { waitUntil: 'networkidle', timeout: 120000 });
  await p.waitForTimeout(4000);
  await p.addStyleTag({ content: 'section{content-visibility:visible !important} *{animation-play-state:paused !important}' });
  const sections = await p.$$('[data-screen-label]');
  for (const s of sections) {
    const label = (await s.getAttribute('data-screen-label')).replace(/[^A-Za-z0-9+-]+/g, '_');
    if (filter && !label.startsWith(filter)) continue;
    await s.scrollIntoViewIfNeeded().catch(() => {});
    await p.waitForTimeout(500);
    const frames = await s.$$('div[style*="width: 390px"], div[style*="width: 1440px"]');
    let i = 0;
    for (const f of frames) {
      const bb = await f.boundingBox(); if (!bb || bb.height < 50) continue;
      const w = Math.round(bb.width);
      await f.screenshot({ path: path.join(out, `${label}__${i}_${w}.png`) }).catch(e => console.log('skip', label, i, e.message.slice(0, 80)));
      i++;
    }
    console.log(label, i);
  }
  await b.close();
})();
