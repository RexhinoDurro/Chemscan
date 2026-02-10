'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { SafetyBadges } from '@/components/calculator/SafetyBadges';
import { StepByStep } from '@/components/calculator/StepByStep';
import { ProcedureView } from '@/components/procedure/ProcedureView';
import { ProcedureExport } from '@/components/procedure/ProcedureExport';
import { getCalculation } from '@/lib/api/django-client';
import { ArrowLeft, FileText, Loader2 } from 'lucide-react';
import type { Calculation } from '@/lib/types';

export default function ResultsPage() {
  const params = useParams();
  const router = useRouter();
  const [calc, setCalc] = useState<Calculation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const id = Number(params.id);
    if (!id) return;
    getCalculation(id)
      .then(setCalc)
      .catch(() => setError('Failed to load calculation'))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  if (error || !calc) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">{error || 'Calculation not found'}</p>
        <Button onClick={() => router.back()} variant="outline" className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button onClick={() => router.back()} variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold">Results</h1>
      </div>

      {calc.result_data && <ResultsDisplay result={calc.result_data} />}
      {calc.result_data?.steps && <StepByStep steps={calc.result_data.steps} />}
      {calc.safety_data && Object.keys(calc.safety_data).length > 0 && (
        <SafetyBadges safety={calc.safety_data as any} />
      )}
      {calc.procedure_data && Object.keys(calc.procedure_data).length > 0 && (
        <>
          <ProcedureView procedure={calc.procedure_data as any} />
          <ProcedureExport procedure={calc.procedure_data as any} />
        </>
      )}
    </div>
  );
}
