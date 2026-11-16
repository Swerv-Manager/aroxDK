// Adds 2 Hydration Bottles, opens the drawer, changes quantity to 3 and reads the progress bar text before/after.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await p.route(/googletagmanager|klaviyo|trustpilot|facebook|codeblackbelt|ahrefs|instagram/, r => r.abort());
  const url = 'https://aroxfitness.dk/?preview_theme_id=191537611081&bw_phase=live';
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.evaluate(async () => {
    const pr = await (await fetch('/products/arox-hydration-bottle-1000-ml.js')).json();
    await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: pr.variants[0].id, quantity: 2 }] }) });
  });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await p.waitForTimeout(2500);
  await p.evaluate(() => document.querySelector('cart-drawer').show());
  await p.waitForTimeout(1500);
  const read = () => p.evaluate(() => [document.querySelector('cart-drawer [data-bw-msg]')?.textContent, document.querySelector('cart-drawer [data-bw-fill]')?.style.width, document.querySelector('cart-drawer .bw-cart-line [style*="font-weight:700"]')?.textContent].join(' | '));
  console.log('start      ', await read());
  await p.fill('cart-drawer .bw-cart-qty input', '3');
  await p.locator('cart-drawer .bw-cart-qty input').dispatchEvent('change');
  for (const ms of [700, 1500, 3000]) { await p.waitForTimeout(ms === 700 ? 700 : ms - 700); console.log(('after ' + ms + 'ms').padEnd(11), await read()); }
  await p.locator('cart-drawer .bw-cart-qty a').click();
  await p.waitForTimeout(2500);
  console.log('removed    ', await p.evaluate(() => document.querySelector('cart-drawer .empty-state')?.innerText.replace(/\s+/g, ' ')));
  await b.close();
})();
