// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  srcDir: 'app/',

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '../tailwind.config.ts', // points to root from within app/
  },

  app: {
    head: {
      title: 'Kalkidan Mengistu — Full Stack Developer',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content:
            'Full Stack Developer specializing in Vue.js, React, Laravel, and Node.js. Building premium digital experiences that combine elegant design with performant engineering.',
        },
        { name: 'theme-color', content: '#0a0a0f' },
        { property: 'og:title', content: 'Kalkidan Mengistu — Full Stack Developer' },
        {
          property: 'og:description',
          content: 'Full Stack Developer building premium digital experiences.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@200..800&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'three', 'lenis', 'split-type'],
    },
  },
})
