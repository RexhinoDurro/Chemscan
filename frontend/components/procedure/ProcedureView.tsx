'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock, Beaker } from 'lucide-react';
import type { ProcedureResponse } from '@/lib/types';

interface ProcedureViewProps {
  procedure: ProcedureResponse;
}

export function ProcedureView({ procedure }: ProcedureViewProps) {
  return (
    <div className="space-y-4" id="procedure-content">
      <Card>
        <CardHeader>
          <CardTitle>{procedure.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            <span>{procedure.estimated_time}</span>
          </div>
        </CardHeader>
      </Card>

      {procedure.safety_warnings.length > 0 && (
        <Card className="border-amber-500/30">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <CardTitle className="text-lg">Safety Warnings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {procedure.safety_warnings.map((w, i) => (
                <li key={i} className="text-sm text-amber-300 flex gap-2">
                  <span className="text-amber-400">!</span> {w}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Beaker className="h-5 w-5 text-primary-400" />
            <CardTitle className="text-lg">Materials</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {procedure.materials.map((m, i) => (
              <li key={i} className="text-sm flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {m.item}
                {m.quantity && <Badge variant="secondary" className="text-xs">{m.quantity}</Badge>}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Procedure Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {procedure.steps.map((step) => (
              <li key={step.number} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-500 text-white text-sm flex items-center justify-center font-bold glow-cyan">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm text-gray-200">{step.instruction}</p>
                  {step.notes && (
                    <p className="text-xs text-gray-500 mt-1 italic">{step.notes}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {procedure.cleanup.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cleanup</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {procedure.cleanup.map((c, i) => (
                <li key={i} className="text-sm flex gap-2 text-gray-300">
                  <span className="text-gray-500">{i + 1}.</span> {c}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
