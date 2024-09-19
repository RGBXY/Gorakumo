<template>
  <div ref="observeElement" class="mt-10 min-h-[400px]">
    <div class="flex justify-between px-10">
      <h1 class="font-semibold">Popular</h1>
      <div class="flex text-base border border-0-primary rounded-full">
        <button :class="['px-7 rounded-full', popularUrl === 'movie' ? 'bg-0-primary text-white' : 'bg-transparent']" @click="popularBtn('movie')">Movie</button>
        <button :class="['px-7 rounded-full', popularUrl === 'tv' ? 'bg-0-primary text-white' : 'bg-transparent']" @click="popularBtn('tv')">TV</button>
      </div>
    </div>
    <div class="h-full flex gap-4 mt-5 px-10 overflow-x-auto no-scrollbar">
      <div v-if="popLoading === true" class="w-full flex justify-center items-center h-[200px]">
        <LoadingIcon />
      </div>
      <div v-else v-for="mov in dataPopular" key="mov.id" class="w-[150px] flex-shrink-0">
        <img class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" :src="imageUrl + mov.poster_path" alt="" />
        <div class="px-2">
          <p v-if="mov.title" class="text-base font-semibold">{{ mov.title }}</p>
          <p v-else class="text-base font-semibold">{{ mov.name }}</p>
          <p v-if="mov.release_date" class="text-xs mt-1 font-semibold text-slate-600">{{ mov.release_date }}</p>
          <p v-else class="text-xs mt-1 font-semibold text-slate-600">{{ mov.first_air_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import LoadingIcon from "./icons/LoadingIcon.vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

const popular = useMovieStore();

const { dataPopular, imageUrl, popLoading, popularUrl } = storeToRefs(popular);

const popularBtn = (stat) => {
  popular.popularBtn(stat);
};

const { observeElement } = useIntersectionObserver(() => popular.populer());

</script>
