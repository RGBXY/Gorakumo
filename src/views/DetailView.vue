<template>
  <div class="pt-[4.3rem] max-w-[1500px] h-full mx-auto">
    <DetailCon1 />
    <DetailCon2 />
    <ModalVid />
  </div>
</template>

<script setup>
import ModalVid from "@/components/ModalVid.vue";
import DetailCon1 from "@/components/DetailCon1.vue";
import Cast from "@/components/Cast.vue";
import { onMounted } from "vue";
import DetailCon2 from "@/components/DetailCon2.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
