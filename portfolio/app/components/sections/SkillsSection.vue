<template>
  <div class="bg-background min-h-screen py-32 md:py-48 relative overflow-hidden transition-colors duration-300">
    <!-- Dynamic background glow to ensure visibility -->
    <div class="absolute inset-0 bg-gradient-to-br from-surface to-background pointer-events-none"></div>
    
    <!-- Subtle background effects -->
    <div class="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--text-color-rgb),0.03)_0%,transparent_70%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <header class="max-w-6xl mx-auto mb-16 md:mb-24 skills-header">
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight leading-none text-textColor flex items-baseline mb-6">
          <span class="text-textColor/30 font-mono mr-4 text-2xl md:text-3xl">03.</span>
          <span class="skills-title">Skills & Expertise</span>
        </h2>
        <div class="w-full h-px bg-borderColor/10 mb-8 skills-divider"></div>
        <p class="text-[14px] font-mono text-textColor/60 max-w-2xl leading-relaxed skills-desc">
          A comprehensive toolkit spanning artificial intelligence, modern web development, and cloud infrastructure.
        </p>
      </header>

      <!-- Horizontal Scroll Container -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-0">
        
        <!-- Previous Button -->
        <button 
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-14 h-14 rounded-full bg-[#0f172a] text-white border-2 border-[#0f172a] flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all duration-300 shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed group"
          :disabled="scrollPosition <= 0"
        >
          <span class="text-2xl font-bold transform group-hover:-translate-x-1 transition-transform">←</span>
        </button>

        <!-- Next Button -->
        <button 
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-14 h-14 rounded-full bg-[#0f172a] text-white border-2 border-[#0f172a] flex items-center justify-center hover:bg-white hover:text-[#0f172a] transition-all duration-300 shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed group"
          :disabled="scrollPosition >= maxScroll"
        >
          <span class="text-2xl font-bold transform group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <!-- Scrollable Skills Container -->
        <div 
          ref="scrollContainer"
          @scroll="handleScroll"
          class="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8 pl-2 pr-16"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          
          <!-- AI & Machine Learning Card -->
          <div class="skill-card flex-shrink-0 w-[340px] md:w-[400px] min-h-[500px] bg-surface hover:bg-background border-[3px] border-borderColor/30 rounded-3xl p-8 snap-start hover:border-borderColor hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl">
            <!-- Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center text-4xl bg-background rounded-2xl shadow-sm border border-borderColor/5">
              <svg class="w-12 h-12 text-textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-display font-semibold text-textColor mb-3 transition-colors">
              AI & Machine Learning
            </h3>
            
            <!-- Description -->
            <p class="text-[13px] font-mono text-textColor/70 mb-6 leading-relaxed font-medium">
              Designing and deploying intelligent systems for real-world impact.
            </p>
            
            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Semantic Kernel</span>
              <span class="skill-tag">Azure AI & Cognitive Search</span>
              <span class="skill-tag">RAG Pipelines</span>
              <span class="skill-tag">TensorFlow & Deep Learning</span>
              <span class="skill-tag">OpenAI & LLMs</span>
              <span class="skill-tag">Vector Search</span>
              <span class="skill-tag">Prompt Engineering</span>
              <span class="skill-tag">Computer Vision (OpenCV)</span>
            </div>
          </div>

          <!-- Frontend Development Card -->
          <div class="skill-card flex-shrink-0 w-[340px] md:w-[400px] min-h-[500px] bg-surface hover:bg-background border-[3px] border-borderColor/30 rounded-3xl p-8 snap-start hover:border-borderColor hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl">
            <!-- Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center text-4xl bg-background rounded-2xl shadow-sm border border-borderColor/5">
              <svg class="w-12 h-12 text-textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-display font-semibold text-textColor mb-3 transition-colors">
              Frontend Development
            </h3>
            
            <!-- Description -->
            <p class="text-[13px] font-mono text-textColor/70 mb-6 leading-relaxed font-medium">
              Crafting beautiful, responsive user interfaces with modern web technologies.
            </p>
            
            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">React & Next.js</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Redux & Zustand</span>
              <span class="skill-tag">Framer Motion</span>
              <span class="skill-tag">React Query</span>
              <span class="skill-tag">WebGL & Three.js</span>
              <span class="skill-tag">UX/UI Design</span>
            </div>
          </div>

          <!-- Backend & Cloud Card -->
          <div class="skill-card flex-shrink-0 w-[340px] md:w-[400px] min-h-[500px] bg-surface hover:bg-background border-[3px] border-borderColor/30 rounded-3xl p-8 snap-start hover:border-borderColor hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl">
            <!-- Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center text-4xl bg-background rounded-2xl shadow-sm border border-borderColor/5">
              <svg class="w-12 h-12 text-textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-display font-semibold text-textColor mb-3 transition-colors">
              Backend & Cloud
            </h3>
            
            <!-- Description -->
            <p class="text-[13px] font-mono text-textColor/70 mb-6 leading-relaxed font-medium">
              Building robust, scalable, and cloud-native server-side applications.
            </p>
            
            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Node.js & Express</span>
              <span class="skill-tag">Python & FastAPI</span>
              <span class="skill-tag">NestJS</span>
              <span class="skill-tag">REST & GraphQL APIs</span>
              <span class="skill-tag">Docker & Kubernetes</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Microservices</span>
            </div>
          </div>

          <!-- Database & DevOps Card -->
          <div class="skill-card flex-shrink-0 w-[340px] md:w-[400px] min-h-[500px] bg-surface hover:bg-background border-[3px] border-borderColor/30 rounded-3xl p-8 snap-start hover:border-borderColor hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl">
            <!-- Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center text-4xl bg-background rounded-2xl shadow-sm border border-borderColor/5">
              <svg class="w-12 h-12 text-textColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-display font-semibold text-textColor mb-3 transition-colors">
              Database & DevOps
            </h3>
            
            <!-- Description -->
            <p class="text-[13px] font-mono text-textColor/70 mb-6 leading-relaxed font-medium">
              Managing data infrastructure and deployment pipelines efficiently.
            </p>
            
            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Redis</span>
              <span class="skill-tag">Prisma ORM</span>
              <span class="skill-tag">Git & GitHub Actions</span>
              <span class="skill-tag">AWS & Azure</span>
              <span class="skill-tag">Nginx</span>
              <span class="skill-tag">Linux Administration</span>
            </div>
          </div>

        </div>

        <!-- Scroll Indicator -->
        <div class="flex justify-center items-center gap-3 mt-8">
          <span class="text-[11px] font-mono text-textColor/40 uppercase tracking-widest flex items-center gap-2">
            <span class="text-textColor/30">✦</span>
            Scroll horizontally to explore all skills
            <span class="text-textColor/30">✦</span>
          </span>
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

const scrollContainer = ref<HTMLElement | null>(null)
const scrollPosition = ref(0)
const maxScroll = ref(0)

const handleScroll = () => {
  if (scrollContainer.value) {
    scrollPosition.value = scrollContainer.value.scrollLeft
    maxScroll.value = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
  }
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -420, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 420, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (process.client) {
    // Calculate max scroll
    if (scrollContainer.value) {
      maxScroll.value = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
    }

    // Header Animations - Remove opacity to prevent blur
    gsap.from('.skills-title', {
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 85%'
      }
    })

    gsap.from('.skills-divider', {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 85%'
      }
    })

    gsap.from('.skills-desc', {
      y: 10,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 85%'
      }
    })

    // Skill Cards Animation - Remove opacity and reduce animation
    gsap.from('.skill-card', {
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skill-card',
        start: 'top 90%'
      }
    })
  }
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.skill-tag {
  @apply px-4 py-2.5 bg-background border-[2.5px] border-borderColor/25 rounded-xl text-[13px] font-mono text-textColor font-semibold hover:border-borderColor hover:bg-textColor hover:text-background transition-all duration-200 cursor-default shadow-md hover:shadow-lg;
}

/* Smooth scroll behavior */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Ensure cards are always visible */
.skill-card {
  opacity: 1 !important;
  filter: none !important;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
