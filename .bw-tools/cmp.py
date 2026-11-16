"""Side-by-side compare: python3 -I cmp.py THEME_IMG REF_IMG OUT.png TY0 TY1 RY0 RY1
Crops THEME_IMG rows TY0..TY1 and REF_IMG rows RY0..RY1 (full width each), pastes them side by side
(theme left, design right) with a 20 px gap, and writes OUT.png. Reference frames include a ~22 px label strip at
the top (y=0 is the label); theme screenshots start at the page top.
Also: python3 -I cmp.py info IMG  → prints size."""
import sys
from PIL import Image

if sys.argv[1] == 'info':
    print(Image.open(sys.argv[2]).size)
    sys.exit()
t, r, out = sys.argv[1:4]
ty0, ty1, ry0, ry1 = map(int, sys.argv[4:8])
a = Image.open(t).convert('RGB')
b = Image.open(r).convert('RGB')
a = a.crop((0, ty0, a.width, min(ty1, a.height)))
b = b.crop((0, ry0, b.width, min(ry1, b.height)))
h = max(a.height, b.height)
im = Image.new('RGB', (a.width + b.width + 20, h), (255, 0, 255))
im.paste(a, (0, 0))
im.paste(b, (a.width + 20, 0))
im.save(out)
print(out, im.size)
