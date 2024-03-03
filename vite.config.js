import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    optimizeDeps: {
      exclude: ['mui_joy_TabPanel'],
    },
    plugins: [react()],
  };
});
