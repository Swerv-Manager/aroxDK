"""python3 -I overview.py THEME.png REF.png OUT_PREFIX [scale] → side-by-side downscaled overview (theme left, design
right), split into chunks of max 2000 px height so each can be viewed."""
import sys
from PIL import Image
t, r, out = sys.argv[1:4]
sc = float(sys.argv[4]) if len(sys.argv) > 4 else 0.2
a = Image.open(t).convert('RGB'); b = Image.open(r).convert('RGB')
a = a.resize((int(a.width * sc), int(a.height * sc))); b = b.resize((int(b.width * sc), int(b.height * sc)))
h = max(a.height, b.height); step = 2000; i = 0
for y0 in range(0, h, step):
    y1 = min(h, y0 + step)
    im = Image.new('RGB', (a.width + b.width + 20, y1 - y0), (255, 0, 255))
    im.paste(a.crop((0, y0, a.width, y1)), (0, 0)); im.paste(b.crop((0, y0, b.width, y1)), (a.width + 20, 0))
    im.save(f'{out}_{i}.png'); i += 1
print(out, a.size, b.size, i, 'chunks')
