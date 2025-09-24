<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-16">
    <div class="relative border border-gray-600 rounded-md p-8 max-w-4xl mx-auto">
      
      <!-- Quote Icon Atas Kiri -->
      <span class="absolute -top-5 left-6 text-5xl text-purple-500 select-none">“</span>
      
      <!-- Isi Quote -->
      <blockquote class="text-lg md:text-2xl text-gray-100 font-light">
        {{ $t("quote.text") }}
      </blockquote>
      
      <!-- Quote Icon Bawah Kanan -->
      <span class="absolute -bottom-6 right-6 text-5xl text-purple-500 select-none">”</span>
      
      <!-- Author -->
      <p class="text-right text-gray-400 mt-6">- {{ $t("quote.author") }}</p>
    </div>
  </section>
</template>
