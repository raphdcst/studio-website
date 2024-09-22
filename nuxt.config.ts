// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
  ],

  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },

  typescript: {
    shim: false
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '~/tailwind.config.ts',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  googleFonts: {
    families: {
      'Rubik': true,
      'Protest Guerrilla': true
    }
  },

  compatibilityDate: '2024-09-22',
})