import { Router, Request, Response } from 'express';
import { generateText } from '../services/gemini.service';
import { generateCacheKey, cacheGet, cacheSet } from '../services/cache.service';
import { PROCEDURE_PROMPT } from '../utils/prompts';
import { extractJSON } from '../utils/parsers';
import { procedureSchema } from '../utils/validators';

export const procedureRouter = Router();

procedureRouter.post('/generate-procedure', async (req: Request, res: Response) => {
  try {
    const { error, value } = procedureSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const key = generateCacheKey('procedure', value.equation, value.quantities);
    const cached = await cacheGet(key);
    if (cached) {
      return res.json(cached);
    }

    const context = `
Reaction: ${value.equation}
${value.balanced_equation ? `Balanced: ${value.balanced_equation}` : ''}
${value.quantities ? `Quantities: ${JSON.stringify(value.quantities)}` : ''}
${value.hazards ? `Known hazards: ${JSON.stringify(value.hazards)}` : ''}
${value.reaction_type ? `Reaction type: ${value.reaction_type}` : ''}
`;

    const prompt = `${PROCEDURE_PROMPT}\n\nReaction Details:\n${context}`;
    const responseText = await generateText(prompt);
    const result = extractJSON(responseText);

    await cacheSet(key, result, 7200);
    return res.json(result);
  } catch (error: any) {
    console.error('Generate procedure error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate procedure' });
  }
});
