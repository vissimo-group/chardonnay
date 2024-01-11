/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    reporters: ['html'],
    outputFile: './coverage/index.html',
    coverage: {
      include: ['src/components/**/*.tsx'],
      reportsDirectory: 'coverage',
      enabled: true,
    },
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
})
