import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { VitePWA } from 'vite-plugin-pwa'

// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA()
  ],
  define: process.env.NODE_ENV === 'development' ? { global: 'window' } : {},
  base: './',
  
})


