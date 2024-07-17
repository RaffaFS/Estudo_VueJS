import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// Esse é o arquivo de configurações do "vite", que é o servidor e bundler
// utilizado pelo Vue. Raramente mexemos aqui, mas podemos imaginar como
// algo entre o main.js e o package.json