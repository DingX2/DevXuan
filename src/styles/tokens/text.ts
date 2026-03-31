export type TextRole = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'brand' | 'danger' | 'success' | 'warning';

export type TextVariant = 'default' | 'weak' | 'alt';

export const textColorTokens = {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    inverse: 'var(--color-text-inverse)',
    brand: 'var(--color-text-brand)',
    danger: 'var(--color-text-danger)',
    success: 'var(--color-text-success)',
    warning: 'var(--color-text-warning)',
} as const;

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const textSizeTokens = {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
} as const;
