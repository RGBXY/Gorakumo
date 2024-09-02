<template>
  <div class="pt-[4.3rem] max-w-[1500px] h-full mx-auto">
    <InfoMovie />
    <Cast />
    <ModalVid />
  </div>
</template>

<script setup>
import ModalVid from "@/components/ModalVid.vue";
import InfoMovie from "@/components/InfoMovie.vue";
import Cast from "@/components/Cast.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/movie";

const detail = useMovieStore();

const { detLoading, castLoading } = storeToRefs(detail);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
