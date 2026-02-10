'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AuthGuard } from '@/components/layout/AuthGuard';
import { getCalculations, deleteCalculation } from '@/lib/api/django-client';
import { History, Trash2, ChevronRight, Loader2 } from 'lucide-react';
import type { Calculation } from '@/lib/types';

function HistoryContent() {
  const router = useRouter();
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const loadData = async (p: number) => {
    setLoading(true);
    try {
      const data = await getCalculations(p);
      setCalculations(data.results);
      setTotal(data.count);
    } catch {} finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(page);
  }, [page]);

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await deleteCalculation(id);
      setCalculations((prev) => prev.filter((c) => c.id !== id));
    } catch {}
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <History className="h-5 w-5 text-primary-600" />
        <h1 className="text-xl font-bold">History</h1>
        <Badge variant="secondary">{total}</Badge>
      </div>

      {calculations.length === 0 ? (
        <div className="text-center py-20">
          <History className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No calculations yet</p>
          <Button onClick={() => router.push('/calculate')} className="mt-4">
            Start Calculating
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          {calculations.map((calc) => (
            <Card
              key={calc.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push(`/results/${calc.id}`)}
            >
              <CardContent className="py-4 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm truncate">
                    {calc.balanced_equation || calc.equation}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(calc.created_at).toLocaleDateString(undefined, {
                      year: 'numeric', month: 'short', day: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => handleDelete(calc.id, e)}
                    className="h-8 w-8"
                  >
                    <Trash2 className="h-3 w-3 text-red-400" />
                  </Button>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}

          {total > 20 && (
            <div className="flex justify-center gap-2 pt-4">
              <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Previous
              </Button>
              <span className="text-sm text-gray-500 py-2">Page {page}</span>
              <Button variant="outline" size="sm" disabled={page * 20 >= total} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function HistoryPage() {
  return (
    <AuthGuard>
      <HistoryContent />
    </AuthGuard>
  );
}
