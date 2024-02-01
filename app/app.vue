<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
useSeoMeta({
  title: 'Идиомы на каждый день',
  ogTitle: 'Идиомы на каждый день',
  description: 'Идиомы яяялялялялял',
  ogDescription: 'Идиомы яяялялялялял',
  //ogImage: 'https://example.com/image.png',
  //twitterCard: 'summary_large_image',
})
const colorMode = useColorMode()
const page = ref(1)
const cards = ref([
  { front_src: "/crocodale_01.png", back_src: "/crocodale_02.png", title: "crocodale tears", info:"В чём разница? " +
        "Tear vs Tear. Tear – слеза  /существительное/. Tear – рвать, рваться, разрывать, срывать, отрывать, драть  /глагол", badges: ["#color","#food","#animals"]},
  { front_src: "/pasta_01.png", back_src: "/pasta_02.png", title: "bad hair day", info:"Русский аналог: встать не с той ноги", badges: ["#body","#food"]},
  { front_src: "/blue_01.png", back_src: "/blue_02.png", title: "feel blue", info:"В лирике: The Beatles - Baby's In Black. Oh dear, what can I do?\n" +
        "Baby's in black and I'm feeling blue. Она в чёрном, а я в печали. ", badges: ["#color","#emotions"]},
  { front_src: "/chess_01.png", back_src: "/chess_02 (3).png", title: "big cheese", info:"Русский аналог: большая шишка", badges: ["#food"]},
  { front_src: "/cloud_01.png", back_src: "/cloud_02.png", title: "head in the clouds", info:"Русский аналог: витать в облаках", badges: ["#weather"]},
  { front_src: "/promise_01.png", back_src: "/promise_02.png", title: "pinky promise", info:"В чём разница? Pinky vs Pinky. " +
        "Pinky – мизинец  /существительное/ Pinky – розовый  /прилагательное/ ", badges: ["#body"]},
  { front_src: "/rainbow_01.png", back_src: "/rainbow_02.png", title: "chasing the rainbow", info:"Русский аналог: дотянуться до звёзд", badges: ["#weather"]},
  { front_src: "/fingers_01.png", back_src: "/fingers_02.png", title: "green fingers", info:"Русский аналог: золотые руки", badges: ["#body", "#color"]},
  { front_src: "/handly_01.png", back_src: "/handly_02.png", title: "come in handly", info:"Русский аналог: как нельзя кстати", badges: ["#body"]},
])
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
  <ClientOnly>
    <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
  <UContainer>
    <UCard v-for="card in cards.slice((page - 1) * 5, page * 5)">
      <template #header>
        <swiper
            :effect="'flip'"
            :loop="true"
            :grabCursor="true"
            :pagination="false"
            :navigation="false"
            :modules="[SwiperEffectFlip]"
            class="mySwiper"
        >
          <swiper-slide>
            <NuxtImg
                class="w-full rounded"
                :src="card.front_src"
                alt="Sunset in the mountains"
            />
          </swiper-slide>
          <swiper-slide>
            <NuxtImg
                class="w-full rounded"
                :src="card.back_src"
                alt="Sunset in the mountains"
            />
          </swiper-slide>
        </swiper>
      </template>
      <div class="font-bold text-xl mb-2">{{ card.title }}</div>
      <p class="text-gray-700 dark:text-gray-300">
        {{card.info}}
      </p>
      <template #footer>
        <div class="flex gap-2">
          <UBadge v-for="badge in card.badges">{{ badge }}</UBadge>
        </div>
      </template>
    </UCard>
    <UPagination v-model="page" :page-count="5" :total="cards.length" />
  </UContainer>
</template>