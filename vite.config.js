import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig( {
  path: '/Stopwatch_React/',
  plugins: [ react() ],
} )
