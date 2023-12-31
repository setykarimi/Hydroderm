import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: "/src/components",
      Images: "/src/assets/images",
      Icons: "/src/assets/icons",
      Layout: "/src/layout",
    },
  },
})
