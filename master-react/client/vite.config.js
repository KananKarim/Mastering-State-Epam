import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import vueJsx from '@vitejs/plugin-vue-jsx'
import jest from '@vitejs/plugin-jest'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "jest": {
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  },
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }

})
