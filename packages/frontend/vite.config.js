import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '', // relative path to support http server from parent folder

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        app: 'src/app.html',
      },
    },
  },

  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
})
