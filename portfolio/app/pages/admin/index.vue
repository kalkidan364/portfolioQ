<template>
  <div class="min-h-screen bg-black pt-32 pb-20">
    <div class="container mx-auto px-6 md:px-12">
      
      <div v-if="!isAuthenticated" class="max-w-md mx-auto mt-20">
        <div class="glass-panel p-8 rounded-3xl text-center">
          <h1 class="text-3xl font-bold mb-6">Admin Login</h1>
          <form @submit.prevent="login" class="space-y-6">
            <input type="password" required class="w-full bg-[#ffffff]/5 border border-white/10 rounded-xl px-4 py-3 text-[#ffffff] text-center focus:outline-none focus:border-accent" placeholder="Enter Master Password">
            <button type="submit" class="w-full py-3 bg-[#ffffff] text-black font-bold rounded-xl hover:bg-[#ffffff]/90 transition-colors">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>

      <div v-else class="space-y-12">
        <header class="flex justify-between items-center border-b border-white/10 pb-8">
          <div>
            <h1 class="text-4xl font-bold">Command Center</h1>
            <p class="text-[#ffffff]/50 mt-2">Manage your portfolio content</p>
          </div>
          <button @click="isAuthenticated = false" class="px-4 py-2 text-sm bg-[#ffffff]/10 rounded-lg hover:bg-[#ffffff]/20 transition-colors">
            Logout
          </button>
        </header>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="glass p-6 rounded-2xl border border-white/5">
            <div class="text-[#ffffff]/50 text-sm mb-2">Total Views</div>
            <div class="text-3xl font-mono font-bold">12,482</div>
            <div class="text-green-400 text-xs mt-2">+14% this week</div>
          </div>
          <div class="glass p-6 rounded-2xl border border-white/5">
            <div class="text-[#ffffff]/50 text-sm mb-2">Projects</div>
            <div class="text-3xl font-mono font-bold">42</div>
          </div>
          <div class="glass p-6 rounded-2xl border border-white/5">
            <div class="text-[#ffffff]/50 text-sm mb-2">Contact Requests</div>
            <div class="text-3xl font-mono font-bold">8</div>
            <div class="text-accent text-xs mt-2">3 unread</div>
          </div>
          <div class="glass p-6 rounded-2xl border border-white/5">
            <div class="text-[#ffffff]/50 text-sm mb-2">Lighthouse Score</div>
            <div class="text-3xl font-mono font-bold text-green-400">100</div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Projects Manager -->
          <div class="glass-panel p-8 rounded-3xl border border-white/5">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Projects</h2>
              <button class="px-3 py-1 bg-accent text-[#ffffff] text-xs font-bold rounded-full">+ Add New</button>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-4 bg-[#ffffff]/5 rounded-xl" v-for="i in 3" :key="i">
                <div class="font-medium">Project Name {{ i }}</div>
                <div class="space-x-3 text-sm">
                  <button class="text-[#ffffff]/50 hover:text-[#ffffff]">Edit</button>
                  <button class="text-red-400 hover:text-red-300">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Messages -->
          <div class="glass-panel p-8 rounded-3xl border border-white/5">
            <h2 class="text-2xl font-bold mb-6">Recent Messages</h2>
            <div class="space-y-4">
              <div class="p-4 bg-[#ffffff]/5 rounded-xl" v-for="i in 3" :key="i">
                <div class="flex justify-between items-start mb-2">
                  <div class="font-medium">Client {{ i }} <span class="text-[#ffffff]/40 text-xs ml-2">2h ago</span></div>
                  <span class="w-2 h-2 rounded-full bg-accent"></span>
                </div>
                <p class="text-sm text-[#ffffff]/60 truncate">Hi Kalkidan, we are looking for a full stack engineer...</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAuthenticated = ref(false)

const login = () => {
  isAuthenticated.value = true
}

definePageMeta({
  layout: 'default' // Using the same glass layout, or we could create a 'blank' layout for the admin
})
</script>
