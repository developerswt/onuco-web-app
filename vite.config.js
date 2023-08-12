// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
  
//   define: process.env.NODE_ENV === 'development' ? { global: 'window' } : {},
  
  
// })
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['devextreme', 'devextreme-vue'],
  },
  build: {
    lib: {
      entry: './src/components/index.ts',
      name: 'MyComponentLibrary',
      formats: ["es", "cjs", "umd"],
      fileName: format => `my-library-vue-ts.${format}.js`
    },
    rollupOptions: {
      cache: false,
      // make sure to externalize Vue
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue'
        },
        exports: "named",
      },
    },
  },
});

