'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListOrdered } from 'lucide-react';

interface StepByStepProps {
  steps: string[];
}

export function StepByStep({ steps }: StepByStepProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ListOrdered className="h-5 w-5 text-primary-500" />
          <CardTitle className="text-lg">Step-by-Step Solution</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="text-sm">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
