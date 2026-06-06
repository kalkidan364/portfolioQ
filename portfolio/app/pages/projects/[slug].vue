<template>
  <div v-if="project" class="bg-background min-h-screen relative pb-32" ref="pageRef">
    
    <!-- Immersive Hero Banner -->
    <div class="relative w-full h-screen overflow-hidden flex items-end pb-20">
      <div class="absolute inset-0 z-0 bg-black">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover opacity-60" 
          ref="heroImgRef"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div class="flex flex-wrap gap-2 mb-6" ref="heroTagsRef">
          <span v-for="tag in project.tags" :key="tag" class="px-4 py-1.5 text-sm font-mono font-medium border border-white/20 rounded-full text-[#ffffff]/90 bg-[#ffffff]/10 backdrop-blur-md">
            {{ tag }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-[#ffffff] mb-6" ref="heroTitleRef">
          {{ project.title }}
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-4xl" ref="heroMetaRef">
          <div>
            <div class="text-xs text-[#ffffff]/40 uppercase tracking-wider mb-2">Role</div>
            <div class="font-medium text-lg">{{ project.role }}</div>
          </div>
          <div>
            <div class="text-xs text-[#ffffff]/40 uppercase tracking-wider mb-2">Year</div>
            <div class="font-medium text-lg">{{ project.year }}</div>
          </div>
          <div>
            <div class="text-xs text-[#ffffff]/40 uppercase tracking-wider mb-2">Client</div>
            <div class="font-medium text-lg">{{ project.client }}</div>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#ffffff]/10 transition-colors tooltip" title="Live Preview">
              🔗
            </a>
            <a href="#" class="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#ffffff]/10 transition-colors tooltip" title="GitHub Repo">
              🐙
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-6 md:px-12 mt-20 relative z-20">
      
      <!-- Problem & Solution -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 section-reveal">
        <div>
          <h2 class="text-3xl font-bold mb-6 flex items-center">
            <span class="text-accent text-4xl mr-4">01.</span>
            The Challenge
          </h2>
          <p class="text-textColor/60 text-lg leading-relaxed">{{ project.problem }}</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-6 flex items-center">
            <span class="text-accent text-4xl mr-4">02.</span>
            The Solution
          </h2>
          <p class="text-textColor/60 text-lg leading-relaxed">{{ project.solution }}</p>
        </div>
      </div>

      <!-- Full Width Parallax Image Break -->
      <div class="w-full h-[60vh] rounded-3xl overflow-hidden mb-32 relative section-reveal glass-panel p-2">
        <div class="w-full h-full rounded-2xl overflow-hidden relative group">
          <img :src="project.gallery[0]" class="w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110" />
        </div>
      </div>

      <!-- Architecture & Tech Stack -->
      <div class="mb-32 section-reveal">
        <h2 class="text-5xl font-black mb-12">Architecture & <span class="text-gradient-accent">Stack</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(category, index) in project.architecture" :key="index" class="glass-panel p-8 rounded-3xl">
            <div class="w-12 h-12 rounded-xl bg-textColor/5 flex items-center justify-center text-2xl mb-6">
              {{ category.icon }}
            </div>
            <h3 class="text-xl font-bold mb-4">{{ category.title }}</h3>
            <ul class="space-y-3">
              <li v-for="item in category.items" :key="item" class="text-textColor/60 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Results & Metrics Dashboard -->
      <div class="glass-panel p-10 md:p-16 rounded-3xl border border-borderColor/10 section-reveal relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 class="text-4xl font-black mb-12">Project <span class="text-gradient-accent">Metrics</span></h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="metric in project.metrics" :key="metric.label" class="text-center relative z-10">
            <div class="text-5xl md:text-7xl font-mono font-bold text-textColor mb-2 counter" :data-target="metric.value">
              0
            </div>
            <div class="text-sm font-medium text-textColor/50 uppercase tracking-widest">{{ metric.label }}</div>
          </div>
        </div>
        
        <div class="mt-16 pt-10 border-t border-borderColor/10">
          <h3 class="text-xl font-bold mb-4">Key Features Delivered</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="feature in project.features" :key="feature" class="flex items-center text-textColor/80 glass px-6 py-4 rounded-xl">
              <span class="text-accent mr-4">✓</span>
              {{ feature }}
            </div>
          </div>
        </div>
      </div>

      <!-- Next Project Footer -->
      <div class="mt-40 text-center pb-20">
        <p class="text-textColor/40 font-mono text-sm uppercase tracking-widest mb-6">Next Project</p>
        <NuxtLink to="/" class="text-3xl md:text-5xl font-black text-textColor hover:text-accent transition-colors">
          View All Works →
        </NuxtLink>
      </div>

    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <h1 class="text-4xl">Project Not Found</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const route = useRoute()
const slug = route.params.slug as string

const heroTitleRef = ref(null)
const heroImgRef = ref(null)
const heroTagsRef = ref(null)
const heroMetaRef = ref(null)

// Mock Database for the 3 projects
const projectsDB: Record<string, any> = {
  'ethereal-finance': {
    title: 'Ethereal Finance',
    client: 'Ethereal Labs (Web3)',
    role: 'Lead Frontend',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=2000&h=1200',
    tags: ['Vue 3', 'TypeScript', 'Tailwind', 'Ethers.js'],
    problem: 'The decentralized finance space is plagued by slow, unresponsive interfaces that confuse users and lead to expensive mistakes. Ethereal Labs needed a dashboard that felt as instant and premium as a traditional fintech app, despite communicating with a high-latency blockchain backend.',
    solution: 'I architected a complex state-management system using Pinia, coupled with an optimistic UI strategy that instantly reflects user actions while waiting for blockchain confirmations. The UI was polished with custom Three.js visualizers to represent wallet health.',
    gallery: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=1200'],
    architecture: [
      { icon: '🎨', title: 'Frontend', items: ['Vue 3 (Composition API)', 'Tailwind CSS', 'GSAP', 'Three.js'] },
      { icon: '🔗', title: 'Web3 Integration', items: ['Ethers.js v6', 'Wagmi', 'WalletConnect v2'] },
      { icon: '⚙️', title: 'Infrastructure', items: ['Vercel Edge Network', 'Pinia (State)', 'Vitest'] }
    ],
    metrics: [
      { label: 'Lighthouse', value: 98 },
      { label: 'Latency (ms)', value: 45 },
      { label: 'Daily Users', value: 12000 },
      { label: 'Uptime %', value: 99 }
    ],
    features: ['Optimistic UI Updates', 'Real-time Gas Tracking', 'Interactive Portfolio 3D Visualizer', 'Hardware Wallet Support']
  },
  'nexus-saas': {
    title: 'Nexus SaaS Platform',
    client: 'Nexus Enterprise',
    role: 'Full Stack',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=1200',
    tags: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
    problem: 'Enterprise resource planning software is notoriously clunky. Nexus needed a platform that handled massive datasets (1M+ rows) in the browser without freezing the main thread, while maintaining a sleek, consumer-grade aesthetic.',
    solution: 'I implemented a virtualized data-grid architecture combined with Web Workers to offload heavy data processing. The backend was rewritten using Node.js and Prisma, providing a strictly typed GraphQL API that eliminated runtime errors.',
    gallery: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=1200'],
    architecture: [
      { icon: '🖥️', title: 'Frontend', items: ['Next.js 14', 'React 18', 'TanStack Query', 'Framer Motion'] },
      { icon: '🗄️', title: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'Prisma ORM'] },
      { icon: '☁️', title: 'Cloud', items: ['AWS ECS', 'PostgreSQL', 'Redis Caching'] }
    ],
    metrics: [
      { label: 'API Speed (ms)', value: 80 },
      { label: 'Data Rows', value: 1000000 },
      { label: 'Code Coverage', value: 95 },
      { label: 'SEO Score', value: 100 }
    ],
    features: ['Virtualized Data Grids', 'Web Worker Data Processing', 'Real-time Collaboration', 'Role-based Access Control']
  },
  'aura-ecommerce': {
    title: 'Aura E-Commerce',
    client: 'Aura Luxury Brands',
    role: 'Frontend Engineer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=1200',
    tags: ['Nuxt 3', 'Shopify', 'GSAP', 'WebGL'],
    problem: 'Luxury brands require digital experiences that match their physical exclusivity. Aura’s previous Shopify theme was slow, generic, and failing to convert high-ticket customers due to poor mobile performance.',
    solution: 'Built a completely custom headless storefront using Nuxt 3 and the Shopify Storefront API. Integrated smooth page transitions and WebGL product viewers to create a cinematic shopping experience without sacrificing speed.',
    gallery: ['https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=2000&h=1200'],
    architecture: [
      { icon: '🛍️', title: 'Commerce', items: ['Shopify Storefront API', 'Stripe Integration', 'Custom Cart'] },
      { icon: '🚀', title: 'Frontend Framework', items: ['Nuxt 3 (SSR)', 'Vue.js', 'Lenis Scroll'] },
      { icon: '✨', title: 'Creative', items: ['WebGL Product Viewer', 'GSAP Page Transitions'] }
    ],
    metrics: [
      { label: 'Conversion %', value: 12 },
      { label: 'Lighthouse', value: 100 },
      { label: 'Bounce Rate %', value: 24 },
      { label: 'Load Time (s)', value: 0.8 }
    ],
    features: ['Headless Shopify Architecture', '3D Product Configurations', 'Instant Page Transitions', 'Algolia Search Integration']
  }
}

const project = ref(projectsDB[slug])

onMounted(() => {
  if (process.client && project.value) {
    // Hero Animations
    const tl = gsap.timeline()
    
    tl.from(heroImgRef.value, {
      scale: 1.2,
      duration: 2,
      ease: 'power3.out'
    }, 0)
    
    tl.from(heroTagsRef.value, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, 0.5)

    tl.from(heroTitleRef.value, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    }, 0.7)

    tl.from(heroMetaRef.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, 1)

    // Scroll reveal for sections
    const sections = document.querySelectorAll('.section-reveal')
    sections.forEach(sec => {
      gsap.from(sec, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
        }
      })
    })

    // Counter Animation
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0')
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: 'power3.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%'
        }
      })
    })

    // Image Parallax Effect
    gsap.to(heroImgRef.value, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroImgRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }
})
</script>

<style scoped>
/* Scoped styles if needed */
</style>
