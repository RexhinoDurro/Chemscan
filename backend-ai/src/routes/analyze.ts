import { Router, Request, Response } from 'express';
import multer from 'multer';
import { analyzeImage } from '../services/gemini.service';
import { preprocessImage, extractBase64 } from '../services/image.service';
import { generateCacheKey, cacheGet, cacheSet } from '../services/cache.service';
import { OCR_PROMPT } from '../utils/prompts';
import { extractJSON } from '../utils/parsers';
import { analyzeImageSchema } from '../utils/validators';

const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 } });

export const analyzeRouter = Router();

analyzeRouter.post('/analyze-image', upload.single('image'), async (req: Request, res: Response) => {
  try {
    let imageData: string;
    let mimeType: string;

    if (req.file) {
      // Multipart upload
      const processed = await preprocessImage(req.file.buffer);
      imageData = processed.data;
      mimeType = processed.mimeType;
    } else if (req.body.image) {
      // Base64 in JSON body
      const { error } = analyzeImageSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const extracted = extractBase64(req.body.image);
      const buffer = Buffer.from(extracted.data, 'base64');
      const processed = await preprocessImage(buffer);
      imageData = processed.data;
      mimeType = processed.mimeType;
    } else {
      return res.status(400).json({ error: 'No image provided. Send as multipart file or base64 in JSON body.' });
    }

    // Check cache
    const key = generateCacheKey('ocr', imageData.substring(0, 100));
    const cached = await cacheGet(key);
    if (cached) {
      return res.json(cached);
    }

    const responseText = await analyzeImage(imageData, mimeType, OCR_PROMPT);
    const result = extractJSON(responseText);

    await cacheSet(key, result, 3600);
    return res.json(result);
  } catch (error: any) {
    console.error('Analyze image error:', error);
    return res.status(500).json({ error: error.message || 'Failed to analyze image' });
  }
});
