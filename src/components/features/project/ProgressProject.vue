<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
        <span class="text-purple-500">/</span>projects
      </h1>
      <p class="text-gray-400 text-sm">List of my projects</p>
    </div>

    <!-- Small Projects Section -->
    <div class="border border-purple-500 rounded-lg p-6">
      <h2 class="text-xl font-bold text-white mb-6">
        <span class="text-purple-500">#</span>small-projects
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <!-- Bot boilerplate -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Discord.js</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">TS</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">JS</span>
          </div>
          <h4 class="font-bold text-white mb-2">Bot boilerplate</h4>
          <p class="text-gray-400 text-sm mb-3">Starterplate discord bot with handlers and ready commands</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Figma &lt;~&gt;
          </button>
        </div>

        <!-- My blog -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Vue</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">CSS</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">TS</span>
          </div>
          <h4 class="font-bold text-white mb-2">My blog</h4>
          <p class="text-gray-400 text-sm mb-3">Something about my future blog where I'm planing to write some tips</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            GitHub &lt;~&gt;
          </button>
        </div>

        <!-- Chess pro -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">C++</span>
          </div>
          <h4 class="font-bold text-white mb-2">Chess pro</h4>
          <p class="text-gray-400 text-sm mb-3">Simple chess engine and chess tournaments</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Live &lt;~&gt;
          </button>
        </div>

        <!-- Crash protect website -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">HTML</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">CSS</span>
          </div>
          <h4 class="font-bold text-white mb-2">Crash protect website</h4>
          <p class="text-gray-400 text-sm mb-3">Figma template for website about Discord bot with anti-crash protection</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Figma &lt;~&gt;
          </button>
        </div>

        <!-- CSS expirements -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">HTML</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">CSS</span>
          </div>
          <h4 class="font-bold text-white mb-2">CSS expirements</h4>
          <p class="text-gray-400 text-sm mb-3">Collection of my different little projects on CSS</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Live &lt;~&gt;
          </button>
        </div>

        <!-- Web Dev nvim config -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Lua</span>
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Neovim</span>
          </div>
          <h4 class="font-bold text-white mb-2">Web Dev nvim config</h4>
          <p class="text-gray-400 text-sm mb-3">Config for neovim perfect for web developer</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            GitHub &lt;~&gt;
          </button>
        </div>

        <!-- Goku -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Figma</span>
          </div>
          <h4 class="font-bold text-white mb-2">Goku</h4>
          <p class="text-gray-400 text-sm mb-3">Figma is like shortener with auth and different urls in one link</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Live &lt;~&gt;
          </button>
        </div>

        <!-- School website -->
        <div class="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
          <div class="flex flex-wrap gap-1 mb-2">
            <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Figma</span>
          </div>
          <h4 class="font-bold text-white mb-2">School website</h4>
          <p class="text-gray-400 text-sm mb-3">Figma template design for my school</p>
          <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition">
            Figma &lt;~&gt;
          </button>
        </div>

      </div>
    </div>
  </section>
</template>