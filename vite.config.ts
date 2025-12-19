///<reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

const port = 5173;
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Use empty string as the 3rd argument to load all environment variables, not
  // just the ones prefixed with VITE_
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        include: ['src'],
        outDir: 'dist',
        rollupTypes: true,
      }),
    ],
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'TrumioDesignSystem',
        fileName: (format) => `trumio-design-system.${format}.js`,
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          exports: 'named',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'styles.css';
            return assetInfo.name;
          },
        },
      },
      // Ensure CSS is extracted to a separate file
      cssCodeSplit: false,
      // Ensure all CSS is processed
      cssMinify: true,
    },
    css: {
      postcss: './postcss.config.js',
    },
    server: {
      port,
      proxy: {
        '/api': {
          target: env.API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    test: {},
  };
});
