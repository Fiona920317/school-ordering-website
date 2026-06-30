import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  },
  base: "/school-ordering-website/",

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/variables.scss" as *;`,
      },
    },
  },
});
