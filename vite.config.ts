import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/setupTests.ts', 
    deps: {
      inline: ['@mui/x-data-grid'],
    },
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['node_modules/**'], 
    moduleNameMapper: {
      '^@mui/x-data-grid/esm/index.css$': 'identity-obj-proxy',
      '\\.css$': 'identity-obj-proxy',
    },
  },
});