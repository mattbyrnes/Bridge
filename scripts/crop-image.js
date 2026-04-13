import sharp from 'sharp';
import https from 'https';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    });
  });
}

async function cropImage() {
  const url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-07-09-pSvSZjeLZ9n9K5Y6SSMjCEJAMe6ylY.jpg';
  
  console.log('[v0] Downloading image...');
  const imageBuffer = await downloadImage(url);
  
  console.log('[v0] Getting image metadata...');
  const metadata = await sharp(imageBuffer).metadata();
  console.log(`[v0] Original dimensions: ${metadata.width}x${metadata.height}`);
  
  // Calculate center crop for a wide aspect ratio (approximately 16:9 or similar for hero)
  const targetAspect = 16 / 9;
  const currentAspect = metadata.width / metadata.height;
  
  let crop = {};
  if (currentAspect > targetAspect) {
    // Image is wider than target, crop width
    crop.width = Math.round(metadata.height * targetAspect);
    crop.height = metadata.height;
    crop.left = Math.round((metadata.width - crop.width) / 2);
    crop.top = 0;
  } else {
    // Image is taller than target, crop height
    crop.width = metadata.width;
    crop.height = Math.round(metadata.width / targetAspect);
    crop.left = 0;
    crop.top = Math.round((metadata.height - crop.height) / 2);
  }
  
  console.log(`[v0] Cropping to: ${crop.width}x${crop.height} at (${crop.left}, ${crop.top})`);
  
  const croppedBuffer = await sharp(imageBuffer)
    .extract(crop)
    .resize(1920, 1080, { fit: 'cover' })
    .jpeg({ quality: 90 })
    .toBuffer();
  
  const outputPath = resolve(process.cwd(), 'public', 'restore-hero.jpg');
  writeFileSync(outputPath, croppedBuffer);
  console.log(`[v0] Saved cropped image to ${outputPath}`);
}

cropImage().catch(err => {
  console.error('[v0] Error:', err);
  process.exit(1);
});
