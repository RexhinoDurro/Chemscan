'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Calculator, History, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { href: '/', label: 'Home', icon: FlaskConical },
  { href: '/scan', label: 'Scan', icon: Camera },
  { href: '/calculate', label: 'Calculate', icon: Calculator },
  { href: '/history', label: 'History', icon: History },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center py-2 px-3 text-xs',
                isActive ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
