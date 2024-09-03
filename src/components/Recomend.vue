<template>
  <h1 class="text-2xl mt-10 font-semibold">Recomended</h1>
  <div class="flex items-start gap-6 overflow-x-auto no-scrollbar">
    <div class="relative flex items-center shrink-0 w-[320px] text-center group transition-all mb-12 pt-5" v-for="recomen in dataRecomen" key="recomen.id">
      <button class="relative flex flex-col items-center">
        <img class="h-full object-cover rounded-xl shadow-xl mb-2" :src="imageUrl + recomen.backdrop_path" alt="" />
        <RouterLink :to="{ name: 'detail', params: { id: recomen.id, url: 'movie' } }" v-if="recomen.title" class="text-base font-semibold">{{ recomen.title }}</RouterLink>
        <RouterLink :to="{ name: 'detail', params: { id: recomen.id, url: 'tv' } }" v-else class="text-base font-semibold">{{ recomen.name }}</RouterLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";

const detail = useMovieStore();
const route = useRoute();

const { imageUrl, dataRecomen } = storeToRefs(detail);

// Watch effect to recompute the recommendations based on route changes
watchEffect(() => {
  const movieId = route.params.id;
  const movieUrl = route.params.url;
  detail.recomen(movieUrl, movieId); // Assuming this fetches the data
});
</script>
