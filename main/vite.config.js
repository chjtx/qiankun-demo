import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, `dist/main`)
  },
  plugins: [
    alias({
      entries: [
        { find: 'common', replacement: resolve(__dirname, '../common') },
        { find: 'sub1', replacement: resolve(__dirname, '../sub1/src/share-components') },
        { find: 'sub2', replacement: resolve(__dirname, '../sub2/src/share-components') },
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
    cors: true
  }
})
