import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      const timer = setTimeout(() => {
        sheetRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        clearTimeout(timer);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-title"
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center sm:p-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Sheet panel */}
      <div
        ref={sheetRef}
        tabIndex={-1}
        className="relative w-full sm:max-w-md bg-[var(--color-surface-elevated)] border-t sm:border border-[var(--color-border-subtle)] rounded-t-3xl sm:rounded-panel shadow-tactile-lg max-h-[85vh] flex flex-col z-10 focus-ring overflow-hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 1rem)' }}
      >
        {/* Mobile handle indicator */}
        <div className="w-12 h-1 bg-[var(--color-border-strong)] rounded-full mx-auto mt-3 sm:hidden shrink-0" />

        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-[var(--color-border-subtle)]">
          <div>
            <h2 id="sheet-title" className="font-serif text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
              {title}
            </h2>
            {description && (
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close sheet"
            className="p-2 -mr-2 -mt-2 rounded-control text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] focus-ring min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="p-5 overflow-y-auto flex-1 overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  );
};
