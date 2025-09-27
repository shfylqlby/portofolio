<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10 relative">
    <!-- Decorative dots -->
    <div class="absolute top-20 right-32 opacity-30">
      <div class="grid grid-cols-5 gap-1">
        <div v-for="dot in 25" :key="dot" class="w-1 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>

    <div class="absolute bottom-32 right-20 opacity-30">
      <div class="grid grid-cols-5 gap-1">
        <div v-for="dot in 25" :key="dot" class="w-1 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>

    <div class="absolute bottom-20 right-10 opacity-30">
      <div class="grid grid-cols-5 gap-1">
        <div v-for="dot in 25" :key="dot" class="w-1 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col md:flex-row items-center justify-between relative z-10">
      
      <!-- Text Content (Left Side) -->
      <div class="md:w-1/2 mb-8 md:mb-0 space-y-6">
        <!-- Title with underline -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
            <span class="text-purple-500">#</span>{{ $t("about.title") }}
          </h2>
          <div class="w-32 h-px bg-purple-500 mb-8"></div>
        </div>

        <!-- Description Text -->
        <div class="space-y-4 text-gray-400 leading-relaxed">
          <p class="text-sm md:text-base">
            {{ $t("about.name") }}
          </p>
          
          <p class="text-sm md:text-base">
            {{ $t("about.desc") }}
          </p>
          
          <p class="text-sm md:text-base">
            {{ $t("about.desc2") }}
          </p>
        </div>

        <div class="pt-4">
          <router-link :to="{ path: '/about-me' }" class="hover:text-purple-400 font-bold" @click="toggleMenu">
            <button class="border border-purple-500 text-purple-500 px-6 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm">
              {{ $t("about.button") }} →
            </button>
          </router-link>
        </div>
      </div>

      <!-- Image Container (Right Side) -->
      <div class="md:w-1/2 flex justify-center md:justify-end relative">
        <div class="relative">
          <!-- Main Image -->
          <img 
            src="/src/assets/about.jpg" 
            alt="About Me" 
            class="w-64 md:w-80 rounded-lg shadow-xl"
          />
          <div class="absolute inset-0 border border-gray-700 rounded-lg pointer-events-none"></div>

          <!-- Decorative Corners -->
          <div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gray-600"></div>
          <div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gray-600"></div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
