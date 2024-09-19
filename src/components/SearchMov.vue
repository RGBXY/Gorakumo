<template>
  
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { storeToRefs } from "pinia";

const search = useMovieStore();

const { dataSearch, imageUrl } = storeToRefs(search);
</script>
