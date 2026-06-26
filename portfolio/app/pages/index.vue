<template>
  <div class="relative w-full overflow-hidden bg-[#111] text-white selection:bg-[#D4AF37]/30 selection:text-white">
    
    <!-- Hero Section -->
    <section id="hero" class="relative w-full h-screen min-h-[600px] flex flex-col z-30">
      
      <!-- Background Image from assets -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hero-bg"></div>
      
      <!-- Gradient Overlays for Readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-0 w-full md:w-[65%]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/40 via-transparent to-[#1a1a1a] z-0"></div>
      <div class="absolute inset-0 bg-black/10 z-0"></div>

      <!-- Header / Navbar -->
      <header class="relative z-20 w-full px-6 md:px-12 py-4 flex items-center justify-between opacity-0 hero-anim">
        <div class="text-xl font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
          Kalkidan.
        </div>
        
        <nav class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          <a href="#hero" class="relative text-[#D4AF37] hover:text-[#D4AF37] transition-colors">
            Home
            <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full"></span>
          </a>
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#projects" class="hover:text-white transition-colors">Projects</a>
          <a href="#skills" class="hover:text-white transition-colors">Skills</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </nav>
        
        <a href="#contact" class="hidden md:inline-flex items-center justify-center px-6 py-2 border border-[#D4AF37]/50 text-white text-sm font-medium rounded-full hover:bg-[#D4AF37]/10 transition-all">
          Let's Talk <span class="ml-2">→</span>
        </a>
      </header>

      <!-- Hero Content -->
      <div class="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-6 md:px-12 w-full pb-6">
        <div class="max-w-2xl">
          
          <!-- 1. Availability Badge -->
          <div class="opacity-0 hero-anim inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37] bg-transparent text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-4 sm:mb-6 w-max">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            Open to Internship Opportunities
          </div>

          <!-- 2. Main Heading -->
          <h1 class="opacity-0 hero-anim text-5xl md:text-6xl lg:text-[68px] font-sans font-medium text-white mb-1 leading-tight tracking-tight">
            Hi, I'm<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B5952F] font-bold">Kalkidan</span>
          </h1>

          <!-- 3. Professional Title -->
          <h2 class="opacity-0 hero-anim text-lg md:text-xl font-sans font-normal text-white mb-4">
            Software Engineering Student<br/>& Full Stack Developer
          </h2>

          <!-- 4. Short Introduction -->
          <p class="opacity-0 hero-anim text-gray-400 max-w-md text-xs md:text-sm mb-6 leading-relaxed">
            I build modern web applications using<br class="hidden sm:block" />Vue.js, Node.js, Laravel, and MySQL.<br class="hidden sm:block" />Passionate about creating solutions<br class="hidden sm:block" />that make an impact.
          </p>

          <!-- 5. Call-to-Action Buttons -->
          <div class="opacity-0 hero-anim flex flex-col sm:flex-row items-center gap-3 mb-8">
            <a href="#projects" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-black text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
              View My Projects <span class="ml-2 font-bold">→</span>
            </a>
            
            <a href="/cv.pdf" target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 border border-white/40 text-white text-sm font-medium rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-black/20 backdrop-blur-sm">
              Download CV 
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>

          <!-- 6. Technology Badges -->
          <div class="opacity-0 hero-anim mb-8">
            <h3 class="text-[9px] text-gray-400 font-bold tracking-widest uppercase mb-3">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/vuedotjs/41B883" class="w-3 h-3" alt="Vue.js"/>
                <span class="text-[11px] text-gray-200">Vue.js</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" class="w-3 h-3" alt="Node.js"/>
                <span class="text-[11px] text-gray-200">Node.js</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/laravel/FF2D20" class="w-3 h-3" alt="Laravel"/>
                <span class="text-[11px] text-gray-200">Laravel</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/mysql/4479A1" class="w-3 h-3" alt="MySQL"/>
                <span class="text-[11px] text-gray-200">MySQL</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" class="w-3 h-3" alt="Tailwind CSS"/>
                <span class="text-[11px] text-gray-200">Tailwind CSS</span>
              </div>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                <img src="https://cdn.simpleicons.org/javascript/F7DF1E" class="w-3 h-3" alt="JavaScript"/>
                <span class="text-[11px] text-gray-200">JavaScript</span>
              </div>
            </div>
          </div>

          <!-- 7. Quick Statistics Section -->
          <div class="opacity-0 hero-anim flex items-center divide-x divide-white/20">
            <div class="pr-5 sm:pr-6 flex flex-col">
              <svg class="w-4 h-4 text-[#D4AF37] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span class="text-xl sm:text-2xl font-bold text-[#D4AF37] flex items-baseline">10<span class="text-base sm:text-lg">+</span></span>
              <span class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-medium">Projects Built</span>
            </div>
            <div class="px-5 sm:px-6 flex flex-col">
              <svg class="w-4 h-4 text-[#D4AF37] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span class="text-xl sm:text-2xl font-bold text-[#D4AF37] flex items-baseline">3<span class="text-base sm:text-lg">+</span></span>
              <span class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-medium">Years Learning</span>
            </div>
            <div class="pl-5 sm:pl-6 flex flex-col">
              <svg class="w-4 h-4 text-[#D4AF37] mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <span class="text-xl sm:text-2xl font-bold text-[#D4AF37] flex items-baseline">6<span class="text-base sm:text-lg">+</span></span>
              <span class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-medium">Technologies</span>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>

    <!-- Rest of the site -->
    <div class="relative z-40 bg-[#111]">
      <!-- About Section -->
      <section id="about">
        <AboutSection />
      </section>

      <!-- Projects Section -->
      <section id="projects">
        <ProjectsSection />
      </section>

      <!-- Skills Section -->
      <section id="skills">
        <SkillsSection />
      </section>



      <!-- Contact Section -->
      <section id="contact">
        <ContactSection />
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
// Keeping imports even if unused in hero, as they are used in sections below
import ThreeScene from '~/components/ThreeScene.vue'
import MagneticButton from '~/components/MagneticButton.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'

import ContactSection from '~/components/sections/ContactSection.vue'

onMounted(() => {
  if (process.client) {
    // Staggered Entrance Animation
    gsap.fromTo('.hero-anim', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    )
  }
})
</script>

<style scoped>
.hero-bg {
  background-image: url('~/assets/image/image.png');
}
</style>

