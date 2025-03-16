import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'     //ye kerna he

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), 
        // coma lgake react ke bad orye
  ],
})
