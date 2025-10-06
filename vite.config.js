import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'bootstrap-vendor': ['react-bootstrap', 'bootstrap'],
          'icons-vendor': ['react-icons'],
          'pdf-vendor': ['react-pdf', 'pdfjs-dist'],
          'particles-vendor': ['@tsparticles/react', '@tsparticles/engine', '@tsparticles/slim', 'react-tsparticles'],
          'utils-vendor': ['axios', '@emailjs/browser', 'typewriter-effect', 'react-parallax-tilt', 'react-github-calendar', 'react-router-dom']
        }
      }
    }
  },
  assetsInclude: ['**/*.pdf'],
  optimizeDeps: {
    include: ['pdfjs-dist']
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: []
  }
})
