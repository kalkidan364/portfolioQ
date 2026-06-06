<template>
  <div class="bg-background min-h-screen py-32 md:py-48 relative overflow-hidden">
    <!-- Subtle background radial highlight -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.01)_0%,transparent_70%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Clean Section Header (Seamless with other pages) -->
      <header class="max-w-4xl mx-auto px-6 md:px-0 mb-24 relative z-10">
        <h2 class="text-6xl md:text-8xl lg:text-[96px] font-display font-light tracking-tight leading-none text-textColor flex items-baseline services-header-title">
          <span class="text-textColor/30 font-mono mr-4 text-2xl md:text-3xl">04.</span>
          <span>Services</span>
        </h2>
        <div class="w-full h-px bg-borderColor/10 mt-6 mb-8 services-divider"></div>
        <p class="text-[14px] font-mono text-textColor/60 max-w-lg leading-relaxed services-description">
          I provide end-to-end engineering and design solutions for forward-thinking brands and startups.
        </p>
      </header>

      <!-- Services 3-Column Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card bg-surface/95 border border-borderColor/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-borderColor/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
          style="min-height: 580px;"
        >
          <!-- Grid Backdrop highlight lines -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

          <div>
            <!-- Header section tag badge -->
            <div class="flex items-center justify-between mb-8 relative z-10">
              <span class="px-3 py-1 text-[11px] font-mono border border-borderColor/15 rounded-full text-textColor/65 uppercase bg-background">
                0{{ index + 1 }} // {{ service.tag }}
              </span>
              <div class="text-textColor/30 font-semibold select-none group-hover:text-textColor transition-colors duration-500">⊙</div>
            </div>

            <!-- Title & Description -->
            <h3 class="text-3xl font-display font-light text-textColor mb-4 relative z-10">
              {{ service.title }}
            </h3>
            <p class="text-[14px] font-mono text-textColor/70 leading-relaxed mb-8 relative z-10">
              {{ service.description }}
            </p>

            <!-- Custom Animated Graphic (Wow visual factor) -->
            <div class="relative z-10 mb-8 overflow-hidden rounded-2xl text-textColor">
              <!-- Frontend Architecture SVG -->
              <div v-if="index === 0" class="h-32 w-full bg-textColor/5 border border-borderColor/5 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                <svg class="w-full h-full" viewBox="0 0 200 80">
                  <rect x="10" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" stroke-dasharray="2 2" stroke-opacity="0.2"/>
                  <rect x="60" y="10" width="130" height="15" rx="4" fill="none" stroke="currentColor" stroke-dasharray="2 2" stroke-opacity="0.2"/>
                  <rect x="60" y="32" width="60" height="38" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5" class="animate-pulse"/>
                  <rect x="130" y="32" width="60" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
                  <line x1="70" y1="42" x2="110" y2="42" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
                  <line x1="70" y1="52" x2="100" y2="52" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
                  <line x1="140" y1="42" x2="180" y2="42" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
                </svg>
              </div>

              <!-- Creative Development SVG -->
              <div v-if="index === 1" class="h-32 w-full bg-textColor/5 border border-borderColor/5 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                <svg class="w-full h-full" viewBox="0 0 200 80">
                  <path d="M 0,20 L 200,20 M 0,40 L 200,40 M 0,60 L 200,60 M 40,0 L 40,80 M 80,0 L 80,80 M 120,0 L 120,80 M 160,0 L 160,80" stroke="currentColor" stroke-opacity="0.03" stroke-width="1"/>
                  <path d="M 10,40 Q 50,10 100,40 T 190,40" fill="none" stroke="currentColor" stroke-width="2" class="creative-wave"/>
                  <circle cx="100" cy="40" r="4" fill="currentColor"/>
                  <circle cx="50" cy="25" r="3" fill="currentColor" fill-opacity="0.4"/>
                  <circle cx="150" cy="55" r="3" fill="currentColor" fill-opacity="0.4"/>
                </svg>
              </div>

              <!-- Backend Systems SVG -->
              <div v-if="index === 2" class="h-32 w-full bg-textColor/5 border border-borderColor/5 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                <svg class="w-full h-full" viewBox="0 0 200 80">
                  <rect x="20" y="20" width="35" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/>
                  <line x1="20" y1="33" x2="55" y2="33" stroke="currentColor" stroke-opacity="0.2"/>
                  <line x1="20" y1="46" x2="55" y2="46" stroke="currentColor" stroke-opacity="0.2"/>
                  <circle cx="100" cy="40" r="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5" class="animate-pulse"/>
                  <circle cx="100" cy="40" r="4" fill="currentColor"/>
                  <rect x="145" y="20" width="35" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/>
                  <path d="M 55,40 L 95,40" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.4"/>
                  <path d="M 105,40 L 145,40" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.4"/>
                </svg>
              </div>
            </div>

            <!-- Capabilities checklist -->
            <ul class="space-y-3 font-mono text-[13px] text-textColor/65 mb-8 border-t border-borderColor/5 pt-6 relative z-10">
              <li 
                v-for="cap in service.capabilities" 
                :key="cap"
                class="flex items-center gap-2 hover:text-textColor transition-colors"
              >
                <span class="text-textColor/30">→</span> {{ cap }}
              </li>
            </ul>
          </div>

          <!-- Bottom card footer button -->
          <div class="relative z-10 pt-4 flex justify-between items-center group/btn">
            <span class="text-[12px] font-mono text-textColor/50 group-hover:text-textColor transition-colors">Inquire Details</span>
            <div class="w-10 h-10 rounded-full border border-borderColor/10 group-hover:border-textColor flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-textColor group-hover:text-background transition-all duration-500">
              →
            </div>
          </div>

          <!-- Card bottom background highlight -->
          <div class="absolute -right-20 -bottom-20 w-48 h-48 bg-textColor/[0.01] rounded-full blur-3xl group-hover:bg-textColor/[0.03] transition-all duration-700 pointer-events-none"></div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const services = ref([
  {
    title: 'Frontend Architecture',
    tag: 'ARCHITECTURE',
    description: 'Building scalable, performant, and accessible user interfaces using modern frameworks like Nuxt 3, Next.js, and Vue.',
    capabilities: [
      'Nuxt 3 & Next.js Ecosystems',
      'Performance & Web Vitals Audit',
      'Component Libraries & Systems'
    ]
  },
  {
    title: 'Creative Development',
    tag: 'MOTION',
    description: 'Crafting award-winning, cinematic web experiences with WebGL, Three.js, shaders, and GSAP.',
    capabilities: [
      '3D WebGL (Three.js & Canvas)',
      'Custom GSAP Animation Timelines',
      'Immersive Interactive Layouts'
    ]
  },
  {
    title: 'Backend Systems',
    tag: 'CLOUD',
    description: 'Designing robust API architectures, microservices, databases, and semantic search pipelines.',
    capabilities: [
      'Distributed REST & GraphQL APIs',
      'Caching (Redis) & DBs (Postgres)',
      'Semantic Search & RAG Integration'
    ]
  }
])

onMounted(async () => {
  if (!process.client) return

  await nextTick()
  
  // Additional delay to ensure everything is rendered
  await new Promise(resolve => setTimeout(resolve, 200))

  try {
    // Header Animation - using gsap.set to ensure elements are visible first
    const headerTitle = document.querySelector('.services-header-title')
    const divider = document.querySelector('.services-divider')
    const description = document.querySelector('.services-description')
    
    if (headerTitle) {
      gsap.set(headerTitle, { opacity: 1 })
      gsap.from(headerTitle, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }
    
    if (divider) {
      gsap.from(divider, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      })
    }
    
    if (description) {
      gsap.set(description, { opacity: 1 })
      gsap.from(description, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
      })
    }

    // Service Cards Animation
    const serviceCards = document.querySelectorAll('.service-card')
    
    if (serviceCards.length > 0) {
      // Set all cards to be visible first (failsafe)
      gsap.set(serviceCards, { opacity: 1 })
      
      // Then animate them in
      gsap.from(serviceCards, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: serviceCards[0],
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    }

    // Creative Wave Animation
    const wave = document.querySelector('.creative-wave')
    if (wave) {
      gsap.to(wave, {
        attr: { d: 'M 10,40 Q 50,70 100,40 T 190,40' },
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
    
    // Final ScrollTrigger refresh
    ScrollTrigger.refresh()
  } catch (error) {
    console.error('Animation error in ServicesSection:', error)
    // Ensure cards are visible even if animation fails
    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach(card => {
      (card as HTMLElement).style.opacity = '1'
    })
  }
})
</script>

<style scoped>
/* Wave path class styling */
.creative-wave {
  will-change: stroke-dashoffset, d;
}

/* Ensure service cards are always visible by default */
.service-card {
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
