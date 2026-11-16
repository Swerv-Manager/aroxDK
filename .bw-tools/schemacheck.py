import json, re, sys
def check(p):
    s = open(p).read(); errs = []
    m = re.search(r'{%-?\s*schema\s*-?%}(.*?){%-?\s*endschema\s*-?%}', s, re.S)
    sc = json.loads(m.group(1))
    def sets(lst, where):
        ids = set()
        for st in lst:
            t = st.get('type'); i = st.get('id')
            if t in ('header', 'paragraph'):
                if not st.get('content'): errs.append(f'{where}: {t} without content')
                if t == 'header' and len(st.get('content', '')) > 50: errs.append(f'{where}: header content > 50 chars')
                continue
            if not i: errs.append(f'{where}: setting without id {st}'); continue
            if i in ids: errs.append(f'{where}: duplicate id {i}')
            ids.add(i)
            if not st.get('label'): errs.append(f'{where}.{i}: missing label')
            d = st.get('default')
            if t == 'range':
                mn, mx, step = st.get('min'), st.get('max'), st.get('step', 1)
                if None in (mn, mx) or d is None: errs.append(f'{where}.{i}: range needs min/max/default')
                else:
                    if (mx - mn) / step > 101: errs.append(f'{where}.{i}: range >101 steps')
                    if not (mn <= d <= mx): errs.append(f'{where}.{i}: default out of range')
                    if abs(((d - mn) / step) - round((d - mn) / step)) > 1e-9: errs.append(f'{where}.{i}: default not on step')
            if t in ('select', 'radio'):
                vals = [o['value'] for o in st.get('options', [])]
                if d is not None and d not in vals: errs.append(f'{where}.{i}: default {d!r} not in options')
            if t == 'richtext' and d is not None and not re.match(r'^\s*<(p|ul|ol|h[1-6])', d): errs.append(f'{where}.{i}: richtext default must start with <p>/<ul>/<ol>/<h1-6>')
            if t == 'inline_richtext' and d and re.search(r'<(p|div|ul|h\d)', d): errs.append(f'{where}.{i}: inline_richtext default has block tags')
            if t in ('image_picker', 'collection', 'product', 'product_list', 'collection_list', 'link_list', 'video', 'page', 'blog', 'article') and d not in (None,) and not (t == 'link_list' and d in ('main-menu', 'footer')):
                errs.append(f'{where}.{i}: {t} cannot have default {d!r}')
            if t == 'url' and d not in (None, '') and not (d.startswith('/') or d.startswith('http') or d.startswith('shopify://')) : errs.append(f'{where}.{i}: url default {d!r}')
            if t == 'url' and d and d.startswith('/') and not re.match(r'^/(collections|pages|products|blogs|search|cart|account)(/|$)', d): errs.append(f'{where}.{i}: url default {d!r} must be /collections, /pages, ...')
            if t == 'text' and d is not None and not isinstance(d, str): errs.append(f'{where}.{i}: text default not string')
            if t == 'text' and isinstance(d, str) and d == '': errs.append(f'{where}.{i}: empty string default')
            if t == 'number' and d is not None and not isinstance(d, (int, float)): errs.append(f'{where}.{i}: number default not number')
            if t == 'checkbox' and d is not None and not isinstance(d, bool): errs.append(f'{where}.{i}: checkbox default not bool')
        return ids
    ids = sets(sc.get('settings', []), 'settings')
    for b in sc.get('blocks', []):
        if b.get('type') == '@app': continue
        if not b.get('name'): errs.append(f'block {b.get("type")} missing name')
        sets(b.get('settings', []), 'block ' + b.get('type', '?'))
    btypes = {b.get('type') for b in sc.get('blocks', [])}
    for pr in sc.get('presets', []):
        for k in pr.get('settings', {}):
            if k not in ids: errs.append(f'preset unknown setting {k}')
        for b in (pr.get('blocks') or []) if isinstance(pr.get('blocks'), list) else (pr.get('blocks') or {}).values():
            if b.get('type') not in btypes: errs.append(f'preset block type {b.get("type")} unknown')
    if len(sc.get('name', '').encode()) > 25: errs.append(f'name too long ({len(sc["name"])}): {sc["name"]}')
    for b in sc.get('blocks', []):
        if len(b.get('name', '')) > 25: errs.append(f'block name too long: {b["name"]}')
    return errs
for p in sys.argv[1:]:
    e = check(p)
    print(('ok   ' if not e else 'FAIL ') + p)
    for x in e: print('     -', x)
