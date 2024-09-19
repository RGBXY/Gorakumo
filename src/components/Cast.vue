<template>
  <div>
    <h1 class="text-2xl font-semibold">Featured Cast</h1>
    <div class="h-full flex gap-4 mt-5 overflow-x-auto no-scrollbar">
      <div v-for="cast in dataCast" :key="cast.id" class="w-[150px] flex-shrink-0">
        <img v-if="cast.profile_path !== null" class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" :src="imageUrl + cast.profile_path" alt="" />
        <div v-else class="shadow-lg w-full h-[220px] flex justify-center items-center border bg-slate-200 border-slate-200 object-cover rounded-xl mb-3">
          <img class="w-[90px]" src="../../public/images/default.png" alt="" />
        </div>
        <div class="px-2">
          <p class="text-base mb-0.5 font-bold">{{ cast.name }}</p>
          <div class="flex items-center gap-0.5">
            <p class="text-sm font-semibold">{{ cast.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import { onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";

const detail = useMovieStore();
const route = useRoute();
const movieId = route.params.id;
const movieUrl = route.params.url;

const { dataCast, imageUrl } = storeToRefs(detail);

onMounted(() => {
  detail.cast(movieUrl, movieId);
});

const top = () => {
  window.scrollTo(0, 0);
};

watchEffect(() => {
  const movieId = route.params.id;
  const movieUrl = route.params.url;
  detail.cast(movieUrl, movieId); // Assuming this fetches the data
  top();
});
</script>
