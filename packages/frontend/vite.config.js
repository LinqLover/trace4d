import { defineConfig } from 'vite'
import customCjsToEsmPlugin from './customCjsToEsmPlugin'

export default defineConfig({
  base: '', // relative path to support http server from parent folder

  esbuild: {
    supported: {
      'top-level-await': true
    },
  },

  plugins: [customCjsToEsmPlugin()],
})
