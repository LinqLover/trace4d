import { defineConfig } from 'vite'
import customCjsToEsmPlugin from './customCjsToEsmPlugin'

export default defineConfig({
  root: 'src',
  base: '', // relative path to support http server from parent folder

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  esbuild: {
    supported: {
      'top-level-await': true
    },
  },

  plugins: [customCjsToEsmPlugin()],
})
