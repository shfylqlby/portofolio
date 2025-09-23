<template>
  <Navbar />
  <main class="">
    <slot />
  </main>
  <footer
    class="w-full py-6 text-center text-gray-400 bg-gradient-to-t from-[#0d0d0d] to-[#0f172a]"
  >
    &copy; Muchamad Shofiyul Qalby. All rights reserved.
  </footer>
</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue'
</script>
