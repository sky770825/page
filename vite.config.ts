import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 重要：這裡必須設定為您的 GitHub Repository 名稱，因為您的網址是 .../page/
  base: '/page/',
})