// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')  // Define '@' como alias para 'src'
      }
    }
  }
});
