// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/ui',
      "@nuxt/image",
      'nuxt-swiper',
  ],
  image: {
    domains: ['idiomcards.ru']
  },
  devtools: { enabled: false }
})