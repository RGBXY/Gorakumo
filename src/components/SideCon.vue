<template>
  <div class="w-[25%]">
    <a href="https://tv.apple.com/ID/channel/tvs.sbd.4000?mttn3pid=bandsintown_amplified&mttnagencyid=a9p&mttncc=ID&mttnsiteid=143238&mttnsubad=cf-500143837&mttnsubkw=themoviedb.org&mttnsubplmnt=100006536" class="flex gap-5">
      <button class="bg-[#3c9eb9] transition-all flex items-center gap-5 py-1 shadow-lg px-4 text-lg font-semibold rounded-lg">
        <PhPlay class="animate-pulse" :size="22" color="#ededed" weight="fill" />
        <p class="text-sm font-bold text-white">
          Play <br />
          Now
        </p>
      </button>
      <p class="text-sm w-[30%]">Presumed Innocent on Apple TV+</p>
    </a>
    <div class="my-6 flex items-center gap-3 divide-x-2">
      <div class="flex items-center gap-2">
        <PhFacebookLogo :size="26" weight="fill" />
        <PhTwitterLogo :size="26" weight="fill" />
        <PhInstagramLogo :size="26" />
      </div>
      <PhPopcorn class="ps-2.5" :size="38" />
      <PhFilmReel class="ps-2.5" :size="38" />
    </div>
    <div class="mb-4">
      <h1 class="font-semibold">Status</h1>
      <p class="text-sm">{{ dataDetail.status }}</p>
    </div>
    <div class="mb-4">
      <h1 class="font-semibold">Language</h1>
      <p v-for="language in dataDetail.spoken_languages" class="text-sm">{{ language.english_name }}</p>
    </div>
    <div v-if="dataDetail.revenue" class="mb-4">
      <h1 class="font-semibold">Budget</h1>
      <p class="text-sm">{{ dataDetail.budget < 1 ? "-" : formatDolar(dataDetail.budget) }}</p>
    </div>
    <div v-if="dataDetail.revenue" class="mb-4">
      <h1 class="font-semibold">Revenue</h1>
      <p class="text-sm">{{ dataDetail.revenue < 1 ? "-" : formatDolar(dataDetail.revenue) }}</p>
    </div>
    <div>
      <h1 class="font-semibold mb-2">Kata Kunci</h1>
      <p v-for="keyword in dataKeywords" :key="keyword.id" class="text-sm bg-gray-200 me-2 mb-2 py-1 px-3 rounded-md border border-slate-300 inline-block">{{ keyword.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { PhPlay, PhFacebookLogo, PhTwitterLogo, PhInstagramLogo, PhPopcorn, PhFilmReel } from "@phosphor-icons/vue";

const detail = useMovieStore();
const route = useRoute();
const movieId = route.params.id;
const movieUrl = route.params.url;

const { dataDetail, dataKeywords } = storeToRefs(detail);

onMounted(() => {
  detail.keywords(movieUrl, movieId);
});

const formatDolar = (angka) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(angka);
};
</script>
