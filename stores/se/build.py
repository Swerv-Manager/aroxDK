#!/usr/bin/env python3
"""Black Week 2026 · build the Arox SE theme files from the shared (DK) code.

    python3 stores/se/build.py        → writes stores/se/theme/** and reports anything that still looks Danish

The repo root holds the shared Black Week code and the DK templates. SE differs in language, currency and data:
  - code files (bw-* sections/snippets, bw.js/css, cart drawer, badges, gallery): sv_code.py replacements + SEK prices
  - templates and section groups: DK structure, Swedish values from sv_text.py, SE products/URLs
  - SE-only bases in stores/se/base (layout, product template, settings data) get the same Black Week changes as DK
Nothing at the repo root is changed, so the DK theme is not affected.
"""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
OUT = os.path.join(HERE, 'theme')
sys.path.insert(0, HERE)
import sv_code, sv_text  # noqa: E402

NBSP = ' '
MONEY = [
    # DK "499 kr." → SE "1 199 kr" (SEK money format is {{amount_no_decimals}}, so a comma is a thousands separator)
    ("| money_without_currency | remove: ',00' | append: ' kr.'", "| money_without_currency | replace: ',', '" + NBSP + "' | append: ' kr'"),
    ("money_without_currency | remove: ',00'", "money_without_currency | remove: ','"),
]
DANISH = re.compile(r"[æøÆØ]|\b(og|kurv|kurven|Vælg|Luk|Læg|Tilføj|gave|gaver|Gave|Gaver|kode|billigste|Forside|Næste|Forrige|Ryd|varer|Udsolgt|Fortsæt|Tilmeld|tilbud|tilmeldte|fragt|levering|Levering|ordrer|kun|Kun|købt|køb|stålflaske|strømper|Tak)\b")
problems = []


def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()


def write(rel, text):
    p = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(text)


def load_json(p):
    s = read(p)
    return json.loads(s[s.index('{'):])


def dump_json(rel, d):
    write(rel, json.dumps(d, ensure_ascii=False, indent=2) + '\n')


def schema(section_type):
    s = read(os.path.join(ROOT, 'sections', section_type + '.liquid'))
    m = re.search(r'{%-?\s*schema\s*-?%}(.*?){%-?\s*endschema\s*-?%}', s, re.S)
    return json.loads(m.group(1)) if m else {}


def strip_liquid_comments(s):
    s = re.sub(r'{%-?\s*schema\s*-?%}.*?{%-?\s*endschema\s*-?%}', '', s, flags=re.S)
    s = re.sub(r'{%-?\s*comment\s*-?%}.*?{%-?\s*endcomment\s*-?%}', '', s, flags=re.S)
    s = re.sub(r'(?s)\bcomment\b.*?\bendcomment\b', '', s)
    s = re.sub(r'(?s)/\*.*?\*/', '', s)
    s = re.sub(r'(?m)^\s*//.*$', '', s)
    return s


# ---------------------------------------------------------------------------------------------------- code files
CODE = sorted(glob.glob(os.path.join(ROOT, 'sections', 'bw-*.liquid')) + glob.glob(os.path.join(ROOT, 'snippets', 'bw-*.liquid'))) + [
    os.path.join(ROOT, p) for p in ('assets/bw.js', 'assets/bw.css', 'sections/cart-drawer.liquid',
                                    'snippets/product-badges.liquid', 'snippets/product-gallery.liquid')]
for path in CODE:
    rel = os.path.relpath(path, ROOT)
    s = read(path)
    for old, new in sv_code.ALL + sv_code.FILES.get(rel, []):
        if old not in s:
            if (old, new) not in sv_code.ALL:
                problems.append(f'{rel}: replacement not found: {old[:70]!r}')
            continue
        s = s.replace(old, new)
    for old, new in MONEY:
        s = s.replace(old, new)
    for old, new in sv_text.URLS:
        s = s.replace(old, new)
    for i, line in enumerate(strip_liquid_comments(s).split('\n'), 1):
        if DANISH.search(line) and not re.search(r"id=\"(gaver|gaver-under|tilbud)\"|bw-gave|_bw_gift|størrelsesguide|lysegrå|navy blå|'hvid'|'lilla'|'gul'|'grå'|bw-ingen-gave|\[beløb\]", line):
            problems.append(f'{rel}: still Danish? {line.strip()[:120]}')
    write(rel, s)

# SE live has a Klaviyo "Added to Cart" script at the end of its cart drawer (DK's does not): keep it, exactly as live
SE_KLAVIYO = """  <script>
  document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("cart:updated", function(event) {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          if (cart.items.length > 0) {
            let lastItem = cart.items[cart.items.length - 1]; // Senest tilføjede produkt
            
            _learnq.push(['track', 'Added to Cart', {
              ProductName: lastItem.product_title,
              ProductID: lastItem.id,
              Price: (lastItem.final_line_price / 100).toFixed(2), // Konvertering fra cents til DKK
              Quantity: lastItem.quantity,
              URL: window.location.origin + lastItem.url,
              ImageURL: lastItem.featured_image.url
            }]);

            console.log("Klaviyo Added to Cart event sendt:", lastItem);
          }
        })
        .catch(error => console.error("Fejl ved hentning af cart data:", error));
    });
  });
</script>

"""
_cd = os.path.join(OUT, 'sections', 'cart-drawer.liquid')
_s = read(_cd)
assert _s.count('</cart-drawer>') == 1 and '_learnq' not in _s
write('sections/cart-drawer.liquid', _s.replace('</cart-drawer>', SE_KLAVIYO + '</cart-drawer>'))

# ---------------------------------------------------------------------------------------------------- layout
lay = read(os.path.join(HERE, 'base', 'layout', 'theme.liquid'))
head_old = "    {{- 'theme.css' | asset_url | stylesheet_tag: preload: true -}}\n  </head>"
head_new = "    {{- 'theme.css' | asset_url | stylesheet_tag: preload: true -}}\n      {%- comment -%}BLACK WEEK 2026{%- endcomment -%}\n    {%- render 'bw-head' -%}\n  </head>"
main_old = '    <main role="main" id="main" class="anchor">\n      {{ content_for_layout }}'
main_new = ('    <main role="main" id="main" class="anchor">\n'
            "      {%- comment -%}BLACK WEEK 2026 · board 07d: Black Week layout on ordinary collections (only in its phases/templates){%- endcomment -%}\n"
            "      {%- if request.page_type == 'collection' -%}\n        {%- section 'bw-collection-live' -%}\n      {%- endif -%}\n"
            "      {%- comment -%}BLACK WEEK 2026 · the Black Week homepage (section group, shown when html.bw-on){%- endcomment -%}\n"
            "      {%- if template.name == 'index' -%}\n        {%- sections 'bw-home-group' -%}\n      {%- endif -%}\n"
            '      {{ content_for_layout }}')
assert lay.count(head_old) == 1 and lay.count(main_old) == 1, 'SE layout changed, check the anchors'
write('layout/theme.liquid', lay.replace(head_old, head_new).replace(main_old, main_new))


# ---------------------------------------------------------------------------------------------------- templates
def tr_value(key, v, where):
    if isinstance(v, list):
        if key in ('products',):
            out = []
            for h in v:
                for n in sv_text.PRODUCTS.get(h, [h]):
                    if n not in out:
                        out.append(n)
            return out
        return [tr_value(key, x, where) for x in v]
    if not isinstance(v, str):
        return v
    if key in ('product',) and v in sv_text.PRODUCTS:
        return sv_text.PRODUCTS[v][0]
    if v in sv_text.TEXT:
        v = sv_text.TEXT[v]
    for old, new in sv_text.URLS:
        v = v.replace(old, new)
    if DANISH.search(re.sub(r'<[^>]+>|\[beløb\]', ' ', v)) and not v.startswith(('shopify://', '{%', '<div', '<ul', '<svg')):
        problems.append(f'{where}.{key}: untranslated? {v[:110]!r}')
    return v


def fill_defaults(sec, sc):
    """Write the schema defaults (Danish) into the template so they get translated too."""
    TXT = ('text', 'textarea', 'richtext', 'inline_richtext', 'html')
    st = sec.setdefault('settings', {})
    for s in sc.get('settings', []):
        if s.get('type') in TXT and 'id' in s and s['id'] not in st and s.get('default') not in (None, ''):
            st[s['id']] = s['default']
    for bid, bl in sec.get('blocks', {}).items():
        bs = [b for b in sc.get('blocks', []) if b.get('type') == bl.get('type')]
        if not bs:
            continue
        bst = bl.setdefault('settings', {})
        for s in bs[0].get('settings', []):
            if s.get('type') in TXT and 'id' in s and s['id'] not in bst and s.get('default') not in (None, ''):
                bst[s['id']] = s['default']


def translate_section(tpl, sid, sec):
    for k, v in list(sec.get('settings', {}).items()):
        sec['settings'][k] = tr_value(k, v, f'{tpl}:{sid}')
        if (tpl, sid, None, k) in sv_text.OVERRIDES:
            sec['settings'][k] = sv_text.OVERRIDES[(tpl, sid, None, k)]
    for bid, bl in sec.get('blocks', {}).items():
        for k, v in list(bl.get('settings', {}).items()):
            bl['settings'][k] = tr_value(k, v, f'{tpl}:{sid}/{bid}')
            if (tpl, sid, bid, k) in sv_text.OVERRIDES:
                bl['settings'][k] = sv_text.OVERRIDES[(tpl, sid, bid, k)]
    for (t, s, b, k), v in sv_text.OVERRIDES.items():
        if t == tpl and s == sid and b is None and k not in sec.get('settings', {}):
            sec.setdefault('settings', {})[k] = v


def bw_only(d, tpl, keep=()):
    """Keep the Black Week sections (and `keep` types) of a DK template, translated."""
    out = {'sections': {}, 'order': []}
    for sid in d['order']:
        sec = json.loads(json.dumps(d['sections'][sid]))
        # sub-collection tabs (DK 4 for 2, 19.11) point to DK-only collections: left out here for now
        sec.get('settings', {}).pop('more_collections', None)
        for bid in [b for b, bl in sec.get('blocks', {}).items() if bl.get('type') == 'sub']:
            sec['blocks'].pop(bid)
            sec['block_order'].remove(bid)
        if not (sec['type'].startswith('bw-') or sec['type'] in keep):
            continue
        if sec.get('disabled') and not sec['type'].startswith('bw-'):
            continue
        if sec['type'].startswith('bw-'):
            fill_defaults(sec, schema(sec['type']))
        translate_section(tpl, sid, sec)
        out['sections'][sid] = sec
        out['order'].append(sid)
    for k in ('layout', 'wrapper'):
        if k in d:
            out[k] = d[k]
    return out


TEMPLATES = ['page.black-week.json', 'page.limited-blackout.json', 'page.3-for-2.json', 'page.4-for-2.json',
             'page.black-week-gaver.json', 'page.black-week-vilkaar.json', 'collection.black-week-3for2.json',
             'collection.black-week-4for2.json', 'collection.black-week-limited-edition.json']
for tpl in TEMPLATES:
    d = load_json(os.path.join(ROOT, 'templates', tpl))
    if tpl == 'collection.black-week-4for2.json':
        # DK's 4 for 2 shows category sliders (DK-only sub-collections, 19.11): keep the grid page here for now
        for sid in [k for k in d['order'] if k.startswith('bw_row_')]:
            d['order'].remove(sid); d['sections'].pop(sid)
        d['sections']['bw_grid'].pop('disabled', None)
        d['sections']['bw_header']['settings']['show_toolbar'] = True
    dump_json('templates/' + tpl, bw_only(d, tpl, keep=('main-page', 'apps')))

# homepage: SE's live homepage stays templates/index.json (normal shop); the Black Week homepage is a section group
base_index = os.path.join(HERE, 'base', 'templates', 'index.json')
if os.path.exists(base_index):
    write('templates/index.json', read(base_index))
else:
    problems.append('stores/se/base/templates/index.json missing (fetch SE live index.json)')
d = load_json(os.path.join(ROOT, 'sections', 'bw-home-group.json'))
o = bw_only(d, 'index.json')
dump_json('sections/bw-home-group.json', {'type': d['type'], 'name': d['name'], 'sections': o['sections'], 'order': o['order']})

# section groups: SE's own (live) header/footer sections + the Black Week sections, in DK's order
KEYMAP = {'cs_announcement_bar_RX8nib': 'cs_announcement_bar_jEXaEY'}
for grp in ('header-group.json', 'footer-group.json'):
    dk_g = load_json(os.path.join(ROOT, 'sections', grp))
    se_g = load_json(os.path.join(HERE, 'base', 'sections', grp))
    bw = bw_only(dk_g, grp)
    out = {'type': se_g['type'], 'name': se_g['name'], 'sections': {}, 'order': []}
    for k in dk_g['order']:
        if k in bw['sections']:
            out['sections'][k] = bw['sections'][k]; out['order'].append(k)
        else:
            sk = KEYMAP.get(k, k)
            if sk in se_g['sections']:
                out['sections'][sk] = se_g['sections'][sk]; out['order'].append(sk)
    for sk in se_g['order']:
        if sk not in out['sections']:
            out['sections'][sk] = se_g['sections'][sk]; out['order'].append(sk)
    dump_json('sections/' + grp, out)

# overlay group: SE's own sections + the Black Week cart drawer settings
ov = {
    "type": "custom.overlay", "name": "Overlay group",
    "sections": {
        "newsletter-popup": {"type": "newsletter-popup", "disabled": True, "settings": {"apparition_delay": 5, "show_only_on_index": True, "show_only_for_visitors": True, "show_only_once": True, "title": "Prenumerera på vårt nyhetsbrev", "button_text": "Prenumerera", "subtext": "Describe what your customers will receive when subscribing to your newsletter."}},
        "privacy-banner": {"type": "privacy-banner", "disabled": True, "settings": {"privacy_bar_title": "Cookiepolicy", "privacy_bar_content": "<p>Vi använder cookies och liknande tekniker för att ge dig den bästa upplevelsen på vår webbplats. Läs mer i vår integritetspolicy.</p>"}},
        "cart-drawer": {"type": "cart-drawer", "settings": {"show_cart_note": False, "show_shipping_text": False, "show_view_cart_button": False, "show_checkout_button": True, "recommendations_title": "Populärt just nu", "products": [], "product_card_background": "#ffffff", "product_card_text_color": "", "bw_offer_recommendations": True}},
        "search-drawer": {"type": "search-drawer", "settings": {"full_width": False, "show_article_category": True, "search_menu": "", "search_menu_show_title": True}},
    },
    "order": ["newsletter-popup", "privacy-banner", "cart-drawer", "search-drawer"],
}
cd = ov['sections']['cart-drawer']
fill_defaults(cd, schema('cart-drawer'))
cd['settings']['recommendations_title'] = 'Populärt just nu'
translate_section('overlay-group.json', 'cart-drawer', cd)
dump_json('sections/overlay-group.json', ov)

# product template: SE's live template (normal shop) + the Black Week blocks and sections (shown when html.bw-on)
dk = load_json(os.path.join(ROOT, 'templates', 'product.json'))
pr = load_json(os.path.join(HERE, 'base', 'templates', 'product.json'))
dkb = dk['sections']['main']['blocks']
m = pr['sections']['main']
for bid in ('bw_price', 'liquid_bw_mechanic', 'bw_trust', 'bw_favs', 'liquid_bw_gpsr'):
    m['blocks'][bid] = json.loads(json.dumps(dkb[bid]))
m['blocks']['bw_usp'] = {"type": "liquid", "settings": {"liquid": "<ul class=\"bw-pdp-usp\"><li>Leverans inom 2–4 dagar med GLS</li><li>Över 50 000 nöjda kunder</li><li>Utvecklat i Danmark och testat av våra atleter</li></ul>"}}
m['blocks']['bw_ship'] = json.loads(json.dumps(dkb['bw_ship']))
m['blocks']['bw_ship']['settings']['liquid'] = m['blocks']['bw_ship']['settings']['liquid'].replace(
    'Levering: Gratis for ordrer over 499 kr. med GLS pakkeshop. For ordrer under 499 kr. fås levering fra 35 kr.',
    'Leverans: Fri frakt vid beställningar över 899 kr med GLS ParcelShop. Under 899 kr tillkommer frakt från 75 kr.')
after = {'price': ['bw_price', 'bw_usp'], 'buy_buttons': ['liquid_bw_mechanic', 'bw_trust', 'bw_ship'], 'collapsible_text_XW6A4G': ['bw_favs', 'liquid_bw_gpsr']}
order = []
for b in m['block_order']:
    order.append(b)
    order += after.get(b, [])
m['block_order'] = order
assert set(m['block_order']) == set(m['blocks']), 'product blocks out of sync'
pr['sections']['bw_crumb'] = {"type": "bw-pdp-crumb", "settings": {"phases": "", "bw_url": "/pages/black-week"}}
pr['sections']['bw_related'] = {"type": "bw-related", "settings": {"phases": "", "heading": "Relaterade produkter", "limit": 4}}
o = pr['order']
o.insert(o.index('main'), 'bw_crumb')
o.insert(o.index('main') + 1, 'bw_related')
for sid in ('bw_row_3for2', 'bw_row_4for2'):  # 3 for 2 / 4 for 2 carousels at the bottom (19.11)
    sec = json.loads(json.dumps(dk['sections'][sid]))
    translate_section('product.json', sid, sec)
    pr['sections'][sid] = sec
    o.append(sid)
dump_json('templates/product.json', pr)

# settings data: SE's own, with the na-side-cart app embed off (as in DK) and the static collection section in Swedish
sd = load_json(os.path.join(HERE, 'base', 'config', 'settings_data.json'))
sd['current']['blocks']['7698122941617543805']['disabled'] = True
sd['current'].setdefault('sections', {})['bw-collection-live'] = {"type": "bw-collection-live", "settings": {
    "phases": "early live sidste",
    "templates": "standard traeningsudstyr traeningstoej",
    "show_crumb": True,
    "crumb_map": "traeningsudstyr=Träningsutrustning=/collections/cross-training-gear; traeningstoej=Träningskläder=/collections/training-clothing",
    "badge": "Black Week",
    "nav": "Single offers|Fast Black Week-pris|/collections/black-week-limited-edition; 3 för 2|Den billigaste är gratis|/collections/black-week-3for2; 4 för 2|De 2 billigaste är gratis|/collections/black-week-4for2",
    "lines": "cross-training-grips=Black Week 20/11–30/11: pro grips ingår i 3 för 2.",
    "filter_hide": "Brand, Varumärke",
    "filter_rename": "Produkttyp=Kategori; Produkttype=Kategori",
    "note": "Fri frakt vid köp över 899 kr · annars frakt från 75 kr",
}}
dump_json('config/settings_data.json', sd)

print('\n'.join(problems) if problems else 'no problems')
print('files:', sum(len(f) for _, _, f in os.walk(OUT)))
