/**
 * Tailwind CSS v4 (Astro) usa configuração CSS-first.
 * O plugin real é carregado em `src/styles/global.css` via:
 *   @import "tailwindcss-animated";
 *
 * Este arquivo fica como referência de conteúdo/tema do projeto.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
