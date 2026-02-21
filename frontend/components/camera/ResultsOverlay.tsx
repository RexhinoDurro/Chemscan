'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { useCalculationStore } from '@/lib/stores/calculationStore';
import { Camera, ArrowRight, AlertTriangle } from 'lucide-react';
import type { AnalyzeImageResponse } from '@/lib/types';

interface ResultsOverlayProps {
  result: AnalyzeImageResponse;
  onScanAgain: () => void;
}

export function ResultsOverlay({ result, onScanAgain }: ResultsOverlayProps) {
  const router = useRouter();
  const { setEquation, setQuantities } = useCalculationStore();
  const [editedEquation, setEditedEquation] = useState(result.equation);

  const handleCalculate = () => {
    setEquation(editedEquation);
    if (result.quantities?.length > 0) {
      setQuantities(result.quantities);
    }
    router.push('/calculate');
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onScanAgain} />

      {/* Slide-up card */}
      <div className="relative animate-slide-up-sheet rounded-t-3xl overflow-hidden">
        <div className="bg-dark-100/95 backdrop-blur-xl border-t border-white/10 px-6 pt-4 pb-8 pb-safe">
          {/* Handle bar */}
          <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5" />

          {/* Confidence badge */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Detected Equation</h3>
            <Badge
              variant={
                result.confidence > 0.8
                  ? 'success'
                  : result.confidence > 0.5
                  ? 'warning'
                  : 'destructive'
              }
            >
              {(result.confidence * 100).toFixed(0)}% confidence
            </Badge>
          </div>

          {/* Low confidence warning */}
          {result.confidence < 0.5 && (
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <p className="text-xs text-amber-300">Low confidence — verify the equation or retake the photo.</p>
            </div>
          )}

          {/* Editable equation */}
          <input
            type="text"
            value={editedEquation}
            onChange={(e) => setEditedEquation(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-lg text-white focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/30 mb-3"
          />

          {/* Raw text */}
          {result.raw_text && (
            <p className="text-xs text-gray-500 mb-5">
              Raw OCR: {result.raw_text}
            </p>
          )}

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onScanAgain}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-white active:bg-white/5 transition-colors"
            >
              <Camera className="h-4 w-4" />
              Scan Again
            </button>
            <button
              onClick={handleCalculate}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-500 text-white font-medium active:bg-primary-600 transition-colors"
            >
              Calculate
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
