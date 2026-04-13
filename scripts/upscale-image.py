from PIL import Image
import requests
from io import BytesIO
import os

# Download the original image
image_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-07-09-pSvSZjeLZ9n9K5Y6SSMjCEJAMe6ylY.jpg"
output_path = "/vercel/share/v0-project/public/4ever-young-midtown.jpg"

try:
    print("[v0] Downloading original image...")
    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content))
    
    original_width, original_height = img.size
    print(f"[v0] Original image size: {original_width}x{original_height}")
    
    # Upscale to 1200x400 (hero size) using high-quality LANCZOS resampling
    target_width = 1200
    target_height = 400
    
    print(f"[v0] Upscaling to {target_width}x{target_height} with LANCZOS filter...")
    upscaled_img = img.resize(
        (target_width, target_height),
        Image.Resampling.LANCZOS
    )
    
    # Ensure output directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Save with high quality
    upscaled_img.save(output_path, quality=95, optimize=False)
    
    print(f"[v0] Image upscaled and saved to {output_path}")
    print(f"[v0] New image size: {upscaled_img.size}")
    print(f"[v0] File size: {os.path.getsize(output_path)} bytes")
    
except Exception as e:
    print(f"[v0] Error: {str(e)}")
    raise
