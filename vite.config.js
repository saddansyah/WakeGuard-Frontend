import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";

// Plugins
import react from '@vitejs/plugin-react-swc'
import viteSvgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

const manifestPlugin = {
  registerType: 'prompt',
  includeAssets: ['icon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    "name": "Wakeguard - Drowsiness Detector App",
    "short_name": "Wakeguard",
    "theme_color": "#0F8494",
    "background_color": "#fafafa",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "orientation": "portrait",
    "icons": [
      {
        "src": "/icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable any"
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr(), VitePWA(manifestPlugin)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // import mapping using @
    },
  },
})
