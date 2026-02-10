'use client';

import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { useAuthStore } from '@/lib/stores/authStore';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { hydrate } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6 pb-20 max-w-2xl">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
