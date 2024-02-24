import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    build: {
      outDir: resolve(__dirname, `../main/dist/${env.VITE_APP_NAME}`),
    },
    plugins: [vue()],
    server: {
      port: 6001
    }
  }
})
