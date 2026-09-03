import fitz  # PyMuPDF
import io
import os
import uuid

pdf_path = "../../Binder1 HOL Brochure_size reduced.pdf"
output_dir = "../../public/assets/extracted"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

image_count = 0

for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    
    if image_list:
        print(f"[+] Found {len(image_list)} images on page {page_index}")
    else:
        print(f"[!] No images found on page {page_index}")
        
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        try:
            image_filename = f"page{page_index:03d}_{image_index:02d}_{uuid.uuid4().hex[:8]}.{image_ext}"
            image_filepath = os.path.join(output_dir, image_filename)
            with open(image_filepath, "wb") as f:
                f.write(image_bytes)
            print(f"Saved {image_filepath}")
            image_count += 1
        except Exception as e:
            print(f"Error extracting image {xref}: {e}")

print(f"Total images extracted: {image_count}")
