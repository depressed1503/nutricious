import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from "@tailwindcss/vite"


export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  define: {
    'process.env.VITE_DEBUG': JSON.stringify(process.env.VITE_DEBUG || 0),
  }
})
