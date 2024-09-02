<template>
  <div class="mt-5 bg-no-repeat min-h-[400px] bg-bottom bg-[url('../../public/images/trending-bg.svg')]">
    <div class="flex px-10 justify-between">
      <h1 class="font-semibold">Trending</h1>
      <div class="flex text-base border border-0-primary rounded-full">
        <button :class="['px-7 rounded-full', trendingUrl === 'day' ? 'bg-0-primary text-white' : 'bg-transparent']" @click="trendingBtn('day')">Today</button>
        <button :class="['px-7 rounded-full', trendingUrl === 'week' ? 'bg-0-primary text-white' : 'bg-transparent']" @click="trendingBtn('week')">Week</button>
      </div>
    </div>
    <div class="h-full flex gap-4 mt-5 px-10 overflow-scroll no-scrollbar">
      <div v-if="trenLoading === true" class="w-full flex justify-center items-center h-[200px]">
        <LoadingIcon />
      </div>
      <div v-else v-for="mov in dataTrending" key="mov.id" class="w-[150px] flex-shrink-0">
        <img class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" :src="imageUrl + mov.poster_path" alt="" />
        <div class="px-2">
          <RouterLink :to="{ name: 'detail', params: { id: mov.id, url: 'movie' } }" v-if="mov.original_title" class="text-base font-semibold">{{ mov.original_title }}</RouterLink>
          <RouterLink :to="{ name: 'detail', params: { id: mov.id, url: 'tv' } }" v-else class="text-base font-semibold">{{ mov.name }}</RouterLink>
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

const trending = useMovieStore();

const { dataTrending, imageUrl, trenLoading, trendingUrl } = storeToRefs(trending);

const trendingBtn = (stat) => {
  trending.trendingBtn(stat);
};

trending.trending();
</script>
