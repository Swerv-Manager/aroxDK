import json, re, os, sys, glob
sys.path.insert(0, '/tmp/claude-0/-home-claude-repo/1b0c562c-e986-55cb-b60b-2f01c9f54ed5/scratchpad')
import tj
os.chdir('/home/claude/aroxdk')
# section types that exist in the live theme (from the file listing) but are not checked out locally
REMOTE = set('''accordion-content account-banner announcement-bar apps before-after-image blog-posts cart-drawer collection-banner collection-list comparison-table contact countdown-banner countdown cs-announcement-bar custom-html custom-liquid faq feature-chart featured-collection featured-product footer header hot-spots image-link-blocks image-with-text-overlay images-with-text-scrolling impact-text logo-list main-article main-blog main-cart main-collection main-customers-account main-customers-activate-account main-customers-addresses main-customers-login main-customers-order main-customers-register main-customers-reset-password main-gift-card main-list-collections main-not-found main-page main-password main-product main-search media-grid media-with-text multi-column multiple-images-with-text newsletter-popup newsletter press privacy-banner recently-viewed-products related-products revealed-image-on-scroll rich-text scrolling-text search-drawer seo-text-collection shop-the-look slideshow specification-table ss-bundle-builder ss-circle-menu-2 ss-countdown-bar ss-hero-26 ss-product-videos-v1 ss-product-vidoes tabs testimonials text-with-icons timeline variant-added video'''.split())
def schema(t):
    p = f'sections/{t}.liquid'
    if not os.path.exists(p): return None
    m = re.search(r'{%-?\s*schema\s*-?%}(.*?){%-?\s*endschema\s*-?%}', open(p).read(), re.S)
    return json.loads(re.sub(r',(\s*[}\]])', r'\1', m.group(1))) if m else {}
bad = 0
files = [f for f in glob.glob('templates/**/*.json', recursive=True) + glob.glob('sections/*.json')]
for f in files:
    _, d = tj.load(f)
    for k, sec in d.get('sections', {}).items():
        t = sec['type']
        sc = schema(t)
        if sc is None:
            if t not in REMOTE and not t.startswith('shopify://'):
                print(f'{f}: section {k} type {t} MISSING'); bad += 1
            continue
        ids = {s['id'] for s in sc.get('settings', []) if 'id' in s}
        for sid in sec.get('settings', {}):
            if sid not in ids: print(f'{f}: {k} ({t}) unknown setting {sid}'); bad += 1
        btypes = {b['type']: {s['id'] for s in b.get('settings', []) if 'id' in s} for b in sc.get('blocks', [])}
        for bk, b in sec.get('blocks', {}).items():
            bt = b['type']
            if bt.startswith('shopify://'): continue
            if bt not in btypes and '@app' not in btypes: print(f'{f}: {k} ({t}) unknown block type {bt}'); bad += 1; continue
            for sid in b.get('settings', {}):
                if bt in btypes and sid not in btypes[bt]: print(f'{f}: {k}/{bk} ({t}.{bt}) unknown setting {sid}'); bad += 1
        for bk in sec.get('block_order', []):
            if bk not in sec.get('blocks', {}): print(f'{f}: {k} block_order has missing {bk}'); bad += 1
    for k in d.get('order', []):
        if k not in d.get('sections', {}): print(f'{f}: order has missing {k}'); bad += 1
print('problems:', bad)
