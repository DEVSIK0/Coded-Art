import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    // Esto obliga a Vite a refrescar la web si cualquier shader cambia
    FullReload(['public/**/*.frag', 'public/**/*.vert']),
  ],
});