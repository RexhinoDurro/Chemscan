import { GoogleGenerativeAI, Part } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY || '';

let genAI: GoogleGenerativeAI | null = null;

function getClient(): GoogleGenerativeAI {
  if (!genAI) {
    if (!API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
}

export async function analyzeImage(imageBase64: string, mimeType: string, prompt: string): Promise<string> {
  const client = getClient();
  const model = client.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const imagePart: Part = {
    inlineData: {
      data: imageBase64,
      mimeType: mimeType as 'image/jpeg' | 'image/png' | 'image/webp',
    },
  };

  const result = await model.generateContent([prompt, imagePart]);
  const response = result.response;
  return response.text();
}

export async function generateText(prompt: string): Promise<string> {
  const client = getClient();
  const model = client.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}
