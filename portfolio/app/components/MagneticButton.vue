<template>
  <div ref="magneticRef" class="relative inline-block cursor-pointer" @mousemove="move" @mouseleave="leave">
    <div ref="contentRef" class="transition-transform duration-300 ease-out will-change-transform">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const magneticRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const move = (e: MouseEvent) => {
  if (!magneticRef.value || !contentRef.value) return
  
  const { clientX, clientY } = e
  const { height, width, left, top } = magneticRef.value.getBoundingClientRect()
  
  const x = clientX - (left + width / 2)
  const y = clientY - (top + height / 2)

  gsap.to(contentRef.value, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 1,
    ease: "power3.out"
  })
}

const leave = () => {
  if (!contentRef.value) return
  
  gsap.to(contentRef.value, {
    x: 0,
    y: 0,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
  })
}
</script>
