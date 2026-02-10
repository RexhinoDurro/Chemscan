'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Loader2 } from 'lucide-react';

interface EquationInputProps {
  onSubmit: (equation: string) => void;
  isLoading?: boolean;
  initialValue?: string;
}

export function EquationInput({ onSubmit, isLoading, initialValue = '' }: EquationInputProps) {
  const [equation, setEquation] = useState(initialValue);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!equation.trim()) {
      setError('Please enter a chemical equation');
      return;
    }
    if (!equation.includes('->') && !equation.includes('=') && !equation.includes('→')) {
      setError('Use -> or = to separate reactants and products');
      return;
    }
    setError('');
    onSubmit(equation.trim());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Chemical Equation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="e.g., H2 + O2 -> H2O"
              className="text-lg font-mono"
              disabled={isLoading}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="flex gap-2 text-xs text-gray-500">
            <span>Use <code className="bg-gray-100 px-1 rounded">-&gt;</code> between reactants and products</span>
            <span>Use <code className="bg-gray-100 px-1 rounded">+</code> between compounds</span>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <ArrowRight className="h-4 w-4 mr-2" />
            )}
            Balance & Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
