import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: 'tamagui.config.ts',
      components: ['tamagui'],
    }),
  ].filter(Boolean),
})
