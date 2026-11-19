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

