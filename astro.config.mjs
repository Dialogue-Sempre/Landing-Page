// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/login': 'https://app.dialoguetech.com.br/login',
    '/cadastro': 'https://app.dialoguetech.com.br/cadastro',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});