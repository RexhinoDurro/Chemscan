export interface AnalyzeImageResponse {
  equation: string;
  reactants: string[];
  products: string[];
  quantities: Array<{
    formula: string;
    value: number;
    unit: string;
  }>;
  confidence: number;
  raw_text: string;
}

export interface ProcedureRequest {
  equation: string;
  balanced_equation?: string;
  quantities?: Array<{
    formula: string;
    value: number;
    unit: string;
  }>;
  hazards?: Array<{
    formula: string;
    severity: string;
  }>;
  reaction_type?: string;
}

export interface ProcedureResponse {
  title: string;
  safety_warnings: string[];
  materials: Array<{
    item: string;
    quantity?: string;
  }>;
  steps: Array<{
    number: number;
    instruction: string;
    notes?: string;
  }>;
  cleanup: string[];
  estimated_time: string;
}

export interface SuggestConditionsRequest {
  equation: string;
  reaction_type?: string;
}

export interface SuggestConditionsResponse {
  temperature: string;
  pressure: string;
  catalyst?: string;
  solvent?: string;
  duration: string;
  special_conditions: string[];
  tips: string[];
}
