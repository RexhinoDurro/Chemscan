import axios from 'axios';
import type { BalanceResponse, CalculationResponse, SafetyResponse, QuantityInput } from '@/lib/types';

const CHEMISTRY_URL = process.env.NEXT_PUBLIC_CHEMISTRY_URL || 'http://localhost:8001';

const chemistryClient = axios.create({
  baseURL: CHEMISTRY_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function balanceEquation(equation: string): Promise<BalanceResponse> {
  const { data } = await chemistryClient.post('/api/chemistry/balance', { equation });
  return data;
}

export async function calculateStoichiometry(
  equation: string,
  quantities: QuantityInput[],
  targetProduct?: string
): Promise<CalculationResponse> {
  const { data } = await chemistryClient.post('/api/chemistry/calculate', {
    equation,
    quantities,
    target_product: targetProduct,
  });
  return data;
}

export async function checkSafety(compounds: string[]): Promise<SafetyResponse> {
  const { data } = await chemistryClient.post('/api/chemistry/safety-check', { compounds });
  return data;
}

export async function getCompound(formula: string) {
  const { data } = await chemistryClient.get(`/api/chemistry/compound/${formula}`);
  return data;
}
