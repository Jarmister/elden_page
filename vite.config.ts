import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite' 
import UnoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({dirs: ["src/components/"]}),
    UnoCSS() ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
