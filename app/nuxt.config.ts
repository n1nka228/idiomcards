// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/ui',
      "@nuxt/image",
      'nuxt-swiper',
  ],
  image: {
    domains: ['idiomcards.ru'],
    screens: {
          'xs': 320,
          'sm': 640,
          'md': 768,
          'lg': 1024,
          'xl': 1280,
          'xxl': 1536,
          '2xl': 1536
      },
  },
  devtools: { enabled: false }
})