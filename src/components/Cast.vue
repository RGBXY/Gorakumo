<template>
  <div v-if="castLoading" class="flex justify-center items-start w-full min-h-screen">
    <LoadingIcon />
  </div>
  <div v-else :class="`w-full min-h-screen py-14 px-10`">
    <div class="flex justify-between">
      <div class="w-[72%]">
        <h1 class="text-2xl font-semibold">Featured Cast</h1>
        <div class="h-full flex gap-4 mt-5 overflow-x-auto no-scrollbar">
          <div v-for="cast in dataCast" :key="cast.id" class="w-[150px] flex-shrink-0">
            <img class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" :src="imageUrl + cast.profile_path" alt="" />
            <div class="px-2">
              <p class="text-base mb-0.5 font-bold">{{ cast.name }}</p>
              <div class="flex items-center gap-0.5">
                <p class="text-sm font-semibold">{{ cast.character }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div class="mb-4">
          <h1 class="font-semibold">Budget</h1>
          <p class="text-sm">{{ dataDetail.budget < 1 ? "-" : formatDolar(dataDetail.budget) }}</p>
        </div>
        <div class="mb-4">
          <h1 class="font-semibold">Revenue</h1>
          <p class="text-sm">{{ dataDetail.revenue < 1 ? "-" : formatDolar(dataDetail.revenue) }}</p>
        </div>
        <div>
          <h1 class="font-semibold">Kata Kunci</h1>
          <p class="text-sm">{{ dataDetail.revenue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { PhPlay, PhFacebookLogo, PhTwitterLogo, PhInstagramLogo, PhPopcorn, PhFilmReel } from "@phosphor-icons/vue";
import LoadingIcon from "./icons/LoadingIcon.vue";

const detail = useMovieStore();
const route = useRoute();
const movieId = route.params.id;
const movieUrl = route.params.url;

const { dataCast, imageUrl, dataDetail, castLoading } = storeToRefs(detail);

onMounted(() => {
  if (movieId) {
    detail.cast(movieUrl, movieId);
  }
});

const formatDolar = (angka) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(angka);
};
</script>
