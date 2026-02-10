import { Router, Request, Response } from 'express';
import { generateText } from '../services/gemini.service';
import { generateCacheKey, cacheGet, cacheSet } from '../services/cache.service';
import { SUGGEST_PROMPT } from '../utils/prompts';
import { extractJSON } from '../utils/parsers';
import { suggestSchema } from '../utils/validators';

export const suggestRouter = Router();

suggestRouter.post('/suggest-conditions', async (req: Request, res: Response) => {
  try {
    const { error, value } = suggestSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const key = generateCacheKey('suggest', value.equation);
    const cached = await cacheGet(key);
    if (cached) {
      return res.json(cached);
    }

    const context = `Reaction: ${value.equation}${value.reaction_type ? `\nType: ${value.reaction_type}` : ''}`;
    const prompt = `${SUGGEST_PROMPT}\n\n${context}`;
    const responseText = await generateText(prompt);
    const result = extractJSON(responseText);

    await cacheSet(key, result, 7200);
    return res.json(result);
  } catch (error: any) {
    console.error('Suggest conditions error:', error);
    return res.status(500).json({ error: error.message || 'Failed to suggest conditions' });
  }
});
