export const colors = {
    pink: '#F5E0E9',
    blue: '#D3E5EF',
    yellow: '#FDECC8',
};

export const colorTokens = {
    text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        inverse: 'var(--color-text-inverse)',
        brand: 'var(--color-text-brand)',
        danger: 'var(--color-text-danger)',
        success: 'var(--color-text-success)',
        warning: 'var(--color-text-warning)',
    },
    fill: {
        brand: 'var(--color-fill-brand)',
        'brand-weak': 'var(--color-fill-brand-weak)',
    },
    border: {
        primary: 'var(--color-border-primary)',
    },
} as const;
