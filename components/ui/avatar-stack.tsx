import { cn } from '@/lib/utils';

interface AvatarStackProps {
  count: number;
  label: string;
  className?: string;
}

export function AvatarStack({ count, label, className }: AvatarStackProps) {
  const avatarColors = [
    'bg-primary-500',
    'bg-gray-700',
    'bg-primary-600',
    'bg-gray-600',
  ];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex -space-x-3">
        {avatarColors.map((color, index) => (
          <div
            key={index}
            className={cn(
              'w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium',
              color
            )}
            style={{ zIndex: avatarColors.length - index }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>
      <div>
        <div className="text-lg font-bold text-white">{count}+</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
}
