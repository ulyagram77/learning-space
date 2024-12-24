import { defineConfig } from 'vite';
import path from 'node:path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        courses: path.resolve(__dirname, 'courses/index.html'),
        reviews: path.resolve(__dirname, 'reviews/index.html'),
        pick_course: path.resolve(__dirname, 'pick_course/index.html'),
        selection: path.resolve(__dirname, 'selection/index.html'),
        sucess: path.resolve(__dirname, 'sucess/index.html'),
      },
    },
  },
});
