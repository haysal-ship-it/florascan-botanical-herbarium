import React from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertOctagon } from 'lucide-react';

export interface NoticeProps {
  type?: 'info' | 'success' | 'caution' | 'error';
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const Notice: React.FC<NoticeProps> = ({
  type = 'info',
  title,
  children,
  action,
  className = '',
}) => {
  const typeConfig = {
    info: {
      icon: <Info className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />,
      container:
        'bg-[var(--color-surface)] border-[var(--color-border-subtle)] text-[var(--color-text-primary)]',
    },
    success: {
      icon: <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] shrink-0 mt-0.5" />,
      container:
        'bg-[var(--color-success-bg)] border-[var(--color-success)]/30 text-[var(--color-text-primary)]',
    },
    caution: {
      icon: <AlertTriangle className="w-5 h-5 text-[var(--color-caution)] shrink-0 mt-0.5" />,
      container:
        'bg-[var(--color-caution-bg)] border-[var(--color-caution)]/30 text-[var(--color-text-primary)]',
    },
    error: {
      icon: <AlertOctagon className="w-5 h-5 text-[var(--color-error)] shrink-0 mt-0.5" />,
      container:
        'bg-[var(--color-error-bg)] border-[var(--color-error)]/30 text-[var(--color-text-primary)]',
    },
  };

  const { icon, container } = typeConfig[type];

  return (
    <div
      role="region"
      aria-label={title || `${type} notice`}
      className={`rounded-panel border p-4 flex gap-3 text-sm ${container} ${className}`}
    >
      {icon}
      <div className="flex-1 min-w-0">
        {title && <h4 className="font-semibold mb-1 text-[var(--color-text-primary)]">{title}</h4>}
        <div className="text-[var(--color-text-secondary)] leading-relaxed text-xs sm:text-sm">
          {children}
        </div>
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
};
