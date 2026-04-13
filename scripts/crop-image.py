#!/usr/bin/env python3
import requests
from PIL import Image
from io import BytesIO
import os

# Image URL and output path
image_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-07-09-pSvSZjeLZ9n9K5Y6SSMjCEJAMe6ylY.jpg"
output_dir = "/vercel/share/v0-project/public"
output_path = os.path.join(output_dir, "4ever-young-midtown.jpg")

# Create public directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

try:
    print("[v0] Fetching image from URL...")
    response = requests.get(image_url, timeout=10)
    response.raise_for_status()
    
    # Open image from bytes
    img = Image.open(BytesIO(response.content))
    print(f"[v0] Original image size: {img.size}")
    
    # Target size for hero image (1200x400 for desktop)
    target_width = 1200
    target_height = 400
    
    # Calculate aspect ratios
    img_aspect = img.width / img.height
    target_aspect = target_width / target_height
    
    # Resize and crop to fit the target size
    if img_aspect > target_aspect:
        # Image is wider, crop width
        new_height = target_height
        new_width = int(new_height * img_aspect)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        left = (new_width - target_width) // 2
        img = img.crop((left, 0, left + target_width, target_height))
    else:
        # Image is taller, crop height
        new_width = target_width
        new_height = int(new_width / img_aspect)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        top = (new_height - target_height) // 2
        img = img.crop((0, top, target_width, top + target_height))
    
    # Save the cropped image
    img.save(output_path, "JPEG", quality=95)
    print(f"[v0] Image successfully saved to {output_path}")
    print(f"[v0] Final image size: {img.size}")
    
except Exception as e:
    print(f"[v0] Error: {str(e)}")
    exit(1)
