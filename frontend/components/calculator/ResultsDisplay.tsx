'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { CalculationResponse } from '@/lib/types';
import { formatFormula } from '@/lib/utils/formatting';

interface ResultsDisplayProps {
  result: CalculationResponse;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Results</CardTitle>
        <p
          className="text-lg font-mono equation-display"
          dangerouslySetInnerHTML={{
            __html: result.balanced_equation
              .replace(/(\d+)(?=[A-Z(])/g, '<span class="text-primary-400 font-bold">$1</span>')
              .replace(/([A-Z][a-z]?)(\d+)/g, '$1<sub>$2</sub>'),
          }}
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2 text-gray-300">Limiting Reagent</h4>
          <Badge variant="warning">{result.limiting_reagent}</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-gray-400">Compound</th>
                <th className="text-right py-2 px-2 text-gray-400">Moles</th>
                <th className="text-right py-2 px-2 text-gray-400">Grams</th>
                <th className="text-center py-2 px-2 text-gray-400">Role</th>
              </tr>
            </thead>
            <tbody>
              {result.results.map((r) => (
                <tr key={r.formula} className="border-b border-white/5 last:border-0">
                  <td
                    className="py-2 px-2 font-mono text-gray-200"
                    dangerouslySetInnerHTML={{ __html: formatFormula(r.formula) }}
                  />
                  <td className="text-right py-2 px-2 text-gray-300">{r.moles.toFixed(4)}</td>
                  <td className="text-right py-2 px-2 text-gray-300">{r.grams.toFixed(4)}</td>
                  <td className="text-center py-2 px-2">
                    {r.is_limiting && <Badge variant="warning" className="text-xs">Limiting</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
