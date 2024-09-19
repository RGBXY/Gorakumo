<template>
  <div ref="observeElement" class="min-h-[400px]">
    <div class="flex px-10 justify-between">
      <h1 class="font-semibold">Popular Person</h1>
    </div>
    <div class="h-full flex gap-4 px-10 mt-5 overflow-x-auto no-scrollbar">
      <div v-if="perLoading === true" class="w-full flex justify-center items-center h-[200px]">
        <LoadingIcon />
      </div>
      <div v-else v-for="person in dataPerson" key="mov.id" class="w-[150px] flex-shrink-0">
        <img v-if="person.profile_path !== null" class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" :src="imageUrl + person.profile_path" alt="" />
        <img v-else class="shadow-lg w-full h-[220px] object-cover rounded-xl mb-3" src="../../public/images/default.png" alt="" />
        <div class="px-2">
          <p class="text-base font-semibold">{{ person.name }}</p>
          <div class="flex items-center gap-0.5">
            <img class="w-7" src="../../public/images/star.png" alt="" />
            <p class="text-sm font-semibold text-slate-600">{{ person.popularity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";
import LoadingIcon from "./icons/LoadingIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

const person = useMovieStore();

const { dataPerson, imageUrl, perLoading } = storeToRefs(person);

const { observeElement } = useIntersectionObserver(() => person.person());
</script>
