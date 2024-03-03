import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    build: {
      outDir: resolve(__dirname, `../main/dist/${env.VITE_APP_NAME}`),
    },
    plugins: [
      alias({
        entries: [
          { find: 'common', replacement: resolve(__dirname, '../common') }
        ]
      }),
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      port: 6001
    }
  }
})
