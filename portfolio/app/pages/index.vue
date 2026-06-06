<template>
  <div class="relative w-full overflow-hidden bg-background text-textColor transition-colors duration-300">
    
    <!-- Hero Section -->
    <section id="hero" class="relative w-full h-screen flex items-center justify-center overflow-hidden z-30">
      <!-- ThreeJS Interactive Particle Background -->
      <ThreeScene />
      
      <!-- Hero Content -->
      <div class="container mx-auto px-6 md:px-12 text-center relative z-10 hero-content">
        <p class="text-xs md:text-sm font-mono tracking-widest text-accent uppercase mb-4 opacity-0 hero-tag">// DESIGNING THE FUTURE OF THE WEB</p>
        <h1 class="text-6xl md:text-8xl lg:text-[110px] font-display font-light tracking-tight leading-none text-textColor mb-6 opacity-0 hero-title">
          Kalkidan Mengistu
        </h1>
        <h2 class="text-lg md:text-2xl font-mono text-textColor/70 max-w-2xl mx-auto mb-10 opacity-0 hero-subtitle leading-relaxed">
          AI Engineer & Full-Stack Developer specializing in building premium digital products that merge sleek design with intelligent code.
        </h2>
        <div class="opacity-0 hero-btn">
          <MagneticButton>
            <a href="#about" class="inline-flex items-center justify-center px-8 py-4 bg-textColor text-background font-mono text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Explore Portfolio <span class="ml-2">↓</span>
            </a>
          </MagneticButton>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-textColor/40 font-mono text-xs tracking-widest opacity-0 hero-scroll flex flex-col items-center gap-2">
        <span>SCROLL DOWN</span>
        <div class="w-[1px] h-8 bg-textColor/20 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-accent animate-pulse-slow"></div>
        </div>
      </div>
    </section>

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

    <!-- Experience Section -->
    <section id="experience">
      <ExperienceSection />
    </section>

    <!-- Services Section -->
    <section id="services">
      <ServicesSection />
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <ContactSection />
    </section>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ThreeScene from '~/components/ThreeScene.vue'
import MagneticButton from '~/components/MagneticButton.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

onMounted(() => {
  if (process.client) {
    // Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.to('.hero-tag', { opacity: 1, y: 0, duration: 1 })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.2 }, '-=0.8')
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
      .to('.hero-btn', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.hero-scroll', { opacity: 1, duration: 0.8 }, '-=0.4')
  }
})
</script>

<style scoped>
.hero-tag {
  transform: translateY(20px);
}
.hero-title {
  transform: translateY(40px);
}
.hero-subtitle {
  transform: translateY(20px);
}
.hero-btn {
  transform: translateY(15px);
}
</style>

