export interface User {
  id: number;
  email: string;
  username: string;
  date_joined: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface QuantityInput {
  formula: string;
  value: number;
  unit: string;
  concentration?: number;
}

export interface BalanceResponse {
  balanced_equation: string;
  coefficients: Record<string, number>;
  reactants: string[];
  products: string[];
}

export interface YieldResult {
  formula: string;
  name: string | null;
  moles: number;
  grams: number;
  is_limiting: boolean;
}

export interface CalculationResponse {
  balanced_equation: string;
  coefficients: Record<string, number>;
  limiting_reagent: string;
  results: YieldResult[];
  steps: string[];
}

export interface HazardInfo {
  formula: string;
  name: string;
  ghs_categories: string[];
  hazard_statements: string[];
  precautions: string[];
  severity: 'red' | 'amber' | 'green';
  ppe_required: string[];
}

export interface CombinationWarning {
  compounds: string[];
  warning: string;
  severity: string;
}

export interface SafetyResponse {
  hazards: HazardInfo[];
  combination_warnings: CombinationWarning[];
  overall_severity: string;
  recommended_ppe: string[];
}

export interface AnalyzeImageResponse {
  equation: string;
  reactants: string[];
  products: string[];
  quantities: QuantityInput[];
  confidence: number;
  raw_text: string;
}

export interface ProcedureStep {
  number: number;
  instruction: string;
  notes?: string;
}

export interface ProcedureResponse {
  title: string;
  safety_warnings: string[];
  materials: Array<{ item: string; quantity?: string }>;
  steps: ProcedureStep[];
  cleanup: string[];
  estimated_time: string;
}

export interface Calculation {
  id: number;
  equation: string;
  balanced_equation: string;
  input_data: any;
  result_data: CalculationResponse | null;
  safety_data: SafetyResponse | null;
  procedure_data: ProcedureResponse | null;
  created_at: string;
  updated_at: string;
}

export interface ReactionLibraryItem {
  id: number;
  name: string;
  equation: string;
  category: string;
  description: string;
  difficulty: string;
}
