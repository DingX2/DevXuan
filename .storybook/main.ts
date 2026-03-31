import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import solid from 'vite-plugin-solid';
import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
    framework: {
        name: 'storybook-solidjs-vite',
        options: {},
    },
    staticDirs: ['../public'],
    viteFinal: async (configFromStorybook) =>
        mergeConfig(configFromStorybook, {
            plugins: [solid(), tsconfigPaths()],
        }),
};

export default config;
