<template>
  <div class="bg-background min-h-screen pb-40 relative overflow-hidden transition-colors duration-500">
    <!-- Subtle background visual elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--text-color-rgb),0.01)_0%,transparent_70%)] pointer-events-none"></div>

    <!-- Clean Section Header -->
    <header class="max-w-4xl mx-auto px-6 md:px-0 mb-20 relative z-10 pt-32">
      <h2 class="text-6xl md:text-8xl lg:text-[96px] font-display font-light tracking-tight leading-none text-textColor flex items-baseline">
        <span class="text-textColor/30 font-mono mr-4 text-2xl md:text-3xl">03.</span>
        <span>Experience</span>
      </h2>
      <div class="w-full h-px bg-borderColor/10 mt-6"></div>
    </header>

    <div class="container mx-auto px-6 md:px-12 relative z-20">
      
      <div class="relative w-full max-w-4xl mx-auto pb-20">
        
        <!-- Center Timeline Line (Background Track) -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-textColor/20"></div>
        
        <!-- Center Animated Progress Bar -->
        <div 
          ref="progressBarRef"
          class="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-textColor/80 origin-top"
          style="height: 100%; transform: scaleY(0);"
        ></div>
        
        <!-- Cards Container -->
        <div class="space-y-24 relative z-10" ref="contentContainerRef">
          
          <div 
            v-for="(job, index) in experience" 
            :key="index" 
            class="exp-card relative w-full pt-8"
          >
            
            <!-- Timeline Dot on top border, centered -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
              <div 
                class="w-4 h-4 rounded-full bg-background border-2 border-textColor/50 transition-all duration-300 shadow-[0_0_8px_rgba(15,23,42,0.2)] marker-dot"
                :data-dot-index="index"
              ></div>
            </div>
            
            <!-- Glass Card Container -->
            <div class="bg-surface/95 backdrop-blur-md border border-borderColor/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-borderColor/20 hover:shadow-xl relative overflow-hidden group">
              <!-- Background Accent / Glow -->
              <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-textColor/[0.01] rounded-full blur-3xl group-hover:bg-textColor/[0.02] transition-colors duration-700 pointer-events-none"></div>
              
              <!-- Company Header -->
              <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div class="flex items-center gap-3">
                  <h3 class="text-2xl md:text-3xl font-display font-medium text-textColor">{{ job.company }}</h3>
                  <!-- If there's a website/link (mocked for design parity) -->
                  <a 
                    href="#" 
                    @click.prevent 
                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-borderColor/10 hover:border-borderColor/30 hover:bg-background text-[12px] font-mono text-textColor/60 hover:text-textColor transition-all duration-300"
                  >
                    Visit Website
                    <span class="text-[9px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>
              </div>
              
              <!-- Role / Job Title & Duration -->
              <div class="mb-6">
                <div class="flex items-center flex-wrap gap-2 mb-2">
                  <span class="text-base text-textColor/40 mr-1 select-none">○</span>
                  <h4 class="text-[16px] font-mono font-semibold text-textColor">{{ job.role }}</h4>
                  <span 
                    v-if="index === 0" 
                    class="px-2.5 py-0.5 text-[12px] font-mono font-medium bg-textColor/5 text-textColor/90 border border-borderColor/10 rounded-full animate-pulse"
                  >
                    Current Role
                  </span>
                </div>
                <div class="text-[13px] font-mono text-textColor/70 font-medium">{{ job.duration }}</div>
              </div>
              
              <!-- Description -->
              <p class="text-textColor/80 text-[14px] font-mono leading-relaxed mb-8 max-w-3xl">
                {{ job.description }}
              </p>
              
              <!-- Key Impact/Bullets -->
              <div class="mb-8">
                <ul class="space-y-4">
                  <li v-for="(metric, i) in job.impact" :key="i" class="flex items-start text-[14px] font-mono text-textColor/95">
                    <span class="text-textColor text-xl mr-3 font-semibold select-none leading-none relative top-[-1px]">→</span>
                    <span v-html="metric" class="leading-relaxed"></span>
                  </li>
                </ul>
              </div>
              
              <!-- Technologies / Tech Stack -->
              <div class="flex flex-wrap gap-2.5 pt-4 border-t border-borderColor/5">
                <span 
                  v-for="tech in job.technologies" 
                  :key="tech" 
                  class="px-3 py-1.5 bg-background border border-borderColor/10 hover:border-borderColor/30 rounded-lg text-[12px] font-mono text-textColor hover:bg-surface transition-all duration-300 cursor-default"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Bottom Right Double Circle Icon ⊙ -->
              <div class="absolute bottom-6 right-8 text-textColor/15 text-xl font-bold pointer-events-none select-none">
                ⊙
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
// Removed theme dependency for now

const progressBarRef = ref(null)
const contentContainerRef = ref(null)

const experience = ref([
  {
    company: 'TechNova Solutions',
    role: 'Senior Full Stack Engineer',
    duration: '2023 - Present',
    description: 'Spearheaded the transition of legacy monolithic applications into highly scalable, event-driven microservices architectures. Collaborated with principal engineers to define the company\'s long-term technical roadmap.',
    impact: [
      'Improved API response times by <strong class="text-accent">40%</strong> through aggressive Redis caching strategies.',
      'Led the frontend rewrite to Nuxt 3, improving SEO organic traffic by <strong class="text-accent">150%</strong>.',
      'Mentored a team of 4 junior developers, reducing onboarding time by <strong class="text-accent">3 weeks</strong>.'
    ],
    technologies: ['Vue 3', 'Nuxt', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis']
  },
  {
    company: 'Nexus Creative Agency',
    role: 'Frontend Architect',
    duration: '2021 - 2023',
    description: 'Developed premium, award-winning marketing websites and SaaS applications for high-profile clients in the fashion and tech industries.',
    impact: [
      'Delivered 12+ premium web applications featuring advanced <strong class="text-accent">WebGL</strong> and <strong class="text-accent">GSAP</strong> animations.',
      'Created an internal UI component library adopted by the entire 15-person frontend team.',
      'Consistently achieved <strong class="text-accent">95+ Lighthouse scores</strong> across all client deliverables.'
    ],
    technologies: ['React', 'Next.js', 'Three.js', 'GSAP', 'Tailwind CSS', 'Framer Motion']
  },
  {
    company: 'Freelance & Open Source',
    role: 'Software Developer',
    duration: '2019 - 2021',
    description: 'Built custom e-commerce solutions for emerging brands and contributed heavily to open-source web development tools and UI libraries.',
    impact: [
      'Developed custom Shopify headless themes resulting in a <strong class="text-accent">30% increase</strong> in client conversion rates.',
      'Contributed core features to popular Vue.js open-source UI libraries (10k+ stars on GitHub).',
      'Managed end-to-end project lifecycles, from design to deployment, for 20+ freelance clients.'
    ],
    technologies: ['JavaScript', 'Vue.js', 'PHP', 'Laravel', 'MySQL', 'Shopify Liquid']
  }
])

let activeDotIndex = -1

onMounted(() => {
  if (process.client) {
    // Experience Cards Fade In
    const cards = document.querySelectorAll('.exp-card')
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        }
      })
    })

    // Center Timeline Progress Bar
    if (progressBarRef.value && contentContainerRef.value) {
      gsap.to(progressBarRef.value, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: contentContainerRef.value,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      })

      // Highlight active timeline marker
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            activeDotIndex = index
            activateMarker(index)
          },
          onEnterBack: () => {
            activeDotIndex = index
            activateMarker(index)
          },
        })
      })

      function activateMarker(index: number) {
        const dots = document.querySelectorAll('.marker-dot')
        dots.forEach((dot, i) => {
          if (i === index) {
            gsap.to(dot, { 
              backgroundColor: '#0f172a', 
              borderColor: '#0f172a',
              scale: 1.25, 
              boxShadow: '0 0 12px rgba(15, 23, 42, 0.3)',
              duration: 0.3 
            })
          } else {
            gsap.to(dot, { 
              backgroundColor: '#ffffff', 
              borderColor: 'rgba(15, 23, 42, 0.3)',
              scale: 1, 
              boxShadow: 'none',
              duration: 0.3 
            })
          }
        })
      }
    }
  }
})
</script>

<style scoped>
/* Scoped styles if any */
</style>
