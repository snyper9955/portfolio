import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
    
     safelist: [
    "hover:text-white",
    "hover:text-blue-500",
    "hover:text-pink-500",
    "hover:text-yellow-400",
    "hover:text-red-500",
  ],
 theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
