import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Use existing assets folder as publicDir so your images work without moving
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, '../assets')
})


