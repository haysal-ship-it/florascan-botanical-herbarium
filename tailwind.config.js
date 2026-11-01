/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Redesign Semantic Tokens
        canvas: 'var(--color-canvas)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          muted: 'var(--color-surface-muted)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        action: {
          primary: 'var(--color-action-primary)',
          'primary-hover': 'var(--color-action-primary-hover)',
          'primary-text': 'var(--color-action-primary-text)',
        },
        clay: {
          DEFAULT: 'var(--color-accent-clay)',
          subtle: 'var(--color-accent-clay-subtle)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
        status: {
          success: 'var(--color-success)',
          'success-bg': 'var(--color-success-bg)',
          caution: 'var(--color-caution)',
          'caution-bg': 'var(--color-caution-bg)',
          error: 'var(--color-error)',
          'error-bg': 'var(--color-error-bg)',
          disabled: 'var(--color-disabled)',
          'disabled-bg': 'var(--color-disabled-bg)',
        },

        // Backward compatibility mappings
        parchment: {
          50: 'var(--color-canvas)',
          100: 'var(--color-surface)',
          200: 'var(--color-surface-muted)',
          300: 'var(--color-border-strong)',
          DEFAULT: 'var(--color-canvas)',
        },
        botanical: {
          forest: '#14281D',
          emerald: 'var(--color-action-primary)',
          'emerald-hover': 'var(--color-action-primary-hover)',
          'emerald-light': '#47A977',
          sage: '#65836C',
          'sage-light': '#EBF1ED',
          terracotta: 'var(--color-accent-clay)',
          'terracotta-light': 'var(--color-accent-clay-subtle)',
          solar: 'var(--color-caution)',
          'solar-light': 'var(--color-caution-bg)',
          crimson: 'var(--color-error)',
          'crimson-light': 'var(--color-error-bg)',
        },
        obsidian: {
          950: '#0B100D',
          900: '#131B16',
          800: '#1B2720',
          700: '#223128',
          600: '#374E41',
        },
        ink: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'control': '8px',
        'panel': '16px',
        'plate': '24px',
      },
      boxShadow: {
        'tactile-sm': '0 1px 2px rgba(23, 32, 27, 0.05)',
        'tactile-md': '0 4px 12px rgba(23, 32, 27, 0.08), 0 1px 3px rgba(23, 32, 27, 0.04)',
        'tactile-lg': '0 12px 32px rgba(23, 32, 27, 0.12), 0 2px 6px rgba(23, 32, 27, 0.04)',
        'inner-subtle': 'inset 0 1px 2px rgba(23, 32, 27, 0.06)',
      },
      animation: {
        'scan-line': 'scan 2.8s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0%)', opacity: '0.4' },
          '50%': { opacity: '0.95' },
          '100%': { transform: 'translateY(100%)', opacity: '0.4' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.98)' },
        },
      }
    },
  },
  plugins: [],
};