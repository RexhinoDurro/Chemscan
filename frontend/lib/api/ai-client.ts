import axios from 'axios';
import type { AnalyzeImageResponse, ProcedureResponse } from '@/lib/types';

const AI_URL = process.env.NEXT_PUBLIC_AI_URL || 'http://localhost:3001';

const aiClient = axios.create({
  baseURL: AI_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function analyzeImage(imageBase64: string): Promise<AnalyzeImageResponse> {
  const { data } = await aiClient.post('/api/ai/analyze-image', { image: imageBase64 });
  return data;
}

export async function generateProcedure(params: {
  equation: string;
  balanced_equation?: string;
  quantities?: Array<{ formula: string; value: number; unit: string }>;
  hazards?: Array<{ formula: string; severity: string }>;
}): Promise<ProcedureResponse> {
  const { data } = await aiClient.post('/api/ai/generate-procedure', params);
  return data;
}

export async function suggestConditions(equation: string) {
  const { data } = await aiClient.post('/api/ai/suggest-conditions', { equation });
  return data;
}
