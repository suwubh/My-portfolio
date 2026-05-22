import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["react-icons"],
          "utils-vendor": ["@emailjs/browser", "react-github-calendar"],
        },
      },
    },
  },
  assetsInclude: ["**/*.pdf"],
});
