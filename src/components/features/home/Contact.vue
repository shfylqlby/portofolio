<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-24 relative">

    <!-- Header -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <span class="text-purple-500">#</span>{{ $t("contact.title") }}
        </h2>
        <div class="w-20 h-px bg-purple-500"></div>
      </div>

    <!-- 2 Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">

      <!-- Left Text -->
      <div class="space-y-6 text-lg leading-relaxed text-gray-300 font-mono">
        <p>{{ $t("contact.message") }}</p>
        <p>{{ $t("contact.message2") }}</p>
        <p>{{ $t("contact.message3") }}</p>
      </div>

<!-- Right Contact Box -->
<div class="flex justify-end">
  <div class="border border-gray-700 p-6 w-fit max-w-sm hover:border-purple-500 transition-all duration-300 rounded-md">
    <h4 class="text-white font-semibold mb-4">{{ $t("contact.message4") }}</h4>

    <div class="space-y-3">
      <!-- Twitter/X -->
      <div class="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204..."></path>
        </svg>
        <span>@shfylqlby</span>
      </div>

      <!-- Email -->
      <div class="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884..."></path>
        </svg>
        <a href="mailto:shofiyulqalby@gmail.com" class="break-all">shofiyulqalby@gmail.com</a>
      </div>
    </div>
  </div>
</div>


    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
