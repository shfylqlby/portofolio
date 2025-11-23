<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10 min-h-screen">
    <!-- Page Header -->
    <div class="mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
        <span class="text-purple-500">/</span>projects
      </h1>
      <p class="text-gray-400 max-w-2xl">
        {{ t("project.title2") }}
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      
      <!-- QCNet Tools -->
      <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 group">
        <div class="h-48 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
          <img 
            src="/src/assets/tools.png" 
            alt="QCNet Tools" 
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 right-4">
            <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition">
              QCNet Tools
            </h3>
            <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mb-4">
            {{ t("project.project") }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs">HTML</span>
            <span class="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">JS</span>
            <span class="bg-orange-800 text-orange-200 px-2 py-1 rounded text-xs">CSS</span>
          </div>
          
          <div class="flex gap-3">
            <router-link to="/project/qcnet-tools" class="flex-1">
              <button class="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition font-medium">
                {{ t("project.detail") }}
              </button>
            </router-link>
            <a 
              href="https://tools.shofiyulqalby.dev" 
              target="_blank" 
              rel="noopener" 
              class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Mikrotik Scripts -->
      <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 group">
        <div class="h-48 bg-gradient-to-br from-red-600 to-orange-600 relative overflow-hidden">
          <img 
            src="/src/assets/mikrotik-sc.png" 
            alt="Mikrotik Scripts" 
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 right-4">
            <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              On Progress
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition">
              Mikrotik Scripts
            </h3>
            <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mb-4">
            {{ t("project.project1") }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">RouterOS Script</span>
            <span class="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs">Network Automation</span>
          </div>
          
          <div class="flex gap-3">
            <router-link to="/project/mikrotik-scripts" class="flex-1">
              <button class="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition font-medium">
                {{ t("project.detail") }}
              </button>
            </router-link>
            <a 
              href="https://github.com/shfylqlby" 
              target="_blank" 
              rel="noopener" 
              class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Personal Portfolio -->
      <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 group">
        <div class="h-48 bg-gradient-to-br from-purple-600 to-purple-600 relative overflow-hidden">
          <img 
            src="/src/assets/porto.png" 
            alt="QCNet Tools" 
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 right-4">
            <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition">
              Personal Portfolio
            </h3>
            <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mb-4">
            {{ t("project.project2") }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">Vue.js</span>
            <span class="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs">Tailwind CSS</span>
            <span class="bg-yellow-800 text-yellow-200 px-2 py-1 rounded text-xs">JavaScript</span>
          </div>
          
          <div class="flex gap-3">
            <router-link to="/project/portfolio" class="flex-1">
              <button class="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition font-medium">
                {{ t("project.detail") }}
              </button>
            </router-link>
            <a 
              href="https://github.com/shfylqlby" 
              target="_blank" 
              rel="noopener" 
              class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Coming Soon Project -->
      <div class="bg-gray-800 border border-gray-700 border-dashed rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 group opacity-60">
        <div class="h-48 bg-gradient-to-br from-gray-600 to-gray-700 relative overflow-hidden flex items-center justify-center">
          <div class="text-center">
            <svg class="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <p class="text-gray-400 font-medium">More Projects</p>
            <p class="text-gray-500 text-sm">Coming Soon</p>
          </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-lg font-bold text-gray-400 mb-2"> {{ t("project.nextproject") }} </h3>
          <p class="text-gray-500 text-sm mb-4">
            {{ t("project.project3") }}
          </p>
          <button disabled class="w-full bg-gray-700 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
            {{ t("project.coomingsoon") }}
          </button>
        </div>
      </div>

    </div>

    <!-- Call to Action -->
    <div class="mt-16 text-center bg-gray-800 border border-gray-700 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-white mb-4">
        {{ t("project.call") }}
      </h2>
      <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
        {{ t("project.call1") }}
      </p>
      <router-link to="/contact">
        <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition">
          {{ t("project.call2") }}
        </button>
      </router-link>

      
    </div>
    <div class="mt-12"></div>
          <!-- Footer Info -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <!-- Left Side - Contact Info -->
          <div class="mb-6 md:mb-0">
            <div class="flex items-center mb-2">
              <svg class="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 2a5 5 0 015 5v1a5 5 0 11-10 0V7a5 5 0 015-5zm7 18a1 1 0 01-1 1H6a1 1 0 01-1-1v-.5a6.5 6.5 0 0113 0V20z"/>
              </svg>
              <span class="text-white font-medium">Qalby</span>
            </div>
            <p class="text-gray-400 text-sm">shofiyulqalby@gmail.com</p>
            <p class="text-gray-400 text-sm">Network Engineer and Web Dev Enthusiast</p>
          </div>

          <!-- Right Side - Media Links -->
          <div>
            <h4 class="text-white font-medium mb-3">Media</h4>
            <div class="flex gap-4">
              <a href="https://github.com/shfylqlby" target="_blank" rel="noopener" 
                 class="text-gray-400 hover:text-purple-500 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/shfylqlby" target="_blank" rel="noopener" 
                 class="text-gray-400 hover:text-purple-500 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/shfylqlby" target="_blank" rel="noopener" 
                 class="text-gray-400 hover:text-purple-500 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
  </section>
</template>



<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Utility class for text truncation */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>