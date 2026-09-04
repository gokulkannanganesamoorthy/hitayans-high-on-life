import os
import re
import random

image_dir = '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/public/Images Extracted'
images = [f for f in os.listdir(image_dir) if f.endswith('.jpg') or f.endswith('.png')]

# We'll pop images so they are unique where possible
random.seed(42)
random.shuffle(images)

def get_image():
    if not images:
        return "/Images Extracted/img101.jpg" # fallback
    return "/Images Extracted/" + random.choice(images)

files_to_check = [
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/data/content.ts',
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/pages/Home/index.tsx',
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/pages/About/index.tsx',
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/pages/Tickets/index.tsx',
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/pages/Spaces/index.tsx',
    '/Users/gokulkannan.g/Developer/Desktop/projects/hitayans-high-on-life/src/pages/Workshops/index.tsx',
]

for file_path in files_to_check:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r') as f:
        content = f.read()

    # Regex to find image paths that are not already from Images Extracted
    # Match /assets/..., /Images/..., etc. ending in jpg or png
    def replace_match(match):
        return '"' + get_image() + '"'

    new_content = re.sub(r'"/(assets|Images)/[^"]+\.(jpg|png)"', replace_match, content, flags=re.IGNORECASE)
    
    # Also handle single quotes if any
    def replace_match_single(match):
        return "'" + get_image() + "'"
        
    new_content = re.sub(r"'/(assets|Images)/[^']+\.(jpg|png)'", replace_match_single, new_content, flags=re.IGNORECASE)

    if new_content != content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes in {file_path}")
