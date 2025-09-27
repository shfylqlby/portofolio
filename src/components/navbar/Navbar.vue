<template>
  <nav class="fixed w-full bg-gray-900 text-gray-300 z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="flex items-center gap-2 font-bold text-lg">
        <span><img src="/src/assets/icon.gif" alt="Icon Image" width="60" height="60"></span>
        <span>Qalby</span>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 font-mono text-sm items-center">
        <li>
          <router-link :to="{ path: '/' }" class="hover:text-purple-400 font-bold">{{ $t('nav.home') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/project' }" class="hover:text-purple-400 font-bold">{{ $t('nav.project') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/about-me' }" class="hover:text-purple-400 font-bold">{{ $t('nav.about') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/contacts' }" class="hover:text-purple-400 font-bold">{{ $t('nav.contacts') }}</router-link>
        </li>

        <!-- Language Dropdown -->
        <li class="relative">
          <button @click="toggleLangDropdown" class="flex items-center gap-1 hover:text-purple-400 font-bold">
            {{ currentLang }} <span class="text-xs">▼</span>
          </button>
          <ul v-if="langDropdownOpen" class="absolute right-0 mt-2 w-24 bg-gray-800 rounded shadow-lg overflow-hidden">
            <li>
              <button @click="setLang('en')" class="block w-full text-left px-4 py-2 hover:bg-gray-700">EN</button>
            </li>
            <li>
              <button @click="setLang('id')" class="block w-full text-left px-4 py-2 hover:bg-gray-700">ID</button>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-xl">
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed top-0 right-0 w-64 h-full bg-gray-900 p-6 flex flex-col gap-6">
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-2 font-bold text-lg">
            <span><img src="/src/assets/icon.gif" alt="Icon Image" width="60" height="60"></span>
            <span>Qalby</span>
          </div>
          <button @click="toggleMenu" class="text-xl">✕</button>
        </div>

        <ul class="flex flex-col gap-6 font-mono text-lg">
          <li>
            <router-link :to="{ path: '/' }" class="hover:text-purple-400 font-bold" @click="toggleMenu">{{ $t('nav.home') }}</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/project' }" class="hover:text-purple-400 font-bold" @click="toggleMenu">{{ $t('nav.project') }}</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/about-me' }" class="hover:text-purple-400 font-bold" @click="toggleMenu">{{ $t('nav.about') }}</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/contacts' }" class="hover:text-purple-400 font-bold" @click="toggleMenu">{{ $t('nav.contacts') }}</router-link>
          </li>

          <!-- Language Dropdown (mobile) -->
          <li class="relative">
            <button @click="toggleLangDropdown" class="flex items-center gap-1 hover:text-purple-400 font-bold">
              {{ currentLang }} <span class="text-xs">▼</span>
            </button>
            <ul v-if="langDropdownOpen" class="absolute left-0 mt-2 w-24 bg-gray-800 rounded shadow-lg overflow-hidden">
              <li>
                <button @click="setLang('en')" class="block w-full text-left px-4 py-2 hover:bg-gray-700">EN</button>
              </li>
              <li>
                <button @click="setLang('id')" class="block w-full text-left px-4 py-2 hover:bg-gray-700">ID</button>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Social Icons -->
        <div class="mt-auto flex gap-6 text-2xl">
          <a href="https://github.com/shfylqlby" target="_blank" class="hover:text-purple-400"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/shfylqlby" target="_blank" class="hover:text-purple-400"><i class="fab fa-linkedin"></i></a>
          <a href="https://instagram.com/shfylqlby" target="_blank" class="hover:text-purple-400"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Language dropdown state
const { locale } = useI18n()
const currentLang = ref(locale.value.toUpperCase())
const langDropdownOpen = ref(false)

const toggleLangDropdown = () => {
  langDropdownOpen.value = !langDropdownOpen.value
}

const setLang = (lang) => {
  locale.value = lang
  currentLang.value = lang.toUpperCase()
  langDropdownOpen.value = false
}
</script>

<style>
/* Animasi sidebar */
.slide-enter-from { transform: translateX(100%); }
.slide-enter-to { transform: translateX(0); }
.slide-leave-from { transform: translateX(0); }
.slide-leave-to { transform: translateX(100%); }
.slide-enter-active,
.slide-leave-active { transition: transform 0.3s ease; }
</style>
