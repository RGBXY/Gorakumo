<template>
  <div :class="['w-full h-screen flex justify-center items-center fixed top-0 bg-opacity-45 z-50 bg-black', { hidden: !modalVid }]">
    <div class="w-full h-full flex justify-center items-center">
      <iframe
        :class="['relative w-[80%] h-[90%] rounded-xl bg-black']"
        type="text/html"
        :src="`https://www.youtube.com/embed/${dataUpComVid}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=id&modestbranding=1&fs=1&autohide=1`"
        allowfullscreen
        frameborder="0"
        :on-playing="!modalVid"
      >
      </iframe>
      <div @click="closeModal" class="h-[90%] cursor-pointer absolute right-14">
        <img class="rounded-full w-10 items-start" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtjY5wtFmlSYctNDHCwF6QP2tIu5XE7Mn0g&s" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";

const modal = useMovieStore();

const { modalVid, dataUpComVid } = storeToRefs(modal);

const closeModal = () => {
  modal.closeModal();
};
</script>
