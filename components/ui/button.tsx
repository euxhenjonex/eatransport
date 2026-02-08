import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-2xl',
          'transition-all duration-200 ease-out',
          'hover:scale-[1.02] active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700': variant === 'primary',
            'bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300': variant === 'secondary',
            'text-gray-700 hover:bg-gray-100 active:bg-gray-200': variant === 'ghost',
            'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100': variant === 'outline',
            'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700': variant === 'dark',
            'border-2 border-white text-white hover:bg-white/10 active:bg-white/20': variant === 'outline-light',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
