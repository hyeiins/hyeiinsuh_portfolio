import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hyeiinsuh_portfolio/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['swiper', 'swiper-container', 'swiper-slide'].includes(tag),
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@use "@/assets/scss/global.scss";`,
        },
    },
  },
})
