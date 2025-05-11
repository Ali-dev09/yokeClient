
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '64e0dcde-5e72-437c-afb7-608c02d07fec-00-1wmi2z8jfkaq9.sisko.replit.dev'
    ]
  }
})
