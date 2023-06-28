import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ssr from 'vite-plugin-ssr/plugin'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'

const tamaguiConfig = {
  config: 'tamagui.config.ts',
  components: ['@tamagui/web'],
  useReactNativeWebLite: true,
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    //tamaguiExtractPlugin(tamaguiConfig),
    ssr(),
  ].filter(Boolean),
})
