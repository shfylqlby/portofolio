<template>
  <div 
    class="custom-cursor"
    :class="{ 'cursor-hover': isHover }"
    :style="{ left: x + 'px', top: y + 'px' }"
  >
    <img
      v-if="!isHover"
      :src="cursorNormal"
      class="paw"
    />
    <img
      v-else
      :src="cursorHover"
      class="paw bounce glow"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

// Import gambar cursor dari assets
import cursorNormal from "@/assets/cursor-normal.png"
import cursorHover from "@/assets/cursor-hover.png"

const x = ref(0)
const y = ref(0)
const isHover = ref(false)
const isTouchDevice = ref(false)

const moveCursor = (e) => {
  if (isTouchDevice.value) return
  x.value = e.clientX
  y.value = e.clientY
}

const checkHover = (e) => {
  if (isTouchDevice.value) return
  const target = e.target
  isHover.value =
    target.tagName === "A" ||
    target.tagName === "BUTTON" ||
    target.onclick
}

onMounted(() => {
  // Deteksi perangkat sentuh
  isTouchDevice.value = window.matchMedia("(hover: none) and (pointer: coarse)").matches

  if (!isTouchDevice.value) {
    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", checkHover)
  }
})

onBeforeUnmount(() => {
  if (!isTouchDevice.value) {
    window.removeEventListener("mousemove", moveCursor)
    window.removeEventListener("mouseover", checkHover)
  }
})
</script>

<style>
/* Hide default cursor */
html, body, * {
  cursor: none !important;
}

/* Custom cursor */
.custom-cursor {
  position: fixed;
  width: 48px;
  height: 48px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

/* Jangan tampilkan custom cursor di perangkat sentuh */
@media (hover: none) and (pointer: coarse) {
  .custom-cursor {
    display: none !important;
  }
  html, body, * {
    cursor: auto !important;
  }
}

.paw {
  width: 48px;
  height: 48px;
  transition: transform 0.15s ease;
}

.bounce {
  animation: bounce 0.3s ease;
}

@keyframes bounce {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.2); }
  60%  { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.glow {
  filter: drop-shadow(0 0 6px #a855f7) drop-shadow(0 0 12px #9333ea);
}
</style>
