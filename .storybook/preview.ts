import type { Preview } from 'storybook-solidjs-vite';
import '../src/normalize.css';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
            },
        },
        backgrounds: {
            default: 'canvas',
            values: [
                { name: 'canvas', value: '#ffffff' },
                { name: 'soft-gray', value: '#f3f4f6' },
                { name: 'dark', value: '#111827' },
            ],
        },
    },
};

export default preview;
