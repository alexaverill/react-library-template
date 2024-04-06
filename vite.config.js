import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),libInjectCss()],
  build:{
    copyPublicDir: false,
    lib:{
      entry:resolve(__dirname,'lib/main.js'),
      formats:["es"]
    },
    rollupOptions:{
      external:['react','react/jsx-runtime'],
      input:Object.fromEntries(
        glob.sync('lib/**/*.{js,jsx}').map(file => [
        relative(
                    'lib',
                     file.slice(0, file.length - extname(file).length)
                   ),
                   // The absolute path to the entry file
                   // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                   fileURLToPath(new URL(file, import.meta.url))
                 ])

      ),
      output: {
        assetFileNames:'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  }
})
