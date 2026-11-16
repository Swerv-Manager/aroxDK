// node refel.js <phase> <text> <out.png> [frameWidth] → screenshot of the design block (nearest ancestor with a background image or dark bg) that contains the given text, inside the 1440 (or 390) frame of board 02/03
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const [phase, text, out, fw] = process.argv.slice(2);
  const dir = '/home/user/aroxDK/.bw-design/';
  let html = fs.readFileSync(dir + 'Black Week 2026 ALT I ET.dc.html', 'utf8');
  html = html.replace('&quot;default&quot;:&quot;pre&quot;', '&quot;default&quot;:&quot;' + phase + '&quot;').replace('<head>', '<head><base href="file://' + dir + '">');
  const tmp = path.join(__dirname, '_refel.html'); fs.writeFileSync(tmp, html);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2200, height: 1400 } });
  const NM = __dirname + '/node_modules/';
  const MAP = { 'react@18.3.1/umd/react.production.min.js': 'react/umd/react.production.min.js', 'react-dom@18.3.1/umd/react-dom.production.min.js': 'react-dom/umd/react-dom.production.min.js', '@babel/standalone@7.29.0/babel.min.js': '@babel/standalone/babel.min.js' };
  await p.route('https://unpkg.com/**', r => { const k = r.request().url().replace('https://unpkg.com/', ''); return MAP[k] ? r.fulfill({ path: NM + MAP[k], contentType: 'application/javascript' }) : r.abort(); });
  await p.goto('file://' + tmp, { waitUntil: 'networkidle', timeout: 120000 });
  await p.waitForTimeout(4000);
  await p.addStyleTag({ content: 'section{content-visibility:visible !important}' });
  const h = await p.evaluateHandle(({ text, fw }) => {
    const frames = Array.from(document.querySelectorAll('div[style*="width: ' + (fw || 1440) + 'px"]'));
    for (const f of frames) {
      const all = Array.from(f.querySelectorAll('button, a, div, h1, h2'));
      const hit = text.startsWith('ph:') ? f.querySelector('input[placeholder="' + text.slice(3) + '"]') : all.find(e => e.textContent.trim() === text);
      if (hit) { let e = hit; while (e && e !== f) { if (e.querySelector(':scope > img') && e.offsetHeight > 300) return e; e = e.parentElement; } }
    }
    return null;
  }, { text, fw });
  const el = h.asElement();
  if (!el) { console.log('not found'); await b.close(); return; }
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
  await el.screenshot({ path: out });
  console.log('ok');
  await b.close();
})();
