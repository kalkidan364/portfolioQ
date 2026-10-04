<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
      (isScrolled || isMobileMenuOpen)
        ? 'py-3.5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'py-5 bg-gradient-to-b from-black/80 via-black/30 to-transparent border-b border-transparent'
    ]"
  >
    <div class="w-full px-6 md:px-12 flex items-center justify-between">
      <!-- Logo -->
      <a 
        href="/" 
        @click.prevent="navigateToSection('hero')" 
        class="text-xl font-bold tracking-[0.2em] text-[#D4AF37] uppercase hover:brightness-110 transition-all flex items-center gap-1 group cursor-pointer select-none"
      >
        <span>Kalkidan.</span>
      </a>
      
      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-gray-300">
        <a 
          href="/" 
          @click.prevent="navigateToSection('hero')" 
          class="relative hover:text-white transition-colors cursor-pointer py-1"
          :class="{ 'text-[#D4AF37] font-semibold': activeSection === 'hero' }"
        >
          Home
          <span 
            v-if="activeSection === 'hero'" 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full transition-all"
          ></span>
        </a>
        <a 
          href="/#about" 
          @click.prevent="navigateToSection('about')" 
          class="relative hover:text-white transition-colors cursor-pointer py-1"
          :class="{ 'text-[#D4AF37] font-semibold': activeSection === 'about' }"
        >
          About
          <span 
            v-if="activeSection === 'about'" 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full transition-all"
          ></span>
        </a>
        <a 
          href="/#projects" 
          @click.prevent="navigateToSection('projects')" 
          class="relative hover:text-white transition-colors cursor-pointer py-1"
          :class="{ 'text-[#D4AF37] font-semibold': activeSection === 'projects' }"
        >
          Projects
          <span 
            v-if="activeSection === 'projects'" 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full transition-all"
          ></span>
        </a>
        <a 
          href="/#skills" 
          @click.prevent="navigateToSection('skills')" 
          class="relative hover:text-white transition-colors cursor-pointer py-1"
          :class="{ 'text-[#D4AF37] font-semibold': activeSection === 'skills' }"
        >
          Skills
          <span 
            v-if="activeSection === 'skills'" 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full transition-all"
          ></span>
        </a>
        <a 
          href="/#contact" 
          @click.prevent="navigateToSection('contact')" 
          class="relative hover:text-white transition-colors cursor-pointer py-1"
          :class="{ 'text-[#D4AF37] font-semibold': activeSection === 'contact' }"
        >
          Contact
          <span 
            v-if="activeSection === 'contact'" 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full transition-all"
          ></span>
        </a>
      </nav>
      
      <!-- Right CTA Button -->
      <div class="hidden md:flex items-center">
        <a 
          href="/#contact" 
          @click.prevent="navigateToSection('contact')" 
          class="inline-flex items-center justify-center px-6 py-2 border border-[#D4AF37]/60 text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
        >
          Let's Talk <span class="ml-2 font-bold">→</span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#D4AF37]/50 transition-all focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-white/10 bg-[#0a0a0a]/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl"
      >
        <nav class="flex flex-col space-y-3 text-sm font-medium">
          <a 
            href="/" 
            @click.prevent="navigateToSection('hero')" 
            class="transition-colors py-1 cursor-pointer flex items-center justify-between"
            :class="activeSection === 'hero' ? 'text-[#D4AF37] font-semibold' : 'text-gray-300 hover:text-[#D4AF37]'"
          >
            <span>Home</span>
            <span v-if="activeSection === 'hero'" class="text-xs">●</span>
          </a>
          <a 
            href="/#about" 
            @click.prevent="navigateToSection('about')" 
            class="transition-colors py-1 cursor-pointer flex items-center justify-between"
            :class="activeSection === 'about' ? 'text-[#D4AF37] font-semibold' : 'text-gray-300 hover:text-[#D4AF37]'"
          >
            <span>About</span>
            <span v-if="activeSection === 'about'" class="text-xs">●</span>
          </a>
          <a 
            href="/#projects" 
            @click.prevent="navigateToSection('projects')" 
            class="transition-colors py-1 cursor-pointer flex items-center justify-between"
            :class="activeSection === 'projects' ? 'text-[#D4AF37] font-semibold' : 'text-gray-300 hover:text-[#D4AF37]'"
          >
            <span>Projects</span>
            <span v-if="activeSection === 'projects'" class="text-xs">●</span>
          </a>
          <a 
            href="/#skills" 
            @click.prevent="navigateToSection('skills')" 
            class="transition-colors py-1 cursor-pointer flex items-center justify-between"
            :class="activeSection === 'skills' ? 'text-[#D4AF37] font-semibold' : 'text-gray-300 hover:text-[#D4AF37]'"
          >
            <span>Skills</span>
            <span v-if="activeSection === 'skills'" class="text-xs">●</span>
          </a>
          <a 
            href="/#contact" 
            @click.prevent="navigateToSection('contact')" 
            class="transition-colors py-1 cursor-pointer flex items-center justify-between"
            :class="activeSection === 'contact' ? 'text-[#D4AF37] font-semibold' : 'text-gray-300 hover:text-[#D4AF37]'"
          >
            <span>Contact</span>
            <span v-if="activeSection === 'contact'" class="text-xs">●</span>
          </a>
        </nav>
        <div class="pt-3 border-t border-white/10">
          <a 
            href="/#contact" 
            @click.prevent="navigateToSection('contact')" 
            class="w-full inline-flex items-center justify-center px-5 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs rounded-lg hover:brightness-110 transition-all cursor-pointer shadow-lg"
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navigateToSection = (sectionId: string) => {
  isMobileMenuOpen.value = false

  if (route.path !== '/') {
    router.push(sectionId === 'hero' ? '/' : `/#${sectionId}`)
    return
  }

  if (sectionId === 'hero') {
    if (typeof window !== 'undefined') {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { duration: 1.2 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      history.pushState(null, '', '/')
      activeSection.value = 'hero'
    }
    return
  }

  const el = document.getElementById(sectionId)
  if (el) {
    if (typeof window !== 'undefined') {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { offset: -70, duration: 1.2 })
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top, behavior: 'smooth' })
      }
      history.pushState(null, '', `/#${sectionId}`)
      activeSection.value = sectionId
    }
  }
}

const handleScroll = () => {
  if (typeof window === 'undefined') return
  isScrolled.value = window.scrollY > 20

  if (route.path === '/') {
    const sections = ['contact', 'skills', 'projects', 'about', 'hero']
    const scrollPosition = window.scrollY + 140

    for (const section of sections) {
      if (section === 'hero') {
        activeSection.value = 'hero'
        break
      }
      const el = document.getElementById(section)
      if (el) {
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          activeSection.value = section
          break
        }
      }
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
