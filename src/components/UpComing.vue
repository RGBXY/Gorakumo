<template>
  <div ref="observeElement" class="bg-gradient-to-br min-h-[300px] from-[#05355d] to-[#032541] bg-opacity-60 mt-10 pt-4">
    <h1 class="flex items-center gap-2 border-b-4 border-[#2288db] pb-4 px-10 text-white font-bold mb-2">
      Up Coming Fun
      <PhFilmSlate :size="32" />
    </h1>
    <div class="flex items-start gap-6 overflow-x-auto no-scrollbar px-10">
      <div v-if="upLoading === true && dataUpCom" class="w-full flex justify-center items-center h-[200px]">
        <LoadingIcon />
      </div>
      <div v-else class="relative flex items-center shrink-0 w-[320px] text-center group transition-all mb-12 pt-5 text-white" v-for="trail in dataUpCom" key="trail.id">
        <button class="relative flex flex-col items-center" @click="modal('movie', trail.id)">
          <img class="h-full object-cover rounded-xl shadow-xl mb-2 group-hover:scale-110 transition-all" :src="imageUrl + trail.backdrop_path" alt="" />
          <PhPlay class="absolute top-16 group-hover:scale-110 transition-all" :size="45" weight="fill" />
          <p class="text-xl font-semibold">{{ trail.title }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import LoadingIcon from "./icons/LoadingIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useIntersectionObserver } from "../composables/useIntersectionObserver";

const upComing = useMovieStore();

const { dataUpCom, imageUrl, upLoading } = storeToRefs(upComing);

const modal = (url, id) => {
  upComing.getMovieId(url, id);
};

const { observeElement } = useIntersectionObserver(() => upComing.upComing());

</script>
