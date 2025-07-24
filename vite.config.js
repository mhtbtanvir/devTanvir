import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Also fixed spelling: tailwinndcss ➝ tailwindcss

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),]
})
