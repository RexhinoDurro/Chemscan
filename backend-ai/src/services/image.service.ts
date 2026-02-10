import sharp from 'sharp';

export async function preprocessImage(buffer: Buffer): Promise<{ data: string; mimeType: string }> {
  const processed = await sharp(buffer)
    .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
    .grayscale()
    .normalize()
    .sharpen()
    .jpeg({ quality: 85 })
    .toBuffer();

  return {
    data: processed.toString('base64'),
    mimeType: 'image/jpeg',
  };
}

export function extractBase64(dataUrl: string): { data: string; mimeType: string } {
  const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (match) {
    return { mimeType: match[1], data: match[2] };
  }
  // Assume raw base64 jpeg if no data URL prefix
  return { mimeType: 'image/jpeg', data: dataUrl };
}
