<template>
  <div class="pt-[4.5rem]">
    <div class="border-b flex justify-between">
      <div class="relative ms-7 w-full">
        <PhMagnifyingGlass class="absolute top-3.5 left-4" :size="18" weight="bold" />
        <input type="text" class="w-full py-2.5 outline-none px-10" v-model="input" placeholder="cari sesuatu" />
      </div>
      <button class="px-10 bg-sky-400 text-white">Search</button>
    </div>
    <div class="px-10 flex justify-between h-full mt-8">
      <div class="w-[22%] border rounded-lg h-full overflow-hidden">
        <div class="py-5 px-5 bg-sky-400">
          <h1 class="text-lg font-semibold text-white">Search Result</h1>
        </div>
        <button @click="searchFilter('movie')" class="px-5 py-3 w-full hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Film</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('tv')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Serial TV</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('person')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Orang</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('movie')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Daftar Koleksi</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('movie')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Kata Kunci</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('movie')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Perusahaan</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
        <button @click="searchFilter('movie')" class="px-5 py-3 w-full group hover:bg-slate-200 flex justify-between">
          <p class="font-semibold">Network</p>
          <!-- <p class="text-sm font-thin px-2.5 rounded-lg pt-0.5 bg-slate-200 group-hover:bg-white">{{ dataSearch.total_results }}</p> -->
        </button>
      </div>
      <div class="w-[75%]">
        <div class="flex mb-5 shadow-md rounded-md overflow-hidden border" v-for="data in dataSearch.results" :key="data.id">
          <img class="w-[100px]" v-if="data.poster_path" :src="imageUrl + data.poster_path" alt="" />
          <img v-else-if="url === 'person' && data.backdrop_path" :src="imageUrl + data.known_for[1].backdrop_path" alt="" />
          <div v-else class="w-[140px] h-[140px] border bg-slate-200 flex justify-center items-center">
            <PhImage :size="32" weight="light" />
          </div>
          <div class="p-4 flex flex-col justify-between">
            <div>
              <p class="text-lg font-semibold">{{ data.title ? data.title : data.name }}</p>
              <p class="text-sm text-slate-500">{{ data.release_date ? data.release_date : data.first_air_date }}</p>
            </div>
            <div v-if="url !== 'person'">
              <div v-if="data.overview.length < 100">{{ data.overview }}</div>
              <div v-if="data.overview.length >= 100">{{ data.overview.substring(0, 195) + ".." }}</div>
            </div>
            <div v-else-if="url === 'person'">halo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const url = ref("multi");

const searchFilter = (val) => {
  url.value = val;
};

const route = useRoute();
const search = useMovieStore();

const { dataSearch, imageUrl } = storeToRefs(search);

const input = route.params.input;

watch(url, (newVal) => {
  search.search(newVal, input);
});

search.search(url.value, input);
</script>
