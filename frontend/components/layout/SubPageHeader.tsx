'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export function SubPageHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 glass-strong">
      <div className="container mx-auto flex h-12 items-center px-4 gap-3">
        <button
          onClick={() => router.push('/')}
          className="p-1 -ml-1 rounded-lg hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <div className="flex items-center gap-2">
          <Image src="/app_logo.png" alt="ChemScan" width={20} height={20} className="rounded" />
          <span className="text-sm font-semibold text-primary-400">ChemScan</span>
        </div>
      </div>
    </header>
  );
}
