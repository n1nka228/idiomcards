<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
const colorMode = useColorMode()
const cards = [
  { front_src: "/crocodale_01.png", back_src: "/crocodale_02.png"},
  { front_src: "/pasta_01.png", back_src: "/pasta_02.png"},
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
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <template #footer>
        <div class="flex gap-2">
          <UBadge>#color</UBadge>
          <UBadge>#animals</UBadge>
          <UBadge>#food</UBadge>
        </div>
      </template>
    </UCard>
  </div>
</template>