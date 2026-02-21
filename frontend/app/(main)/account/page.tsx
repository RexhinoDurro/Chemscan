'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProfile, getCalculations, deleteCalculation } from '@/lib/api/django-client';
import { useAuthStore } from '@/lib/stores/authStore';
import { User, History, Trash2, ChevronRight, Loader2, LogOut, Search } from 'lucide-react';
import type { Calculation } from '@/lib/types/index';
import type { User as UserType } from '@/lib/types/index';

export default function AccountPage() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  const [profile, setProfile] = useState<UserType | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => {})
      .finally(() => setProfileLoading(false));
  }, []);

  const loadHistory = async (p: number) => {
    setHistoryLoading(true);
    try {
      const data = await getCalculations(p);
      setCalculations(data.results);
      setTotal(data.count);
    } catch {} finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => {
    loadHistory(page);
  }, [page]);

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await deleteCalculation(id);
      setCalculations((prev) => prev.filter((c) => c.id !== id));
      setTotal((prev) => prev - 1);
    } catch {}
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const getInitials = (username: string) =>
    username
      .split(/[\s._-]+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? '')
      .join('');

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card className="bg-white/[0.06] border-white/10">
        <CardContent className="py-5">
          {profileLoading ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin text-primary-500" />
            </div>
          ) : profile ? (
            <div className="flex items-center gap-4">
              {/* Initials Avatar */}
              <div className="w-14 h-14 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary-300">
                  {getInitials(profile.username)}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{profile.username}</p>
                <p className="text-sm text-gray-400 truncate">{profile.email}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Joined {new Date(profile.date_joined).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="h-9 w-9 text-gray-400 hover:text-red-400"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 text-gray-500" />
              <p className="text-gray-400 text-sm">Could not load profile</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* History Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary-400" />
          <h2 className="text-lg font-bold text-white">History</h2>
          {!historyLoading && <Badge variant="secondary">{total}</Badge>}
        </div>

        {/* Search */}
        {!historyLoading && calculations.length > 0 && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter equations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/30"
            />
          </div>
        )}

        {historyLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
          </div>
        ) : calculations.length === 0 ? (
          <div className="text-center py-16">
            <History className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No calculations yet</p>
            <Button onClick={() => router.push('/calculate')} className="mt-4">
              Start Calculating
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {calculations.filter((c) =>
              search === '' ||
              (c.balanced_equation || c.equation).toLowerCase().includes(search.toLowerCase())
            ).map((calc) => (
              <Card
                key={calc.id}
                className="cursor-pointer hover:border-white/20 hover:bg-white/[0.07] transition-all"
                onClick={() => router.push(`/results/${calc.id}`)}
              >
                <CardContent className="py-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm truncate text-gray-200">
                      {calc.balanced_equation || calc.equation}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
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
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  </div>
                </CardContent>
              </Card>
            ))}

            {total > 20 && (
              <div className="flex justify-center gap-2 pt-4">
                <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                  Previous
                </Button>
                <span className="text-sm text-gray-400 py-2">Page {page}</span>
                <Button variant="outline" size="sm" disabled={page * 20 >= total} onClick={() => setPage(page + 1)}>
                  Next
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
