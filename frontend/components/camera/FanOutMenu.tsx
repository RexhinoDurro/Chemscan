'use client';

import { useRouter } from 'next/navigation';
import { BookOpen, History, Calculator, LogOut } from 'lucide-react';
import { useAuthStore } from '@/lib/stores/authStore';

interface FanOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Library', icon: BookOpen, href: '/calculate' },
  { label: 'History', icon: History, href: '/history' },
  { label: 'Calculate', icon: Calculator, href: '/calculate' },
  { label: 'Logout', icon: LogOut, href: null },
];

export function FanOutMenu({ isOpen, onClose }: FanOutMenuProps) {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  if (!isOpen) return null;

  const handleItemClick = (item: typeof menuItems[number]) => {
    onClose();
    if (item.href) {
      router.push(item.href);
    } else {
      logout();
    }
  };

  // Arc from -135deg to -45deg (upper-right quadrant from + button perspective)
  const startAngle = -135;
  const endAngle = -45;
  const radius = 120;
  const count = menuItems.length;

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-30 animate-fade-in-fast"
        onClick={onClose}
      />

      {/* Menu items anchored above the + button */}
      <div className="absolute bottom-28 right-8 z-40 pb-safe">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          const angle = startAngle + (endAngle - startAngle) * (i / (count - 1));
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={item.label}
              onClick={() => handleItemClick(item)}
              className="absolute flex flex-col items-center gap-1 animate-fan-out"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[10px] text-white font-medium whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
