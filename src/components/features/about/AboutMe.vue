<template>
  <section class="bg-gray-900 text-gray-300 min-h-screen">
    <div class="px-6 md:px-20 py-10">
      
      <!-- Page Header -->
      <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
          <span class="text-purple-500">/</span>about-me
        </h1>
        <p class="text-gray-400 text-sm">{{ $t("about.who") }}</p>
      </div>

      <!-- Main About Section -->
      <div class="flex flex-col lg:flex-row items-start justify-between mb-16 gap-12">
        
        <!-- Text Content (Left Side) -->
        <div class="lg:w-1/2 space-y-6">
          <div class="space-y-4 text-gray-400 leading-relaxed">
            <p class="text-sm md:text-base">
              {{ $t("about.name") }}
            </p>
            
            <p class="text-sm md:text-base">
              {{ $t("about.desc3") }}
            </p>
            
            <p class="text-sm md:text-base">
              Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
        </div>

      <!-- Image Container (Right Side) -->
      <div class="lg:w-1/2 flex justify-center lg:justify-end">
        <div class="relative">
          <!-- Foto -->
          <img 
          src="/src/assets/about.jpg" 
          alt="About Me" 
          class="w-56 h-72 md:w-64 md:h-80 object-cover object-center rounded-lg shadow-xl"
          />

          <!-- Grid dekoratif -->
          <div class="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-purple-500"></div>
          <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-purple-500"></div>

          <!-- Border default -->
          <div class="absolute inset-0 border border-gray-700 rounded-lg pointer-events-none"></div>
        </div>
    </div>
      </div>

      <!-- Skills Section -->
      <section class="bg-gray-900 text-gray-300 px-6 md:px-0 py-0 relative">
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
            
            <!-- Languages Card -->
            <div class="flip-card h-64 cursor-pointer" @click="flipCard('languages')">
              <div class="flip-card-inner" :class="{ 'flipped': flippedCards.languages }">
                <!-- Front Side -->
                <div class="flip-card-front group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
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
                
                <!-- Back Side -->
                <div class="flip-card-back bg-gray-800 border border-purple-500 p-6 rounded-lg">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-purple-400">Code Examples</h3>
                  </div>
                  <div class="space-y-3 text-xs">
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-blue-400">// PHP</div>
                      <div class="text-gray-300">$result = mysqli_query($conn, $sql);</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-green-400">/* CSS */</div>
                      <div class="text-gray-300">.card { transition: all 0.3s; }</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-yellow-400">// JavaScript</div>
                      <div class="text-gray-300">const data = await fetch(url);</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Databases Card -->
            <div class="flip-card h-64 cursor-pointer" @click="flipCard('databases')">
              <div class="flip-card-inner" :class="{ 'flipped': flippedCards.databases }">
                <div class="flip-card-front group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
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
                
                <div class="flip-card-back bg-gray-800 border border-purple-500 p-6 rounded-lg">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-purple-400">SQL Examples</h3>
                  </div>
                  <div class="space-y-3 text-xs">
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-green-400">-- SELECT Query</div>
                      <div class="text-gray-300">SELECT * FROM users WHERE active = 1;</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-green-400">-- JOIN Query</div>
                      <div class="text-gray-300">SELECT u.name, p.title FROM users u LEFT JOIN posts p ON u.id = p.user_id;</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-green-400">-- INSERT Query</div>
                      <div class="text-gray-300">INSERT INTO users (name, email) VALUES ('John', 'john@example.com');</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools Card -->
            <div class="flip-card h-64 cursor-pointer" @click="flipCard('tools')">
              <div class="flip-card-inner" :class="{ 'flipped': flippedCards.tools }">
                <div class="flip-card-front group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
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
                
                <div class="flip-card-back bg-gray-800 border border-purple-500 p-6 rounded-lg">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-purple-400">Command Examples</h3>
                  </div>
                  <div class="space-y-3 text-xs">
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-orange-400"># Linux Commands</div>
                      <div class="text-gray-300">sudo systemctl restart nginx</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-orange-400"># Nginx Config</div>
                      <div class="text-gray-300">location / { try_files $uri $uri/ =404; }</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-orange-400"># Git Commands</div>
                      <div class="text-gray-300">git commit -m "Update feature"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Network Card -->
            <div class="flip-card h-64 cursor-pointer" @click="flipCard('network')">
              <div class="flip-card-inner" :class="{ 'flipped': flippedCards.network }">
                <div class="flip-card-front group bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white group-hover:text-purple-400 transition-colors">Network</h3>
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
                
                <div class="flip-card-back bg-gray-800 border border-purple-500 p-6 rounded-lg">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-purple-400">Network Scripts</h3>
                  </div>
                  <div class="space-y-3 text-xs">
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-purple-400"># Mikrotik Script</div>
                      <div class="text-gray-300">/ip firewall nat add chain=srcnat action=masquerade</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-purple-400"># Mail Server</div>
                      <div class="text-gray-300">postconf -e 'smtpd_banner = $myhostname ESMTP'</div>
                    </div>
                    <div class="bg-gray-900 p-2 rounded border border-gray-700">
                      <div class="text-purple-400"># DNS Check</div>
                      <div class="text-gray-300">nslookup example.com 8.8.8.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- My Fun Facts Section -->
      <div class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">
          <span class="text-purple-500">#</span>{{ $t("about.funfact") }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc1") }}</p>
          </div>

          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc2") }}</p>
          </div>

          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc3") }}</p>
          </div>

          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc4") }}</p>
          </div>

          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc5") }}</p>
          </div>

          <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition">
            <p class="text-gray-300 text-sm">{{ $t("about.funfactdesc6") }}</p>
          </div>


        </div>
      </div>

      <!-- Footer Info -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <!-- Left Side - Contact Info -->
          <div class="mb-6 md:mb-0">
            <div class="flex items-center mb-2">
              <svg class="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
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

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

onMounted(() => {
  window.scrollTo(0, 0)
})

const flippedCards = ref({
  languages: false,
  databases: false,
  tools: false,
  network: false
})

const flipCard = (cardName) => {
  flippedCards.value[cardName] = !flippedCards.value[cardName]
}
</script>

<style scoped>
.transition {
  transition: all 0.2s ease-in-out;
}

.hover\:border-purple-500:hover {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 1px #8b5cf6;
}

@media (max-width: 768px) {
  .lg\:grid-cols-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .lg\:grid-cols-5 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* Flip card styles */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card:hover .flip-card-front {
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.flip-card-back .bg-gray-900 {
  font-family: 'Courier New', monospace;
  font-size: 10px;
  line-height: 1.2;
}
</style>
