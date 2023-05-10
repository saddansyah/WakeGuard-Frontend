import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";

// Plugins
import react from '@vitejs/plugin-react-swc'
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // import mapping using @
    },
  },
})
