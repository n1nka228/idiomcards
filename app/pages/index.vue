<!--
https://ui.nuxt.com/getting-started/examples
https://swiperjs.com/demos
-->
<script setup>
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
  <div class="sm:grid sm:grid-cols-3">
    <UCard v-for="card in cards.slice((page - 1) * 6, page * 6)">
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
          <NuxtImg format="webp" height="360px" densities="x1 x2" loading="lazy" class="w-full rounded"
              :src="card.front_src"
              :alt="card.title"
          />
        </swiper-slide>
        <swiper-slide>
          <NuxtImg format="webp" height="360px" densities="x1 x2" loading="lazy" class="w-full rounded"
              :src="card.back_src"
              :alt="card.title"
          />
        </swiper-slide>
      </swiper>
    <template #footer>
      <div class="font-bold text-xl mb-2">{{ card.title }}</div>
      <p class="text-gray-700 dark:text-gray-300">
        <span class="text-pink-400">{{ card.info_title }}</span>
        {{ card.info_text }}
      </p>
      <div class="pt-2 flex gap-2">
        <UBadge v-for="badge in card.badges">{{ badge }}</UBadge>
      </div>
    </template>
  </UCard>
  </div>
  <UPagination v-model="page" :page-count="5" :total="cards.length" />
</template>