import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  proxy: {
    "/B551011/KorService1": {
      target: "http://apis.data.go.kr",
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(/^\/B551011\/KorService1/, "/B551011/KorService1"),
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
