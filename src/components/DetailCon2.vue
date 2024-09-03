<template>
  <div v-if="det2Loading" class="flex justify-center items-start w-full min-h-screen">
    <LoadingIcon />
  </div>
  <div class="w-full min-h-screen py-14 px-10">
    <div class="flex justify-between">
      <div class="w-[72%]">
        <Cast />
        <Recomend />
      </div>
      <SideCon />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import Cast from "./Cast.vue";
import SideCon from "./SideCon.vue";
import LoadingIcon from "./icons/LoadingIcon.vue";
import { useMovieStore } from "@/stores/movie";
import Recomend from "./Recomend.vue";

const detail = useMovieStore();

const { det2Loading } = storeToRefs(detail);
</script>
