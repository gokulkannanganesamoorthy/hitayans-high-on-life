import os
from PIL import Image

d = "../../public/assets/extracted"
for f in os.listdir(d):
    if f.endswith('.jpx'):
        p = os.path.join(d, f)
        try:
            im = Image.open(p)
            new_p = os.path.splitext(p)[0] + '.jpg'
            im.convert('RGB').save(new_p, 'JPEG')
            os.remove(p)
            print(f"Converted {f}")
        except Exception as e:
            print(f"Failed {f}: {e}")
