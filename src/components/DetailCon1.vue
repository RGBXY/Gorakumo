<template>
  <div v-if="det1Loading" class="pt-20 flex justify-center items-start w-full min-h-screen">
    <LoadingIcon />
  </div>
  <div v-else :class="`w-full h-[90vh] py-14 px-10 bg-cover relative bg-center`" :style="{ backgroundImage: `url('${imageUrl + dataDetail.backdrop_path}')` }">
    <div class="w-full h-full bg-black absolute z-10 left-0 top-0 bg-opacity-80"></div>
    <div class="z-20 relative mb-10 flex items-center gap-12 text-white">
      <img class="w-[310px] rounded-xl" :src="imageUrl + dataDetail.poster_path" alt="" />
      <div>
        <p class="text-4xl font-bold">{{ dataDetail.name ? dataDetail.name : dataDetail.original_title }}</p>
        <div class="flex items-center mb-5 gap-2">
          <p>{{ dataDetail.first_air_date ? dataDetail.first_air_date : dataDetail.release_date }}</p>
          <p class="text-xs">●</p>
          <p v-for="genre in dataDetail.genres">
            {{ genre.name + "," }}
          </p>
        </div>
        <div class="flex items-center gap-3 mb-5">
          <p class="bg-black inline-block py-4 px-2.5 border-4 text-xl font-bold border-green-500 rounded-full">{{ formattedPercentage }}</p>
          <p class="text-xl font-bold me-7">
            Skor <br />
            Pengguna
          </p>
          <div class="flex items-center">
            <button class="bg-0-primary pb-1 hover:z-20 hover:scale-125 transition-all rounded-full -ms-3 text-3xl">🤩</button>
            <button class="bg-0-primary pb-1 hover:z-20 hover:scale-125 transition-all rounded-full -ms-3 text-3xl">😐</button>
            <button class="bg-0-primary pb-1 hover:z-20 hover:scale-125 transition-all rounded-full -ms-3 text-3xl">🤮</button>
          </div>
        </div>
        <div class="flex items-center gap-3 mb-5">
          <button class="bg-0-primary p-3 rounded-full">
            <PhListDashes :size="22" color="#ededed" />
          </button>
          <button class="bg-0-primary p-3 rounded-full">
            <PhHeart :size="22" color="#ededed" weight="fill" />
          </button>
          <button class="bg-0-primary p-3 rounded-full">
            <PhBookmarkSimple :size="22" color="#ededed" weight="fill" />
          </button>
          <button @click="modal(movieUrl, movieId)" class="hover:bg-0-primary transition-all flex items-center gap-3 py-2 px-4 text-lg font-semibold rounded-full">
            <PhPlay :size="22" color="#ededed" weight="fill" />
            <p>Play Trailer</p>
          </button>
        </div>
        <p class="w-[70%] mb-5">{{ dataDetail.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { PhPlay, PhHeart, PhListDashes, PhBookmarkSimple } from "@phosphor-icons/vue";
import LoadingIcon from "./icons/LoadingIcon.vue";

const detail = useMovieStore();
const route = useRoute();
const movieId = route.params.id;
const movieUrl = route.params.url;

const { dataDetail, imageUrl, det1Loading } = storeToRefs(detail);

onMounted(() => {
  if (movieId) {
    detail.detail(movieUrl, movieId);
  }
});

const modal = (url, id) => {
  detail.getMovieId(url, id);
};

const value = computed(() => dataDetail.value.vote_average);

const formattedPercentage = computed(() => {
  // Ensure value is a number and handle possible undefined or null
  if (value.value !== undefined && value.value !== null) {
    // Multiply by 10 and format as percentage
    return `${(value.value * 10).toFixed(0)}%`;
  }
  return "0%"; // Fallback value if undefined or null
});

watchEffect(() => {
  const movieId = route.params.id;
  const movieUrl = route.params.url;
  detail.detail(movieUrl, movieId); // Assuming this fetches the data
});
</script>
