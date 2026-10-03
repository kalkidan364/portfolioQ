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
        <div class="xl:col-span-5 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-row overflow-hidden relative shadow-xl min-h-[500px] sm:min-h-[620px]">

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
            <div class="absolute inset-0 z-0 overflow-hidden">
              <img 
                :src="currentProject.image" 
                :alt="currentProject.title"
                class="w-full h-full object-cover object-center"
              />
              <!-- Overlay for text readability -->
              <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#111]/95 pointer-events-none"></div>
            </div>

            <!-- Text Content -->
            <div class="relative z-10 p-5 sm:p-7 flex flex-col h-full justify-between pointer-events-none">
              <!-- Top Label -->
              <div class="flex items-center gap-1.5 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase drop-shadow-md">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
                FEATURED PROJECT
              </div>

              <!-- Bottom Info (Title & Tech) -->
              <div class="pointer-events-auto">
                <a v-if="currentProject.slug" :href="`/projects/${currentProject.slug}`" class="block group/link mb-4">
                  <h3 class="text-3xl sm:text-5xl font-bold text-white leading-none drop-shadow-lg group-hover/link:text-[#e5c158] transition-colors flex items-center gap-3">
                    {{ currentProject.title }}
                    <svg class="w-6 h-6 opacity-0 group-hover/link:opacity-100 transition-opacity -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </h3>
                  <h4 class="text-sm sm:text-base font-bold text-[#D4AF37] mt-2 drop-shadow-md">{{ currentProject.subtitle }}</h4>
                </a>

                <!-- Tech Stack at bottom -->
                <div class="border-t border-white/10 pt-4">
                  <p class="text-[#D4AF37] text-[8px] font-bold tracking-widest uppercase mb-3">TECHNOLOGIES USED</p>
                  <div class="flex flex-wrap gap-1.5">
                    <div v-for="tech in currentProject.tech" :key="tech.name" class="px-2.5 py-1.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                      <span class="text-[10px] font-medium" :style="{ color: tech.color }">{{ tech.icon }}</span>
                      <span class="text-[10px] text-gray-200">{{ tech.name }}</span>
                    </div>
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
    subtitle: 'Online Exam System',
    description: 'A comprehensive online exam system for managing assessments, tracking student progress, and grading automatically.',
    image: '/images/online-exam.png',
    stats: [
      { value: '500+', label: 'Exams' },
      { value: '10K+', label: 'Students' },
      { value: '100%', label: 'Reliability' }
    ],
    liveDemo: '#',
    github: '#',
    tech: [
      { name: 'Vue.js',       icon: 'V', color: '#4FC08D' },
      { name: 'MySQL',        icon: 'My', color: '#4479A1' },
      { name: 'Tailwind CSS', icon: 'Tw', color: '#06B6D4' },
      { name: 'Laravel',      icon: 'L', color: '#FF2D20' }
    ]
  },
  {
    slug: 'crypto-currency',
    title: 'Onchaintrade',
    subtitle: 'Crypto Trade Platform',
    description: 'A real-time crypto trading platform with live charts, secure transactions, and portfolio tracking.',
    image: '/images/onchaintrade.png',
    stats: [
      { value: '50+', label: 'Coins' },
      { value: '5K+', label: 'Traders' },
      { value: '99.9%', label: 'Uptime' }
    ],
    liveDemo: '#',
    github: '#',
    tech: [
      { name: 'Vue.js',  icon: 'V',  color: '#4FC08D' },
      { name: 'Laravel', icon: 'L',  color: '#FF2D20' },
      { name: 'MySQL',   icon: 'My', color: '#4479A1' },
      { name: 'Tailwind',icon: 'Tw', color: '#06B6D4' },
      { name: 'Yegara',  icon: 'Y',  color: '#FFD700' }
    ]
  },
  {
    slug: 'apollo-logistics',
    title: 'Apollo Logistics',
    subtitle: 'Logistics Website',
    description: 'A professional logistics website showcasing clearing services, freight operations, and HR consultancy.',
    image: '/images/apollo.jpg',
    stats: [
      { value: '10+', label: 'Services' },
      { value: '100%', label: 'Responsive' },
      { value: 'Fast', label: 'Load' }
    ],
    liveDemo: '#',
    github: '#',
    tech: [
      { name: 'HTML5',      icon: 'H5', color: '#E44D26' },
      { name: 'CSS3',       icon: 'C3', color: '#264DE4' },
      { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
      { name: 'Bootstrap',  icon: 'B',  color: '#7952B3' }
    ]
  },
  {
    slug: 'onchaintrade2',
    title: 'Onchaintrade2',
    subtitle: 'Next-Gen Crypto Platform',
    description: 'The most advanced cryptocurrency terminal with institutional-grade execution and unmatched analytics.',
    image: '/images/onchaintrade2.png',
    stats: [
      { value: '$2.8T', label: 'Volume' },
      { value: '14M+', label: 'Traders' },
      { value: '100%', label: 'Secure' }
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
    title: 'Onchaintrade',
    description: 'Real-time crypto trading platform with live charts and secure transactions.',
    image: '/images/onchaintrade.png',
    techIcons: [
      { label: 'V',  color: '#4FC08D' },
      { label: 'L',  color: '#FF2D20' },
      { label: 'My', color: '#4479A1' },
      { label: 'Tw', color: '#06B6D4' },
      { label: 'Y',  color: '#FFD700' }
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
