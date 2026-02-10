'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';
import { Button } from '@/components/ui/button';
import { FlaskConical, LogOut, User } from 'lucide-react';

export function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary-600">
          <FlaskConical className="h-6 w-6" />
          <span className="text-xl">ChemScan</span>
        </Link>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600 hidden sm:inline">
                {user?.username || user?.email}
              </span>
              <Button variant="ghost" size="icon" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-1" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
