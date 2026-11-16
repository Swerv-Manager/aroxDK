// Quick add + gift test in the work-theme preview.
const { chromium } = require('playwright');
(async () => {
  const [out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const cart = () => p.evaluate(async () => { const c = await (await fetch('/cart.js')).json(); return c.item_count + ' items · ' + c.total_price / 100 + ' kr · ' + c.items.map(i => i.title + (i.properties && i.properties._bw_gift ? ' [gift ' + i.properties._bw_gift + ' ' + i.final_line_price / 100 + ']' : '')).join(' | '); });
  await p.goto('https://aroxfitness.dk/collections/black-week-3for2?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  // multi-variant card: open picker, take first enabled option
  const qa = p.locator('bw-quick-add[data-single="false"]').first();
  await qa.locator('.bw-qa__btn').click();
  await p.waitForTimeout(300);
  await p.screenshot({ path: out.replace('.png', '_picker.png'), clip: await qa.evaluate(e => { const r = e.closest('.bw-card').getBoundingClientRect(); return { x: r.left, y: r.top, width: r.width, height: r.height }; }) });
  await qa.locator('.bw-qa__opt:not([disabled])').first().click();
  await p.waitForTimeout(3000);
  console.log('after multi-variant quick add:', await cart(), '| drawer open:', await p.evaluate(() => document.querySelector('cart-drawer')?.hasAttribute('open')));
  // single-variant card on Limited edition
  await p.goto('https://aroxfitness.dk/collections/black-week-limited-edition?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  const single = p.locator('bw-quick-add[data-single="true"]').first();
  console.log('single-variant cards:', await p.locator('bw-quick-add[data-single="true"]').count());
  await single.locator('.bw-qa__btn').click();
  await p.waitForTimeout(3500);
  console.log('after single quick add:', await cart());
  // push the cart over 799 and 1299 (no discounts exist yet → gifts must not stay)
  await p.evaluate(async () => {
    const pr = await (await fetch('/products/active-hoodie-sort.js')).json();
    const v = pr.variants.find(v => v.available);
    await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: v.id, quantity: 2 }] }) });
  });
  await p.goto('https://aroxfitness.dk/collections/black-week-limited-edition?preview_theme_id=191537611081&bw_phase=live', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(6000);
  console.log('over 1299, after load sync:', await cart(), '| html classes:', await p.evaluate(() => Array.from(document.documentElement.classList).filter(c => c.startsWith('bw-gift')).join(' ')));
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(1500);
  console.log('pickers visible:', await p.evaluate(() => Array.from(document.querySelectorAll('[data-bw-gift-pick]')).map(e => e.getAttribute('data-key') + '=' + (getComputedStyle(e).display !== 'none')).join(' ')));
  await p.screenshot({ path: out });
  await b.close();
})();
