import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com', // Cambia esto por tu dominio si deployas
  integrations: [tailwind()],
});