<template>
  <header class="relative z-50 w-full px-6 md:px-12 py-4 flex items-center justify-between">
    <NuxtLink to="/" class="text-xl font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
      Kalkidan.
    </NuxtLink>
    
    <nav class="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
      <NuxtLink to="/" class="relative hover:text-white transition-colors" exact-active-class="text-[#D4AF37]">
        Home
      </NuxtLink>
      <NuxtLink to="/#about" class="hover:text-white transition-colors">About</NuxtLink>
      <NuxtLink to="/#projects" class="hover:text-white transition-colors">Projects</NuxtLink>
      <NuxtLink to="/#skills" class="hover:text-white transition-colors">Skills</NuxtLink>
      <NuxtLink to="/#contact" class="hover:text-white transition-colors">Contact</NuxtLink>
    </nav>
    
    <NuxtLink to="/#contact" class="hidden md:inline-flex items-center justify-center px-6 py-2 border border-[#D4AF37]/50 text-white text-sm font-medium rounded-full hover:bg-[#D4AF37]/10 transition-all">
      Let's Talk <span class="ml-2">→</span>
    </NuxtLink>
  </header>
</template>
