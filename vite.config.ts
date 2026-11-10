/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /AboutMeWebsite/; dev and tests run at root
  base: command === 'build' ? '/AboutMeWebsite/' : '/',
  plugins: [react()],
  build: { outDir: 'build' },
  test: { environment: 'jsdom', globals: true, setupFiles: './src/setupTests.ts' },
}));
