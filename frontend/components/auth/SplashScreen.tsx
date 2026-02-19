'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-dark-200 flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        {/* Icon */}
        <div className="glass-accent rounded-full p-6 mb-8 animate-pulse-slow">
          <Image src="/app_logo.png" alt="ChemScan" width={64} height={64} className="rounded-2xl" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-glow mb-2">ChemScan</h1>
        <p className="text-gray-400 mb-12 text-center">Photomath for Chemistry</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-64 animate-slide-up">
          <Link href="/login">
            <Button className="w-full h-12 text-base bg-primary-500 hover:bg-primary-400 shadow-lg shadow-primary-500/20">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="w-full h-12 text-base border-white/10 bg-white/5 hover:bg-white/10 text-gray-200">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
