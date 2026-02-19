import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary-500/15 text-primary-300 border-primary-500/30',
        secondary: 'bg-white/10 text-gray-300 border-white/10',
        destructive: 'bg-red-500/15 text-red-300 border-red-500/30',
        warning: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        success: 'bg-green-500/15 text-green-300 border-green-500/30',
        outline: 'text-gray-300 border-white/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
