import includeHtml from 'vite-include-html-plugin';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [includeHtml()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
