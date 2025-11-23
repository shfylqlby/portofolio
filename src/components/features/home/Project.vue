<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
            <span class="text-purple-500">#</span>{{ t("project.title") }}
          </h2>
          <div class="w-32 h-px bg-purple-500 mb-8"></div>
        </div>
      <router-link :to="{ path: '/project' }" class="hover:text-purple-400 font-bold">
      <button class="text-gray-400 hover:text-purple-500 transition text-sm">
        {{ t("project.viewAll") }} →
      </button>
      </router-link>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- QCNet Tools Project -->
      <div class="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <!-- Project Image -->
        <div class="h-32 bg-gray-700 flex items-center justify-center">
          <img src="/src/assets/tools.png" alt="QCNet Tools" class="w-full h-full object-cover" />
        </div>
        
        <!-- Content -->
        <div class="p-4">
          <div class="flex gap-2 mb-2 text-xs">
            <span class="text-gray-400">IPV4 Calculator</span>
            <span class="text-gray-400">IPV4 Calculator (Coming Soon)</span> 
            <span class="text-gray-400">Bandwidth Calculator</span>
            <span class="text-gray-400">DNS Checker</span>
          </div>
          
          <h4 class="font-bold text-lg text-white mb-2">{{ t("project.Tools.title") }}</h4>
          <p class="text-gray-400 text-sm mb-4">{{ t("project.Tools.stack") }}</p>
          
          <div class="flex gap-3">
            <a href="https://tools.shofiyulqalby.dev" target="_blank">
            <button class="text-purple-500 underline hover:text-purple-400 transition">
              {{ t("project.live") }}
            </button>
            </a>
          </div>
        </div>
      </div>

      <!-- ProtectX Project -->
      <div class="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <!-- Project Image -->
        <div class="h-32 bg-gray-700 flex items-center justify-center">
          <img src="/src/assets/mikrotik-sc.png" alt="Mikrotik-Script" class="w-full h-full object-cover" />
        </div>
        
        <!-- Content -->
        <div class="p-4">
          <div class="flex gap-2 mb-2 text-xs">
            <span class="text-gray-400">RouterOS Script</span>
          </div>
          
          <h4 class="font-bold text-lg text-white mb-2">{{ t("project.Mikrotik.title") }}</h4>
          <p class="text-gray-400 text-sm mb-4">{{ t("project.Mikrotik.stack") }}</p>
          <a href="https://github.com/shfylqlby/mikrotik" target="_blank">
          <button class="text-purple-500 underline hover:text-purple-400 transition">
            {{ $t("project.live") }}
          </button>
          </a>
        </div>
      </div>

      <!-- Kahoot Project -->
      <div class="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <!-- Project Image -->
        <div class="h-32 bg-gray-700 flex items-center justify-center">
          <img src="/src/assets/killua.png" alt="Masih Kosong" class="w-full h-full object-cover" />
        </div>
        
        <!-- Content -->
        <div class="p-4">
          <div class="flex gap-2 mb-2 text-xs">
            <span class="text-gray-400">Coming Soon</span>
            <span class="text-gray-400">Coming Soon</span>
            <span class="text-gray-400">Coming Soon</span>
          </div>
          
          <h4 class="font-bold text-lg text-white mb-2">{{ t("project.empty.title") }}</h4>
          <p class="text-gray-400 text-sm mb-4">{{ t("project.empty.stack") }}</p>
          
          <button class="text-purple-500 underline hover:text-purple-400 transition">
            {{ $t("project.live") }}
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>