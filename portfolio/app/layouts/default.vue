<template>
  <div class="flex flex-col min-h-screen bg-background text-textColor transition-colors duration-300">
    <header class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-borderColor/10 py-4 transition-all duration-300">
      <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" class="text-2xl font-display font-bold text-textColor tracking-tight hover:opacity-85 transition-opacity">
          KALKIDAN.
        </a>
        <div class="flex items-center space-x-6">
          <nav class="hidden md:flex items-center space-x-8 text-sm font-mono font-medium text-textColor/70">
            <a href="#about" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              Projects
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              Skills
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              Experience
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              Services
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" class="hover:text-accent transition-colors duration-200 relative py-1 group">
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <!-- Theme Toggle Button -->
          <button 
            @click="toggleTheme" 
            class="w-10 h-10 rounded-full border border-borderColor/10 hover:border-borderColor/30 flex items-center justify-center bg-surface hover:bg-background transition-all duration-300 shadow-sm relative group cursor-pointer"
            aria-label="Toggle Theme"
          >
            <!-- Sun Icon (visible in dark mode) -->
            <svg v-if="isDark" class="w-5 h-5 text-yellow-400 transform group-hover:rotate-45 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.46 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
            <!-- Moon Icon (visible in light mode) -->
            <svg v-else class="w-5 h-5 text-textColor group-hover:-rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="py-12 border-t border-borderColor/10 mt-20 bg-surface transition-colors duration-300">
      <div class="container mx-auto px-6 md:px-12 text-center text-sm font-mono text-textColor/50">
        <p>&copy; {{ new Date().getFullYear() }} Kalkidan Mengistu. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    }
  }
})
</script>


