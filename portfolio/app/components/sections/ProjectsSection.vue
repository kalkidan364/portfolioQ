<template>
  <div class="bg-[#111] py-16 relative overflow-hidden font-sans text-white">
    <div class="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px] relative z-10 space-y-10">
      
      <!-- Header -->
      <div class="text-center space-y-3">
        <div class="flex items-center justify-center gap-2 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          MY WORK
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Crafting <span class="text-[#D4AF37]">Digital Solutions</span>
        </h2>
        <p class="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
          A collection of projects where I solved real problems, built<br class="hidden md:block"/>
          impactful solutions and delivered real value.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        
        <!-- ===== LEFT: Featured Project Card (col-span-5) ===== -->
        <div class="xl:col-span-5 bg-[#161616] border border-white/5 rounded-2xl flex flex-row overflow-hidden relative shadow-xl min-h-[500px] sm:min-h-[620px]">

          <!-- Sidebar (counter + nav arrows only) -->
          <div class="w-10 sm:w-14 shrink-0 border-r border-white/5 flex flex-col items-center justify-end py-5 bg-[#0d0d0d]">
            <div class="flex flex-col items-center gap-2">
              <span class="text-[#D4AF37] text-[9px] font-mono font-bold leading-tight text-center">{{ currentProjectIndex + 1 }}<br/><span class="text-gray-600">/ {{ projects.length }}</span></span>
              <button @click="prevProject" class="w-7 h-7 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
              </button>
              <button @click="nextProject" class="w-7 h-7 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Featured Content -->
          <div class="flex-1 relative overflow-hidden">
            <!-- Large background dashboard image -->
            <div class="absolute right-[-8%] top-0 bottom-0 w-[68%] z-0 overflow-hidden">
              <img 
                :src="currentProject.image" 
                :alt="currentProject.title"
                class="w-full h-full object-cover object-left-top opacity-70"
                style="transform: perspective(900px) rotateY(-12deg) rotateX(3deg) scale(1.05);"
              />
              <!-- Left fade -->
              <div class="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/70 to-transparent"></div>
              <!-- Top fade -->
              <div class="absolute inset-0 bg-gradient-to-b from-[#161616]/30 via-transparent to-[#161616]/80"></div>
            </div>

            <!-- Text Content -->
            <div class="relative z-10 p-5 sm:p-7 flex flex-col h-full">
              <div class="flex-1">
                <div class="flex items-center gap-1.5 text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase mb-4">
                  <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
                  FEATURED PROJECT
                </div>

                <h3 class="text-3xl sm:text-5xl font-bold text-white mb-1 leading-none">{{ currentProject.title }}</h3>
                <h4 class="text-base sm:text-lg font-bold text-[#D4AF37] mb-4">{{ currentProject.subtitle }}</h4>
                <p class="text-gray-400 text-xs leading-relaxed mb-6 max-w-full sm:max-w-[55%]">{{ currentProject.description }}</p>

                <!-- Stats -->
                <div class="flex items-center gap-0 mb-6 max-w-full overflow-x-auto pb-2 sm:pb-0">
                  <div v-for="(stat, i) in currentProject.stats" :key="i" class="flex items-center shrink-0">
                    <div class="text-center px-3 sm:px-4 py-2 bg-[#111]/70 border border-white/5 rounded-lg backdrop-blur-sm" :class="i === 0 ? 'rounded-r-none' : i === currentProject.stats.length - 1 ? 'rounded-l-none border-l-0' : 'rounded-none border-l-0'">
                      <p class="font-bold text-xs sm:text-sm" :class="i === currentProject.stats.length - 1 ? 'text-[#D4AF37]' : 'text-white'">{{ stat.value }}</p>
                      <p class="text-[8px] sm:text-[9px] uppercase tracking-wider mt-0.5" :class="i === currentProject.stats.length - 1 ? 'text-[#D4AF37]/70' : 'text-gray-500'">{{ stat.label }}</p>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                  <a v-if="currentProject.slug" :href="`/projects/${currentProject.slug}`" class="px-5 py-2 bg-gradient-to-r from-[#e5c158] to-[#b89430] hover:brightness-110 text-black font-semibold rounded-lg text-xs flex items-center gap-2 transition-all">
                    Live Demo <svg class="w-3 h-3 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                  <a v-else href="#" class="px-5 py-2 bg-gradient-to-r from-[#e5c158] to-[#b89430] hover:brightness-110 text-black font-semibold rounded-lg text-xs flex items-center gap-2 transition-all">
                    Coming Soon <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </a>
                  <a :href="currentProject.github" class="px-5 py-2 border border-white/10 text-white font-medium rounded-lg text-xs flex items-center gap-2 bg-[#111]/80 hover:bg-[#1a1a1a] transition-colors">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                  </a>
                </div>
              </div>

              <!-- Tech Stack at bottom -->
              <div class="border-t border-white/5 pt-4 mt-4">
                <p class="text-[#D4AF37] text-[8px] font-bold tracking-widest uppercase mb-3">TECHNOLOGIES USED</p>
                <div class="flex flex-wrap gap-1.5">
                  <div v-for="tech in currentProject.tech" :key="tech.name" class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5">
                    <span class="text-[10px] font-medium" :style="{ color: tech.color }">{{ tech.icon }}</span>
                    <span class="text-[10px] text-gray-300">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- ===== RIGHT: Filters + Grid (col-span-7) ===== -->
        <div class="xl:col-span-7 flex flex-col gap-4">
          
          <!-- Filters -->
          <div class="flex flex-wrap gap-2 overflow-x-auto pb-1">
            <button 
              v-for="filter in filters" :key="filter.key"
              @click="activeFilter = filter.key"
              :class="activeFilter === filter.key 
                ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10' 
                : 'border-white/5 text-gray-400 bg-[#161616] hover:border-white/20 hover:text-white'"
              class="px-4 py-2 rounded-lg border text-[10px] font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all">
              <span v-html="filter.icon" class="w-3.5 h-3.5 flex-shrink-0"></span>
              {{ filter.label }}
            </button>
          </div>
          
          <!-- Projects 2x3 Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <template v-for="card in filteredCards" :key="card.num">
              <!-- Regular project card -->
              <div class="block bg-[#161616] border border-white/5 rounded-2xl overflow-hidden flex flex-col relative group hover:border-[#D4AF37]/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.04)] transition-all cursor-pointer" @click="card.slug ? $router.push(`/projects/${card.slug}`) : null">
                <!-- Card Top: number + image side by side -->
                <div class="flex p-4 pb-0 gap-3">
                  <!-- Left text area -->
                  <div class="flex-1 min-w-0">
                    <span class="text-[#D4AF37] font-bold text-lg font-mono block mb-1">{{ card.num }}</span>
                    <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1.5">{{ card.category }}</p>
                    <h4 class="text-white font-bold text-sm leading-snug group-hover:text-[#D4AF37] transition-colors">{{ card.title }}</h4>
                  </div>
                  <!-- Right image -->
                  <div class="w-[115px] h-[85px] rounded-xl overflow-hidden bg-[#222] border border-white/5 shrink-0 group-hover:scale-[1.03] transition-transform origin-top-right">
                    <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
                  </div>
                </div>

                <!-- Description -->
                <div class="px-4 pt-2.5 pb-3 flex-1 flex flex-col">
                  <p class="text-gray-500 text-[10px] leading-relaxed flex-1 mb-3">{{ card.description }}</p>

                  <!-- Bottom: tech icons + arrow -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-1.5">
                      <div 
                        v-for="tech in card.techIcons" :key="tech.label"
                        class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[8px] font-bold"
                        :style="{ color: tech.color }">
                        {{ tech.label }}
                      </div>
                    </div>
                    <div class="w-8 h-8 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all">
                      <svg class="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Coming Soon Card -->
            <div class="bg-[#161616] border border-[#D4AF37]/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all" style="min-height: 160px;">
              <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent"></div>
              <div class="absolute top-3 right-3 text-[#D4AF37]/50">
                <svg class="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/></svg>
              </div>
              <div class="w-12 h-12 mb-3 relative z-10 text-[#D4AF37] opacity-80">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/><path d="M10 13h4v-2h-4z"/></svg>
              </div>
              <h4 class="text-white font-bold text-base mb-2 relative z-10">More Projects<br/>Coming Soon</h4>
              <p class="text-gray-500 text-[10px] max-w-[170px] relative z-10 leading-relaxed">I'm always building new things and exploring innovative ideas.</p>
            </div>

          </div>
        </div>
      </div>

      <!-- Bottom Stats Banner -->
      <div class="bg-[#161616] border border-white/5 rounded-2xl p-5 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-5 sm:gap-0 w-full">
        <div v-for="(stat, i) in bottomStats" :key="i" class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center shrink-0 border border-[#D4AF37]/20 text-[#D4AF37]" v-html="stat.icon"></div>
          <div>
            <p class="text-white font-bold text-lg leading-none">{{ stat.value }}</p>
            <p class="text-gray-500 text-[9px] font-medium uppercase tracking-wider mt-0.5">{{ stat.label }}</p>
          </div>
          <div v-if="i < bottomStats.length - 1" class="w-px h-8 bg-white/5 hidden lg:block ml-8"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// ─── Featured projects (carousel) ──────────────────────────────────
const currentProjectIndex = ref(0)

const projects = ref([
  {
    slug: 'work-1',
    title: 'Work.1',
    subtitle: 'Management System',
    description: 'A powerful management system that helps teams organize tasks, track progress, and improve productivity.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    stats: [
      { value: '12+', label: 'Modules' },
      { value: '1K+', label: 'Users' },
      { value: '99%', label: 'Efficiency' }
    ],
    liveDemo: '#',
    github: '#',
    tech: [
      { name: 'Vue.js',       icon: 'V', color: '#4FC08D' },
      { name: 'Node.js',      icon: 'N', color: '#339933' },
      { name: 'MySQL',        icon: 'My', color: '#4479A1' },
      { name: 'Tailwind CSS', icon: 'Tw', color: '#06B6D4' },
      { name: 'Laravel',      icon: 'L', color: '#FF2D20' }
    ]
  },
  {
    slug: 'crypto-currency',
    title: 'Trade.X',
    subtitle: 'Crypto Trade Platform',
    description: 'A real-time crypto trading platform with live charts, secure transactions, and portfolio tracking.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=900&q=80',
    stats: [
      { value: '50+', label: 'Coins' },
      { value: '5K+', label: 'Traders' },
      { value: '99.9%', label: 'Uptime' }
    ],
    liveDemo: '#',
    github: '#',
    tech: [
      { name: 'Vue.js',  icon: 'V',  color: '#4FC08D' },
      { name: 'Node.js', icon: 'N',  color: '#339933' },
      { name: 'Tailwind',icon: 'Tw', color: '#06B6D4' }
    ]
  }
])

const currentProject = computed(() => projects.value[currentProjectIndex.value])

function nextProject() {
  currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.value.length
}
function prevProject() {
  currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.value.length) % projects.value.length
}

// ─── Filters ───────────────────────────────────────────────────────
const activeFilter = ref('all')

const filters = ref([
  { key: 'all',        label: 'All Projects',      icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>' },
  { key: 'web',        label: 'Web Applications',  icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' },
  { key: 'mgmt',       label: 'Management Systems', icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"/></svg>' },
  { key: 'frontend',   label: 'Frontend Only',     icon: '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>' }
])

// ─── Grid project cards ─────────────────────────────────────────────
const allCards = ref([
  {
    num: '02', category: 'Web Application', filterKey: 'web', slug: 'crypto-currency',
    title: 'Crypto Currency Trade Platform',
    description: 'Real-time crypto trading platform with live charts and secure transactions.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&q=80',
    techIcons: [
      { label: 'V',  color: '#4FC08D' },
      { label: 'N',  color: '#339933' },
      { label: 'Tw', color: '#06B6D4' }
    ]
  },
  {
    num: '03', category: 'Website', filterKey: 'web', slug: 'apollo-logistics',
    title: 'Apollo Logistics Website',
    description: 'Professional logistics website showcasing services, tracking, and company info.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?w=400&q=80',
    techIcons: [
      { label: 'H5', color: '#E44D26' },
      { label: 'C3', color: '#264DE4' },
      { label: 'JS', color: '#F7DF1E' },
      { label: 'B',  color: '#7952B3' }
    ]
  },
  {
    num: '04', category: 'Management System', filterKey: 'mgmt', slug: 'smart-inventory',
    title: 'Smart Inventory & Sales System',
    description: 'Inventory and sales management system for Qarem Made Company to manage operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    techIcons: [
      { label: 'L',  color: '#FF2D20' },
      { label: 'V',  color: '#4FC08D' },
      { label: 'JS', color: '#F7DF1E' },
      { label: 'Tw', color: '#06B6D4' }
    ]
  },
  {
    num: '05', category: 'Frontend Only', filterKey: 'frontend', slug: 'amazon-clone',
    title: 'Blog Website (Amazon Clone)',
    description: 'Responsive blog website inspired by Amazon\'s design principles built using frontend technologies.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80',
    techIcons: [
      { label: 'H5', color: '#E44D26' },
      { label: 'C3', color: '#264DE4' },
      { label: 'JS', color: '#F7DF1E' }
    ]
  },
  {
    num: '06', category: 'Frontend Only', filterKey: 'frontend', slug: 'netflix-clone',
    title: 'Netflix Website Clone',
    description: 'A Netflix UI clone built using HTML, CSS, and JavaScript with fully responsive design.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80',
    techIcons: [
      { label: 'H5', color: '#E44D26' },
      { label: 'C3', color: '#264DE4' },
      { label: 'JS', color: '#F7DF1E' }
    ]
  }
])

const filteredCards = computed(() => {
  if (activeFilter.value === 'all') return allCards.value
  return allCards.value.filter(c => c.filterKey === activeFilter.value)
})

// ─── Bottom stats ───────────────────────────────────────────────────
const bottomStats = ref([
  {
    value: '10+', label: 'Projects Completed',
    icon: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/><path d="M10 13h4v-2h-4z"/></svg>'
  },
  {
    value: '7+', label: 'Technologies Used',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
  },
  {
    value: '3+', label: 'Years of Learning',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
  },
  {
    value: '100%', label: 'Passion & Dedication',
    icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>'
  }
])
</script>
