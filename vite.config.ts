import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    logLevel: 'silent', // Suppresses warnings/errors
  },
  build: {
    minify: false,
  },
 
  plugins: [react()],
})
