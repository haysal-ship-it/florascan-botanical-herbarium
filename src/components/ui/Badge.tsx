import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'caution' | 'danger' | 'clay' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium select-none tracking-wide';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 rounded-full gap-1',
    md: 'text-xs px-2.5 py-1 rounded-full gap-1.5',
  };

  const variantStyles = {
    default:
      'bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]',
    success:
      'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/20',
    caution:
      'bg-[var(--color-caution-bg)] text-[var(--color-caution)] border border-[var(--color-caution)]/20',
    danger:
      'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error)]/20',
    clay:
      'bg-[var(--color-accent-clay-subtle)] text-[var(--color-accent-clay)] border border-[var(--color-accent-clay)]/20',
    outline:
      'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)]',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
