'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ProcedureView } from '@/components/procedure/ProcedureView';
import { ProcedureExport } from '@/components/procedure/ProcedureExport';
import { Button } from '@/components/ui/button';
import { generateProcedure } from '@/lib/api/ai-client';
import { useCalculationStore } from '@/lib/stores/calculationStore';
import { Loader2, FileText } from 'lucide-react';
import type { ProcedureResponse } from '@/lib/types';

export default function ProcedurePage() {
  const params = useParams();
  const store = useCalculationStore();
  const [procedure, setProcedure] = useState<ProcedureResponse | null>(store.procedureResult);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!store.equation) {
      setError('No equation to generate procedure for');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const hazards = store.safetyResult?.hazards?.map((h) => ({
        formula: h.formula,
        severity: h.severity,
      }));
      const result = await generateProcedure({
        equation: store.equation,
        balanced_equation: store.balanceResult?.balanced_equation,
        quantities: store.quantities,
        hazards,
      });
      setProcedure(result);
      store.setProcedureResult(result);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate procedure');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id === 'new' && !procedure && store.equation) {
      handleGenerate();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
        <p className="text-gray-500">Generating lab procedure...</p>
        <p className="text-xs text-gray-400">This may take a few seconds</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-red-500">{error}</p>
        <Button onClick={handleGenerate}>
          <FileText className="h-4 w-4 mr-2" /> Try Again
        </Button>
      </div>
    );
  }

  if (!procedure) {
    return (
      <div className="text-center py-20 space-y-4">
        <FileText className="h-12 w-12 text-gray-300 mx-auto" />
        <p className="text-gray-500">No procedure generated yet</p>
        <Button onClick={handleGenerate} disabled={!store.equation}>
          Generate Procedure
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Lab Procedure</h1>
        <ProcedureExport procedure={procedure} />
      </div>
      <ProcedureView procedure={procedure} />
    </div>
  );
}
