<template>
  <div class="flex mb-5 shadow-md rounded-md overflow-hidden border" v-for="data in dataSearch.results" :key="data.id">
    <img class="w-[100px]" v-if="data.poster_path" :src="imageUrl + data.poster_path" alt="" />
    <div v-else class="w-[140px] h-[140px] border bg-slate-200 flex justify-center items-center">
      <PhImage :size="32" weight="light" />
    </div>
    <div class="p-4 flex flex-col justify-between">
      <div>
        <p class="text-lg font-semibold">{{ data.title ? data.title : data.name }}</p>
        <p class="text-sm text-slate-500">{{ data.release_date ? data.release_date : data.first_air_date }}</p>
      </div>
      <!-- <div v-if="data.overview.length < 100">{{ data.overview }}</div>
      <div v-if="data.overview.length >= 100">{{ data.overview.substring(0, 195) + ".." }}</div> -->
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";

const search = useMovieStore();

const { dataSearch, imageUrl } = storeToRefs(search);
</script>
