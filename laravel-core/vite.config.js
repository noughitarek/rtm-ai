import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        outDir: '../build',
    },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
            hotFile: '../hot',
        }),
        react(),
    ],
});
