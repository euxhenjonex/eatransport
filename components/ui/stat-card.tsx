import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export function StatCard({ value, label, variant = 'dark', className }: StatCardProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 rounded-2xl',
        {
          'bg-gray-900 text-white': variant === 'dark',
          'bg-white text-gray-900 shadow-lg': variant === 'light',
        },
        className
      )}
    >
      <div className="text-2xl md:text-3xl font-bold text-primary-500">{value}</div>
      <div
        className={cn(
          'text-sm',
          variant === 'dark' ? 'text-gray-400' : 'text-gray-600'
        )}
      >
        {label}
      </div>
    </div>
  );
}
