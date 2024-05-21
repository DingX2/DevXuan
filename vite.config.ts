import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

export default defineConfig({
    plugins: [mdx({ jsxImportSource: 'solid-jsx'}), solid(), tsconfigPaths()],
    build: {
        target: 'esnext',
      },
});
