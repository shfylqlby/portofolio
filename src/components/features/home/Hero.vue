<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-20 relative">
    <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      <!-- Text -->
      <div class="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <!-- Title -->
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight">
          {{ $t("hero.title1") }} 
          <span class="text-purple-500">{{ $t("hero.highlight1") }}</span><br />
          {{ $t("hero.and") }} 
          <span class="text-purple-500">{{ $t("hero.highlight2") }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-400 max-w-lg mx-auto md:mx-0">
          {{ $t("hero.subtitle") }}
        </p>

        <!-- Button -->
         <router-link :to="{ path: '/about-me' }" class="hover:text-purple-400 font-bold">
        <button class="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
          {{ $t("hero.button") }}
        </button>
        </router-link>
      </div>

      <!-- Image + Badge -->
      <div class="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <img src="/src/assets/killua.png" alt="Hero Image" class="w-56 md:w-80 rounded-lg shadow-lg"/>
        <!-- Badge overlay -->
        <div class="absolute bottom-2 left-1/2 md:left-auto md:right-4 transform -translate-x-1/2 md:translate-x-0 bg-gray-800 px-3 py-1 rounded-lg shadow text-purple-400 text-sm">
          ● {{ $t("hero.working") }}
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center md:items-start">
      <!-- Social Links (kiri bawah) -->
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="https://github.com/"shfylqlby target="_blank" class="text-gray-400 hover:text-white transition">
          <i class="fab fa-github text-xl"></i>
        </a>
        <a href="https://linkedin.com/in/shfylqlby" target="_blank" class="text-gray-400 hover:text-white transition">
          <i class="fab fa-linkedin text-xl"></i>
        </a>
        <a href="https://instagram.com/shfylqlby" target="_blank" class="text-gray-400 hover:text-white transition">
          <i class="fab fa-instagram text-xl"></i>
        </a>
      </div>

      <!-- Quote (kanan bawah) -->
      <div class="text-center md:text-right mt-6 md:mt-0">
        <blockquote class="italic text-gray-400 text-sm md:text-base">
          "{{ $t("hero.student") }}"
        </blockquote>
        <p class="text-gray-500 text-xs md:text-sm">— {{ $t("hero.years") }}</p>
      </div>
    </div>
  </section>
</template>
