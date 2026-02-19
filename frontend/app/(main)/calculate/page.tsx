'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { EquationInput } from '@/components/calculator/EquationInput';
import { QuantityInputForm } from '@/components/calculator/QuantityInput';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { SafetyBadges } from '@/components/calculator/SafetyBadges';
import { StepByStep } from '@/components/calculator/StepByStep';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { balanceEquation, calculateStoichiometry, checkSafety } from '@/lib/api/chemistry-client';
import { saveCalculation } from '@/lib/api/django-client';
import { useCalculationStore } from '@/lib/stores/calculationStore';
import { useAuthStore } from '@/lib/stores/authStore';
import { Calculator, Shield, Save, FileText, Loader2, Check } from 'lucide-react';
import type { QuantityInput, CalculationResponse, SafetyResponse } from '@/lib/types';

const STEPS = [
  { label: 'Equation', key: 'input' },
  { label: 'Quantities', key: 'quantities' },
  { label: 'Results', key: 'results' },
] as const;

function Stepper({ currentStep }: { currentStep: 'input' | 'quantities' | 'results' }) {
  const stepIndex = STEPS.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex items-center justify-center mb-6">
      {STEPS.map((s, i) => {
        const isCompleted = i < stepIndex;
        const isCurrent = i === stepIndex;

        return (
          <div key={s.key} className="flex items-center">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isCompleted
                    ? 'bg-primary-500 text-white glow-cyan'
                    : isCurrent
                    ? 'border-2 border-primary-400 text-primary-400 bg-primary-500/10'
                    : 'border border-white/10 text-gray-500 bg-white/5'
                }`}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`text-xs mt-1.5 ${
                  isCompleted || isCurrent ? 'text-primary-400' : 'text-gray-500'
                }`}
              >
                {s.label}
              </span>
            </div>

            {/* Connecting line */}
            {i < STEPS.length - 1 && (
              <div
                className={`w-16 h-0.5 mx-2 mb-5 ${
                  i < stepIndex ? 'bg-primary-500' : 'bg-white/10'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CalculatePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const store = useCalculationStore();
  const [step, setStep] = useState<'input' | 'quantities' | 'results'>('input');
  const [reactants, setReactants] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<QuantityInput[]>([]);
  const [calcResult, setCalcResult] = useState<CalculationResponse | null>(null);
  const [safetyResult, setSafetyResult] = useState<SafetyResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [balancedEq, setBalancedEq] = useState('');

  const handleBalance = async (equation: string) => {
    setIsLoading(true);
    setError('');
    try {
      const result = await balanceEquation(equation);
      store.setEquation(equation);
      store.setBalanceResult(result);
      setReactants(result.reactants);
      setBalancedEq(result.balanced_equation);
      setQuantities(result.reactants.map((r) => ({ formula: r, value: 0, unit: 'g' })));
      setStep('quantities');

      // Safety check in parallel
      const allCompounds = [...result.reactants, ...result.products];
      checkSafety(allCompounds).then(setSafetyResult).catch(() => {});
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to balance equation');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCalculate = async () => {
    const validQuantities = quantities.filter((q) => q.value > 0);
    if (validQuantities.length === 0) {
      setError('Enter at least one quantity');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const result = await calculateStoichiometry(store.equation, validQuantities);
      setCalcResult(result);
      store.setCalculationResult(result);
      setStep('results');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Calculation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated || !calcResult) return;
    setIsSaving(true);
    try {
      const saved = await saveCalculation({
        equation: store.equation,
        balanced_equation: balancedEq,
        input_data: { quantities },
        result_data: calcResult,
        safety_data: safetyResult || undefined,
      });
      router.push(`/results/${saved.id}`);
    } catch {
      setError('Failed to save calculation');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Calculator className="h-5 w-5 text-primary-400" />
        <h1 className="text-xl font-bold text-white">Calculate</h1>
      </div>

      <Stepper currentStep={step} />

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm">{error}</div>
      )}

      <EquationInput
        onSubmit={handleBalance}
        isLoading={isLoading}
        initialValue={store.equation}
      />

      {step !== 'input' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Balanced: {balancedEq}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <QuantityInputForm
              quantities={quantities}
              onChange={setQuantities}
              reactants={reactants}
            />
            <Button onClick={handleCalculate} disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Calculator className="h-4 w-4 mr-2" />}
              Calculate
            </Button>
          </CardContent>
        </Card>
      )}

      {calcResult && (
        <>
          <ResultsDisplay result={calcResult} />
          {calcResult.steps && <StepByStep steps={calcResult.steps} />}
        </>
      )}

      {safetyResult && <SafetyBadges safety={safetyResult} />}

      {calcResult && (
        <div className="flex gap-2">
          {isAuthenticated && (
            <Button onClick={handleSave} variant="outline" className="flex-1" disabled={isSaving}>
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
              Save
            </Button>
          )}
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              store.setSafetyResult(safetyResult);
              router.push('/procedure/new');
            }}
          >
            <FileText className="h-4 w-4 mr-2" />
            Generate Procedure
          </Button>
        </div>
      )}
    </div>
  );
}
