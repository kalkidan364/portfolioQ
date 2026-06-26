<template>
  <div class="bg-[#0b0c10] py-12 lg:py-16 relative overflow-hidden z-20 font-sans">
    
    <div class="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px]">
      
      <!-- TOP: ABOUT ME Section -->
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="h-[1px] w-16 bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">About Me</span>
        </div>
        <div class="h-[1px] w-16 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
      </div>

      <!-- Heading & Text -->
      <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
        <div class="flex-1">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            About Me,<br/>
            Get to Know <span class="text-[#D4AF37]">Me Better</span>
          </h2>
          <div class="w-12 h-[2px] bg-[#D4AF37]"></div>
        </div>
        
        <div class="flex-1 md:border-l md:border-[#D4AF37]/30 md:pl-8 flex items-center h-full pt-2 md:pt-0">
          <p class="text-gray-400 text-sm leading-relaxed max-w-lg">
            I am a 3rd Year Software Engineering student passionate about building modern web applications and solving real-world problems through innovative software development.
          </p>
        </div>
      </div>

      <!-- 3 Top Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <!-- Education -->
        <div class="relative bg-[#11131a] border border-white/5 rounded-2xl p-5 flex items-center gap-4 overflow-hidden group hover:border-white/10 transition-colors">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 shadow-[0_0_15px_#D4AF37]"></div>
          
          <div class="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-base mb-1">Education</h3>
            <p class="text-gray-400 text-xs">3rd Year Software<br/>Engineering Student</p>
          </div>
        </div>

        <!-- Focus -->
        <div class="relative bg-[#11131a] border border-white/5 rounded-2xl p-5 flex items-center gap-4 overflow-hidden group hover:border-white/10 transition-colors">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 shadow-[0_0_15px_#D4AF37]"></div>
          
          <div class="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-base mb-1">Focus</h3>
            <p class="text-gray-400 text-xs">Full Stack Web<br/>Development</p>
          </div>
        </div>

        <!-- Goal -->
        <div class="relative bg-[#11131a] border border-white/5 rounded-2xl p-5 flex items-center gap-4 overflow-hidden group hover:border-white/10 transition-colors">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 shadow-[0_0_15px_#D4AF37]"></div>
          
          <div class="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-base mb-1">Goal</h3>
            <p class="text-gray-400 text-xs">Become a Professional<br/>Software Engineer</p>
          </div>
        </div>
      </div>

      <!-- BOTTOM GRID: What I Do & My Journey -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        <!-- LEFT: WHAT I DO -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">What I Do</span>
          </div>

          <!-- 4 Vertical Cards Grid -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <!-- Frontend -->
            <div class="bg-[#11131a] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
              <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 class="text-white font-bold text-xs mb-2">Frontend<br/>Development</h3>
              <p class="text-gray-500 text-[10px] leading-relaxed">Building responsive and interactive user interfaces with modern technologies.</p>
            </div>
            
            <!-- Backend -->
            <div class="bg-[#11131a] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
              <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <h3 class="text-white font-bold text-xs mb-2">Backend<br/>Development</h3>
              <p class="text-gray-500 text-[10px] leading-relaxed">Creating robust server-side applications and RESTful APIs.</p>
            </div>

            <!-- Database -->
            <div class="bg-[#11131a] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
              <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h3 class="text-white font-bold text-xs mb-2">Database<br/>Design</h3>
              <p class="text-gray-500 text-[10px] leading-relaxed">Designing efficient and scalable databases for real-world applications.</p>
            </div>

            <!-- UI Design -->
            <div class="bg-[#11131a] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
              <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-white font-bold text-xs mb-2">Responsive<br/>UI Design</h3>
              <p class="text-gray-500 text-[10px] leading-relaxed">Crafting beautiful, modern and mobile-friendly user experiences.</p>
            </div>
          </div>

          <!-- Stats Block -->
          <div class="bg-[#11131a] border border-white/5 rounded-2xl p-5 flex items-center justify-around">
            <div class="flex flex-col items-center text-center">
              <svg class="w-5 h-5 text-[#D4AF37] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span class="text-xl font-bold text-[#D4AF37] mb-0.5">10+</span>
              <span class="text-[9px] text-gray-400 font-medium">Projects Built</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <svg class="w-5 h-5 text-[#D4AF37] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span class="text-xl font-bold text-[#D4AF37] mb-0.5">3+</span>
              <span class="text-[9px] text-gray-400 font-medium">Years Learning</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <svg class="w-5 h-5 text-[#D4AF37] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <span class="text-xl font-bold text-[#D4AF37] mb-0.5">7+</span>
              <span class="text-[9px] text-gray-400 font-medium">Technologies</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: MY JOURNEY -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span class="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">My Journey</span>
          </div>

          <!-- Timeline -->
          <div class="relative pl-6 border-l border-[#D4AF37]/20 space-y-4 mb-8">
            
            <!-- 2024 -->
            <div class="relative">
              <div class="absolute -left-[33px] top-3 w-3.5 h-3.5 rounded-full border-[1.5px] border-[#D4AF37] bg-[#11131a] flex items-center justify-center">
                <div class="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                <span class="text-[#D4AF37] font-bold text-base mt-1.5">2024</span>
                <div class="bg-[#11131a] border border-white/5 rounded-xl p-4 flex-1">
                  <h4 class="text-white font-bold text-xs mb-1">Started Software Engineering</h4>
                  <p class="text-gray-500 text-[10px] leading-relaxed">Began my journey into the world of programming and software development.</p>
                </div>
              </div>
            </div>

            <!-- 2025 -->
            <div class="relative">
              <div class="absolute -left-[33px] top-3 w-3.5 h-3.5 rounded-full border-[1.5px] border-[#D4AF37] bg-[#11131a] flex items-center justify-center">
                <div class="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                <span class="text-[#D4AF37] font-bold text-base mt-1.5">2025</span>
                <div class="bg-[#11131a] border border-white/5 rounded-xl p-4 flex-1">
                  <h4 class="text-white font-bold text-xs mb-1">Learned & Built</h4>
                  <p class="text-gray-500 text-[10px] leading-relaxed">Mastered HTML, CSS, JavaScript and built many frontend projects.</p>
                </div>
              </div>
            </div>

            <!-- 2026 -->
            <div class="relative">
              <div class="absolute -left-[33px] top-3 w-3.5 h-3.5 rounded-full border-[1.5px] border-[#D4AF37] bg-[#11131a] flex items-center justify-center">
                <div class="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                <span class="text-[#D4AF37] font-bold text-base mt-1.5">2026</span>
                <div class="bg-[#11131a] border border-white/5 rounded-xl p-4 flex-1">
                  <h4 class="text-white font-bold text-xs mb-1">Full Stack Development</h4>
                  <p class="text-gray-500 text-[10px] leading-relaxed">Building full stack applications using Vue.js, Node.js, Laravel and MySQL.</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Passionate About -->
          <div class="bg-[#11131a] border border-white/5 rounded-xl p-5">
            <h4 class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-4">I'm Passionate About</h4>
            <div class="flex flex-wrap gap-2">
              <div class="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 flex items-center gap-1.5 text-[10px] text-gray-300">
                <span class="text-[#D4AF37]">💡</span> Problem Solving
              </div>
              <div class="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 flex items-center gap-1.5 text-[10px] text-gray-300">
                <span class="text-[#D4AF37] font-bold">&lt;/&gt;</span> Clean Code
              </div>
              <div class="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 flex items-center gap-1.5 text-[10px] text-gray-300">
                <span class="text-[#D4AF37]">📖</span> Learning
              </div>
              <div class="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 flex items-center gap-1.5 text-[10px] text-gray-300">
                <span class="text-[#D4AF37]">🚀</span> Innovation
              </div>
              <div class="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 flex items-center gap-1.5 text-[10px] text-gray-300">
                <span class="text-[#D4AF37]">🛠️</span> Building
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Basic setup, no extra logic needed for the layout itself
</script>
