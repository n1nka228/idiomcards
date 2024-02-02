<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const links = [{
  label: 'Идиомы',
  to: '/',
  current: false
}, {
  label: 'Темы',
  to: '/getting-started/installation',
  current: false
}, {
  label: 'Практика',
  to: '/getting-started/theming',
  current: false
}, {
  label: 'О нас',
  to: '/getting-started/shortcuts',
  current: false
}]

const colorMode = useColorMode()
const page = ref(1)
const cards = ref([
  { front_src: "/crocodale_01.png", back_src: "/crocodale_02.png", title: "crocodale tears",
    info_title:"В чём разница?",
    info_text: "Tear vs Tear. Tear – слеза  /существительное/. Tear – рвать, рваться, разрывать, " +
        "срывать, отрывать, драть  /глагол", badges: ["#color","#animals"]},
  { front_src: "/pasta_01.png", back_src: "/pasta_02.png", title: "bad hair day",
    info_title:"Русский аналог:",
    info_text: "встать не с той ноги", badges: ["#body","#food"]},
  { front_src: "/blue_01.png", back_src: "/blue_02.png", title: "feel blue",
    info_title: "В лирике:",
    info_text:"The Beatles - Baby's In Black. Oh dear, what can I do?\n" +
        "Baby's in black and I'm feeling blue. Она в чёрном, а я в печали. ", badges: ["#color","#emotions"]},
  { front_src: "/chess_01.png", back_src: "/chess_02 (3).png", title: "big cheese",
    info_title:"Русский аналог:",
    info_text: "большая шишка", badges: ["#food"]},
  { front_src: "/cloud_01.png", back_src: "/cloud_02.png", title: "head in the clouds",
    info_title:"Русский аналог:",
    info_text:"витать в облаках", badges: ["#weather"]},
  { front_src: "/promise_01.png", back_src: "/promise_02.png", title: "pinky promise",
    info_title:"В чём разница?",
    info_text: "Pinky vs Pinky. " +
        "Pinky – мизинец  /существительное/ Pinky – розовый  /прилагательное/ ", badges: ["#body"]},
  { front_src: "/rainbow_01.png", back_src: "/rainbow_02.png", title: "chasing the rainbow",
    info_title:"Русский аналог:",
    info_text: "дотянуться до звёзд", badges: ["#weather"]},
  { front_src: "/fingers_01.png", back_src: "/fingers_02.png", title: "green fingers",
    info_title:"Русский аналог:",
    info_text: "золотые руки", badges: ["#body", "#color"]},
  { front_src: "/handly_01.png", back_src: "/handly_02.png", title: "come in handly",
    info_title:"Русский аналог:",
    info_text: "как нельзя кстати", badges: ["#body"]},
])
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
useSeoMeta({
  title: 'Идиомы на каждый день',
  ogTitle: 'Идиомы на каждый день',
  description: 'Идиомы, пословицы и поговорки как средства обучения английскому языку',
  ogDescription: 'Идиомы, пословицы и поговорки как средства обучения английскому языку',
  ogImage: 'https://idiomcards.ru/idiC_logo_app.png',
  //twitterCard: 'summary_large_image',
})
</script>

<template>
  <header>
    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
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
            </DisclosureButton>
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-12 w-auto" src="/idiC_logo_head.png" alt="Идиомы на каждый день" />
            </div>
            <div class="hidden pt-2 sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in links" :key="item.label" :href="item.to" :class="[isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:text-gray-900', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.label }}</a>
              </div>
            </div>
          </div>
          <div class="flex pt-2 flex-shrink-0 space-x-4 right-0 hidden sm:block">
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
          </div>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in links" :key="item.label" as="a" :href="item.to" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.label }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
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
        <span class="text-pink-400">{{ card.info_title }}</span>
        {{ card.info_text }}
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