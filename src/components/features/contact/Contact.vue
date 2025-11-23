<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10 relative">
    <!-- Decorative Elements -->
    <div class="absolute top-20 right-20 opacity-20 pointer-events-none">
      <div class="grid grid-cols-4 gap-2">
        <div v-for="dot in 16" :key="dot" class="w-1 h-1 bg-purple-500 rounded-full"></div>
      </div>
    </div>

    <div class="relative z-10">
      <!-- Header -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          <span class="text-purple-500">#</span>{{ $t("contact.title") }}
        </h2>
        <div class="w-32 h-px bg-purple-500"></div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-8 max-w-6xl">
        
        <!-- Contact Info Card -->
        <div class="lg:w-2/5">
          <div class="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 transition-all duration-300 h-fit">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-white text-lg">{{ $t("contact.messageMe") }}</h3>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-center text-gray-400">
                <svg class="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span class="break-all">shofiyulqalby@gmail.com</span>
              </div>
              
              <div class="flex items-center text-gray-400">
                <svg class="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
                <span>@shfylqlby</span>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-6 pt-4 border-t border-gray-700">
              <p class="text-sm text-gray-500 mb-3">{{ $t("contact.connect") }}</p>
              <div class="flex gap-3">
                <a href="https://github.com/shfylqlby" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-gray-700 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors" aria-label="GitHub">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/shfylqlby" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-gray-700 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/shfylqlby" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-gray-700 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:w-3/5">
          <form @submit.prevent="sendEmail" class="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 transition-all duration-300">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="relative">
                <input 
                  v-model="form.name"
                  type="text" 
                  :placeholder="$t('contact.name')"
                  required
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>
              <div class="relative">
                <input 
                  v-model="form.email"
                  type="email" 
                  :placeholder="$t('contact.email')" 
                  required
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>
            </div>
            
            <div class="mb-4">
              <textarea 
                v-model="form.message"
                :placeholder="$t('contact.message')" 
                required
                rows="6"
                class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Success/Error Messages -->
            <div v-if="status.message" class="mb-4 p-3 rounded-lg text-sm" :class="status.type === 'success' ? 'bg-green-800 text-green-200 border border-green-600' : 'bg-red-800 text-red-200 border border-red-600'">
              {{ status.message }}
            </div>

            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <svg v-if="isLoading" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isLoading ? 'Sending...' : $t("contact.send") }}</span>
            </button>
          </form>
        </div>
        
      </div>

      <!-- Footer Info -->
      <div class="border-t border-gray-800 pt-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <!-- Left Side - Contact Info -->
          <div>
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
              <a href="https://github.com/shfylqlby" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-purple-500 transition" aria-label="GitHub">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/shfylqlby" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-purple-500 transition" aria-label="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/shfylqlby" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-purple-500 transition" aria-label="Instagram">
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
import { ref, reactive } from 'vue'

// Form data
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Loading and status
const isLoading = ref(false)
const status = reactive({
  message: '',
  type: ''
})

// Send email function using Formspree
const sendEmail = async () => {
  isLoading.value = true
  status.message = ''
  
  try {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email) 
    formData.append('message', form.message)
    formData.append('_replyto', form.email)
    formData.append('_subject', `New message from ${form.name} - Portfolio Contact`)
    
    // Using Formspree
    const response = await fetch('https://formspree.io/f/xovkqpjl', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      status.message = 'Message sent successfully! I\'ll get back to you soon.'
      status.type = 'success'
      
      // Reset form
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      throw new Error('Failed to send message')
    }
    
  } catch (error) {
    console.error('Error sending email:', error)
    status.message = 'Failed to send message. Please try again or contact me directly.'
    status.type = 'error'
  }
  
  isLoading.value = false
  
  // Clear status message after 5 seconds
  setTimeout(() => {
    status.message = ''
  }, 5000)
}
</script>