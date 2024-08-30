<template>
  <div class="w-full h-[4.5rem] fixed top-0 bg-[#032541] z-40 flex justify-between px-10 items-center text-white">
    <div class="flex items-center gap-7">
      <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2abbd2] to-[#04b4e3]">GORAKU</h1>
      <div class="flex items-center gap-7 font-semibold">
        <a href="">Film</a>
        <a href="">Serial TV</a>
        <a href="">Orang</a>
        <a href="">More</a>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <img class="w-9 h-9 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" />
      <PhMagnifyingGlass :size="25" weight="bold" color="#04b4e3"/>
    </div>
  </div>
</template>

<script setup>
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
</script>
