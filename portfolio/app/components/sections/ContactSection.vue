<template>
  <div class="bg-[#111] min-h-screen py-16 relative overflow-hidden font-sans text-white">
    <div class="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 space-y-16">
      
      <!-- Top Section: Text & Form -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Left Side: Text & Rocket Card -->
        <div class="space-y-6">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <span class="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
              GET IN TOUCH
            </div>
            <h2 class="text-3xl md:text-4xl font-bold leading-tight text-white">
              Let's Build<br />
              Something <span class="text-[#D4AF37]">Amazing</span>
            </h2>
            <div class="w-10 h-1 bg-[#D4AF37] mt-3 mb-4 rounded-full"></div>
            <p class="text-gray-400 text-base leading-relaxed max-w-md">
              I'm always open to discussing new opportunities, collaborations, or interesting projects.<br/><br/>
              Feel free to reach out!
            </p>
          </div>
          
          <!-- Rocket Card -->
          <div class="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 flex items-start gap-4 hover:border-[#D4AF37]/40 transition-colors max-w-full inline-flex">
            <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-white/5 shrink-0">
              <svg class="w-4 h-4 text-[#D4AF37] transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <div>
              <p class="text-gray-300 font-medium text-sm">I usually respond within <span class="text-[#D4AF37]">24 hours</span></p>
              <p class="text-gray-500 text-xs mt-0.5">Let's connect and turn ideas into reality.</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
          <!-- Subtle top glow -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 class="text-lg font-semibold mb-4 text-white">Send Me a Message</h3>
          <form class="space-y-3" @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="Your Name" class="w-full bg-[#111] border border-white/5 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" />
              <input type="email" placeholder="Your Email" class="w-full bg-[#111] border border-white/5 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" />
            </div>
            <input type="text" placeholder="Subject" class="w-full bg-[#111] border border-white/5 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" />
            <textarea placeholder="Your Message" rows="4" class="w-full bg-[#111] border border-white/5 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all resize-none"></textarea>
            <button type="submit" class="w-full mt-1 bg-gradient-to-r from-[#e5c158] to-[#b89430] hover:from-[#f0cc63] hover:to-[#c29d38] text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all text-sm">
              <svg class="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info Cards Grid -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
          <span class="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
          CONTACT INFORMATION
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1: Email -->
          <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-4 shrink-0 bg-white/5 text-[#D4AF37]">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h4 class="text-white font-semibold text-base mb-1">Email</h4>
            <p class="text-gray-400 text-xs mb-1">kalkidan@example.com</p>
            <p class="text-gray-500 text-[10px]">Send me an email anytime!</p>
          </div>

          <!-- Card 2: Phone -->
          <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-4 shrink-0 bg-white/5 text-[#D4AF37]">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h4 class="text-white font-semibold text-base mb-1">Phone</h4>
            <p class="text-gray-400 text-xs mb-1">+251 9XX XXX XXX</p>
            <p class="text-gray-500 text-[10px]">Mon - Fri, 9AM - 6PM</p>
          </div>

          <!-- Card 3: Location -->
          <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-4 shrink-0 bg-white/5 text-[#D4AF37]">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h4 class="text-white font-semibold text-base mb-1">Location</h4>
            <p class="text-gray-400 text-xs mb-1">Addis Ababa, Ethiopia</p>
            <p class="text-gray-300 text-[10px] flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>Available for work</p>
          </div>

          <!-- Card 4: Availability -->
          <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-4 shrink-0 bg-white/5 text-[#D4AF37]">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h4 class="text-white font-semibold text-base mb-1">Availability</h4>
            <p class="text-gray-400 text-xs mb-1">Open to Opportunities</p>
            <p class="text-gray-500 text-[10px]">Full-time & Freelance</p>
          </div>
        </div>
      </div>

      <!-- Third Section: Connect & Availability Detail -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Left Side: Connect on platforms -->
        <div class="space-y-6">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
              <span class="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
              LET'S CONNECT
            </div>
            <h2 class="text-3xl md:text-4xl font-bold leading-tight text-white">
              Find me on<br />
              other <span class="text-[#D4AF37]">platforms</span>
            </h2>
            <div class="w-10 h-1 bg-[#D4AF37] mt-3 mb-4 rounded-full"></div>
            <p class="text-gray-400 text-base leading-relaxed max-w-sm">
              Feel free to connect with me on these platforms to see my work, experience, and updates.
            </p>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <a href="https://github.com/kalkidan-hub" target="_blank" class="flex flex-col items-center gap-1.5 group">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white group-hover:border-[#D4AF37]/50 group-hover:bg-[#222] transition-all relative overflow-hidden">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <span class="text-[10px] text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/kalkidan-mengistu/" target="_blank" class="flex flex-col items-center gap-1.5 group">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white group-hover:border-[#D4AF37]/50 group-hover:bg-[#222] transition-all relative overflow-hidden">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <span class="text-[10px] text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            
            <a href="https://x.com/Kalkidan6263" target="_blank" class="flex flex-col items-center gap-1.5 group">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white group-hover:border-[#D4AF37]/50 group-hover:bg-[#222] transition-all relative overflow-hidden">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span class="text-[10px] text-gray-400 group-hover:text-white transition-colors">Twitter</span>
            </a>
            
            <a href="#" target="_blank" class="flex flex-col items-center gap-1.5 group">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white group-hover:border-[#D4AF37]/50 group-hover:bg-[#222] transition-all relative overflow-hidden">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="1.5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke-width="1.5"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="1.5"></line></svg>
              </div>
              <span class="text-[10px] text-gray-400 group-hover:text-white transition-colors">Instagram</span>
            </a>
            
            <a href="#" target="_blank" class="flex flex-col items-center gap-1.5 group">
              <div class="w-12 h-12 rounded-xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white group-hover:border-[#D4AF37]/50 group-hover:bg-[#222] transition-all relative overflow-hidden">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.497 2.336-1.497 3.832 0 1.498.516 2.85 1.497 3.832l4.35 4.381c.981.982 2.335 1.498 3.832 1.498 1.497 0 2.85-.516 3.831-1.498l2.611-2.609c.515-.515.497-1.366-.038-1.901-.536-.536-1.387-.552-1.902-.038zm-5.067-10.748c-.466-.466-1.111-.661-1.823-.661-.713 0-1.357.195-1.824.661l-1.361 1.361c-.516.516-.498 1.366.037 1.902.535.535 1.387.552 1.902.038l1.36-1.36c.467-.467.702-1.151.702-1.863 0-.713-.235-1.357-.702-1.824l1.709-1.754zm.824 1.859l-1.639 1.639c-.516.516-.498 1.366.037 1.902.535.535 1.387.552 1.902.038l1.638-1.639c.515-.515.497-1.366-.038-1.901-.536-.536-1.387-.552-1.902-.038z"/></svg>
              </div>
              <span class="text-[10px] text-gray-400 group-hover:text-white transition-colors">LeetCode</span>
            </a>
          </div>
        </div>

        <!-- Right Side: Availability Detail -->
        <div class="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold flex items-center gap-2 text-white">
              <svg class="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Availability
            </h3>
            <!-- grid dots decoration top right -->
            <div class="grid grid-cols-4 gap-1 opacity-20">
              <div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div>
              <div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div>
              <div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div><div class="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-medium mb-4">
            Available for new opportunities
          </div>

          <p class="text-gray-400 text-xs mb-4 leading-relaxed max-w-sm">
            I'm currently open to full-time roles, freelance projects, and exciting collaborations.
          </p>

          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-xs text-gray-300">
              <div class="w-4 h-4 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              Full-time Positions
            </li>
            <li class="flex items-center gap-2 text-xs text-gray-300">
              <div class="w-4 h-4 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              Freelance Projects
            </li>
            <li class="flex items-center gap-2 text-xs text-gray-300">
              <div class="w-4 h-4 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              Open Source Collaboration
            </li>
            <li class="flex items-center gap-2 text-xs text-gray-300">
              <div class="w-4 h-4 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              Internship Opportunities
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom CTA Banner -->
      <div class="relative w-full rounded-2xl border border-white/10 bg-[#111] overflow-hidden group">
        <!-- Map Background placeholder -->
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-[#111] to-[#111] pointer-events-none"></div>
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>
        
        <div class="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
             <div class="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center shrink-0 bg-[#1a1a1a] text-[#D4AF37]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             <div>
                <p class="text-white text-base font-medium">Have a project in mind?</p>
                <h3 class="text-2xl md:text-3xl font-bold mt-0.5 text-white">Let's work <span class="text-[#D4AF37]">together!</span></h3>
                <p class="text-gray-400 text-xs mt-1.5 max-w-sm">I'm excited to hear about your ideas and help bring them to life.</p>
             </div>
          </div>
          
          <div class="flex flex-col md:flex-row items-center gap-5 md:gap-8 w-full md:w-auto shrink-0">
             <button class="w-full md:w-auto px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#D4AF37]/10 transition-colors">
                Start a Conversation
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </button>
             
             <div class="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6">
                <div class="flex items-center gap-2.5">
                   <div class="text-[#D4AF37]">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <div>
                      <p class="text-white text-xs font-medium">Email</p>
                      <p class="text-gray-400 text-[10px]">kalkidan@example.com</p>
                   </div>
                </div>
                <div class="flex items-center gap-2.5">
                   <div class="text-[#D4AF37]">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                   </div>
                   <div>
                      <p class="text-white text-xs font-medium">Location</p>
                      <p class="text-gray-400 text-[10px]">Addis Ababa, Ethiopia</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted')
}
</script>
