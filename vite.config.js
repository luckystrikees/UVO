import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // <-- This tells Vite to look at the root of unitedvoices.online
  plugins: [
    react(),
    tailwindcss(),
  ],
})