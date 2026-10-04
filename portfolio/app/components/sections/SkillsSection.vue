<template>
  <section class="bg-[#111] text-white py-16 px-6 md:px-10 font-sans relative overflow-hidden">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto flex flex-col gap-14 relative z-10">
      
      <!-- TOP SECTION: Title + Stats -->
      <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">
         <!-- Left: Title & Description -->
         <div class="w-full lg:w-[45%]">
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               MY SKILLS
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
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
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
              <!-- Stat 1 -->
              <div class="flex flex-col items-center justify-center text-center p-3 border-r border-b border-white/5">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">10+</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Technologies<br/>Mastered</div>
              </div>
              <!-- Stat 2 -->
              <div class="flex flex-col items-center justify-center text-center p-3 border-b border-white/5">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">10+</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Projects<br/>Completed</div>
              </div>
              <!-- Stat 3 -->
              <div class="flex flex-col items-center justify-center text-center p-3 border-r border-white/5">
                <div class="w-10 h-10 mb-3 flex items-center justify-center text-[#D4AF37]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">4th</div>
                <div class="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">Year of<br/>Experience</div>
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

      <!-- MIDDLE SECTION: TECHNICAL SKILLS (Functional Tabs) -->
      <div>
        <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
           <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           TECHNICAL SKILLS
        </div>

        <div class="flex flex-col lg:flex-row gap-5 items-stretch">
           
           <!-- TABS (Reactive) -->
           <div class="w-full lg:w-[22%] flex flex-col gap-2">
             <button
               v-for="tab in tabs"
               :key="tab.key"
               @click="activeTab = tab.key"
               class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616] font-semibold text-xs transition-all text-left relative"
               :class="activeTab === tab.key
                 ? 'border border-[#D4AF37]/50 text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                 : 'border border-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a]'"
             >
               <div :class="activeTab === tab.key ? 'text-[#D4AF37]' : 'text-gray-500'" v-html="tab.icon"></div>
               {{ tab.label }}
               <span v-if="activeTab === tab.key" class="absolute right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
             </button>
           </div>

           <!-- CONTENT PANEL (Reactive) -->
           <div class="w-full lg:w-[32%] bg-[#161616] rounded-2xl p-6 border border-white/5 relative flex flex-col justify-center min-h-[280px]">
             <Transition name="fade-tab" mode="out-in">
               <div :key="activeTab">
                 <h3 class="text-lg font-bold text-white mb-2">{{ activeContent.title }}</h3>
                 <p class="text-xs text-gray-400 mb-6 leading-relaxed">{{ activeContent.desc }}</p>
                 <ul class="space-y-3">
                   <li v-for="item in activeContent.items" :key="item" class="flex items-center gap-3 text-xs text-gray-300 font-medium">
                     <div class="w-3.5 h-3.5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
                       <svg class="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                     </div>
                     {{ item }}
                   </li>
                 </ul>
               </div>
             </Transition>
           </div>

           <!-- GALAXY VISUAL (Dynamic Rotating Orbit integrated with active tab) -->
           <div class="w-full lg:w-[46%] flex justify-center items-center py-6 relative">
             <div class="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
                <!-- Outer dashed orbit track -->
                <div class="absolute inset-3 border border-dashed border-[#D4AF37]/25 rounded-full pointer-events-none"></div>

                <!-- Center Category Hub (Stationary) -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-[#D4AF37] bg-[#111] flex flex-col items-center justify-center z-20 shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all duration-300">
                   <div class="text-[#D4AF37] text-xl sm:text-2xl font-bold tracking-tighter leading-none" v-html="currentCategoryData.centerIcon"></div>
                   <span class="text-[8px] uppercase tracking-wider text-gray-400 font-semibold mt-1">{{ currentCategoryData.centerLabel }}</span>
                </div>

                <!-- Rotating Orbit Container -->
                <div :key="activeTab" class="absolute inset-0 orbit-spin animate-[fadeIn_0.35s_ease-out]">
                   <!-- Orbiting Skills Satellites -->
                   <div v-for="(skill, i) in currentCategoryData.skills" :key="skill.name" 
                        class="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-auto"
                        :style="getOrbitStyle(i, currentCategoryData.skills.length)">
                      <div class="orbit-counter-spin flex flex-col items-center gap-1 group cursor-pointer">
                         <div class="w-10 h-10 rounded-xl bg-[#161616] border border-white/10 group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 p-2">
                            <img v-if="skill.icon" :src="skill.icon" class="w-5 h-5 object-contain" :alt="skill.name"/>
                            <div v-else-if="skill.badge" class="w-5 h-5 flex items-center justify-center rounded-sm font-bold text-[10px] text-black" :style="{ backgroundColor: skill.color || '#F7DF1E' }">
                               {{ skill.badge }}
                            </div>
                            <span v-else-if="skill.svg" v-html="skill.svg" class="w-5 h-5 flex items-center justify-center"></span>
                            <span v-else class="text-xs font-bold text-[#D4AF37]">{{ skill.name.charAt(0) }}</span>
                         </div>
                         <span class="text-[9px] font-medium text-white bg-[#111]/90 border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap group-hover:border-[#D4AF37]/50 transition-colors shadow-md">
                            {{ skill.name }}
                         </span>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>

      <!-- LOWER SECTION: TOOLS I USE -->
      <div>
        <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
           <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
           TOOLS I USE
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/git/F05032" class="w-5 h-5" alt="Git"/>
                 <h4 class="text-xs font-bold text-white">Git & GitHub</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Version control and collaboration</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="w-5 h-5" alt="VS Code"/>
                 <h4 class="text-xs font-bold text-white">VS Code</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">My primary code editor</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/figma/F24E1E" class="w-5 h-5" alt="Figma"/>
                 <h4 class="text-xs font-bold text-white">Figma</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Design, prototype and UI collaboration</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/postman/FF6C37" class="w-5 h-5" alt="Postman"/>
                 <h4 class="text-xs font-bold text-white">Postman</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Testing APIs and managing requests</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
           <div class="bg-[#161616] rounded-xl p-5 border border-white/5 relative overflow-hidden group">
              <div class="flex items-center gap-3 mb-2">
                 <img src="https://cdn.simpleicons.org/docker/2496ED" class="w-5 h-5" alt="Docker"/>
                 <h4 class="text-xs font-bold text-white">Docker</h4>
              </div>
              <p class="text-[10px] sm:text-xs text-gray-400 leading-relaxed">Containerizing apps for deployment</p>
              <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
           </div>
        </div>
      </div>

      <!-- SKILL PROFICIENCY -->
      <div class="flex flex-col lg:flex-row gap-10">
         <!-- Left: Skill Bars -->
         <div class="w-full lg:w-[55%]">
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               SKILL PROFICIENCY
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
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
         <div class="w-full lg:w-[45%]">
            <div class="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
               <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
               CURRENTLY LEARNING
            </div>
            <div class="flex flex-col sm:flex-row gap-5 items-stretch h-[calc(100%-2.5rem)]">
              <!-- Tags -->
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
              <!-- Quote -->
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
import { ref, computed } from 'vue'

const activeTab = ref('frontend')

const tabs = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
  },
  {
    key: 'database',
    label: 'Database',
    icon: `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    icon: `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
  {
    key: 'other',
    label: 'Other Skills',
    icon: `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`,
  },
]

const skillContents: Record<string, { title: string; desc: string; items: string[] }> = {
  frontend: {
    title: 'Frontend Development',
    desc: 'Building responsive, interactive and modern user interfaces.',
    items: ['Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  backend: {
    title: 'Backend Development',
    desc: 'Building robust server-side applications and scalable APIs.',
    items: ['Laravel (PHP)', 'Node.js', 'Express.js', 'REST APIs', 'Authentication & JWT', 'MVC Architecture'],
  },
  database: {
    title: 'Database Management',
    desc: 'Designing efficient and reliable data storage solutions.',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis (Caching)', 'Database Design', 'Query Optimization'],
  },
  tools: {
    title: 'Tools & Platforms',
    desc: 'Industry-standard tools for modern development workflows.',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Docker', 'Linux / CLI'],
  },
  other: {
    title: 'Other Skills',
    desc: 'Complementary skills that enhance my overall development capability.',
    items: ['UI/UX Design Principles', 'Agile / Scrum', 'Code Review', 'Performance Optimization', 'SEO Basics', 'Problem Solving'],
  },
}

const activeContent = computed(() => skillContents[activeTab.value])

interface SkillNode {
  name: string
  icon?: string
  svg?: string
  badge?: string
  color?: string
}

interface CategoryOrbit {
  centerIcon: string
  centerLabel: string
  skills: SkillNode[]
}

const categoryOrbits: Record<string, CategoryOrbit> = {
  frontend: {
    centerIcon: '&lt;/&gt;',
    centerLabel: 'Frontend',
    skills: [
      { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/41B883' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6' },
      { name: 'Nuxt', icon: 'https://cdn.simpleicons.org/nuxt/00DC82' },
    ],
  },
  backend: {
    centerIcon: '{ }',
    centerLabel: 'Backend',
    skills: [
      { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/FFFFFF' },
      { name: 'REST APIs', svg: '<svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
      { name: 'JWT Auth', svg: '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>' },
    ],
  },
  database: {
    centerIcon: 'DB',
    centerLabel: 'Database',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Eloquent ORM', svg: '<svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>' },
      { name: 'Schema Design', svg: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
    ],
  },
  tools: {
    centerIcon: 'Tools',
    centerLabel: 'Platforms',
    skills: [
      { name: 'Git & GitHub', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Yegara Host', icon: '/images/yegara-icon.png' },
    ],
  },
  other: {
    centerIcon: '★',
    centerLabel: 'Skills',
    skills: [
      { name: 'UI/UX Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Linux / CLI', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
      { name: 'Performance', svg: '<svg class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' },
      { name: 'Agile / Scrum', svg: '<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' },
      { name: 'Code Review', svg: '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
      { name: 'Problem Solving', svg: '<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>' },
    ],
  },
};

const currentCategoryData = computed(() => categoryOrbits[activeTab.value] || categoryOrbits.frontend);

const getOrbitStyle = (index: number, total: number = 6) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = (50 + 40 * Math.cos(angle)).toFixed(2);
  const y = (50 + 40 * Math.sin(angle)).toFixed(2);
  return { left: `${x}%`, top: `${y}%` };
};

</script>

<style scoped>
.fade-tab-enter-active,
.fade-tab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-tab-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-tab-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@keyframes orbitSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbitCounterSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.orbit-spin {
  animation: orbitSpin 32s linear infinite;
}

.orbit-counter-spin {
  animation: orbitCounterSpin 32s linear infinite;
}

.orbit-spin:hover,
.orbit-spin:hover .orbit-counter-spin {
  animation-play-state: paused;
}
</style>
