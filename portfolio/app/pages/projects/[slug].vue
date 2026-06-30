<template>
  <div v-if="projectData" class="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden relative selection:bg-[#D4AF37]/30">
    
    <!-- Main Content -->
    <main class="min-h-screen pb-20">
      
      <!-- Top Navbar (reused from global components) -->
      <AppHeader class="absolute top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" />
      
      <div class="px-6 md:px-12 pt-28 max-w-[1600px] mx-auto">
        
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-[10px] text-gray-500 mb-8 font-medium">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          <span class="hover:text-white transition-colors">Projects</span>
          <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          <span class="text-white">{{ projectData.title }}</span>
        </div>

        <!-- ══════════════════════════════════════
             HERO SECTION
        ══════════════════════════════════════ -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 relative">
          
          <!-- Background Glow -->
          <div class="absolute right-[10%] top-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/10 rounded-[100%] blur-[120px] pointer-events-none -z-10 transform -rotate-12"></div>
          <!-- Fine glowing orbital rings -->
          <div class="absolute right-[5%] top-1/2 -translate-y-1/2 w-[900px] h-[400px] border border-[#D4AF37]/10 rounded-[100%] pointer-events-none -z-10 transform -rotate-[15deg]"></div>
          <div class="absolute right-[8%] top-1/2 -translate-y-1/2 w-[800px] h-[350px] border border-[#D4AF37]/20 rounded-[100%] pointer-events-none -z-10 transform -rotate-[15deg]"></div>

          <!-- Left Text Content -->
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <svg class="w-2.5 h-2.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
              <span class="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">FEATURED PROJECT</span>
            </div>

            <h1 class="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight">
              {{ projectData.title.split(' ')[0] }} {{ projectData.title.split(' ')[1] }}<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">{{ projectData.title.split(' ').slice(2).join(' ') }}</span>
            </h1>

            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              {{ projectData.description }}
            </p>

            <!-- Meta Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-white/5 max-w-xl">
              <div>
                <p class="text-gray-500 flex items-center gap-1.5 text-[9px] uppercase tracking-wider mb-1"><svg class="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg> Category</p>
                <p class="text-xs font-semibold text-white">{{ projectData.meta.category }}</p>
              </div>
              <div>
                <p class="text-gray-500 flex items-center gap-1.5 text-[9px] uppercase tracking-wider mb-1"><svg class="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> Year</p>
                <p class="text-xs font-semibold text-white">{{ projectData.meta.year }}</p>
              </div>
              <div>
                <p class="text-gray-500 flex items-center gap-1.5 text-[9px] uppercase tracking-wider mb-1"><svg class="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Status</p>
                <p class="text-xs font-semibold text-white">{{ projectData.meta.status }}</p>
              </div>
              <div>
                <p class="text-gray-500 flex items-center gap-1.5 text-[9px] uppercase tracking-wider mb-1"><svg class="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> Role</p>
                <p class="text-xs font-semibold text-white">{{ projectData.meta.role }}</p>
              </div>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-8 py-2">
              <div v-for="stat in projectData.stats" :key="stat.label">
                <p class="text-[#D4AF37] font-bold text-2xl leading-none mb-1">{{ stat.value }}</p>
                <p class="text-[9px] text-gray-500 uppercase tracking-widest">{{ stat.label }}</p>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a href="#" class="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-black font-semibold text-xs rounded-lg hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Live Demo <svg class="w-3 h-3 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#" class="px-6 py-2.5 border border-white/10 bg-white/5 text-white font-medium text-xs rounded-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <NuxtLink to="/#projects" class="px-6 py-2.5 border border-white/5 bg-transparent text-gray-400 font-medium text-xs rounded-lg hover:text-white transition-all flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                Back to Projects
              </NuxtLink>
            </div>
          </div>

          <!-- Right Hero Image -->
          <div class="relative z-10 w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
            <div class="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              <img :src="projectData.heroImage" :alt="projectData.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        <!-- ══════════════════════════════════════
             INFO BAR
        ══════════════════════════════════════ -->
        <section class="mb-16">
          <div class="border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-md rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 divide-x divide-white/5">
            <div v-for="(info, i) in quickInfo" :key="i" class="pl-6 first:pl-0 flex items-center gap-3">
              <div class="text-[#D4AF37] opacity-80" v-html="info.icon"></div>
              <div>
                <p class="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">{{ info.label }}</p>
                <p class="text-xs font-semibold text-white">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══════════════════════════════════════
             GALLERY & STORY SPLIT
        ══════════════════════════════════════ -->
        <section class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-6">
          
          <!-- PROJECT GALLERY (CIRCULAR) -->
          <div class="border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            <!-- Header -->
            <div class="absolute top-6 left-6 flex items-center gap-2">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">PROJECT GALLERY</h3>
            </div>
            
            <!-- Orbital Rings (Spinning) -->
            <div class="absolute w-[300px] h-[300px] pointer-events-none scale-x-[1.8] scale-y-[0.7] flex items-center justify-center">
              <div class="w-full h-full rounded-full border border-white/10 animate-[spin_20s_linear_infinite]"></div>
            </div>
            <div class="absolute w-[450px] h-[450px] pointer-events-none scale-x-[1.8] scale-y-[0.7] flex items-center justify-center">
              <div class="w-full h-full rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]"></div>
            </div>
            
            <!-- Glowing nodes on inner ring (Spinning) -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] scale-x-[1.8] scale-y-[0.7] pointer-events-none">
              <div class="w-full h-full relative animate-[spin_20s_linear_infinite]">
                <div class="absolute top-0 left-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] -translate-x-1/2 -translate-y-1/2 scale-y-[1.4] scale-x-[0.55]"></div>
                <div class="absolute bottom-0 left-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] -translate-x-1/2 translate-y-1/2 scale-y-[1.4] scale-x-[0.55]"></div>
                <div class="absolute left-0 top-1/2 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] -translate-x-1/2 -translate-y-1/2 scale-y-[1.4] scale-x-[0.55]"></div>
                <div class="absolute right-0 top-1/2 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] translate-x-1/2 -translate-y-1/2 scale-y-[1.4] scale-x-[0.55]"></div>
              </div>
            </div>

            <!-- Central Mockup -->
            <div class="relative z-10 w-[320px]">
              <div class="bg-[#111] rounded-lg border border-white/10 p-1.5 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative">
                <img :src="activeItem?.img" :key="activeItem?.img" class="w-full h-auto rounded-md opacity-90 animate-[fadeIn_0.4s_ease-out]" />
              </div>
              <div class="text-center mt-3">
                <p class="text-white text-xs font-bold">{{ activeItem?.title }}</p>
                <p class="text-gray-500 text-[9px] mt-0.5">{{ activeItem?.res }}</p>
              </div>
            </div>

            <!-- Floating Satellite Screens -->
            <div @click="activeGalleryIndex = galleryItems.indexOf(satelliteItems[0])" class="absolute top-[20%] left-[15%] w-36 rotate-[-15deg] group cursor-pointer z-20">
              <img :src="satelliteItems[0]?.img" :key="satelliteItems[0]?.img" class="rounded border border-[#D4AF37]/30 opacity-70 group-hover:opacity-100 transition-opacity animate-[fadeIn_0.4s_ease-out]" />
              <p class="text-[9px] text-gray-400 text-center mt-1">{{ satelliteItems[0]?.title }}</p>
            </div>
            
            <div @click="activeGalleryIndex = galleryItems.indexOf(satelliteItems[1])" class="absolute bottom-[20%] left-[20%] w-24 rotate-[10deg] group cursor-pointer z-20">
              <img :src="satelliteItems[1]?.img" :key="satelliteItems[1]?.img" class="rounded border border-white/20 opacity-50 group-hover:opacity-100 transition-opacity animate-[fadeIn_0.4s_ease-out]" />
              <p class="text-[9px] text-gray-400 text-center mt-1">{{ satelliteItems[1]?.title }}</p>
            </div>

            <div @click="activeGalleryIndex = galleryItems.indexOf(satelliteItems[2])" class="absolute top-[25%] right-[25%] w-16 rotate-[15deg] group cursor-pointer z-20">
              <img :src="satelliteItems[2]?.img" :key="satelliteItems[2]?.img" class="rounded-full border-2 border-[#D4AF37]/50 opacity-80 group-hover:opacity-100 transition-opacity animate-[fadeIn_0.4s_ease-out]" />
              <p class="text-[9px] text-gray-400 text-center mt-1">{{ satelliteItems[2]?.title }}</p>
            </div>

            <div @click="activeGalleryIndex = galleryItems.indexOf(satelliteItems[3])" class="absolute bottom-[25%] right-[15%] w-20 rotate-[-10deg] group cursor-pointer z-20">
              <img :src="satelliteItems[3]?.img" :key="satelliteItems[3]?.img" class="rounded-lg border border-white/20 opacity-60 group-hover:opacity-100 transition-opacity animate-[fadeIn_0.4s_ease-out]" />
              <p class="text-[9px] text-gray-400 text-center mt-1">{{ satelliteItems[3]?.title }}</p>
            </div>

            <!-- Nav Arrows -->
            <button @click="prevGalleryItem" class="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors z-30">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button @click="nextGalleryItem" class="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors z-30">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>

            <!-- Bottom helper text -->
            <p class="absolute bottom-6 text-gray-500 text-[10px]">Drag to rotate • Scroll to zoom</p>
          </div>

          <!-- PROJECT STORY -->
          <div class="border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 md:p-8">
            <div class="flex items-center gap-2 mb-8">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">PROJECT STORY</h3>
            </div>
            
            <div class="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              <div v-for="(story, i) in projectStory" :key="i" class="relative group">
                <div class="absolute -left-[27px] top-0 w-6 h-6 rounded-full bg-[#0d0d0d] border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] text-gray-500 transition-colors z-10" v-html="story.icon"></div>
                <h4 class="text-white text-xs font-bold mb-1">{{ story.title }}</h4>
                <p class="text-[10px] text-gray-500 leading-relaxed">{{ story.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══════════════════════════════════════
             3-COLUMN ROW: FEATURES | ARCHITECTURE | PERFORMANCE
        ══════════════════════════════════════ -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          <!-- FEATURE EXPLORER (col-span-5) -->
          <div class="lg:col-span-5 xl:col-span-5 border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 flex flex-col h-full">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg></div>
              <h3 class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">FEATURE EXPLORER</h3>
            </div>
            
            <div class="flex-1 flex gap-4 h-full min-h-[300px]">
              <!-- Feature List (Left Side) -->
              <div class="w-1/3 flex flex-col gap-1.5 overflow-y-auto pr-1">
                <button v-for="(feat, i) in featuresList" :key="i" @click="activeFeatureIndex = i" class="w-full text-left px-3 py-2.5 rounded-lg border text-[10px] sm:text-xs font-medium flex items-center gap-2 transition-all"
                  :class="i === activeFeatureIndex ? 'border-[#D4AF37]/40 bg-[#D4AF37]/10 text-white shadow-[0_0_10px_rgba(212,175,55,0.1)]' : 'border-white/5 bg-[#111] text-gray-400 hover:bg-white/5'">
                  <span v-html="feat.icon" class="w-3.5 h-3.5 transition-colors shrink-0" :class="i === activeFeatureIndex ? 'text-[#D4AF37]' : 'text-gray-500'"></span>
                  <span class="truncate">{{ feat.title }}</span>
                </button>
              </div>

              <!-- Preview Pane (Right Side) -->
              <div class="w-2/3 border border-white/10 rounded-xl bg-[#111] p-4 flex flex-col relative overflow-hidden">
                <div :key="activeFeature?.title" class="animate-[fadeIn_0.4s_ease-out] flex flex-col h-full">
                  <div class="relative flex-1 rounded-lg overflow-hidden border border-white/5 bg-[#1a1a1a] mb-4 group min-h-[120px]">
                    <img :src="activeFeature?.img" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent flex items-end p-4">
                      <p class="text-white text-sm font-bold">{{ activeFeature?.title }}</p>
                    </div>
                  </div>
                  <p class="text-[10px] text-gray-400 leading-relaxed line-clamp-3 mb-4">{{ activeFeature?.desc }}</p>
                  <p class="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase mb-2">Key Stats</p>
                  <div class="grid grid-cols-3 gap-2">
                    <div v-for="(stat, idx) in activeFeature?.stats" :key="idx" class="text-left">
                      <p class="text-[#D4AF37] font-bold text-xs">{{ stat.val }}</p>
                      <p class="text-[8px] text-gray-500 uppercase mt-0.5">{{ stat.label }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TECHNOLOGY ARCHITECTURE -->
          <div class="lg:col-span-3 xl:col-span-3 border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 flex flex-col items-center">
            <div class="flex items-center gap-2 mb-8 self-start w-full">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">TECHNOLOGY ARCHITECTURE</h3>
            </div>

            <!-- Flowchart -->
            <div class="flex-1 flex flex-col w-full max-w-[240px] gap-0 relative py-4">
              <!-- Vertical connecting line -->
              <div class="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-px bg-white/10 border-r border-dashed border-[#D4AF37]/30"></div>

              <div v-for="(node, i) in techNodes" :key="i" class="relative z-10 flex flex-col items-center mb-6 last:mb-0">
                <div class="w-full bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-black border border-white/5 flex items-center justify-center text-[10px] font-black" :style="{color: node.color}">
                    {{ node.icon }}
                  </div>
                  <div>
                    <h4 class="text-white text-[11px] font-bold">{{ node.title }}</h4>
                    <p class="text-gray-500 text-[9px]">{{ node.desc }}</p>
                  </div>
                </div>
                <!-- Connector arrow down (if not last) -->
                <div v-if="i < techNodes.length - 1" class="absolute -bottom-5 text-[#D4AF37]/50">
                  <svg class="w-3 h-3 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- PERFORMANCE DASHBOARD -->
          <div class="lg:col-span-4 xl:col-span-4 border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 h-full flex flex-col">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">PERFORMANCE DASHBOARD</h3>
            </div>

            <!-- Gauges -->
            <div class="grid grid-cols-4 gap-2 mb-6">
              <div v-for="score in lighthouse" :key="score.label" class="text-center">
                <div class="relative w-12 h-12 mx-auto mb-2">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
                    <circle cx="18" cy="18" r="16" fill="none" :stroke="score.color" stroke-width="2" stroke-linecap="round" :stroke-dasharray="`${score.val * 1} 100`" />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white text-[11px] font-bold">{{ score.val }}</span>
                  </div>
                </div>
                <p class="text-[8px] text-gray-500 uppercase">{{ score.label }}</p>
              </div>
            </div>

            <!-- Chart -->
            <div class="mb-6">
              <div class="flex justify-between items-end mb-2">
                <div>
                  <p class="text-[9px] text-gray-500 uppercase">Page Speed</p>
                  <p class="text-emerald-400 text-lg font-bold leading-none mt-1">1.2s</p>
                  <p class="text-[8px] text-gray-600 mt-1">Load Time</p>
                </div>
              </div>
              <div class="w-full h-12 flex items-end gap-[1px]">
                <!-- fake bar chart mimicking a line chart area -->
                <div v-for="h in [20,30,25,40,35,45,30,50,45,60,55,70,60,80,75,90,80,100,85,95,70,60,50,40,45,30,25,35,20,15]" :key="h" 
                  class="flex-1 bg-emerald-500/20 hover:bg-emerald-500/50 transition-colors rounded-t-[1px]" :style="`height: ${h}%`"></div>
              </div>
              <div class="w-full h-px bg-emerald-500/50 mt-1"></div>
            </div>

            <!-- Detailed metrics -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-[9px] border-b border-white/5 pb-2">
                <span class="text-gray-400">First Contentful Paint</span>
                <span class="text-emerald-400 font-mono">0.8s</span>
              </div>
              <div class="flex justify-between items-center text-[9px] border-b border-white/5 pb-2">
                <span class="text-gray-400">Largest Contentful Paint</span>
                <span class="text-emerald-400 font-mono">1.2s</span>
              </div>
              <div class="flex justify-between items-center text-[9px] border-b border-white/5 pb-2">
                <span class="text-gray-400">Cumulative Layout Shift</span>
                <span class="text-emerald-400 font-mono">0.02</span>
              </div>
              <div class="flex justify-between items-center text-[9px] border-b border-white/5 pb-2">
                <span class="text-gray-400">Total Blocking Time</span>
                <span class="text-emerald-400 font-mono">10ms</span>
              </div>
              <div class="flex justify-between items-center text-[9px]">
                <span class="text-gray-400">Speed Index</span>
                <span class="text-emerald-400 font-mono">1.1s</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ══════════════════════════════════════
             ROW: JOURNEY | CHALLENGES | METRICS
        ══════════════════════════════════════ -->
        <section class="grid grid-cols-1 lg:grid-cols-[1fr_360px_240px] gap-6 mb-6">
          
          <!-- DEVELOPMENT JOURNEY (Horizontal Timeline) -->
          <div class="border border-white/5 bg-[#0d0d0d] rounded-2xl p-6 flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-10">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">DEVELOPMENT JOURNEY</h3>
            </div>
            
            <div class="relative flex justify-between items-center px-4">
              <!-- Connecting line -->
              <div class="absolute left-6 right-8 top-1/2 -translate-y-1/2 h-px bg-white/10 border-t border-dashed border-[#D4AF37]/30"></div>
              
              <div v-for="(step, i) in journeySteps" :key="i" class="relative z-10 flex flex-col items-center group cursor-pointer">
                <div class="w-8 h-8 rounded-full border border-white/20 bg-[#111] flex items-center justify-center mb-3 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all"
                  :class="i === journeySteps.length - 1 ? 'w-12 h-12 border-[#D4AF37] bg-[#D4AF37]/10' : ''">
                  <span v-html="step.icon" class="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D4AF37]" :class="i === journeySteps.length - 1 ? 'text-[#D4AF37] w-5 h-5' : ''"></span>
                </div>
                <p class="text-[9px] text-gray-500 uppercase font-medium group-hover:text-white transition-colors" :class="i === journeySteps.length - 1 ? 'text-[#D4AF37]' : ''">{{ step.label }}</p>
              </div>
            </div>
          </div>

          <!-- CHALLENGES & SOLUTIONS -->
          <div class="border border-white/5 bg-[#0d0d0d] rounded-2xl p-6">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">CHALLENGES & SOLUTIONS</h3>
            </div>
            <div class="flex gap-2 h-[calc(100%-2rem)]">
              <div class="flex-1 bg-[#111] border border-red-500/20 rounded-xl p-4 overflow-y-auto">
                <p class="text-red-400 text-[10px] font-bold mb-3 uppercase">Challenges</p>
                <ul class="space-y-2">
                  <li v-for="challenge in projectData.challenges" :key="challenge" class="text-[9px] text-gray-400 flex items-start gap-1.5"><span class="text-red-500 mt-0.5">•</span> {{ challenge }}</li>
                </ul>
              </div>
              <div class="flex items-center text-[#D4AF37]/30 px-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
              <div class="flex-1 bg-[#111] border border-emerald-500/20 rounded-xl p-4 overflow-y-auto">
                <p class="text-emerald-400 text-[10px] font-bold mb-3 uppercase">Solutions</p>
                <ul class="space-y-2">
                  <li v-for="solution in projectData.solutions" :key="solution" class="text-[9px] text-gray-400 flex items-start gap-1.5"><span class="text-emerald-500 mt-0.5">✓</span> {{ solution }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- PROJECT METRICS -->
          <div class="border border-white/5 bg-[#0d0d0d] rounded-2xl p-6">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-5 h-5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
              <h3 class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">PROJECT METRICS</h3>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-2 text-center h-[calc(100%-2rem)] items-center content-center">
              <div v-for="metric in projectData.metrics" :key="metric.label" class="col-span-1">
                <p class="text-[#D4AF37] font-bold text-lg leading-none">{{ metric.val }}</p>
                <p class="text-gray-500 text-[8px] uppercase mt-1">{{ metric.label }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- NEXT PROJECT NAVIGATION -->
        <section class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-16">
          <NuxtLink v-if="projectData.prevProject" :to="`/projects/${projectData.prevProject.slug}`" class="px-6 py-3 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-gray-400 hover:text-white transition-all flex items-center gap-3 group bg-[#0d0d0d]">
            <div class="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider mb-0.5">Previous</span>
              <span class="text-xs font-bold text-white">{{ projectData.prevProject.title }}</span>
            </div>
          </NuxtLink>

          <NuxtLink v-if="projectData.nextProject" :to="`/projects/${projectData.nextProject.slug}`" class="px-6 py-3 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-gray-400 hover:text-white transition-all flex items-center gap-3 group bg-[#0d0d0d]">
            <div class="flex flex-col text-right">
              <span class="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider mb-0.5">Next</span>
              <span class="text-xs font-bold text-white">{{ projectData.nextProject.title }}</span>
            </div>
            <div class="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </NuxtLink>
        </section>

        <!-- Footer band -->
        <footer class="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-xl font-bold text-[#D4AF37] mb-1">Let's Build Something Amazing Together</h3>
            <p class="text-gray-500 text-xs">I'm always open to discussing new opportunities and exciting projects.</p>
          </div>
          <div class="flex gap-4">
            <button class="px-6 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs rounded-lg hover:brightness-110 transition-all flex items-center gap-2">
              Contact Me <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <button class="px-6 py-2.5 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-xs rounded-lg hover:bg-[#D4AF37]/10 transition-all flex items-center gap-2">
              Download CV <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
        </footer>

      </div>
    </main>
  </div>
  <div v-else class="min-h-screen bg-[#050505] text-white flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-[#D4AF37] mb-4">404</h1>
      <p class="text-xl text-gray-400">Project Not Found</p>
      <NuxtLink to="/#projects" class="mt-8 inline-block px-6 py-3 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
        Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// ═══════════════════════════════════════════════════════════════
// PROJECT DATABASE — each slug maps to all page data
// ═══════════════════════════════════════════════════════════════
const projectsDB: Record<string, any> = {
  'work-1': {
    title: 'Work.1',
    description: 'A powerful full-stack management system designed to help organizations manage tasks, track team progress, optimize workflows, and boost productivity across departments.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    meta: { category: 'Management System', year: '2024', status: 'Completed', role: 'Full Stack Developer' },
    stats: [
      { value: '12+', label: 'Modules' },
      { value: '1K+', label: 'Users' },
      { value: '99%', label: 'Efficiency' },
      { value: '50+', label: 'Reports' },
    ],
    quickInfo: [
      { label: 'Duration', value: '4 Months' },
      { label: 'Project Type', value: 'Management System' },
      { label: 'Client', value: 'Enterprise Client' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Admin Dashboard', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { title: 'Task Board', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80' },
      { title: 'Analytics View', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      { title: 'Team Management', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80' },
      { title: 'Mobile View', res: '375 x 812', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
    ],
    story: [
      { title: 'Requirements', desc: 'Gathering business workflows and management needs from stakeholders' },
      { title: 'System Design', desc: 'Designing modular architecture with role-based access control' },
      { title: 'Database Schema', desc: 'Building relational schema for tasks, users, teams and reports' },
      { title: 'Development', desc: 'Full stack development with Vue.js frontend and Laravel backend' },
      { title: 'Testing', desc: 'Unit testing, integration testing, and UAT with real users' },
      { title: 'Deployment', desc: 'Production deployment with CI/CD pipeline and monitoring' },
    ],
    features: [
      { title: 'Task Management', desc: 'Create, assign, prioritize and track tasks with drag-and-drop Kanban boards. Set deadlines, add labels, and manage sub-tasks for complex projects.', stats: [{ val: '500+', label: 'Tasks' }, { val: 'Kanban', label: 'Board' }, { val: 'Drag', label: 'Drop' }] },
      { title: 'Team Collaboration', desc: 'Real-time team collaboration with shared workspaces, comments, file attachments, and @mentions for seamless communication across departments.', stats: [{ val: '50+', label: 'Teams' }, { val: 'Real-time', label: 'Chat' }, { val: 'Files', label: 'Sharing' }] },
      { title: 'Analytics Dashboard', desc: 'Comprehensive analytics with interactive charts showing task completion rates, team performance metrics, and project timeline insights.', stats: [{ val: '12+', label: 'Charts' }, { val: 'Real-time', label: 'Data' }, { val: 'Export', label: 'PDF' }] },
      { title: 'Role-Based Access', desc: 'Granular permission system with Admin, Manager, and Employee roles. Control who can view, edit, or manage specific modules and data.', stats: [{ val: '5', label: 'Roles' }, { val: 'RBAC', label: 'System' }, { val: 'Audit', label: 'Logs' }] },
      { title: 'Report Generator', desc: 'Automated report generation for daily, weekly, and monthly summaries with customizable templates and scheduled email delivery.', stats: [{ val: '50+', label: 'Templates' }, { val: 'Auto', label: 'Schedule' }, { val: 'Email', label: 'Delivery' }] },
      { title: 'Notifications', desc: 'Smart notification system with push, email, and in-app alerts for task assignments, deadline reminders, and status updates.', stats: [{ val: 'Push', label: 'Web' }, { val: 'Email', label: 'Alerts' }, { val: 'In-App', label: 'Notify' }] },
      { title: 'Calendar View', desc: 'Interactive calendar with drag-and-drop scheduling, milestone tracking, and Gantt chart view for project timeline management.', stats: [{ val: 'Gantt', label: 'Chart' }, { val: 'Drag', label: 'Schedule' }, { val: 'Sync', label: 'Google' }] },
    ],
    techNodes: [
      { icon: 'V', title: 'Frontend', desc: 'Vue.js 3 + Tailwind CSS', color: '#4FC08D' },
      { icon: 'L', title: 'Backend', desc: 'Laravel 10 + PHP 8', color: '#FF2D20' },
      { icon: 'N', title: 'API', desc: 'Node.js + Express', color: '#339933' },
      { icon: 'My', title: 'Database', desc: 'MySQL + Redis', color: '#4479A1' },
      { icon: 'D', title: 'Deployment', desc: 'Docker + Nginx', color: '#2496ED' },
    ],
    challenges: [
      'Complex role-based permission management',
      'Real-time task updates across multiple users',
      'Handling concurrent data modifications',
      'Generating dynamic reports from complex queries',
      'Optimizing dashboard load with large datasets',
    ],
    solutions: [
      'Spatie Laravel Permission for granular RBAC',
      'WebSocket integration for live updates',
      'Optimistic locking and queue-based processing',
      'Laravel Excel with cached query builders',
      'Redis caching and pagination strategies',
    ],
    metrics: [
      { val: '12+', label: 'Modules' },
      { val: '1K+', label: 'Users' },
      { val: '500+', label: 'Daily Tasks' },
      { val: '50+', label: 'Reports' },
      { val: '99%', label: 'Efficiency' },
      { val: '100%', label: 'Responsive' },
      { val: '30+', label: 'DB Tables' },
      { val: '24/7', label: 'Monitoring' },
    ],
    prevProject: { slug: 'netflix-clone', title: 'Netflix Clone' },
    nextProject: { slug: 'crypto-currency', title: 'Crypto Currency' },
  },

  'crypto-currency': {
    title: 'Crypto Currency Trade Platform',
    description: 'A modern cryptocurrency trading platform with real-time market data, advanced charts, secure authentication and wallet management.',
    heroImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80',
    meta: { category: 'Web Application', year: '2025', status: 'Completed', role: 'Full Stack Developer' },
    stats: [
      { value: '12K+', label: 'Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '45+', label: 'Currencies' },
      { value: '1.2M+', label: 'Transactions' },
    ],
    quickInfo: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Project Type', value: 'Web Application' },
      { label: 'Client', value: 'Personal Project' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Desktop Preview', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80' },
      { title: 'Dashboard', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80' },
      { title: 'Tablet Preview', res: '768 x 1024', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80' },
      { title: 'Admin Panel', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80' },
      { title: 'Mobile Preview', res: '375 x 812', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80' },
    ],
    story: [
      { title: 'Research', desc: 'Market research and user needs analysis' },
      { title: 'Planning', desc: 'Feature planning and architecture design' },
      { title: 'Design', desc: 'UI/UX design and prototyping' },
      { title: 'Development', desc: 'Full stack development & integration' },
      { title: 'Testing', desc: 'Quality assurance and performance testing' },
      { title: 'Deployment', desc: 'Live deployment and monitoring' },
    ],
    features: [
      { title: 'Authentication', desc: 'Secure authentication with JWT, two-factor authentication and role-based access control for maximum security.', stats: [{ val: '100%', label: 'Secure' }, { val: '2FA', label: 'Enabled' }, { val: 'JWT', label: 'Tokens' }] },
      { title: 'Trading Engine', desc: 'High-performance order matching engine capable of processing thousands of transactions per second with sub-millisecond latency.', stats: [{ val: '50k+', label: 'TPS' }, { val: '<1ms', label: 'Latency' }, { val: '99.9%', label: 'Uptime' }] },
      { title: 'Wallet Management', desc: 'Multi-currency wallet system with cold storage integration, real-time balance tracking, and automated withdrawal processing.', stats: [{ val: '45+', label: 'Assets' }, { val: 'Cold', label: 'Storage' }, { val: 'Auto', label: 'Payouts' }] },
      { title: 'Market Analytics', desc: 'Advanced charting and analytics tools with custom technical indicators, volume analysis, and historical data export.', stats: [{ val: '50+', label: 'Indicators' }, { val: 'Real', label: 'Time' }, { val: 'CSV', label: 'Export' }] },
      { title: 'Real-time Charts', desc: 'TradingView integration for professional-grade interactive financial charts with deep historical market data.', stats: [{ val: 'HD', label: 'Resolution' }, { val: 'Live', label: 'Updates' }, { val: 'Custom', label: 'Layouts' }] },
      { title: 'Notifications', desc: 'Customizable push, email, and SMS alert system for price movements, executed orders, and security events.', stats: [{ val: 'SMS', label: 'Alerts' }, { val: 'Push', label: 'Web/App' }, { val: 'Email', label: 'Reports' }] },
      { title: 'Admin Dashboard', desc: 'Comprehensive back-office tools for user management, KYC verification, fee configuration, and system monitoring.', stats: [{ val: 'KYC', label: 'System' }, { val: 'RBAC', label: 'Roles' }, { val: 'Audit', label: 'Logs' }] },
    ],
    techNodes: [
      { icon: 'V', title: 'Frontend', desc: 'Vue.js 3 + Tailwind CSS', color: '#4FC08D' },
      { icon: 'A', title: 'API Gateway', desc: 'RESTful API + Express.js', color: '#8b5cf6' },
      { icon: 'B', title: 'Backend', desc: 'Node.js + TypeScript', color: '#339933' },
      { icon: 'D', title: 'Database', desc: 'MongoDB + Redis', color: '#47A248' },
      { icon: 'aws', title: 'Deployment', desc: 'Docker + AWS', color: '#FF9900' },
    ],
    challenges: [
      'Real-time data synchronization',
      'High frequency API requests',
      'Secure authentication',
      'Complex trading logic',
      'Performance optimization',
    ],
    solutions: [
      'WebSockets for real-time updates',
      'Redis caching and rate limiting',
      'JWT authentication + 2FA',
      'Clean architecture pattern',
      'Code splitting & lazy loading',
    ],
    metrics: [
      { val: '12+', label: 'Modules' },
      { val: '500+', label: 'Users' },
      { val: '1.2M+', label: 'API Calls' },
      { val: '99.9%', label: 'Uptime' },
      { val: '120ms', label: 'Avg Response' },
      { val: '100%', label: 'Responsive' },
      { val: '45+', label: 'Database Tables' },
      { val: '24/7', label: 'Monitoring' },
    ],
    prevProject: { slug: 'netflix-clone', title: 'Netflix Clone' },
    nextProject: { slug: 'apollo-logistics', title: 'Apollo Logistics' },
  },

  'apollo-logistics': {
    title: 'Apollo Logistics Website',
    description: 'A professional logistics and HR consultancy website built for Apollo Logistics — unifying customs clearing, freight operations, and human capital solutions for Ethiopian enterprise clients.',
    heroImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1200&q=80',
    meta: { category: 'Website', year: '2024', status: 'Completed', role: 'Full Stack Developer' },
    stats: [
      { value: '5K+', label: 'Visitors/Mo' },
      { value: '100%', label: 'Responsive' },
      { value: '8', label: 'Pages' },
      { value: '1.1s', label: 'Load Time' },
    ],
    quickInfo: [
      { label: 'Duration', value: '2 Months' },
      { label: 'Project Type', value: 'Business Website' },
      { label: 'Client', value: 'Apollo Logistics' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Homepage Hero', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&q=80' },
      { title: 'Services Page', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?w=600&q=80' },
      { title: 'About Us', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80' },
      { title: 'Job Board', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
      { title: 'Contact Page', res: '375 x 812', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
    ],
    story: [
      { title: 'Client Meeting', desc: 'Understanding Apollo Logistics business model and target audience' },
      { title: 'Requirement Analysis', desc: 'Mapping out service pages, job board, and contact workflows' },
      { title: 'UI/UX Design', desc: 'Creating a premium dark-purple brand identity with modern layout' },
      { title: 'Backend Development', desc: 'Building Laravel API with MySQL for jobs and inquiries' },
      { title: 'Frontend Integration', desc: 'Vue.js frontend with dynamic service pages and forms' },
      { title: 'Launch & Handoff', desc: 'Deployed to production and handed over to the client' },
    ],
    features: [
      { title: 'Service Showcase', desc: 'Dynamic service pages highlighting customs clearing, freight forwarding, and HR consultancy with rich media and detailed descriptions.', stats: [{ val: '6+', label: 'Services' }, { val: 'Rich', label: 'Media' }, { val: 'Dynamic', label: 'Content' }] },
      { title: 'Job Board', desc: 'Fully functional job posting and application system allowing HR to post vacancies and candidates to apply directly through the website.', stats: [{ val: 'CRUD', label: 'Jobs' }, { val: 'Apply', label: 'Online' }, { val: 'Filter', label: 'Search' }] },
      { title: 'Contact System', desc: 'Integrated contact form with email notifications, inquiry management dashboard, and automatic response system for client communication.', stats: [{ val: 'Email', label: 'Alerts' }, { val: 'Auto', label: 'Reply' }, { val: 'SMTP', label: 'Setup' }] },
      { title: 'Admin Panel', desc: 'Back-office dashboard for managing job listings, service content, contact inquiries, and company information dynamically.', stats: [{ val: 'Full', label: 'CRUD' }, { val: 'Auth', label: 'Roles' }, { val: 'Media', label: 'Upload' }] },
      { title: 'SEO Optimization', desc: 'Server-side rendering with meta tags, Open Graph, structured data, and sitemap generation for maximum search engine visibility.', stats: [{ val: '100', label: 'SEO Score' }, { val: 'SSR', label: 'Enabled' }, { val: 'OG', label: 'Tags' }] },
      { title: 'Responsive Design', desc: 'Pixel-perfect responsive layout optimized for all screen sizes from mobile to ultra-wide desktop displays.', stats: [{ val: '100%', label: 'Mobile' }, { val: 'Fluid', label: 'Grid' }, { val: 'Touch', label: 'Ready' }] },
    ],
    techNodes: [
      { icon: 'V', title: 'Frontend', desc: 'Vue.js 3 + Tailwind CSS', color: '#4FC08D' },
      { icon: 'L', title: 'Backend', desc: 'Laravel 10 + PHP', color: '#FF2D20' },
      { icon: 'M', title: 'Database', desc: 'MySQL + Eloquent ORM', color: '#4479A1' },
      { icon: 'N', title: 'Server', desc: 'Nginx + Ubuntu VPS', color: '#339933' },
      { icon: 'G', title: 'Version Control', desc: 'Git + GitHub', color: '#F05032' },
    ],
    challenges: [
      'Complex multi-service page structure',
      'Job application workflow design',
      'Bilingual content management',
      'Client-facing admin simplicity',
      'Mobile-first responsive layout',
    ],
    solutions: [
      'Dynamic Vue components per service',
      'Laravel form handling + file uploads',
      'Content management via admin panel',
      'Simplified CMS with rich text editor',
      'Tailwind CSS responsive utilities',
    ],
    metrics: [
      { val: '8', label: 'Pages' },
      { val: '5K+', label: 'Monthly Visitors' },
      { val: '20+', label: 'API Endpoints' },
      { val: '100%', label: 'Responsive' },
      { val: '1.1s', label: 'Load Time' },
      { val: '100', label: 'SEO Score' },
      { val: '15+', label: 'DB Tables' },
      { val: '99.9%', label: 'Uptime' },
    ],
    prevProject: { slug: 'crypto-currency', title: 'Crypto Currency' },
    nextProject: { slug: 'smart-inventory', title: 'Smart Inventory' },
  },

  'smart-inventory': {
    title: 'Smart Inventory & Sales System',
    description: 'A comprehensive inventory and sales management system built for Qarem Made Company to streamline stock tracking, sales orders, and business analytics.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    meta: { category: 'Management System', year: '2024', status: 'Completed', role: 'Full Stack Developer' },
    stats: [
      { value: '500+', label: 'Products' },
      { value: '100%', label: 'Automated' },
      { value: '15+', label: 'Reports' },
      { value: '10K+', label: 'Orders' },
    ],
    quickInfo: [
      { label: 'Duration', value: '4 Months' },
      { label: 'Project Type', value: 'Management System' },
      { label: 'Client', value: 'Qarem Made Company' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Dashboard', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { title: 'Inventory List', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { title: 'Sales Report', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { title: 'Order Form', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { title: 'Mobile View', res: '375 x 812', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    ],
    story: [
      { title: 'Requirements', desc: 'Gathering business requirements from Qarem Made Company' },
      { title: 'Database Design', desc: 'Designing the inventory and sales database schema' },
      { title: 'UI/UX Design', desc: 'Creating intuitive admin dashboard interfaces' },
      { title: 'Development', desc: 'Full stack development with Laravel and Vue.js' },
      { title: 'Testing', desc: 'End-to-end testing with real inventory data' },
      { title: 'Deployment', desc: 'Production deployment and staff training' },
    ],
    features: [
      { title: 'Inventory Tracking', desc: 'Real-time stock level monitoring with automated low-stock alerts and reorder point notifications.', stats: [{ val: '500+', label: 'Items' }, { val: 'Live', label: 'Tracking' }, { val: 'Auto', label: 'Alerts' }] },
      { title: 'Sales Management', desc: 'Complete sales pipeline from order creation to invoicing with payment tracking and receipt generation.', stats: [{ val: 'POS', label: 'System' }, { val: 'Auto', label: 'Invoice' }, { val: 'PDF', label: 'Export' }] },
      { title: 'Reporting', desc: 'Comprehensive business analytics with sales trends, profit margins, and inventory turnover reports.', stats: [{ val: '15+', label: 'Reports' }, { val: 'Charts', label: 'Visual' }, { val: 'Export', label: 'CSV/PDF' }] },
      { title: 'User Roles', desc: 'Multi-level access control with admin, manager, and staff roles for secure operations.', stats: [{ val: 'RBAC', label: 'System' }, { val: '3+', label: 'Roles' }, { val: 'Audit', label: 'Logs' }] },
      { title: 'Barcode System', desc: 'Barcode scanning for quick product lookup and inventory counting during stock takes.', stats: [{ val: 'Scan', label: 'Support' }, { val: 'Quick', label: 'Lookup' }, { val: 'Batch', label: 'Count' }] },
    ],
    techNodes: [
      { icon: 'V', title: 'Frontend', desc: 'Vue.js 3 + Tailwind CSS', color: '#4FC08D' },
      { icon: 'L', title: 'Backend', desc: 'Laravel 10 + PHP', color: '#FF2D20' },
      { icon: 'M', title: 'Database', desc: 'MySQL + Eloquent ORM', color: '#4479A1' },
      { icon: 'JS', title: 'Logic', desc: 'JavaScript + Chart.js', color: '#F7DF1E' },
      { icon: 'G', title: 'Version Control', desc: 'Git + GitHub', color: '#F05032' },
    ],
    challenges: ['Complex inventory relationships', 'Real-time stock calculations', 'Multi-user concurrency', 'Report generation speed', 'Data migration from Excel'],
    solutions: ['Eloquent relationships + eager loading', 'Database transactions + locks', 'Queue jobs for heavy reports', 'Optimized SQL queries + indexing', 'Custom CSV import tool'],
    metrics: [
      { val: '10+', label: 'Modules' },
      { val: '50+', label: 'Users' },
      { val: '10K+', label: 'Orders' },
      { val: '99.5%', label: 'Uptime' },
      { val: '200ms', label: 'Avg Response' },
      { val: '100%', label: 'Responsive' },
      { val: '30+', label: 'DB Tables' },
      { val: 'Daily', label: 'Backups' },
    ],
    prevProject: { slug: 'apollo-logistics', title: 'Apollo Logistics' },
    nextProject: { slug: 'amazon-clone', title: 'Amazon Clone' },
  },

  'amazon-clone': {
    title: 'Blog Website (Amazon Clone)',
    description: 'A responsive blog website inspired by Amazon\'s design principles, built using pure frontend technologies with modern layout and interaction patterns.',
    heroImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80',
    meta: { category: 'Frontend Only', year: '2023', status: 'Completed', role: 'Frontend Developer' },
    stats: [
      { value: '100%', label: 'Responsive' },
      { value: '8', label: 'Pages' },
      { value: '0.9s', label: 'Load Time' },
      { value: 'A+', label: 'Grade' },
    ],
    quickInfo: [
      { label: 'Duration', value: '3 Weeks' },
      { label: 'Project Type', value: 'Frontend' },
      { label: 'Client', value: 'Personal Project' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Homepage', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
      { title: 'Product Grid', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
      { title: 'Blog Post', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
      { title: 'Cart Page', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
      { title: 'Mobile View', res: '375 x 812', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
    ],
    story: [
      { title: 'Inspiration', desc: 'Studying Amazon\'s design patterns and layout principles' },
      { title: 'Wireframing', desc: 'Creating page layouts and component structure' },
      { title: 'Development', desc: 'Building with HTML5, CSS3, and JavaScript' },
      { title: 'Styling', desc: 'Pixel-perfect responsive CSS implementation' },
      { title: 'Testing', desc: 'Cross-browser and device testing' },
      { title: 'Deployment', desc: 'Published on GitHub Pages' },
    ],
    features: [
      { title: 'Responsive Grid', desc: 'Fluid product grid layout that adapts to all screen sizes using CSS Grid and Flexbox.', stats: [{ val: '100%', label: 'Fluid' }, { val: 'Grid', label: 'Layout' }, { val: 'Flex', label: 'Box' }] },
      { title: 'Product Cards', desc: 'Interactive product cards with hover effects, ratings, and quick-view functionality.', stats: [{ val: 'Hover', label: 'Effects' }, { val: 'Stars', label: 'Rating' }, { val: 'Quick', label: 'View' }] },
      { title: 'Search & Filter', desc: 'Client-side search and category filtering for browsing products efficiently.', stats: [{ val: 'Live', label: 'Search' }, { val: 'Tags', label: 'Filter' }, { val: 'Sort', label: 'Options' }] },
      { title: 'Shopping Cart', desc: 'Functional cart with add/remove items, quantity control, and price calculation.', stats: [{ val: 'Add', label: 'Remove' }, { val: 'Qty', label: 'Control' }, { val: 'Auto', label: 'Total' }] },
    ],
    techNodes: [
      { icon: 'H5', title: 'Structure', desc: 'HTML5 Semantic Elements', color: '#E44D26' },
      { icon: 'C3', title: 'Styling', desc: 'CSS3 + Flexbox + Grid', color: '#264DE4' },
      { icon: 'JS', title: 'Logic', desc: 'Vanilla JavaScript ES6+', color: '#F7DF1E' },
    ],
    challenges: ['Complex responsive grid layout', 'Cart state without backend', 'Cross-browser compatibility', 'Performance with many images', 'Pixel-perfect design'],
    solutions: ['CSS Grid with auto-fill minmax', 'LocalStorage for cart data', 'CSS vendor prefixes + testing', 'Lazy loading + image optimization', 'Chrome DevTools pixel matching'],
    metrics: [
      { val: '8', label: 'Pages' },
      { val: '100+', label: 'Components' },
      { val: '0.9s', label: 'Load Time' },
      { val: '100%', label: 'Responsive' },
      { val: '98', label: 'Performance' },
      { val: '100', label: 'SEO Score' },
      { val: '0', label: 'Dependencies' },
      { val: 'A+', label: 'Grade' },
    ],
    prevProject: { slug: 'smart-inventory', title: 'Smart Inventory' },
    nextProject: { slug: 'netflix-clone', title: 'Netflix Clone' },
  },

  'netflix-clone': {
    title: 'Netflix Website Clone',
    description: 'A Netflix UI clone built using HTML, CSS, and JavaScript with fully responsive design, featuring the iconic dark theme, hero banner, and content carousel.',
    heroImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80',
    meta: { category: 'Frontend Only', year: '2023', status: 'Completed', role: 'Frontend Developer' },
    stats: [
      { value: '100%', label: 'Responsive' },
      { value: '5', label: 'Pages' },
      { value: '0.8s', label: 'Load Time' },
      { value: 'A+', label: 'Grade' },
    ],
    quickInfo: [
      { label: 'Duration', value: '2 Weeks' },
      { label: 'Project Type', value: 'Frontend' },
      { label: 'Client', value: 'Personal Project' },
      { label: 'Team Size', value: '1 Developer' },
      { label: 'Platform', value: 'Web' },
      { label: 'Responsive', value: '100%' },
      { label: 'Status', value: 'Completed' },
    ],
    gallery: [
      { title: 'Landing Page', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80' },
      { title: 'Browse Page', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80' },
      { title: 'Hero Section', res: '1440 x 900', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80' },
      { title: 'Sign In Page', res: '1920 x 1080', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80' },
      { title: 'Mobile View', res: '375 x 812', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80' },
    ],
    story: [
      { title: 'Analysis', desc: 'Studying Netflix UI patterns and animations' },
      { title: 'Structure', desc: 'Building semantic HTML page structure' },
      { title: 'Styling', desc: 'Implementing the dark theme with CSS' },
      { title: 'Interactivity', desc: 'Adding JavaScript carousel and hover effects' },
      { title: 'Testing', desc: 'Responsive testing across devices' },
      { title: 'Deployment', desc: 'Published on GitHub Pages' },
    ],
    features: [
      { title: 'Hero Banner', desc: 'Full-width hero section with gradient overlay, title, and call-to-action buttons mimicking Netflix.', stats: [{ val: 'Full', label: 'Width' }, { val: 'Gradient', label: 'Overlay' }, { val: 'CTA', label: 'Buttons' }] },
      { title: 'Content Carousel', desc: 'Horizontal scrolling content rows with hover zoom effect for movie and show thumbnails.', stats: [{ val: 'Scroll', label: 'Horizontal' }, { val: 'Hover', label: 'Zoom' }, { val: 'Smooth', label: 'Animation' }] },
      { title: 'Sign In Page', desc: 'Netflix-styled sign-in form with validation, remember-me, and responsive layout.', stats: [{ val: 'Form', label: 'Validation' }, { val: 'Remember', label: 'Me' }, { val: 'Responsive', label: 'Layout' }] },
      { title: 'Footer Section', desc: 'Multi-column footer with links, language selector, and Netflix branding elements.', stats: [{ val: '4', label: 'Columns' }, { val: 'Links', label: 'Grid' }, { val: 'i18n', label: 'Select' }] },
    ],
    techNodes: [
      { icon: 'H5', title: 'Structure', desc: 'HTML5 Semantic Elements', color: '#E44D26' },
      { icon: 'C3', title: 'Styling', desc: 'CSS3 + Animations', color: '#264DE4' },
      { icon: 'JS', title: 'Logic', desc: 'Vanilla JavaScript ES6+', color: '#F7DF1E' },
    ],
    challenges: ['Replicating Netflix animations', 'Horizontal scroll carousels', 'Responsive hero section', 'Dark theme consistency', 'Cross-browser support'],
    solutions: ['CSS transitions + keyframes', 'CSS scroll-snap + JS controls', 'Viewport units + media queries', 'CSS custom properties for theming', 'Autoprefixer + manual testing'],
    metrics: [
      { val: '5', label: 'Pages' },
      { val: '50+', label: 'Components' },
      { val: '0.8s', label: 'Load Time' },
      { val: '100%', label: 'Responsive' },
      { val: '99', label: 'Performance' },
      { val: '100', label: 'Accessibility' },
      { val: '0', label: 'Dependencies' },
      { val: 'A+', label: 'Grade' },
    ],
    prevProject: { slug: 'amazon-clone', title: 'Amazon Clone' },
    nextProject: { slug: 'crypto-currency', title: 'Crypto Currency' },
  },
}

// ═══════════════════════════════════════════════════════════════
// COMPUTED DATA FROM SLUG
// ═══════════════════════════════════════════════════════════════
const projectData = computed(() => projectsDB[slug.value])

const quickInfo = computed(() => {
  if(!projectData.value) return []
  const icons = [
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    '<svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  ]
  return projectData.value.quickInfo.map((q: any, i: number) => ({ ...q, icon: icons[i] || icons[0] }))
})

const storyIcons = [
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>',
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>',
]
const projectStory = computed(() => {
  if(!projectData.value) return []
  return projectData.value.story.map((s: any, i: number) => ({ ...s, icon: storyIcons[i] || storyIcons[0] }))
})

const featureIcons = [
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
  '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
]

const activeFeatureIndex = ref(0)
const featuresList = computed(() => {
  if(!projectData.value) return []
  return projectData.value.features.map((f: any, i: number) => ({
    ...f,
    icon: featureIcons[i] || featureIcons[0],
    img: projectData.value.heroImage,
  }))
})
const activeFeature = computed(() => featuresList.value[activeFeatureIndex.value])

const techNodes = computed(() => projectData.value?.techNodes || [])

const lighthouse = [
  { label: 'Performance', val: 98, color: '#D4AF37' },
  { label: 'Accessibility', val: 100, color: '#D4AF37' },
  { label: 'Best Practices', val: 95, color: '#D4AF37' },
  { label: 'SEO', val: 100, color: '#D4AF37' },
]

const journeySteps = [
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>', label: 'Idea' },
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>', label: 'Research' },
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>', label: 'Wireframe' },
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>', label: 'UI Design' },
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>', label: 'Development' },
  { icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', label: 'Testing' },
  { icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a.996.996 0 00-.293-.707L19 13.586zM12 22c1.311 0 2.407-.834 2.818-2H9.182C9.593 21.166 10.689 22 12 22z"/></svg>', label: 'Launch' },
]

// ═══════════════════════════════════════════════════════════════
// GALLERY 
// ═══════════════════════════════════════════════════════════════
const activeGalleryIndex = ref(0)
const galleryItems = computed(() => projectData.value?.gallery || [])

const nextGalleryItem = () => {
  if (galleryItems.value.length === 0) return
  activeGalleryIndex.value = (activeGalleryIndex.value + 1) % galleryItems.value.length
}
const prevGalleryItem = () => {
  if (galleryItems.value.length === 0) return
  activeGalleryIndex.value = (activeGalleryIndex.value - 1 + galleryItems.value.length) % galleryItems.value.length
}

const activeItem = computed(() => galleryItems.value[activeGalleryIndex.value])
const satelliteItems = computed(() => galleryItems.value.filter((_: any, i: number) => i !== activeGalleryIndex.value))

let spinInterval: ReturnType<typeof setInterval>
onMounted(() => {
  spinInterval = setInterval(nextGalleryItem, 4000)
})
onUnmounted(() => {
  if (spinInterval) clearInterval(spinInterval)
})

// Reset state when slug changes
watch(slug, () => {
  activeGalleryIndex.value = 0
  activeFeatureIndex.value = 0
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
