<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10 relative">
    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          <span class="text-purple-500">#</span>{{ $t("skills.title") }}
        </h2>
        <div class="w-32 h-px bg-purple-500"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        
        <!-- Languages -->
        <div class="group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white group-hover:text-purple-400 transition-colors">{{ $t("skills.languages.title") }}</h3>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">PHP</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">HTML/CSS</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">JavaScript</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Databases -->
        <div class="group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white group-hover:text-purple-400 transition-colors">{{ $t("skills.databases.title") }}</h3>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">MySQL</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white group-hover:text-purple-400 transition-colors">{{ $t("skills.tools.title") }}</h3>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Linux</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Nginx</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Apache</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Cloudflare</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">VS Code</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Network -->
        <div class="group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white group-hover:text-purple-400 transition-colors">{{ $t("skills.network.title") }}</h3>
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Mikrotik</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Mail Server</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Hosting</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>