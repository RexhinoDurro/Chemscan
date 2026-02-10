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
import { Calculator, Shield, Save, FileText, Loader2 } from 'lucide-react';
import type { QuantityInput, CalculationResponse, SafetyResponse } from '@/lib/types';

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
        safety_data: safetyResult || {},
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
        <Calculator className="h-5 w-5 text-primary-600" />
        <h1 className="text-xl font-bold">Calculate</h1>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">{error}</div>
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
