import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace 'your-repo-name' with your actual repo name
export default defineConfig({
  base: '/semicon-25/',
  plugins: [vue()],
})
