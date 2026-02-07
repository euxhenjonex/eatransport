'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
  variant?: 'default' | 'numbered';
}

export function AccordionItem({ title, children, index, isOpen, onToggle, variant = 'default' }: AccordionItemProps) {
  const formattedIndex = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  if (variant === 'numbered') {
    return (
      <div
        className={cn(
          'rounded-2xl mb-3 last:mb-0 overflow-hidden',
          'transition-all duration-300 ease-out',
          isOpen ? 'bg-gray-900' : 'bg-white border border-gray-200'
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            'flex items-center gap-4 w-full py-5 px-6 text-left font-medium',
            'transition-colors duration-200 ease-out',
            isOpen ? 'text-white' : 'text-gray-900 hover:bg-gray-50'
          )}
          aria-expanded={isOpen}
        >
          {formattedIndex && (
            <span className="text-primary-500 font-bold text-lg min-w-[32px]">
              {formattedIndex}.
            </span>
          )}
          <span className="flex-1 text-lg">{title}</span>
          <svg
            className={cn(
              'w-5 h-5 transition-transform duration-300 ease-out',
              isOpen ? 'rotate-180 text-white' : 'text-gray-400'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={cn(
            'grid transition-all duration-300',
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-5 text-gray-300 pl-[72px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-6 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-out"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform duration-300 ease-out',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4 text-muted">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  className?: string;
  variant?: 'default' | 'numbered';
}

export function Accordion({ items, className, variant = 'default' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (variant === 'numbered') {
    return (
      <div className={cn('space-y-0', className)}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            variant="numbered"
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('bg-card rounded-xl border border-border', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
