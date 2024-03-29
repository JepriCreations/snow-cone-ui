import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    react(),
  ],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ['prismjs'],
      noExternal: ['react-dropzone']
    },
  },
})
