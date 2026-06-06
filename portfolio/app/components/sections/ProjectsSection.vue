<template>
  <div class="bg-background relative min-h-screen pb-40 transition-colors duration-500">
    
    <!-- Clean Section Header -->
    <header class="max-w-4xl mx-auto px-6 md:px-0 mb-20 relative z-10 pt-32 project-header">
      <h2 class="text-6xl md:text-8xl lg:text-[96px] font-display font-light tracking-tight leading-none text-textColor flex items-baseline">
        <span class="text-textColor/30 font-mono mr-4 text-2xl md:text-3xl project-num">02.</span>
        <span class="project-title-text">Selected Projects</span>
      </h2>
      <div class="w-full h-px bg-borderColor/10 mt-6 project-divider"></div>
    </header>

    <!-- Stacked Cards Container -->
    <div class="container mx-auto px-6 md:px-12 relative z-20" ref="cardsContainerRef">
      
      <NuxtLink
        v-for="(project, index) in projects" 
        :key="index"
        :to="project.link"
        class="project-card group/card sticky top-32 w-full h-[500px] lg:h-[70vh] rounded-3xl overflow-hidden bg-surface border border-borderColor/10 mb-20 shadow-xl transition-all duration-500 hover:shadow-2xl cursor-none block"
        :style="{ top: `${100 + (index * 40)}px`, zIndex: index + 10 }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
        @mousemove="handleMouseMove($event, index)"
      >
        <div class="relative w-full h-full pointer-events-none">
          
          <!-- Full Width Image -->
          <div class="absolute inset-0 overflow-hidden">
            <!-- Dark overlay on hover -->
            <div class="absolute inset-0 bg-textColor/30 mix-blend-overlay opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-10"></div>
            
            <!-- Parallax Image -->
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="project-img absolute inset-0 w-full h-[120%] object-cover object-center transform transition-transform duration-[1.5s] group-hover/card:scale-[1.05]" 
              style="top: -10%"
            />
          </div>

          <!-- Project Title Overlay - Bottom Left -->
          <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 text-[11px] font-mono border border-white/20 rounded-full text-white/80 bg-white/10 backdrop-blur-sm">
                {{ tag }}
              </span>
            </div>
            <h3 class="text-3xl md:text-5xl font-display font-light italic text-white">{{ project.title }}</h3>
          </div>

          <!-- Cursor-Following Button - Follows mouse position -->
          <div 
            :ref="el => setCursorButtonRef(el, index)"
            class="cursor-button fixed opacity-0 z-50 transition-opacity duration-300 pointer-events-none"
            :style="{ 
              left: cursorPositions[index]?.x + 'px', 
              top: cursorPositions[index]?.y + 'px',
              transform: 'translate(-50%, -50%)'
            }"
          >
            <div class="relative inline-flex items-center px-8 py-4 bg-white text-textColor font-mono text-[16px] rounded-full shadow-2xl whitespace-nowrap">
              <span class="relative z-10 flex items-center font-medium">
                Explore Case Study
                <span class="ml-2">→</span>
              </span>
            </div>
          </div>

        </div>
      </NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const titleRef = ref(null)
const cardsContainerRef = ref(null)
const cursorButtons = ref<(HTMLElement | null)[]>([])
const cursorPositions = reactive<{ [key: number]: { x: number, y: number } }>({})

const setCursorButtonRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    cursorButtons.value[index] = el
  }
}

const handleMouseEnter = (index: number) => {
  const button = cursorButtons.value[index]
  if (button) {
    gsap.to(button, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleMouseLeave = (index: number) => {
  const button = cursorButtons.value[index]
  if (button) {
    gsap.to(button, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in'
    })
  }
}

const handleMouseMove = (event: MouseEvent, index: number) => {
  cursorPositions[index] = {
    x: event.clientX,
    y: event.clientY
  }
}

const projects = ref([
  {
    title: 'Ethereal Finance',
    description: 'A comprehensive decentralized finance dashboard with real-time data visualization and complex state management using Vue 3 and Pinia. Architected for sub-50ms latency across global nodes.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&q=80',
    tags: ['Vue 3', 'TypeScript', 'Tailwind', 'Ethers.js'],
    role: 'Lead Frontend',
    year: '2025',
    link: '/projects/ethereal-finance'
  },
  {
    title: 'Nexus SaaS Platform',
    description: 'Enterprise resource planning software featuring a modular micro-frontend architecture, custom data grids, and extensive API integrations. Serving over 100k daily active enterprise users.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    tags: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
    role: 'Full Stack',
    year: '2024',
    link: '/projects/nexus-saas'
  },
  {
    title: 'Aura E-Commerce',
    description: 'High-performance headless e-commerce store with seamless micro-animations, achieving perfect 100/100 Lighthouse scores across performance, accessibility, and SEO.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1920&q=80',
    tags: ['Nuxt 3', 'Shopify', 'GSAP', 'WebGL'],
    role: 'Frontend Engineer',
    year: '2024',
    link: '/projects/aura-ecommerce'
  }
])

onMounted(() => {
  if (process.client) {
    // Title Animation
    gsap.from('.project-title-text', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.2
    })
    gsap.from('.project-num', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3
    })
    gsap.from('.project-divider', {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.4
    })

    // Parallax Images on scroll
    const cards = document.querySelectorAll('.project-card')
    cards.forEach((card) => {
      const img = card.querySelector('.project-img')
      
      // Image Parallax within the card
      gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // Scale down card slightly when next card covers it
      gsap.to(card, {
        scale: 0.95,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pinSpacing: false
        }
      })
    })
  }
})
</script>

<style scoped>
.title-line {
  will-change: transform, opacity;
}
</style>
