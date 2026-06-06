<template>
  <div class="relative w-full min-h-screen bg-white text-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Lenis from 'lenis'

onMounted(() => {
  if (process.client) {
    console.log('App.vue loaded!')
    
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    // Update scroll triggers on Lenis scroll events
    lenis.on('scroll', () => {
      // If ScrollTrigger is imported elsewhere, it will listen to scroll events
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const ScrollTrigger = (window as any).gsap.ScrollTrigger
        if (ScrollTrigger) ScrollTrigger.update()
      }
    })
  }
})
</script>

