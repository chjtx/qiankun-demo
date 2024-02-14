import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'sub1',
  plugins: [vue()],
  server: {
    port: 6001
  }
})
