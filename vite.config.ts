import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',
  resolve: {
    alias: {
      "@/": join(__dirname, 'src/')
    }
  },
  build: {
    outDir: join(__dirname, './dist')
  }
})
