import { create } from 'zustand';
import type { CalculationResponse, SafetyResponse, ProcedureResponse, QuantityInput } from '@/lib/types';

interface CalculationState {
  equation: string;
  quantities: QuantityInput[];
  balanceResult: { balanced_equation: string; coefficients: Record<string, number>; reactants: string[]; products: string[] } | null;
  calculationResult: CalculationResponse | null;
  safetyResult: SafetyResponse | null;
  procedureResult: ProcedureResponse | null;
  isLoading: boolean;
  error: string | null;

  setEquation: (eq: string) => void;
  setQuantities: (q: QuantityInput[]) => void;
  setBalanceResult: (r: any) => void;
  setCalculationResult: (r: CalculationResponse | null) => void;
  setSafetyResult: (r: SafetyResponse | null) => void;
  setProcedureResult: (r: ProcedureResponse | null) => void;
  setLoading: (l: boolean) => void;
  setError: (e: string | null) => void;
  reset: () => void;
}

export const useCalculationStore = create<CalculationState>((set) => ({
  equation: '',
  quantities: [],
  balanceResult: null,
  calculationResult: null,
  safetyResult: null,
  procedureResult: null,
  isLoading: false,
  error: null,

  setEquation: (equation) => set({ equation }),
  setQuantities: (quantities) => set({ quantities }),
  setBalanceResult: (balanceResult) => set({ balanceResult }),
  setCalculationResult: (calculationResult) => set({ calculationResult }),
  setSafetyResult: (safetyResult) => set({ safetyResult }),
  setProcedureResult: (procedureResult) => set({ procedureResult }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set({
    equation: '',
    quantities: [],
    balanceResult: null,
    calculationResult: null,
    safetyResult: null,
    procedureResult: null,
    isLoading: false,
    error: null,
  }),
}));
