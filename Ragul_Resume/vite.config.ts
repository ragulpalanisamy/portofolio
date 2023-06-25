

import { defineConfig } from 'vite';

export default defineConfig({
  // ...other configurations...
  plugins: [
    // ...other plugins...
    require('tailwindcss'),
    require('autoprefixer'),
  ],
});

