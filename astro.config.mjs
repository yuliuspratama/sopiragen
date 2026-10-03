import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://yuliuspratama.github.io',
  base: process.env.BASE_PATH || '/sopiragen',
  output: 'static',
  trailingSlash: 'always'
});
