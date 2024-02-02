<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
const links = [{
  label: 'Идиомы',
  to: '/',
  current: true
}, {
  label: 'Темы',
  to: '/getting-started/installation',
  current: false
}, {
  label: 'Практика',
  to: '/practic',
  current: false
}, {
  label: 'О нас',
  to: '/about',
  current: false
}]

const colorMode = useColorMode()
const page = ref(1)
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
              <NuxtLink to="/"><NuxtImg width="140px" densities="x1 x2" class="h-12 w-auto" src="/idiC_logo_head.png" alt="Идиомы на каждый день" /></NuxtLink>
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
    <NuxtPage />
  </UContainer>
  <footer>
    <div class="pt-8 pb-2">
      <p class="text-center text-gray-500">© 2024 ninak.lebedeva@gmail.com, Все права защищены.</p>
    </div>
  </footer>
</template>