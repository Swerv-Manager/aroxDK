import json, re, sys, os
sys.path.insert(0, '/tmp/claude-0/-home-claude-repo/1b0c562c-e986-55cb-b60b-2f01c9f54ed5/scratchpad')
import tj
os.chdir('/home/claude/aroxdk')
def schema(t):
    p = f'sections/{t}.liquid'
    if not os.path.exists(p): p = '/tmp/claude-0/-home-claude-aroxdk/1b0c562c-e986-55cb-b60b-2f01c9f54ed5/scratchpad/remote/sections/'+t+'.liquid'
    if not os.path.exists(p): return None
    m = re.search(r'{%-?\s*schema\s*-?%}(.*?){%-?\s*endschema\s*-?%}', open(p).read(), re.S)
    return json.loads(re.sub(r',(\s*[}\]])', r'\1', m.group(1)))
def chk(defs, vals, where):
    d = {x['id']: x for x in defs if 'id' in x}
    for k, v in vals.items():
        x = d.get(k)
        if not x: print(where, 'unknown', k); continue
        t = x['type']
        if t == 'range':
            if not isinstance(v, (int, float)) or v < x['min'] or v > x['max'] or abs(((v - x['min']) / x.get('step', 1)) - round((v - x['min']) / x.get('step', 1))) > 1e-9: print(where, k, 'bad range value', v)
        if t in ('select', 'radio') and v not in [o['value'] for o in x['options']]: print(where, k, 'bad option', v)
        if t == 'richtext' and v and not re.match(r'^\s*<(p|ul|ol|h[1-6])', v): print(where, k, 'richtext must start with block tag', v[:40])
        if t == 'inline_richtext' and v and re.search(r'<(p|div|ul|h\d)[ >]', v): print(where, k, 'inline_richtext block tag', v[:40])
        if t == 'url' and v and not re.match(r'^(https?://|shopify://|/|#|mailto:|tel:)', v): print(where, k, 'bad url', v)
        if t == 'url' and v and v.startswith('/') and False: pass
        if t == 'image_picker' and v and not v.startswith('shopify://shop_images/'): print(where, k, 'bad image', v)
        if t == 'checkbox' and not isinstance(v, bool): print(where, k, 'checkbox not bool')
        if t in ('text', 'textarea') and not isinstance(v, str): print(where, k, 'not string')
        if t == 'color' and v and not re.match(r'^(#[0-9a-fA-F]{3,8}|rgba?\(.*\))$', v): print(where, k, 'bad color', v)
for f in sys.argv[1:]:
    _, d = tj.load(f)
    for k, sec in d['sections'].items():
        sc = schema(sec['type'])
        if sc is None: continue
        chk(sc.get('settings', []), sec.get('settings', {}), f'{f}:{k}')
        bt = {b['type']: b.get('settings', []) for b in sc.get('blocks', [])}
        for bk, b in sec.get('blocks', {}).items():
            if b['type'] in bt: chk(bt[b['type']], b.get('settings', {}), f'{f}:{k}/{bk}')
        if 'max_blocks' in sc and len(sec.get('blocks', {})) > sc['max_blocks']: print(f, k, 'too many blocks')
print('done')
