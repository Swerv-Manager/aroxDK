# python3 sheet.py out.png colheight scale img... → each image cut into columns of colheight px, side by side, scaled
import sys
from PIL import Image
out, ch, sc = sys.argv[1], int(sys.argv[2]), float(sys.argv[3])
cols = []
for f in sys.argv[4:]:
    im = Image.open(f).convert('RGB')
    for y in range(0, im.height, ch):
        cols.append(im.crop((0, y, im.width, min(y + ch, im.height))))
W = sum(c.width + 8 for c in cols); H = max(c.height for c in cols)
sheet = Image.new('RGB', (W, H), (255, 0, 255))
x = 0
for c in cols: sheet.paste(c, (x, 0)); x += c.width + 8
sheet = sheet.resize((int(W * sc), int(H * sc)))
sheet.save(out); print(sheet.size)
