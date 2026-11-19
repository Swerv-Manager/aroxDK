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
          if (a) a.textContent = 'Du hast ' + inSet + ' von ' + n + ' Produkten gewählt';
          if (b) {
            if (count > 0 && inSet === n) b.textContent = bar.getAttribute('data-done') || 'Der Rabatt ist im Warenkorb abgezogen';
            else b.textContent = (bar.getAttribute('data-todo') || 'Noch [n] wählen').replace('[n]', left);
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

  /* ---------- Product page (board 08): "Beskrivelse" open on load, as in the design ---------- */
  // Black Week on/off (snippet bw-head): the product page extras, the gifts and the BW cart only run when it is on
  function bwOn() { return document.documentElement.classList.contains('bw-on'); }
  function openDescription() {
    if (!bwOn()) return;
    document.querySelectorAll('.shopify-section--main-product [data-block-type="description"] details').forEach(function (d) {
      if (!d.__bwOpened) { d.__bwOpened = true; d.open = true; d.setAttribute('aria-expanded', 'true'); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', openDescription); else openDescription();

  /* Size guide apps (Kiwi "Størrelsesguide") insert their link next to the add-to-cart button after load, which
     pushed "Læg i kurv" off the quantity row. Move such elements into a slot right under the size picker, also when
     they are inserted again after a variant change. */
  function initPdpExtras() {
    if (!bwOn()) return;
    var info = document.querySelector('.shopify-section--main-product .product-info');
    if (!info || info.__bwExtras) return;
    info.__bwExtras = true;
    var native = /^(FORM|BUY-BUTTONS|INPUT|SCRIPT|STYLE|TEMPLATE|NOSCRIPT|LABEL|QUANTITY-SELECTOR|BUTTON)$/;
    function slot() {
      var s = info.querySelector(':scope > .bw-pdp-extra');
      if (!s) {
        s = document.createElement('div');
        s.className = 'bw-pdp-extra';
        var vp = info.querySelector(':scope > [data-block-type="variant-picker"]');
        if (vp) vp.after(s); else info.prepend(s);
      }
      return s;
    }
    function isForeign(el) {
      var id = (el.id || '') + ' ' + (typeof el.className === 'string' ? el.className : '');
      return /kiwi|(^|\s)ks-|size-?chart|sizing/i.test(id) || (/størrelsesguide|größentabelle|groessentabelle|size ?guide/i.test(el.textContent || '') && !el.querySelector('form, buy-buttons'));
    }
    function sweep() {
      var hosts = info.querySelectorAll(':scope > [data-block-type="buy-buttons"], :scope > [data-block-type="quantity-selector"]');
      hosts.forEach(function (host) {
        host.querySelectorAll('*').forEach(function (el) {
          if (native.test(el.tagName) || !el.isConnected || !host.contains(el)) return;
          if (el.closest('form buy-buttons, .shopify-payment-button, quantity-selector')) return;
          if (isForeign(el)) slot().appendChild(el);
        });
      });
      Array.prototype.forEach.call(info.children, function (el) {
        if (el.hasAttribute('data-block-type') || el.classList.contains('bw-pdp-extra') || el.classList.contains('product-info__block-group')) return;
        if (isForeign(el)) slot().appendChild(el);
      });
    }
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; sweep(); });
    }).observe(info, { childList: true, subtree: true });
    sweep();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPdpExtras); else initPdpExtras();

  /* ---------- Collection filter + sort bar [data-bw-filters] (snippet bw-coll-toolbar) ----------
     A plain GET form: a ticked value or a new sort order submits it at once; price fields submit with "Vis varer".
     Empty fields are left out of the URL. Only one dropdown is open at a time; a click outside closes it. */
  document.addEventListener('change', function (e) {
    var f = e.target.closest && e.target.closest('form[data-bw-filters]');
    if (!f || e.target.type === 'number') return;
    if (f.requestSubmit) f.requestSubmit(); else f.submit();
  });
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.matches || !f.matches('form[data-bw-filters]')) return;
    f.querySelectorAll('input').forEach(function (i) { if ((i.type === 'number' || i.type === 'hidden') && i.value === '') i.disabled = true; });
  });
  document.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d.matches || !d.matches('.bw-fp') || !d.open) return;
    document.querySelectorAll('.bw-fp[open]').forEach(function (o) { if (o !== d) o.open = false; });
  }, true);
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.bw-fp')) return;
    document.querySelectorAll('.bw-fp[open]').forEach(function (o) { o.open = false; });
  });

  /* ---------- Cart helpers (Arox DE, Dawn 6.0.2) ----------
     Dawn re-renders its cart drawer from the 'cart-drawer' and 'cart-icon-bubble' sections. Dawn 6 sends no cart
     events, so its own cart calls (/cart/add, /cart/change, /cart/update, /cart/clear) are watched through fetch and
     announced as cart:change (baseEvent 'dawn'); the gift sync and the offer progress bar listen to that event.
     Our own calls use the original fetch, so they are not announced twice. */
  var ROOT = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  var nativeFetch = window.fetch.bind(window);
  function isCartPage() { return /\/cart\/?$/.test(location.pathname); }
  function dawnSections() { return ['cart-drawer', 'cart-icon-bubble']; }
  function renderDawn(sections, open, count) {
    if (!sections) return;
    var drawer = document.querySelector('cart-drawer');
    if (drawer && sections['cart-drawer']) {
      if (open && typeof drawer.renderContents === 'function') {
        drawer.renderContents({ sections: sections });
      } else {
        var fresh = new DOMParser().parseFromString(sections['cart-drawer'], 'text/html').querySelector('#CartDrawer');
        var cur = document.getElementById('CartDrawer');
        if (fresh && cur) cur.innerHTML = fresh.innerHTML;
        var ov = drawer.querySelector('#CartDrawer-Overlay');
        if (ov) ov.addEventListener('click', drawer.close.bind(drawer));
      }
      if (typeof count === 'number') drawer.classList.toggle('is-empty', count === 0);
    }
    var bubble = document.getElementById('cart-icon-bubble');
    if (bubble && sections['cart-icon-bubble']) {
      var b = new DOMParser().parseFromString(sections['cart-icon-bubble'], 'text/html').querySelector('.shopify-section');
      if (b) bubble.innerHTML = b.innerHTML;
    }
  }
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    var p = nativeFetch(input, init);
    if (/\/cart\/(add|change|update|clear)(\.js)?(\?|$)/.test(url)) {
      p.then(function (r) {
        if (r.ok) setTimeout(function () {
          document.documentElement.dispatchEvent(new CustomEvent('cart:change', { bubbles: true, detail: { baseEvent: 'dawn' } }));
        }, 350);
      }).catch(function () {});
    }
    return p;
  };
  function cartAdd(items, opts) {
    opts = opts || {};
    return nativeFetch(ROOT + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: JSON.stringify({ items: items, sections: dawnSections(), sections_url: location.pathname }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; return j; }); })
      .then(function (added) {
        return nativeFetch(ROOT + 'cart.js').then(function (r) { return r.json(); }).then(function (cart) {
          if (opts.silent && isCartPage()) { location.reload(); return cart; }
          renderDawn(added.sections, !opts.silent, cart.item_count);
          var base = opts.baseEvent || 'variant:add';
          document.documentElement.dispatchEvent(new CustomEvent('cart:change', { bubbles: true, detail: { baseEvent: base, cart: cart } }));
          return cart;
        });
      });
  }
  function cartChange(key, quantity) {
    return nativeFetch(ROOT + 'cart/change.js', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: JSON.stringify({ id: key, quantity: quantity, sections: dawnSections(), sections_url: location.pathname }) })
      .then(function (r) { if (!r.ok) throw new Error('cart/change ' + r.status); return r.json(); })
      .then(function (cart) {
        if (isCartPage()) { location.reload(); return cart; }
        renderDawn(cart.sections, false, cart.item_count);
        document.documentElement.dispatchEvent(new CustomEvent('cart:change', { bubbles: true, detail: { baseEvent: 'bw-gift', cart: cart } }));
        return cart;
      });
  }

  /* ---------- Dawn header: a BLACK WEEK link first in the menu (desktop and drawer), only when Black Week is on ---------- */
  function addNavLinks() {
    if (!bwOn() || document.querySelector('[data-bw-nav]')) return;
    var url = '/pages/black-week';
    var inline = document.querySelector('.header__inline-menu .list-menu');
    if (inline) {
      var li = document.createElement('li');
      li.setAttribute('data-bw-nav', '');
      li.innerHTML = '<a href="' + url + '" class="header__menu-item list-menu__item link link--text focus-inset"><span>BLACK WEEK</span></a>';
      inline.insertBefore(li, inline.firstChild);
    }
    var drawerMenu = document.querySelector('.menu-drawer__menu');
    if (drawerMenu) {
      var li2 = document.createElement('li');
      li2.setAttribute('data-bw-nav', '');
      li2.innerHTML = '<a href="' + url + '" class="menu-drawer__menu-item list-menu__item link link--text focus-inset">BLACK WEEK</a>';
      drawerMenu.insertBefore(li2, drawerMenu.firstChild);
    }
    initNavPing();
  }
  /* ---------- Product page: the Black Week offer box (snippet bw-dawn-pdp) sits under the price ---------- */
  function placePdpBox() {
    var box = document.querySelector('[data-bw-pdp]');
    if (!box) return;
    var price = document.querySelector('.product__info-container [id^="price-"]');
    if (price && price.parentNode) price.parentNode.insertBefore(box, price.nextSibling);
    box.hidden = false;
  }
  function dawnInit() { addNavLinks(); placePdpBox(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dawnInit); else dawnInit();

  /* ---------- Quick add on Black Week product cards <bw-quick-add> (snippet bw-product-card) ----------
     One variant: added at once. Several: a picker opens on the card; a choice adds that variant. The cart drawer opens. */
  if (window.customElements && !customElements.get('bw-quick-add')) {
    customElements.define('bw-quick-add', class extends HTMLElement {
      connectedCallback() {
        if (this.__ready) return;
        this.__ready = true;
        var self = this;
        this.btn = this.querySelector('.bw-qa__btn');
        this.panel = this.querySelector('.bw-qa__panel');
        this.btn.addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation();
          if (self.dataset.single === 'true' || !self.panel) self.add(self.dataset.variant, self.btn); else self.open(true);
        });
        if (this.panel) this.panel.addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation();
          if (e.target.closest('.bw-qa__close')) return self.open(false);
          var o = e.target.closest('.bw-qa__opt');
          if (o && !o.disabled) self.add(o.getAttribute('data-id'), o);
        });
      }
      open(on) {
        if (!this.panel) return;
        this.panel.hidden = !on;
        this.classList.toggle('is-open', on);
        this.btn.setAttribute('aria-expanded', on ? 'true' : 'false');
        var m = this.querySelector('.bw-qa__msg'); if (m) m.textContent = '';
      }
      add(id, el) {
        var self = this;
        if (el.getAttribute('aria-busy') === 'true') return;
        el.setAttribute('aria-busy', 'true');
        cartAdd([{ id: parseInt(id, 10), quantity: 1 }]).then(function () {
          self.open(false);
          self.classList.add('is-added');
          setTimeout(function () { self.classList.remove('is-added'); }, 1800);
        }).catch(function (err) {
          var txt = (err && (err.description || err.message)) || 'Das Produkt konnte nicht in den Warenkorb gelegt werden.';
          var m = self.querySelector('.bw-qa__msg');
          if (m) m.textContent = txt; else window.alert(txt);
        }).finally(function () { el.removeAttribute('aria-busy'); });
      }
    });
  }

  /* ---------- Free gifts in the cart (config [data-bw-gifts] from sections/cart-drawer.liquid) ----------
     The gifts are separate 0 kr. products (tag bw-gave: "AROX Hydration Bottle 1000 ml (gave)", "Strømper 3-pak
     (gave)"), so they need no discount and combine with 3 for 2 / 4 for 2. When the cart without gift lines reaches a
     tier, the gift is added as its own line (property _bw_gift); below the tier it is removed again, also if it was put
     in the cart by hand. A gift with one variant is added automatically; one with sizes is picked in the drawer
     (snippet bw-cart-progress). Safety net: a gift line that is not free is taken out again. */
  function ss(k, v) {
    try {
      if (v === undefined) return sessionStorage.getItem(k);
      if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v);
    } catch (e) { return null; }
  }
  function giftCfg() {
    var el = document.querySelector('[data-bw-gifts]');
    if (!el) return null;
    try { return JSON.parse(el.textContent); } catch (e) { return null; }
  }
  function giftClasses(cfg) {
    (cfg.tiers || []).forEach(function (t) {
      var off = ss('bw_gift_off_' + t.key), removed = ss('bw_gift_removed_' + t.key);
      if (off && Date.now() - parseInt(off, 10) > 10 * 60 * 1000) { ss('bw_gift_off_' + t.key, null); off = null; }
      document.documentElement.classList.toggle('bw-gift-off-' + t.key, !!off);
      document.documentElement.classList.toggle('bw-gift-removed-' + t.key, !!removed);
    });
  }
  var giftBusy = false;
  function syncGifts(cart, depth) {
    var cfg = giftCfg();
    depth = depth || 0;
    if (!cfg || !cfg.on || giftBusy || depth > 4 || !bwOn()) return;
    if (cfg.phases && cfg.phases.length && cfg.phases.indexOf(phase) === -1) return;
    giftClasses(cfg);
    var getCart = cart && cart.items ? Promise.resolve(cart) : fetch(ROOT + 'cart.js').then(function (r) { return r.json(); });
    getCart.then(function (cart) {
      var tiers = cfg.tiers || [];
      var giftIds = tiers.map(function (t) { return t.product; });
      var isGiftLine = function (it) { return (it.properties && it.properties._bw_gift) || giftIds.indexOf(it.product_id) > -1; };
      var base = 0;
      cart.items.forEach(function (it) { if (!isGiftLine(it)) base += it.final_line_price; });
      var job = null;
      tiers.some(function (t) {
        var lines = cart.items.filter(function (it) { return (it.properties && it.properties._bw_gift === t.key) || it.product_id === t.product; });
        var reached = base >= t.min;
        if (!reached) {
          ss('bw_gift_added_' + t.key, null); ss('bw_gift_removed_' + t.key, null);
          if (lines.length) { job = function () { return cartChange(lines[0].key, 0); }; return true; }
          return false;
        }
        if (lines.length) {
          var ln = lines[0];
          if (lines.length > 1 || ln.quantity > 1) { job = function () { return cartChange(lines[lines.length - 1].key, lines.length > 1 ? 0 : 1); }; return true; }
          ss('bw_gift_added_' + t.key, '1'); ss('bw_gift_removed_' + t.key, null);
          // free? the gift line itself, or the same product discounted on another line by at least one unit
          var saved = 0;
          cart.items.forEach(function (it) { if (it.product_id === ln.product_id) saved += it.original_line_price - it.final_line_price; });
          if (ln.final_line_price > 0 && saved < ln.original_price) {
            ss('bw_gift_off_' + t.key, String(Date.now())); ss('bw_gift_added_' + t.key, null);
            job = function () { return cartChange(ln.key, 0); }; return true;
          }
          return false;
        }
        if (ss('bw_gift_added_' + t.key)) { ss('bw_gift_added_' + t.key, null); ss('bw_gift_removed_' + t.key, '1'); return false; }
        if (t.auto && t.variant && !ss('bw_gift_off_' + t.key) && !ss('bw_gift_removed_' + t.key)) {
          job = function () { ss('bw_gift_added_' + t.key, '1'); return cartAdd([{ id: t.variant, quantity: 1, properties: { _bw_gift: t.key } }], { silent: true, baseEvent: 'bw-gift' }); };
          return true;
        }
        return false;
      });
      giftClasses(cfg);
      if (!job) return;
      giftBusy = true;
      // A failed call (e.g. Shopify's 429 under load) is retried from a fresh cart after 2 s, at most a few times.
      job().then(function (c) { giftBusy = false; syncGifts(c && c.items ? c : null, depth + 1); }, function () {
        giftBusy = false;
        if (depth < 3) setTimeout(function () { syncGifts(null, depth + 1); }, 2000);
      });
    }).catch(function () {});
  }
  document.addEventListener('cart:change', function (e) {
    if (e.detail && e.detail.baseEvent === 'bw-gift') return;
    syncGifts(e.detail && e.detail.cart);
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-bw-gift-add]');
    if (!b) return;
    e.preventDefault();
    var box = b.closest('[data-bw-gift-pick]'), key = box.getAttribute('data-key');
    var sel = box.querySelector('select'), id = parseInt(sel ? sel.value : b.getAttribute('data-variant'), 10);
    if (!id || b.getAttribute('aria-busy') === 'true') return;
    b.setAttribute('aria-busy', 'true');
    ss('bw_gift_removed_' + key, null);
    cartAdd([{ id: id, quantity: 1, properties: { _bw_gift: key } }], { silent: true }).catch(function () {}).finally(function () { b.removeAttribute('aria-busy'); });
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { syncGifts(); }); else syncGifts();
  /* ---------- Product row carousel arrows (bw-product-row "carousel") ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-bw-car-prev], [data-bw-car-next]');
    if (!b) return;
    var root = b.closest('.shopify-section') || document, car = root.querySelector('[data-bw-car]');
    if (!car) return;
    car.scrollBy({ left: (b.hasAttribute('data-bw-car-prev') ? -1 : 1) * car.clientWidth * 0.9, behavior: 'smooth' });
  });

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
