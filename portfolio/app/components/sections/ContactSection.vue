<template>
  <div class="bg-background min-h-screen py-32 md:py-48 relative overflow-hidden transition-colors duration-500" @mousemove="handleMouseMove" ref="containerRef">
    <!-- Subtle background radial highlight matching the mouse -->
    <div 
      class="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(var(--text-color-rgb),0.02)_0%,transparent_70%)] pointer-events-none transition-transform duration-500 ease-out z-0"
      :style="{ transform: `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)` }"
    ></div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Clean Section Header -->
      <header class="max-w-7xl mx-auto px-6 md:px-0 mb-16 relative z-10 contact-header">
        <h2 class="text-6xl md:text-8xl lg:text-[96px] font-display font-light tracking-tight leading-none text-textColor flex items-baseline mb-8">
          <span class="text-textColor/30 font-mono mr-4 text-2xl md:text-3xl contact-num">05.</span>
          <span class="contact-title-text">Contact Me</span>
        </h2>
        <div class="w-full h-px bg-borderColor/10 contact-divider"></div>
      </header>

      <!-- Main Content Grid - Description Card + Social Links Sidebar -->
      <div class="max-w-7xl mx-auto px-6 md:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Left Column - Description Card and Email -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Description Card - Cursor-Controlled Wipe Reveal Effect -->
            <div 
              class="contact-reveal group relative bg-background border border-borderColor/10 rounded-3xl px-8 py-8 hover:border-borderColor/20 overflow-hidden w-full"
              @mousemove="handleCardMouseMove"
              @mouseleave="handleCardMouseLeave"
              ref="descCardRef"
            >
              <!-- Particle effect on hover -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div class="absolute top-[60%] left-[45%] w-1 h-1 bg-background/40 rounded-full animate-ping" style="animation-delay: 0.4s;"></div>
                <div class="absolute top-[55%] left-[55%] w-1 h-1 bg-background/30 rounded-full animate-ping" style="animation-delay: 0.7s;"></div>
                <div class="absolute top-[50%] left-[50%] w-1 h-1 bg-background/30 rounded-full animate-ping" style="animation-delay: 1s;"></div>
                <div class="absolute top-[65%] left-[60%] w-1 h-1 bg-background/20 rounded-full animate-ping" style="animation-delay: 1.3s;"></div>
              </div>
              
              <div class="relative z-10">
                <!-- Top section -->
                <div class="mb-10">
                  <h3 class="text-xl md:text-2xl font-semibold text-textColor mb-3">
                    Ready to collaborate?
                  </h3>
                  <p class="text-sm md:text-base text-textColor/80 font-medium leading-relaxed max-w-3xl">
                    Whether you have a project in mind or just want to chat about tech, I'm always open to new opportunities and interesting conversations.
                  </p>
                </div>
                
                <!-- Text Reveal Effect - Cursor-Controlled Wipe Animation -->
                <div class="relative h-[50px] md:h-[70px]">
                  <!-- Base text - "You know the Business" -->
                  <h2 class="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-bold text-textColor/15 leading-none whitespace-nowrap overflow-hidden">
                    You know the Business
                  </h2>
                  
                  <!-- Overlay with "I know the Tech" - Reveals based on cursor position -->
                  <div class="absolute inset-0 overflow-hidden">
                    <div 
                      class="relative w-full h-full"
                      :style="{ clipPath: `inset(0 ${100 - revealPercentage}% 0 0)` }"
                    >
                      <!-- Fully opaque dark overlay background -->
                      <div class="absolute top-0 left-0 right-0 bottom-0 bg-textColor"></div>
                      
                      <!-- New text on overlay - fully opaque white text -->
                      <h2 class="relative text-3xl md:text-5xl lg:text-6xl font-bold text-background leading-none whitespace-nowrap">
                        I know the Tech
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Big Typographic Email Link -->
            <div class="contact-reveal">
              <a 
                href="mailto:hello@kalkidanmengistu.com" 
                class="group relative block w-full overflow-hidden border border-borderColor/10 rounded-[32px] bg-background hover:border-borderColor/30 transition-all duration-700 shadow-sm hover:shadow-2xl"
              >
                <!-- Background highlight on hover -->
                <div class="absolute inset-0 bg-surface transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                
                <div class="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div>
                    <span class="block text-[11px] font-mono text-textColor/40 mb-3 uppercase tracking-widest">Direct Email</span>
                    <h3 class="text-2xl md:text-4xl lg:text-5xl font-display font-light text-textColor group-hover:italic transition-all duration-500">
                      kalkidanmengistu11@gmail.com
                    </h3>
                  </div>
                  <div class="mt-6 md:mt-0 w-14 h-14 rounded-full border border-borderColor/20 flex items-center justify-center transform group-hover:bg-textColor group-hover:text-background group-hover:border-textColor group-hover:-rotate-45 transition-all duration-500 bg-background">
                    <span class="text-xl">→</span>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <!-- Right Column - Vertical Social Links -->
          <div class="lg:col-span-4">
            <div class="contact-reveal bg-background rounded-3xl p-6 sticky top-8">
              
              <!-- Social Links - Vertical Stack -->
              <div class="space-y-4">
                <a 
                  v-for="(social, index) in socials" 
                  :key="index"
                  :href="social.link"
                  target="_blank"
                  class="group bg-surface border border-borderColor/10 rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-borderColor/30 hover:shadow-lg hover:bg-surface/80 transition-all duration-300 relative overflow-hidden"
                >
                  <!-- Subtle hover gradient -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-textColor/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <!-- Icon -->
                  <div class="relative z-10 w-10 h-10 rounded-xl bg-background border border-borderColor/10 flex items-center justify-center text-textColor/70 group-hover:text-textColor group-hover:border-borderColor/20 transition-all duration-300 shrink-0">
                    <span class="text-lg font-semibold" v-html="social.icon"></span>
                  </div>
                  
                  <!-- Text content with hover swap -->
                  <div class="relative z-10 flex-1 min-w-0 h-[40px] overflow-hidden">
                    <!-- Default state - Name and handle -->
                    <div class="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      <h5 class="text-sm font-medium text-textColor mb-0.5">{{ social.name }}</h5>
                      <p class="text-xs font-mono text-textColor/50 truncate">
                        {{ social.handle }}
                      </p>
                    </div>
                    
                    <!-- Hover state - Full link -->
                    <div class="absolute inset-0 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center">
                      <p class="text-sm font-mono text-textColor/70 truncate">
                        {{ social.fullLink }}
                      </p>
                    </div>
                  </div>

                  <!-- Arrow indicator -->
                  <div class="relative z-10 w-8 h-8 rounded-lg bg-background border border-borderColor/10 flex items-center justify-center transform group-hover:bg-textColor group-hover:text-background group-hover:border-textColor group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0">
                    <span class="text-sm">↗</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLElement | null>(null)
const descCardRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const revealPercentage = ref(0)

const socials = [
  { name: 'GitHub', icon: '&#xe902;', link: 'https://github.com/kalkidan-hub', handle: '@kalkidan-hub', fullLink: 'github.com/kalkidan-hub' },
  { name: 'LinkedIn', icon: 'in', link: 'https://www.linkedin.com/in/kalkidan-mengistu/', handle: 'kalkidan-mengistu', fullLink: 'linkedin.com/in/kalkidan-mengistu' },
  { name: 'Twitter / X', icon: '𝕏', link: 'https://x.com/Kalkidan6263', handle: '@Kalkidan6263', fullLink: 'x.com/Kalkidan6263' },
  { name: 'Dribbble', icon: '&#xe60d;', link: 'https://dribbble.com/kalkidan-mengistu', handle: 'kalkidan-mengistu', fullLink: 'dribbble.com/kalkidan-mengistu' }
]

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

const handleCardMouseMove = (e: MouseEvent) => {
  if (!descCardRef.value) return
  const rect = descCardRef.value.getBoundingClientRect()
  const mouseXInCard = e.clientX - rect.left
  const cardWidth = rect.width
  
  // Calculate percentage based on cursor position (0% at left, 100% at right)
  // Directly set without animation for instant response
  const percentage = Math.max(0, Math.min(100, (mouseXInCard / cardWidth) * 100))
  revealPercentage.value = percentage
}

const handleCardMouseLeave = () => {
  // Reset to 0 when mouse leaves
  revealPercentage.value = 0
}

onMounted(() => {
  if (process.client) {
    // Header Animations
    gsap.from('.contact-title-text', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 85%'
      }
    })
    gsap.from('.contact-num', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.1,
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 85%'
      }
    })
    gsap.from('.contact-divider', {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 85%'
      }
    })

    // Content reveal
    gsap.from('.contact-reveal', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.4,
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 85%'
      }
    })
  }
})
</script>
