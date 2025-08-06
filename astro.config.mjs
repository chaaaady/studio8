// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  vite: {
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 1000,
    },
    css: {
      devSourcemap: false,
    },
  },
  compressHTML: true,
});