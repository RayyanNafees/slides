// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      // use axios with an https proxy
      // customFetch: (url: string) => fetch(url).then(it => it.json()),
      // provider: 'google',
      // fonts: {
      //   sans: 'Roboto',
      //   mono: ['Fira Code', 'Fira Mono:400,700'],
      // },
    }),
  ],
})
