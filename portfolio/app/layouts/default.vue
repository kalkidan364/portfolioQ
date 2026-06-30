<template>
  <div class="flex flex-col min-h-screen bg-[#050505] text-white transition-colors duration-300">
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Minimal Dark Copyright Footer -->
    <footer class="py-5 border-t border-white/5 bg-[#050505]">
      <div class="container mx-auto px-6 md:px-12 text-center text-xs font-mono text-gray-500">
        <p>© {{ new Date().getFullYear() }} Kalkidan Mengistu. All rights reserved.</p>
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


