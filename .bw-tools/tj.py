import json
def load(p):
    s=open(p).read()
    if s.lstrip().startswith('/*'):
        i=s.index('*/')+2; return s[:i], json.loads(s[i:])
    return '', json.loads(s)
def dump(p, head, d):
    open(p,'w').write((head+'\n' if head else '')+json.dumps(d, indent=2, ensure_ascii=False)+'\n')
