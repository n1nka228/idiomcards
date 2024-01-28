<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
const colorMode = useColorMode()
const cards = [
  { front_src: "/crocodale_01.png", back_src: "/crocodale_02.png", title: "fake cry", info:"мдааа", badges: ["#color","#food","#animals"]},
  { front_src: "/pasta_01.png", back_src: "/pasta_02.png", title: "everything seems to go wrong", info:"ням ням", badges: ["#color","#food"]},
  { front_src: "/blue_01.png", back_src: "/blue_02.png", title: "to feel sad", info:"", badges: ["#color","#emotions"]},
  { front_src: "/chess_01.png", back_src: "/chess_02 (3).png", title: "to be an influential person", info:"", badges: ["#food"]},
  { front_src: "/cloud_01.png", back_src: "/cloud_02.png", title: "daydreaming", info:"", badges: ["#weather"]},
  { front_src: "/promise_01.png", back_src: "/promise_02.png", title: "the most sacred", info:"", badges: ["#body"]},
  { front_src: "/rainbow_01.png", back_src: "/rainbow_02.png", title: "", info:"", badges: ["#weather"]},
  { front_src: "/fingers_01.png", back_src: "/fingers_02.png", title: "", info:"", badges: ["#body", "color"]},
  { front_src: "/handly_01.png", back_src: "/handly_02.png", title: "", info:"", badges: ["#body"]},
]
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
  <div class="p-4">
    <UCard v-for="card in cards">
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
  </div>
</template>