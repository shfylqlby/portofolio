<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
  <CustomCursor />
</template>

<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import CustomCursor from "@/components/layouts/CustomCursor.vue"
</script>
