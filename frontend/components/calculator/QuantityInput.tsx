'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import type { QuantityInput as QInput } from '@/lib/types';

interface QuantityInputProps {
  quantities: QInput[];
  onChange: (quantities: QInput[]) => void;
  reactants: string[];
}

const UNITS = ['g', 'mol', 'L', 'mL'];

export function QuantityInputForm({ quantities, onChange, reactants }: QuantityInputProps) {
  const addRow = () => {
    onChange([...quantities, { formula: reactants[0] || '', value: 0, unit: 'g' }]);
  };

  const removeRow = (index: number) => {
    onChange(quantities.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: keyof QInput, value: any) => {
    const updated = [...quantities];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm">Input Quantities</h3>
        <Button type="button" variant="outline" size="sm" onClick={addRow}>
          <Plus className="h-3 w-3 mr-1" /> Add
        </Button>
      </div>

      {quantities.map((q, i) => (
        <div key={i} className="flex gap-2 items-center">
          <select
            value={q.formula}
            onChange={(e) => updateRow(i, 'formula', e.target.value)}
            className="h-10 rounded-md border border-gray-300 px-2 text-sm min-w-[100px]"
          >
            {reactants.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <Input
            type="number"
            value={q.value || ''}
            onChange={(e) => updateRow(i, 'value', parseFloat(e.target.value) || 0)}
            placeholder="Amount"
            className="w-24"
            step="any"
          />
          <select
            value={q.unit}
            onChange={(e) => updateRow(i, 'unit', e.target.value)}
            className="h-10 rounded-md border border-gray-300 px-2 text-sm"
          >
            {UNITS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
          {q.unit === 'L' || q.unit === 'mL' ? (
            <Input
              type="number"
              value={q.concentration || ''}
              onChange={(e) => updateRow(i, 'concentration', parseFloat(e.target.value) || 0)}
              placeholder="M"
              className="w-20"
              step="any"
            />
          ) : null}
          <Button type="button" variant="ghost" size="icon" onClick={() => removeRow(i)}>
            <Trash2 className="h-4 w-4 text-red-400" />
          </Button>
        </div>
      ))}

      {quantities.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">
          Add quantities to calculate stoichiometry
        </p>
      )}
    </div>
  );
}
