import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.PUBLIC_SITE_URL || 'http://localhost:3000';

export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
});
