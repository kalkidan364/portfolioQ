<template>
  <div class="flex flex-col min-h-screen bg-background text-textColor transition-colors duration-300">
    <main class="flex-grow">
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


