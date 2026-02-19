'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, ShieldAlert } from 'lucide-react';
import type { SafetyResponse } from '@/lib/types';
import { severityColor, formatPPE } from '@/lib/utils/formatting';

interface SafetyBadgesProps {
  safety: SafetyResponse;
}

export function SafetyBadges({ safety }: SafetyBadgesProps) {
  const SeverityIcon = safety.overall_severity === 'red' ? ShieldAlert :
    safety.overall_severity === 'amber' ? AlertTriangle : Shield;

  return (
    <Card className={`border-2 ${safety.overall_severity === 'red' ? 'border-red-500/30' : safety.overall_severity === 'amber' ? 'border-amber-500/30' : 'border-green-500/30'}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <SeverityIcon className={`h-5 w-5 ${safety.overall_severity === 'red' ? 'text-red-400' : safety.overall_severity === 'amber' ? 'text-amber-400' : 'text-green-400'}`} />
          <CardTitle className="text-lg">Safety Assessment</CardTitle>
          <Badge variant={safety.overall_severity === 'red' ? 'destructive' : safety.overall_severity === 'amber' ? 'warning' : 'success'}>
            {safety.overall_severity.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {safety.combination_warnings.length > 0 && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <h4 className="font-bold text-red-300 mb-1">Dangerous Combinations</h4>
            {safety.combination_warnings.map((w, i) => (
              <p key={i} className="text-sm text-red-300">{w.warning}</p>
            ))}
          </div>
        )}

        <div className="space-y-2">
          {safety.hazards.map((h) => (
            <div key={h.formula} className={`rounded-lg p-3 border ${severityColor(h.severity)}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono font-bold text-gray-100">{h.formula}</span>
                <span className="text-sm text-gray-400">({h.name})</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-1">
                {h.ghs_categories.map((cat) => (
                  <Badge key={cat} variant="outline" className="text-xs">{cat}</Badge>
                ))}
              </div>
              <ul className="text-xs space-y-0.5 text-gray-300">
                {h.hazard_statements.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-medium text-sm mb-2 text-gray-300">Required PPE</h4>
          <div className="flex flex-wrap gap-1">
            {safety.recommended_ppe.map((ppe) => (
              <Badge key={ppe} variant="secondary">{formatPPE(ppe)}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
