<template>
  <section class="bg-[#111] text-white py-16 px-6 md:px-10 font-sans relative overflow-hidden">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto flex flex-col gap-14 relative z-10">
      
      <!-- TOP SECTION -->
      <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">
         <!-- Left: Title & Description -->
         <div class="w-full lg:w-[45%]">
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               MY SKILLS
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
              Crafting Solutions<br/>
              With Strong <span class="text-[#D4AF37]">Skills</span>
            </h2>
            <div class="w-12 h-[2px] bg-[#D4AF37] mb-6"></div>
            <p class="text-gray-400 text-xs sm:text-sm max-w-lg leading-relaxed">
              A blend of technical skills, tools, and best practices that enable me to build robust and scalable web applications.
            </p>
         </div>

         <!-- Right: Stats -->
         <div class="w-full lg:w-[50%]">
            <div class="grid grid-cols-2 gap-3 sm:gap-4 bg-[#161616] p-5 sm:p-6 rounded-3xl border border-white/5 relative">
              <!-- Top Glow -->
              <div class="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
              
              <!-- Stat 1 -->
              <div class="flex flex-col items-center justify-center text-center p-3">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">10+</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Technologies<br/>Mastered</div>
              </div>
              
              <!-- Stat 2 -->
              <div class="flex flex-col items-center justify-center text-center p-3">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">3+</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Years of<br/>Learning</div>
              </div>
              
              <!-- Stat 3 -->
              <div class="flex flex-col items-center justify-center text-center p-3">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">10+</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Projects<br/>Completed</div>
              </div>
              
              <!-- Stat 4 -->
              <div class="flex flex-col items-center justify-center text-center p-3">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">100%</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Dedication &<br/>Passion</div>
              </div>
              
              <!-- Center cross divider lines -->
              <div class="absolute top-1/2 left-6 right-6 h-px bg-white/5 -translate-y-1/2 hidden sm:block"></div>
              <div class="absolute left-1/2 top-6 bottom-6 w-px bg-white/5 -translate-x-1/2 hidden sm:block"></div>
            </div>
         </div>
      </div>

      <!-- MIDDLE SECTION: TECHNICAL SKILLS -->
      <div>
        <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
           <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           TECHNICAL SKILLS
        </div>

        <div class="flex flex-col lg:flex-row gap-5 items-stretch">
           
           <!-- TABS -->
           <div class="w-full lg:w-[22%] flex flex-col gap-2">
             <button class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] border border-[#D4AF37]/50 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] relative group text-left">
                <div class="text-[#D4AF37]">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                Frontend
                <span class="absolute right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
             </button>
             
             <button class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] border border-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a] font-semibold text-xs transition-all text-left">
                <div class="text-gray-500">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
                </div>
                Backend
             </button>
             
             <button class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] border border-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a] font-semibold text-xs transition-all text-left">
                <div class="text-gray-500">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
                </div>
                Database
             </button>
             
             <button class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] border border-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a] font-semibold text-xs transition-all text-left">
                <div class="text-gray-500">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                Tools & Platforms
             </button>
             
             <button class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] border border-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a] font-semibold text-xs transition-all text-left">
                <div class="text-gray-500">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                </div>
                Other Skills
             </button>
           </div>

           <!-- CONTENT -->
           <div class="w-full lg:w-[32%] bg-[#161616] rounded-2xl p-6 border border-white/5 relative flex flex-col justify-center">
             <h3 class="text-lg font-bold text-white mb-2">Frontend Development</h3>
             <p class="text-xs text-gray-400 mb-6 leading-relaxed">Building responsive, interactive and modern user interfaces.</p>

             <ul class="space-y-3">
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Vue.js
               </li>
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  JavaScript (ES6+)
               </li>
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  HTML5
               </li>
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  CSS3
               </li>
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Tailwind CSS
               </li>
               <li class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Responsive Design
               </li>
             </ul>
           </div>

           <!-- GALAXY VISUAL -->
           <div class="w-full lg:w-[46%] flex justify-center items-center py-8 relative overflow-hidden">
             <div class="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]">
                <!-- Dotted Circle Orbit -->
                <div class="absolute inset-4 sm:inset-6 border border-dashed border-gray-600/50 rounded-full animate-[spin_40s_linear_infinite]"></div>
                
                <!-- Center Glowing Icon -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-20 sm:h-20 rounded-full border border-[#D4AF37] bg-[#111] flex items-center justify-center z-10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                   <div class="text-[#D4AF37] text-2xl sm:text-3xl font-bold tracking-tighter">&lt;/&gt;</div>
                </div>

                <!-- Orbit Items - Positioned around the circle -->
                <!-- Vue.js (Top) -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg z-20">
                      <img src="https://cdn.simpleicons.org/vuedotjs/41B883" class="w-5 h-5" alt="Vue.js"/>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full">Vue.js</span>
                </div>

                <!-- JavaScript (Top Right) -->
                <div class="absolute top-[18%] right-[5%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg z-20">
                      <div class="w-5 h-5 flex items-center justify-center bg-yellow-400 rounded-sm font-bold text-[10px] text-black">JS</div>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full">JavaScript</span>
                </div>

                <!-- CSS3 (Bottom Right) -->
                <div class="absolute bottom-[18%] right-[5%] translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg z-20">
                      <img src="https://cdn.simpleicons.org/css3/1572B6" class="w-5 h-5" alt="CSS3"/>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full">CSS3</span>
                </div>

                <!-- Tailwind CSS (Bottom) -->
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg z-20">
                      <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" class="w-5 h-5" alt="Tailwind CSS"/>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full">Tailwind CSS</span>
                </div>

                <!-- HTML5 (Bottom Left) -->
                <div class="absolute bottom-[18%] left-[5%] -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg z-20">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" class="w-5 h-5" alt="HTML5"/>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full">HTML5</span>
                </div>

                <!-- Responsive Design (Top Left) -->
                <div class="absolute top-[18%] left-[5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                   <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center shadow-lg text-white z-20">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                   </div>
                   <span class="text-[9px] font-medium text-white bg-[#111] px-1.5 py-0.5 rounded-full whitespace-nowrap">Responsive<br/>Design</span>
                </div>

             </div>
           </div>
        </div>
      </div>

      <!-- LOWER MIDDLE: TOOLS I USE -->
      <div>
        <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
           <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           TOOLS I USE
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
           <!-- Tool 1 -->
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/git/F05032" class="w-5 h-5" alt="Git"/>
                 <h4 class="text-xs font-bold text-white">Git & GitHub</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Version control and collaboration</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           
           <!-- Tool 2 -->
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/visualstudiocode/007ACC" class="w-5 h-5" alt="VS Code"/>
                 <h4 class="text-xs font-bold text-white">VS Code</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">My primary code editor for development</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           
           <!-- Tool 3 -->
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/figma/F24E1E" class="w-5 h-5" alt="Figma"/>
                 <h4 class="text-xs font-bold text-white">Figma</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Design, prototype and UI collaboration</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           
           <!-- Tool 4 -->
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/postman/FF6C37" class="w-5 h-5" alt="Postman"/>
                 <h4 class="text-xs font-bold text-white">Postman</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Testing APIs and managing requests</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           
           <!-- Tool 5 -->
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2 text-[#10b981]">
                 <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                 <h4 class="text-xs font-bold text-white">Terminal</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Command line for efficient workflow</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
        </div>
      </div>

      <!-- BOTTOM SECTION: PROFICIENCY & LEARNING -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
         
         <!-- Left: Skill Proficiency -->
         <div>
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               SKILL PROFICIENCY
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
               <!-- Skill 1 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2">
                     <img src="https://cdn.simpleicons.org/vuedotjs/41B883" class="w-3.5 h-3.5" alt="Vue.js"/>
                     <span class="text-xs font-semibold text-white">Vue.js</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 90%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">90%</div>
               </div>
               
               <!-- Skill 2 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2">
                     <img src="https://cdn.simpleicons.org/laravel/FF2D20" class="w-3.5 h-3.5" alt="Laravel"/>
                     <span class="text-xs font-semibold text-white">Laravel</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 85%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">85%</div>
               </div>

               <!-- Skill 3 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2 flex-shrink-0">
                     <div class="w-3.5 h-3.5 flex items-center justify-center bg-yellow-400 rounded-sm font-bold text-[7px] text-black tracking-tighter">JS</div>
                     <span class="text-xs font-semibold text-white">JavaScript</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 88%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">88%</div>
               </div>

               <!-- Skill 4 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2">
                     <img src="https://cdn.simpleicons.org/mysql/4479A1" class="w-3.5 h-3.5" alt="MySQL"/>
                     <span class="text-xs font-semibold text-white">MySQL</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 80%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">80%</div>
               </div>

               <!-- Skill 5 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2">
                     <img src="https://cdn.simpleicons.org/nodedotjs/339933" class="w-3.5 h-3.5" alt="Node.js"/>
                     <span class="text-xs font-semibold text-white">Node.js</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 85%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">85%</div>
               </div>

               <!-- Skill 6 -->
               <div class="flex items-center gap-3">
                  <div class="w-20 flex items-center gap-2">
                     <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" class="w-3.5 h-3.5" alt="Tailwind"/>
                     <span class="text-xs font-semibold text-white">Tailwind CSS</span>
                  </div>
                  <div class="flex-1 h-1 bg-[#222] rounded-full relative">
                     <div class="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style="width: 92%;">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_1px_#D4AF37]"></div>
                     </div>
                  </div>
                  <div class="w-8 text-right text-xs font-bold text-white">92%</div>
               </div>
            </div>
         </div>

         <!-- Right: Currently Learning -->
         <div>
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               CURRENTLY LEARNING
            </div>
            
            <div class="flex flex-col sm:flex-row gap-5 items-stretch h-[calc(100%-2.5rem)]">
              <!-- Left: Tags -->
              <div class="w-full sm:w-[45%] flex flex-col justify-center gap-2.5">
                 <div class="px-3 py-2 bg-[#161616] border border-white/5 rounded-full text-[10px] font-medium text-gray-300 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Advanced Backend Architecture
                 </div>
                 <div class="px-3 py-2 bg-[#161616] border border-white/5 rounded-full text-[10px] font-medium text-gray-300 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> System Design
                 </div>
                 <div class="px-3 py-2 bg-[#161616] border border-white/5 rounded-full text-[10px] font-medium text-gray-300 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Cloud Computing
                 </div>
                 <div class="px-3 py-2 bg-[#161616] border border-white/5 rounded-full text-[10px] font-medium text-gray-300 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> DevOps Fundamentals
                 </div>
              </div>
              
              <!-- Right: Quote -->
              <div class="w-full sm:w-[55%] bg-[#161616] p-6 rounded-2xl border border-white/5 relative flex flex-col justify-center min-h-[140px]">
                 <div class="text-[#D4AF37] text-5xl font-serif absolute top-3 left-4 opacity-30 leading-none">"</div>
                 <p class="text-xs text-gray-300 mt-2 leading-relaxed relative z-10 pl-2">
                   I never stop learning because technology never stops evolving.
                 </p>
                 <div class="w-8 h-[2px] bg-[#D4AF37]/50 mt-4 ml-2"></div>
              </div>
            </div>
         </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// This component relies purely on Tailwind CSS utility classes.
</script>
