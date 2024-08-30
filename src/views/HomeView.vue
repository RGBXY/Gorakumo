<template>
  <div class="text-2xl pt-[4.5rem]">
    <div class="px-10 h-[340px] relative text-white">
      <img class="absolute left-0 object-cover w-full h-full" src="https://cdn.antaranews.com/cache/1200x800/2023/07/09/shangchimovarthc_case-38.jpg" alt="" />
      <div class="w-full h-full absolute top-0 left-0 bg-[#032541] opacity-70"></div>
      <div class="z-30 relative h-full w-full flex flex-col justify-center">
        <h1 class="text-5xl font-bold">Selamat datang</h1>
        <h1 class="text-3xl font-semibold mb-10">Millions of movies, TV shows and people to discover. Explore now.</h1>
        <div class="w-full flex bg-white rounded-full overflow-hidden">
          <input class="w-full py-3 outline-0 text-black text-base px-5" type="text" placeholder="Cari sebuah film" />
          <button class="bg-gradient-to-r from-[#2abbd2] to-[#04b4e3] px-8 rounded-full text-lg">Search</button>
        </div>
      </div>
    </div>
    <Trending />
    <UpComing />
    <Popular />
    <Person />
    <ModalVid />
  </div>
</template>

<script setup>
import Popular from "@/components/Popular.vue";
import ModalVid from "@/components/ModalVid.vue";
import Trending from "@/components/Trending.vue";
import UpComing from "@/components/UpComing.vue";
import Person from "@/components/Person.vue";
</script>
