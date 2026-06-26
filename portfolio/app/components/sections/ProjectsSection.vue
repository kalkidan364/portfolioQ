<template>
  <div class="bg-[#111] min-h-screen py-16 relative overflow-hidden font-sans text-white">
    <div class="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10 space-y-12">
      
      <!-- Header -->
      <div class="text-center space-y-3 mb-10">
        <div class="flex items-center justify-center gap-2 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          MY WORK
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight font-sans">
          Crafting <span class="text-[#D4AF37]">Digital Solutions</span>
        </h2>
        <p class="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          A collection of projects where I solved real problems, built<br class="hidden md:block"/>
          impactful solutions and delivered real value.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">
        
        <!-- Left Column: Featured Project (col-span-5) -->
        <div class="xl:col-span-5 bg-[#161616] border border-white/5 rounded-2xl flex flex-col md:flex-row overflow-hidden relative shadow-lg group">
          <!-- Subtle glow -->
          <div class="absolute -inset-px bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          <!-- Sidebar -->
          <div class="w-full md:w-16 border-b md:border-b-0 md:border-r border-white/5 flex md:flex-col items-center justify-between md:justify-start py-4 md:py-6 px-4 md:px-0 shrink-0 bg-[#0a0a0a] z-20">
            <div class="flex md:flex-col items-center gap-5 md:gap-6">
              <!-- Active Grid Icon -->
              <div class="w-10 h-10 rounded-lg border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <!-- Inactive Icons -->
              <div class="text-gray-600 hover:text-gray-300 cursor-pointer transition-colors hidden md:block"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg></div>
              <div class="text-gray-600 hover:text-gray-300 cursor-pointer transition-colors hidden md:block"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div>
              <div class="text-gray-600 hover:text-gray-300 cursor-pointer transition-colors hidden md:block"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg></div>
              <div class="text-gray-600 hover:text-gray-300 cursor-pointer transition-colors hidden md:block"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
              <div class="text-gray-600 hover:text-gray-300 cursor-pointer transition-colors hidden md:block"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
            </div>
            
            <div class="flex flex-row md:flex-col items-center gap-3 md:mt-auto">
              <span class="text-[#D4AF37] text-[10px] font-mono font-bold tracking-widest hidden md:block">01<br/><span class="text-gray-600">/ 06</span></span>
              <div class="flex flex-row md:flex-col gap-1.5">
                <button class="w-8 h-8 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></button>
                <button class="w-8 h-8 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
              </div>
            </div>
          </div>
          
          <!-- Content & Image -->
          <div class="flex-1 p-6 md:p-8 flex flex-col relative z-10">
             
             <!-- Tablet Mockup Image (Background) -->
             <div class="absolute right-[-15%] top-[15%] w-[80%] h-full pointer-events-none opacity-40 lg:opacity-60 z-0">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" class="w-full h-[80%] object-cover object-left-top rounded-tl-2xl shadow-2xl mix-blend-screen" style="transform: perspective(1000px) rotateY(-15deg) rotateX(2deg);" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent"></div>
             </div>

             <div class="relative z-10 w-full lg:w-[65%]">
               <div class="flex items-center gap-2 text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase mb-4">
                  <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
                  FEATURED PROJECT
               </div>
               
               <h3 class="text-4xl md:text-5xl font-bold text-white mb-1 font-sans">Work.1</h3>
               <h4 class="text-lg md:text-xl font-bold text-[#D4AF37] mb-4 font-sans">Management System</h4>
               <p class="text-gray-400 text-xs leading-relaxed mb-6">
                 A powerful management system that helps teams organize tasks, track progress, and improve productivity.
               </p>
               
               <div class="flex items-center gap-4 mb-6 bg-[#111]/80 p-3 rounded-xl border border-white/5 w-max backdrop-blur-md">
                  <div class="text-center px-2"><p class="text-white font-bold text-base">12+</p><p class="text-gray-500 text-[9px] uppercase tracking-wider mt-0.5">Modules</p></div>
                  <div class="w-px h-6 bg-white/10"></div>
                  <div class="text-center px-2"><p class="text-white font-bold text-base">1K+</p><p class="text-gray-500 text-[9px] uppercase tracking-wider mt-0.5">Users</p></div>
                  <div class="w-px h-6 bg-white/10"></div>
                  <div class="text-center px-2"><p class="text-white font-bold text-base">99%</p><p class="text-[#D4AF37] text-[9px] uppercase tracking-wider mt-0.5">Efficiency</p></div>
               </div>

               <div class="flex flex-wrap gap-3 mb-10">
                 <button class="px-5 py-2 bg-gradient-to-r from-[#e5c158] to-[#b89430] hover:from-[#f0cc63] hover:to-[#c29d38] text-black font-semibold rounded-lg text-xs flex items-center justify-center gap-2 transition-all">
                    Live Demo <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
                 <button class="px-5 py-2 border border-white/10 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-2 bg-[#111]/80 hover:bg-[#222] transition-colors backdrop-blur-sm">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                 </button>
               </div>
               
               <!-- Tech Stack -->
               <div class="mt-auto border-t border-white/5 pt-4">
                 <p class="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase mb-3">TECHNOLOGIES USED</p>
                 <div class="flex flex-wrap gap-2">
                   <div class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5"><svg class="w-3 h-3 text-[#4FC08D]" viewBox="0 0 24 24" fill="currentColor"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg><span class="text-[10px] text-gray-300 font-medium">Vue.js</span></div>
                   <div class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5"><svg class="w-3 h-3 text-[#339933]" viewBox="0 0 24 24" fill="currentColor"><path d="M10.773 0a1.865 1.865 0 0 0-.915.242L2.52 4.475a1.88 1.88 0 0 0-.938 1.62v8.665a1.886 1.886 0 0 0 .934 1.624l7.336 4.237a1.88 1.88 0 0 0 1.874 0l7.338-4.237a1.868 1.868 0 0 0 .937-1.624V6.095a1.873 1.873 0 0 0-.936-1.62L11.724.242A1.856 1.856 0 0 0 10.773 0z"/></svg><span class="text-[10px] text-gray-300 font-medium">Node.js</span></div>
                   <div class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5"><svg class="w-3 h-3 text-[#4479A1]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.942 9.77c-2.003-3.69-7.98-4.108-11.838-2.618 5.626-2.128 11.235-1.077 12.871 1.94 1.054 1.94-.132 4.908-2.906 7.42-3.13 2.836-7.854 4.8-12.38 5.122 5.097.355 10.518-1.536 13.978-4.664 2.846-2.571 3.518-5.385 2.275-7.2zm-12.72 8.35c-4.48-.372-8.324-2.483-9.98-5.5-1.396-2.545-.04-5.632 3.32-8.156-3.805 2.062-5.748 5.4-4.52 7.64 1.56 2.837 5.76 4.793 10.36 4.887l.82 1.129zM10 2l1.6 3.2L16 6l-3.2 2.4L13.6 13 10 10.6 6.4 13l.8-4.6L4 6l4.4-.8L10 2z"/></svg><span class="text-[10px] text-gray-300 font-medium">MySQL</span></div>
                   <div class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5"><svg class="w-3 h-3 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.208,0-6.087,2.132-7.462,5.408c-0.481,1.144-0.643,2.37-0.457,3.58c0.187,1.21,0.728,2.32,1.565,3.204 c1.587,1.67,3.876,2.61,6.354,2.61c3.208,0,6.087-2.132,7.462-5.408c0.481-1.144,0.643-2.37,0.457-3.58 c-0.187-1.21-0.728-2.32-1.565-3.204C16.768,5.74,14.479,4.8,12.001,4.8z M12.001,17.2c-1.63,0-3.076-0.64-4.14-1.76 c-0.54-0.57-0.89-1.29-1.01-2.07c-0.12-0.78-0.02-1.57,0.29-2.31c0.91-2.14,3.01-3.46,5.16-3.46c1.63,0,3.076,0.64,4.14,1.76 c0.54,0.57,0.89,1.29,1.01,2.07c0.12,0.78,0.02,1.57-0.29,2.31C16.251,15.88,14.151,17.2,12.001,17.2z"/></svg><span class="text-[10px] text-gray-300 font-medium">Tailwind CSS</span></div>
                   <div class="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/5 flex items-center gap-1.5"><svg class="w-3 h-3 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 5.5l-9.4-3.1a3.4 3.4 0 00-2.2 0L1.5 5.5v13l9.4 3.1a3.4 3.4 0 002.2 0l9.4-3.1v-13zm-11 11.2a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm5.8-6.4l-5.8 2a.6.6 0 01-.4 0l-5.8-2v-2.3l5.8 2a.6.6 0 00.4 0l5.8-2v2.3z"/></svg><span class="text-[10px] text-gray-300 font-medium">Laravel</span></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        <!-- Right Column: Projects Grid (col-span-7) -->
        <div class="xl:col-span-7 flex flex-col gap-4">
          
          <!-- Filters -->
          <div class="flex flex-wrap gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
             <button class="px-4 py-2 rounded-lg border border-[#D4AF37] text-[#D4AF37] text-[10px] font-semibold bg-[#D4AF37]/5 flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_10px_rgba(212,175,55,0.05)]">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> 
               All Projects
             </button>
             <button class="px-4 py-2 rounded-lg border border-white/5 text-gray-400 text-[10px] font-medium hover:text-white hover:border-white/20 bg-[#161616] flex items-center gap-1.5 whitespace-nowrap transition-colors">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
               Web Applications
             </button>
             <button class="px-4 py-2 rounded-lg border border-white/5 text-gray-400 text-[10px] font-medium hover:text-white hover:border-white/20 bg-[#161616] flex items-center gap-1.5 whitespace-nowrap transition-colors">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> 
               Management Systems
             </button>
             <button class="px-4 py-2 rounded-lg border border-white/5 text-gray-400 text-[10px] font-medium hover:text-white hover:border-white/20 bg-[#161616] flex items-center gap-1.5 whitespace-nowrap transition-colors">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> 
               Frontend Only
             </button>
          </div>
          
          <!-- Projects 2x3 Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
             
             <!-- Card 02 -->
             <div class="bg-[#161616] border border-white/5 rounded-[16px] p-5 flex flex-col relative group hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all">
               <div class="flex justify-between items-start mb-3 relative">
                 <span class="text-[#D4AF37] font-bold text-lg font-mono">02</span>
                 <!-- Thumbnail properly contained and sized -->
                 <div class="w-[120px] h-[75px] rounded-lg overflow-hidden bg-[#222] border border-white/5 absolute right-0 top-0 group-hover:scale-[1.02] transition-transform origin-top-right">
                   <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&q=80" class="w-full h-full object-cover opacity-80" />
                 </div>
               </div>
               <div class="pt-8">
                 <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1">Web Application</p>
                 <h4 class="text-white font-bold text-sm mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors font-sans">Crypto Currency<br/>Trade Platform</h4>
                 <p class="text-gray-500 text-[10px] mb-4 flex-1 leading-relaxed pr-6">Real-time crypto trading platform with live charts and secure transactions.</p>
                 
                 <div class="flex items-center justify-between mt-auto">
                   <div class="flex items-center gap-1.5">
                     <!-- Minimal tech icons -->
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#4FC08D] text-[8px] font-bold">V</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#339933] text-[8px] font-bold">N</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#06B6D4] text-[8px] font-bold">T</div>
                   </div>
                   <button class="w-7 h-7 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                     <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

             <!-- Card 03 -->
             <div class="bg-[#161616] border border-white/5 rounded-[16px] p-5 flex flex-col relative group hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all">
               <div class="flex justify-between items-start mb-3 relative">
                 <span class="text-[#D4AF37] font-bold text-lg font-mono">03</span>
                 <div class="w-[120px] h-[75px] rounded-lg overflow-hidden bg-[#222] border border-white/5 absolute right-0 top-0 group-hover:scale-[1.02] transition-transform origin-top-right">
                   <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?w=400&q=80" class="w-full h-full object-cover opacity-80" />
                 </div>
               </div>
               <div class="pt-8">
                 <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1">Website</p>
                 <h4 class="text-white font-bold text-sm mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors font-sans">Apollo Logistics<br/>Website</h4>
                 <p class="text-gray-500 text-[10px] mb-4 flex-1 leading-relaxed pr-6">Professional logistics website showcasing services, tracking, and company info.</p>
                 
                 <div class="flex items-center justify-between mt-auto">
                   <div class="flex items-center gap-1.5">
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#E44D26] text-[8px] font-bold">5</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#264DE4] text-[8px] font-bold">3</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#F7DF1E] text-[8px] font-bold">JS</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#7952B3] text-[8px] font-bold">B</div>
                   </div>
                   <button class="w-7 h-7 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                     <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

             <!-- Card 04 -->
             <div class="bg-[#161616] border border-white/5 rounded-[16px] p-5 flex flex-col relative group hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all">
               <div class="flex justify-between items-start mb-3 relative">
                 <span class="text-[#D4AF37] font-bold text-lg font-mono">04</span>
                 <div class="w-[120px] h-[75px] rounded-lg overflow-hidden bg-[#222] border border-white/5 absolute right-0 top-0 group-hover:scale-[1.02] transition-transform origin-top-right">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" class="w-full h-full object-cover opacity-80" />
                 </div>
               </div>
               <div class="pt-8">
                 <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1">Management System</p>
                 <h4 class="text-white font-bold text-sm mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors font-sans">Smart Inventory &<br/>Sales System</h4>
                 <p class="text-gray-500 text-[10px] mb-4 flex-1 leading-relaxed pr-6">Inventory and sales management system to manage operations.</p>
                 
                 <div class="flex items-center justify-between mt-auto">
                   <div class="flex items-center gap-1.5">
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#FF2D20] text-[8px] font-bold">L</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#4FC08D] text-[8px] font-bold">V</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#F7DF1E] text-[8px] font-bold">JS</div>
                   </div>
                   <button class="w-7 h-7 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                     <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

             <!-- Card 05 -->
             <div class="bg-[#161616] border border-white/5 rounded-[16px] p-5 flex flex-col relative group hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all">
               <div class="flex justify-between items-start mb-3 relative">
                 <span class="text-[#D4AF37] font-bold text-lg font-mono">05</span>
                 <div class="w-[120px] h-[75px] rounded-lg overflow-hidden bg-[#222] border border-white/5 absolute right-0 top-0 group-hover:scale-[1.02] transition-transform origin-top-right">
                   <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80" class="w-full h-full object-cover opacity-80" />
                 </div>
               </div>
               <div class="pt-8">
                 <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1">Frontend Only</p>
                 <h4 class="text-white font-bold text-sm mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors font-sans">Blog Website<br/>(Amazon Clone)</h4>
                 <p class="text-gray-500 text-[10px] mb-4 flex-1 leading-relaxed pr-6">Responsive blog website inspired by Amazon's design principles.</p>
                 
                 <div class="flex items-center justify-between mt-auto">
                   <div class="flex items-center gap-1.5">
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#61DAFB] text-[8px] font-bold">R</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-white text-[8px] font-bold">N</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#06B6D4] text-[8px] font-bold">T</div>
                   </div>
                   <button class="w-7 h-7 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                     <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

             <!-- Card 06 -->
             <div class="bg-[#161616] border border-white/5 rounded-[16px] p-5 flex flex-col relative group hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all">
               <div class="flex justify-between items-start mb-3 relative">
                 <span class="text-[#D4AF37] font-bold text-lg font-mono">06</span>
                 <div class="w-[120px] h-[75px] rounded-lg overflow-hidden bg-[#222] border border-white/5 absolute right-0 top-0 group-hover:scale-[1.02] transition-transform origin-top-right">
                   <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80" class="w-full h-full object-cover opacity-80" />
                 </div>
               </div>
               <div class="pt-8">
                 <p class="text-[#D4AF37] text-[8px] uppercase font-bold tracking-widest mb-1">Frontend Only</p>
                 <h4 class="text-white font-bold text-sm mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors font-sans">Netflix Website<br/>Clone</h4>
                 <p class="text-gray-500 text-[10px] mb-4 flex-1 leading-relaxed pr-6">A Netflix UI clone built using HTML, CSS, and JS with fully responsive design.</p>
                 
                 <div class="flex items-center justify-between mt-auto">
                   <div class="flex items-center gap-1.5">
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#E44D26] text-[8px] font-bold">5</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#264DE4] text-[8px] font-bold">3</div>
                     <div class="w-6 h-6 rounded border border-white/5 bg-[#111] flex items-center justify-center text-[#F7DF1E] text-[8px] font-bold">JS</div>
                   </div>
                   <button class="w-7 h-7 rounded-full border border-white/10 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                     <svg class="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

             <!-- Coming Soon Card -->
             <div class="bg-[#161616] border border-[#D4AF37]/20 rounded-[16px] p-5 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-50"></div>
                <div class="w-12 h-12 mb-4 relative z-10 text-[#D4AF37]">
                   <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/><path d="M10 13h4v-2h-4z"/></svg>
                </div>
                <h4 class="text-white font-bold text-base mb-2 relative z-10 font-sans">More Projects<br/>Coming Soon</h4>
                <p class="text-gray-500 text-[10px] max-w-[160px] relative z-10">I'm always building new things and exploring innovative ideas.</p>
                <div class="absolute top-4 right-4 text-[#D4AF37]/40">
                  <svg class="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z"/></svg>
                </div>
             </div>

          </div>
        </div>
      </div>

      <!-- Bottom Stats Banner -->
      <div class="bg-[#161616] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 md:gap-4 w-full shadow-lg relative overflow-hidden">
        <div class="flex items-center gap-3 w-full md:w-auto border-b border-white/5 pb-4 md:border-b-0 md:pb-0">
          <div class="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 text-[#D4AF37]">
             <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-10-2h4v2h-4V5zm10 14H4V9h16v10z"/><path d="M10 13h4v-2h-4z"/></svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg leading-none mb-0.5 font-sans">10+</p>
            <p class="text-gray-500 text-[9px] font-medium uppercase tracking-wider">Projects Completed</p>
          </div>
        </div>
        
        <div class="w-px h-8 bg-white/10 hidden lg:block"></div>
        
        <div class="flex items-center gap-3 w-full md:w-auto border-b border-white/5 pb-4 md:border-b-0 md:pb-0">
          <div class="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 text-[#D4AF37]">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg leading-none mb-0.5 font-sans">7+</p>
            <p class="text-gray-500 text-[9px] font-medium uppercase tracking-wider">Technologies Used</p>
          </div>
        </div>
        
        <div class="w-px h-8 bg-white/10 hidden lg:block"></div>
        
        <div class="flex items-center gap-3 w-full md:w-auto border-b border-white/5 pb-4 md:border-b-0 md:pb-0">
          <div class="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 text-[#D4AF37]">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg leading-none mb-0.5 font-sans">3+</p>
            <p class="text-gray-500 text-[9px] font-medium uppercase tracking-wider">Years of Learning</p>
          </div>
        </div>
        
        <div class="w-px h-8 bg-white/10 hidden lg:block"></div>
        
        <div class="flex items-center gap-3 w-full md:w-auto">
          <div class="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 text-[#D4AF37]">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg leading-none mb-0.5 font-sans">100%</p>
            <p class="text-gray-500 text-[9px] font-medium uppercase tracking-wider">Passion & Dedication</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Vue component logic
</script>
