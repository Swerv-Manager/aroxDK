/* BLACK WEEK 2026 · Arox Fitness DK · runtime for bw-* sections
   - countdowns   [data-bw-cd]           (texts + target follow the current phase, see snippet bw-head)
   - marquee/ping pause when off-screen
   - header ping dot on the "BLACK WEEK" menu link
   - offer progress bar [data-bw-progress] on 3 for 2 / 4 for 2 collections (reads /cart.js)
   - cart drawer progress bar [data-bw-cart-progress] (499 fri fragt · 799 / 1299 gaver) swapped at once on cart:change
*/
(function () {
  var BW = window.BW || {};
  var phase = BW.phase || 'live';
  var cdKey = phase === 'pre' ? 'pre' : phase === 'early' ? 'early' : 'live';
  var cdConf = (BW.countdown || {})[cdKey] || {};

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { en.target.__bwVisible = en.isIntersecting; en.target.classList.toggle('bw-offscreen', !en.isIntersecting); });
  }, { rootMargin: '100px' }) : null;

  function pad(v) { return String(v).padStart(2, '0'); }

  /* ---------- Countdowns ---------- */
  var cds = [];
  function initCountdowns(root) {
    (root || document).querySelectorAll('[data-bw-cd]:not([data-bw-ready])').forEach(function (el) {
      el.setAttribute('data-bw-ready', '');
      var top = el.querySelector('[data-bw-cd-top]'), label = el.querySelector('[data-bw-cd-label]');
      if (top && cdConf.top) top.textContent = cdConf.top;
      if (label && cdConf.label) label.textContent = cdConf.label;
      var target = Date.parse(el.getAttribute('data-target') || cdConf.target);
      var nums = el.querySelectorAll('[data-bw-cd-num]');
      el.__bwVisible = true;
      if (io) io.observe(el);
      cds.push({ el: el, target: target, nums: nums });
    });
    tick(true);
  }
  function tick(force) {
    var now = Date.now();
    cds.forEach(function (c) {
      if (!force && !c.el.__bwVisible) return;
      var s = Math.max(0, Math.floor((c.target - now) / 1000));
      var parts = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60].map(pad);
      c.nums.forEach(function (n, i) { if (n.textContent !== parts[i]) n.textContent = parts[i]; });
    });
  }
  setInterval(tick, 1000);

  /* ---------- Marquee: pause off-screen ---------- */
  function initMarquees(root) {
    (root || document).querySelectorAll('.bw-marquee').forEach(function (el) { if (io) io.observe(el); });
  }

  /* ---------- Header: ping dot before the BLACK WEEK menu item ---------- */
  function initNavPing() {
    var links = document.querySelectorAll('header a, .header a, navigation-drawer a, .navigation-drawer a, x-header a');
    links.forEach(function (a) {
      if (a.querySelector('.bw-ping')) return;
      var txt = (a.textContent || '').trim().toUpperCase();
      if (txt === 'BLACK WEEK') {
        var dot = document.createElement('span');
        dot.className = 'bw-ping bw-nav-ping';
        dot.setAttribute('aria-hidden', 'true');
        a.insertBefore(dot, a.firstChild);
        a.style.fontWeight = '900';
        a.style.letterSpacing = '.04em';
      }
    });
  }

  /* ---------- Offer progress bar ---------- */
  function initProgress() {
    var bars = document.querySelectorAll('[data-bw-progress]');
    if (!bars.length) return;
    fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart.js', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        bars.forEach(function (bar) {
          var ids = (bar.getAttribute('data-ids') || '').split(',').filter(Boolean);
          var n = parseInt(bar.getAttribute('data-n'), 10) || 3;
          var count = 0;
          cart.items.forEach(function (it) { if (ids.indexOf(String(it.product_id)) > -1) count += it.quantity; });
          var inSet = count % n === 0 && count > 0 ? n : count % n;
          var sets = Math.floor(count / n);
          bar.querySelectorAll('[data-step]').forEach(function (st) {
            var i = parseInt(st.getAttribute('data-step'), 10);
            st.classList.toggle('is-done', i <= inSet);
          });
          var a = bar.querySelector('[data-bw-progress-a]'), b = bar.querySelector('[data-bw-progress-b]');
          var left = n - inSet;
          if (a) a.textContent = 'Du har valgt ' + inSet + ' af ' + n + ' produkter';
          if (b) {
            if (count > 0 && inSet === n) b.textContent = bar.getAttribute('data-done') || 'Rabatten er trukket i kurven';
            else b.textContent = (bar.getAttribute('data-todo') || 'Vælg [n] mere').replace('[n]', left);
          }
          bar.toggleAttribute('data-has-sets', sets > 0);
        });
      }).catch(function () {});
  }

  function initAll(root) {
    initCountdowns(root);
    initMarquees(root);
    initNavPing();
    initProgress();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { initAll(); });
  else initAll();

  ['cart:change', 'cart:refresh', 'variant:add'].forEach(function (ev) { document.addEventListener(ev, function () { setTimeout(initProgress, 300); }); });

  /* ---------- Cart drawer: stepped progress bar [data-bw-cart-progress] ----------
     Impact re-renders the drawer from the bundled section HTML but waits 1.25 s before it swaps the line items after a
     quantity change. Swap the progress bar at once and animate the fill from its old width. */
  document.addEventListener('cart:change', function (e) {
    var sections = e.detail && e.detail.cart && e.detail.cart.sections;
    var cur = document.querySelector('cart-drawer [data-bw-cart-progress]');
    if (!sections || !cur) return;
    Object.keys(sections).forEach(function (k) {
      var html = sections[k];
      if (!html || html.indexOf('data-bw-cart-progress') < 0) return;
      var fresh = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-bw-cart-progress]');
      if (!fresh) return;
      var oldFill = cur.querySelector('[data-bw-fill]'), newFill = fresh.querySelector('[data-bw-fill]');
      var to = newFill ? newFill.style.width : '';
      if (oldFill && newFill) newFill.style.width = oldFill.style.width;
      cur.replaceWith(fresh);
      cur = fresh;
      if (newFill) requestAnimationFrame(function () { requestAnimationFrame(function () { newFill.style.width = to; }); });
    });
  });
  document.addEventListener('shopify:section:load', function (e) { initAll(e.target); });
})();
