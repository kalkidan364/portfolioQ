<template>
  <div class="bg-background min-h-screen py-32 md:py-48 relative overflow-hidden z-20">
    <!-- Spotlight background glow -->
    <div class="absolute right-0 top-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
      <div class="w-full">
        
        <!-- Copy and Tech Stack -->
        <div class="space-y-16">
          
          <!-- Section Heading -->
          <header class="space-y-6">
            <h2 class="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight leading-none text-textColor flex items-baseline">
              <span class="text-textColor/30 font-mono mr-4 text-xl md:text-2xl lg:text-3xl">01.</span>
              <span>About Me</span>
            </h2>
            <div class="w-full h-px bg-textColor/10"></div>
          </header>

          <!-- Biography Texts -->
          <div class="space-y-8 text-textColor/80 text-base md:text-lg font-mono leading-loose about-bio">
            <p>
              Hello! I'm <b title="Kalkidan Mengistu" >Kalkidan Mengistu</b>, a Full Stack Developer and Software Engineering student dedicated to creating exceptional digital experiences through clean code, thoughtful design, and modern technologies. I combine technical expertise with a passion for problem-solving to build web applications that are both powerful and user-focused.
            </p>
            <p>
              My expertise spans front-end development, back-end systems, database design, and application architecture. Whether developing interactive user interfaces, optimizing application performance, or building complete end-to-end solutions, I focus on delivering reliable, scalable, and impactful products that create real value for users.
            </p>
          </div>

          <!-- Technologies Section -->
          <div class="space-y-8 about-tech">
            <h3 class="text-sm md:text-base font-mono tracking-wider uppercase text-accent">
              // Technologies I've been working with:
            </h3>
            
            <!-- 4-Column Technology Grid for wider display -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 pt-6 border-t border-white/5">
              <!-- Column 1 -->
              <ul class="space-y-4 font-mono text-sm md:text-base text-textColor/70">
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> JavaScript (ES6+)
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> React.js
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> Vue.js
                </li>
              </ul>

              <!-- Column 2 -->
              <ul class="space-y-4 font-mono text-sm md:text-base text-textColor/70">
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> TailwindCSS
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> MySQL
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> PostgreSQL
                </li>
              </ul>

              <!-- Column 3 -->
              <ul class="space-y-4 font-mono text-sm md:text-base text-textColor/70">
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> Laravel 11/12
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> Python 
                </li>
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> PHP
                </li>
              </ul>

              <!-- Column 4 -->
              <ul class="space-y-4 font-mono text-sm md:text-base text-textColor/70">
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> Django
                </li>      
                <li class="flex items-center gap-3 hover:text-accent transition-colors cursor-default">
                  <span class="text-accent text-sm">→</span> TypeScript
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  if (process.client) {
    // Fade in text elements
    gsap.from('.about-bio p', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-bio',
        start: 'top 85%'
      }
    })

    // Stagger fade-in of tech list columns
    gsap.from('.about-tech ul', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-tech',
        start: 'top 85%'
      }
    })
  }
})
</script>

<style scoped>
/* No custom styles needed */
</style>
