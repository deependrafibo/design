/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      plugins: [react()],
      test: {
        root: 'src',
        globals: true,
        environment: 'jsdom',
        // setupFiles: ['../setupTests.ts'],
        coverage: {
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
          reportsDirectory: '../coverage',
          provider: 'istanbul',
        },
      },
    }),
  ),
);
