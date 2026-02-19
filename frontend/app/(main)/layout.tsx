'use client';

import { usePathname } from 'next/navigation';
import { AuthGate } from '@/components/auth/AuthGate';
import { SubPageHeader } from '@/components/layout/SubPageHeader';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCameraView = pathname === '/';

  return (
    <AuthGate>
      {isCameraView ? (
        <div className="h-[100dvh] w-screen overflow-hidden bg-black relative">
          {children}
        </div>
      ) : (
        <div className="min-h-screen bg-dark-100">
          <SubPageHeader />
          <main className="container mx-auto px-4 py-6 max-w-2xl">
            {children}
          </main>
        </div>
      )}
    </AuthGate>
  );
}
