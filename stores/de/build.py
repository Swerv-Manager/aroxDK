#!/usr/bin/env python3
"""Black Week 2026 · build the Arox DE theme files (Dawn 6.0.2) from the shared (DK) code.

    python3 stores/de/build.py        → writes stores/de/theme/** and reports anything that still looks Danish

DE is the lighter version (Frederik 19.11): Dawn keeps its own header, footer, product page and cart drawer. Black Week
adds, with the same normal/Black Week switch as DK (snippet bw-head):
  - pages /pages/black-week, /pages/black-week-geschenk, /pages/black-week-bedingungen and the three offer
    collections (black-week-limited-edition, -3for2, -4for2) in the Black Week design (bw-* sections)
  - the Black Week homepage (section group bw-home-group, a subset of DK's) and the ticker (bw-marquee) when on
  - an offer box on product pages, a BLACK WEEK link first in Dawn's menu (bw.js)
  - Dawn's cart drawer with a gift bar (69,99 € free shipping · 109 € AROX Trinkflasche) and one automatic gift
German strings: de_code.py (code) and de_text.py (template values). Dawn-only files: stores/de/src.
Nothing at the repo root is changed, so the DK and SE themes are not affected.
"""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
OUT = os.path.join(HERE, 'theme')
SRC = os.path.join(HERE, 'src')
sys.path.insert(0, HERE)
import de_code, de_text  # noqa: E402

MONEY = [
    # DK "499 kr." → DE "27,00 €" (the shop's money format is €{{amount_with_comma_separator}})
    ("| money_without_currency | remove: ',00' | append: ' kr.'", "| money_without_currency | append: ' €'"),
]
DANISH = re.compile(r"[æøÆØå]|\b(og|kurv|kurven|Vælg|Luk|Læg|Tilføj|gave|gaver|Gave|Gaver|kode|billigste|Forside|Næste|Forrige|Ryd|varer|Udsolgt|Fortsæt|Tilmeld|tilbud|tilmeldte|fragt|levering|Levering|ordrer|kun|Kun|købt|køb|stålflaske|strømper|Tak|til|Til|af|på|Sådan|Hvornår|Hvordan|Hvad|med|uden|eller|ikke|Se|Shop alle|Vis|dage|timer)\b")
problems = []

# Black Week sections used in DE (pages, collections, homepage group, ticker); snippets follow from their renders
SECTIONS = ['bw-hero', 'bw-countdown-dates', 'bw-band', 'bw-offer-cats', 'bw-feature-products', 'bw-offer-banner',
            'bw-gift-block', 'bw-faq-short', 'bw-landing-hero', 'bw-gift-hero', 'bw-gift-rules', 'bw-gift-card',
            'bw-gift-cart', 'bw-terms-hero', 'bw-terms', 'bw-faq', 'bw-collection-header', 'bw-offer-progress',
            'bw-collection-grid', 'bw-offer-note', 'bw-marquee']


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
def renders(text):
    return set(re.findall(r"render\s+'(bw-[\w-]+)'", text))


files = [os.path.join(ROOT, 'sections', s + '.liquid') for s in SECTIONS]
seen, queue = set(), list(files) + [os.path.join(ROOT, 'snippets', 'bw-head.liquid'), os.path.join(ROOT, 'snippets', 'bw-offer.liquid')]
while queue:
    p = queue.pop()
    if p in seen:
        continue
    seen.add(p)
    for r in renders(read(p)):
        sp = os.path.join(ROOT, 'snippets', r + '.liquid')
        if os.path.exists(sp):
            queue.append(sp)
CODE = sorted(seen) + [os.path.join(ROOT, 'assets', 'bw.js'), os.path.join(ROOT, 'assets', 'bw.css')]

for path in CODE:
    rel = os.path.relpath(path, ROOT)
    s = read(path)
    for old, new in de_code.ALL + de_code.FILES.get(rel, []):
        if old not in s:
            if (old, new) not in de_code.ALL:
                problems.append(f'{rel}: replacement not found: {old[:70]!r}')
            continue
        s = s.replace(old, new)
    for old, new in MONEY:
        s = s.replace(old, new)
    for old, new in de_text.URLS:
        s = s.replace(old, new)
    if rel == 'assets/bw.js':
        a = s.index('  /* ---------- Cart helpers')
        b = s.index('  /* ---------- Quick add on Black Week product cards')
        s = s[:a] + read(os.path.join(SRC, 'bw-dawn-cart.js')) + s[b:]
    if rel == 'assets/bw.css':
        s = s + read(os.path.join(SRC, 'bw-dawn.css'))
    for i, line in enumerate(strip_liquid_comments(s).split('\n'), 1):
        vis = re.sub(r'\{%.*?%\}|\{\{.*?\}\}', ' ', line)
        vis = re.sub(r'<[^>]*>', ' ', vis)
        vis = re.sub(r'(class|id|href|data-[\w-]+)="[^"]*"', ' ', vis)
        if DANISH.search(vis) and not re.search(r"bw-gave|_bw_gift|lysegrå|navy blå|'hvid'|'lilla'|'gul'|'grå'|størrelsesguide|\[beløb\]|^\s*(assign|when|if|elsif|unless|case|for|render|echo)\b", vis):
            problems.append(f'{rel}:{i}: still Danish? {line.strip()[:120]}')
    write(rel, s)

# Dawn-only snippets
for p in glob.glob(os.path.join(SRC, 'snippets', '*.liquid')):
    write('snippets/' + os.path.basename(p), read(p))

# Dawn's cart drawer (stock Dawn 6.0.2 = DE live): gift bar under the heading, gift lines marked
cd = read(os.path.join(HERE, 'base', 'snippets', 'cart-drawer.liquid'))
cd_head = ("        <button class=\"drawer__close\" type=\"button\" onclick=\"this.closest('cart-drawer').close()\" aria-label=\"{{ 'accessibility.close' | t }}\">{% render 'icon-close' %}</button>\n"
           "      </div>\n      <cart-drawer-items")
cd_row = '<tr id="CartDrawer-Item-{{ item.index | plus: 1 }}" class="cart-item" role="row">'
cd_name = '<a href="{{ item.url }}" class="cart-item__name h4 break">{{ item.product.title | escape }}</a>'
assert cd.count(cd_head) == 1 and cd.count(cd_row) == 1 and cd.count(cd_name) == 1, 'Dawn cart drawer changed, check the anchors'
cd = cd.replace(cd_head, cd_head.replace("      </div>\n      <cart-drawer-items",
                "      </div>\n      {%- comment -%}BLACK WEEK 2026 · gift bar (Black Week on, early/live/sidste){%- endcomment -%}\n      {%- render 'bw-dawn-progress' -%}\n      <cart-drawer-items"))
cd = cd.replace(cd_row, '<tr id="CartDrawer-Item-{{ item.index | plus: 1 }}" class="cart-item{% if item.properties._bw_gift %} bw-gift-line{% endif %}" role="row">')
cd = cd.replace(cd_name, cd_name + "\n\n                          {%- if item.properties._bw_gift -%}<p class=\"bw-dawn-gift-tag\">Gratis Geschenk</p>{%- endif -%}")
write('snippets/cart-drawer.liquid', cd)

# ---------------------------------------------------------------------------------------------------- layout
lay = read(os.path.join(HERE, 'base', 'layout', 'theme.liquid'))
head_old = "    {{ 'base.css' | asset_url | stylesheet_tag }}\n"
head_new = head_old + "    {%- comment -%}BLACK WEEK 2026{%- endcomment -%}\n    {%- render 'bw-head' -%}\n"
main_old = '    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">\n      {{ content_for_layout }}'
main_new = ('    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">\n'
            "      {%- comment -%}BLACK WEEK 2026 · ticker, Black Week homepage (section group) and the offer box on product pages; all shown only when html.bw-on{%- endcomment -%}\n"
            "      {%- section 'bw-marquee' -%}\n"
            "      {%- if template.name == 'index' -%}\n        {%- sections 'bw-home-group' -%}\n      {%- endif -%}\n"
            "      {%- if template.name == 'product' -%}\n        {%- render 'bw-dawn-pdp' -%}\n      {%- endif -%}\n"
            '      {{ content_for_layout }}')
body_old = "    {%- if settings.predictive_search_enabled -%}\n      <script src=\"{{ 'predictive-search.js' | asset_url }}\" defer=\"defer\"></script>\n    {%- endif -%}\n  </body>"
body_new = body_old.replace('  </body>', "    {%- render 'bw-dawn-gifts' -%}\n  </body>")
assert lay.count(head_old) == 1 and lay.count(main_old) == 1 and lay.count(body_old) == 1, 'DE layout changed, check the anchors'
write('layout/theme.liquid', lay.replace(head_old, head_new).replace(main_old, main_new).replace(body_old, body_new))


# ---------------------------------------------------------------------------------------------------- templates
def tr_value(key, v, where):
    if isinstance(v, list):
        if key in ('products',):
            out = []
            for h in v:
                for n in de_text.PRODUCTS.get(h, [h]):
                    if n not in out:
                        out.append(n)
            return out
        return [tr_value(key, x, where) for x in v]
    if not isinstance(v, str):
        return v
    if key in ('product',) and v in de_text.PRODUCTS:
        return de_text.PRODUCTS[v][0]
    if v in de_text.TEXT:
        v = de_text.TEXT[v]
    for old, new in de_text.URLS:
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
    ov = de_text.OVERRIDES
    for k, v in list(sec.get('settings', {}).items()):
        sec['settings'][k] = ov[(tpl, sid, None, k)] if (tpl, sid, None, k) in ov else tr_value(k, v, f'{tpl}:{sid}')
    for bid, bl in sec.get('blocks', {}).items():
        for k, v in list(bl.get('settings', {}).items()):
            bl['settings'][k] = ov[(tpl, sid, bid, k)] if (tpl, sid, bid, k) in ov else tr_value(k, v, f'{tpl}:{sid}/{bid}')
    for (t, s, b, k), v in ov.items():
        if t == tpl and s == sid and b is None and k not in sec.get('settings', {}):
            sec.setdefault('settings', {})[k] = v


def bw_only(d, tpl, keep=(), drop=()):
    """Keep the Black Week sections (and `keep` types) of a DK template, translated; leave out section ids in `drop`."""
    out = {'sections': {}, 'order': []}
    for sid in d['order']:
        if sid in drop:
            continue
        sec = json.loads(json.dumps(d['sections'][sid]))
        # sub-collection tabs (DK 4 for 2, 19.11) point to DK-only collections: left out here for now
        for bid in [b for b, bl in sec.get('blocks', {}).items() if bl.get('type') == 'sub']:
            sec['blocks'].pop(bid)
            sec['block_order'].remove(bid)
        if not (sec['type'].startswith('bw-') or sec['type'] in keep):
            continue
        if sec.get('disabled'):
            continue
        if sec['type'] not in SECTIONS and sec['type'] not in keep:
            problems.append(f'{tpl}: section {sid} ({sec["type"]}) is not in the DE build')
            continue
        fill_defaults(sec, schema(sec['type']))
        for bid in de_text.DROP_BLOCKS.get((tpl, sid), []):
            sec['blocks'].pop(bid, None)
            sec['block_order'].remove(bid)
        translate_section(tpl, sid, sec)
        out['sections'][sid] = sec
        out['order'].append(sid)
    return out


TEMPLATES = {  # DK template → sections left out in DE
    'page.black-week.json': ('bw_cta',),                         # presale sign-up strip (pre only; no DE presale form)
    'page.black-week-gaver.json': ('guide',),                    # gift guide by price (DK products)
    'page.black-week-vilkaar.json': (),
    'collection.black-week-3for2.json': (),
    'collection.black-week-4for2.json': (),
    'collection.black-week-limited-edition.json': (),
}
for tpl, drop in TEMPLATES.items():
    d = load_json(os.path.join(ROOT, 'templates', tpl))
    dump_json('templates/' + tpl, bw_only(d, tpl, drop=drop))

# homepage: DE's live homepage stays templates/index.json (normal shop); the Black Week homepage is a section group
HOME_KEEP = ['bw_hero', 'bw_dates', 'bw_band', 'bw_offer_cats', 'bw_limited', 'bw_3for2', 'bw_4for2', 'bw_gift', 'bw_faq_short']
d = load_json(os.path.join(ROOT, 'sections', 'bw-home-group.json'))
o = bw_only(d, 'index.json', drop=[k for k in d['order'] if k not in HOME_KEEP])
dump_json('sections/bw-home-group.json', {'type': d['type'], 'name': d['name'], 'sections': o['sections'], 'order': o['order']})

# settings data: DE's own, cart drawer instead of the notification, na-side-cart off (as DK/SE), ProfitMetrics embed
# removed (no longer used, the app block no longer exists), the ticker's settings (static section in the layout)
sd = load_json(os.path.join(HERE, 'base', 'config', 'settings_data.json'))
cur = sd['current']
cur['cart_type'] = 'drawer'
cur['blocks']['7698122941617543805']['disabled'] = True
cur['blocks'].pop('16488661044329386848', None)
dk_hg = load_json(os.path.join(ROOT, 'sections', 'header-group.json'))
mq = json.loads(json.dumps(dk_hg['sections']['bw_marquee']))
fill_defaults(mq, schema('bw-marquee'))
translate_section('header-group.json', 'bw_marquee', mq)
mq.pop('disabled', None)
cur['sections']['bw-marquee'] = mq
dump_json('config/settings_data.json', sd)

# images the DE templates use (must exist in DE's Files under these names)
imgs = set()
for p in glob.glob(os.path.join(OUT, '**', '*.json'), recursive=True):
    imgs |= set(re.findall(r'shopify://shop_images/[^"\\]+', read(p)))
write('../images.txt', '\n'.join(sorted(imgs)) + '\n')

print('\n'.join(problems) if problems else 'no problems')
print('files:', sum(len(f) for _, _, f in os.walk(OUT)))
