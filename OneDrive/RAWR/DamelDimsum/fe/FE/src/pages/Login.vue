<template>
  <div class="bg-[#FAF7F0] min-h-screen flex items-center justify-center px-5 py-8">
    <div class="w-full max-w-6xl bg-white rounded-[24px] overflow-hidden shadow-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        
        <!-- Left Side - Login Form -->
        <div class="p-8 md:p-12 lg:p-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#FB8C00] to-[#FF9800] bg-clip-text text-transparent">
            LOGIN
          </h1>

          <!-- Error Message -->
          <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-red-700">{{ errorMessage }}</p>
            </div>
          </div>
          
          <form @submit.prevent="handleLogin">
            <!-- Email / Username Input -->
            <div class="mb-6">
              <label class="block text-[#333] text-sm font-semibold mb-3">
                Email / Username
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  v-model="formData.email"
                  type="text" 
                  placeholder="Masukan email atau username"
                  class="w-full pl-12 pr-4 py-4 border-2 border-[#FFB74D] rounded-xl focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20 transition-all"
                  :disabled="isLoading"
                  required
                />
              </div>
            </div>
            
            <!-- Password Input -->
            <div class="mb-6">
              <label class="block text-[#333] text-sm font-semibold mb-3">
                Password
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password"
                  class="w-full pl-12 pr-12 py-4 border-2 border-[#FFB74D] rounded-xl focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20 transition-all"
                  :disabled="isLoading"
                  required
                />
                <button 
                  type="button"
                  @click="togglePassword"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  :disabled="isLoading"
                >
                  <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between mb-8">
              <label class="flex items-center cursor-pointer group">
                <input 
                  v-model="formData.rememberMe"
                  type="checkbox" 
                  class="w-5 h-5 text-[#FF9800] border-gray-300 rounded focus:ring-[#FF9800] cursor-pointer"
                  :disabled="isLoading"
                />
                <span class="ml-3 text-[#333] text-sm font-medium group-hover:text-[#FF9800] transition-colors">
                  Remember me
                </span>
              </label>
              <a 
                href="#" 
                @click.prevent="handleForgotPassword"
                class="text-[#333] text-sm font-medium hover:text-[#FF9800] transition-colors"
                :class="{ 'pointer-events-none opacity-50': isLoading }"
              >
                Forgot Password?
              </a>
            </div>
            
            <!-- Login Button -->
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-[#EB4E28] to-[#FB8C00] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isLoading ? 'Loading...' : 'Login' }}</span>
            </button>
          </form>
        </div>
        
        <!-- Right Side - Image with Logo -->
        <div class="hidden lg:block relative overflow-hidden">
          <!-- Dimsum Background Image -->
          <div class="absolute inset-0">
            <img
              src="/src/assets/images/Rectangle 1.png"
              alt="Dimsum Background"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#C]/85 via-[#]/75 to-[#]/85"></div>
          </div>
          
          <!-- Decorative Pattern (fallback if image not loaded) -->
          <div v-if="!imageLoaded" class="absolute inset-0 opacity-10">
            <div class="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>
          
          <!-- Logo Container -->
          <div class="relative z-10 h-full flex items-center justify-center p-12">
            <div class="bg-white rounded-full p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/src/assets/images/LogoDamelDimsum.png"
                alt="Damel Dimsum Logo"
                class="w-72 h-72 object-contain"
                @error="handleLogoError"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// ─── Import Images ───────────────────────────────────────────────────
// OPSI 1: Jika Anda sudah punya file lokal
// import logoImageFile from '@/assets/images/damel-dimsum-logo.svg'
// import dimsumBgImage from '@/assets/images/dimsum-background.jpg'

// OPSI 2: Menggunakan URL dari public folder
// const logoImage = '/images/damel-dimsum-logo.svg'
// const backgroundImage = '/images/dimsum-background.jpg'

// OPSI 3: Fallback dengan placeholder (untuk development)
const logoImageFile = null // Ganti dengan import Anda
const dimsumBgImage = null // Ganti dengan import Anda
// ─────────────────────────────────────────────────────────────────────

const router = useRouter()

// ─── Image State ─────────────────────────────────────────────────────
const imageLoaded = ref(true)
const logoLoaded = ref(true)

// Computed untuk image sources dengan fallback
const logoImage = computed(() => {
  if (logoImageFile) return logoImageFile
  // Fallback: gunakan SVG logo yang sudah dibuat
  return '/damel-dimsum-logo.svg'
})

const backgroundImage = computed(() => {
  if (dimsumBgImage) return dimsumBgImage
  // Fallback: gunakan data URL atau placeholder
  // Anda bisa ganti dengan URL gambar dimsum dari internet atau lokal
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0QzMkYyRiIvPjwvc3ZnPg=='
})

// ─── Form State ──────────────────────────────────────────────────────
const formData = ref({
  email: '',
  password: '',
  rememberMe: false
})

const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

// ─── Methods ─────────────────────────────────────────────────────────
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleForgotPassword = () => {
  alert('Fitur reset password akan segera hadir!')
}

const handleImageError = () => {
  imageLoaded.value = false
  console.warn('Background image failed to load, using gradient fallback')
}

const handleLogoError = () => {
  logoLoaded.value = false
  console.warn('Logo image failed to load')
}

const handleLogin = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    
    // Validasi input
    if (!formData.value.email || !formData.value.password) {
      errorMessage.value = 'Email dan password harus diisi'
      return
    }
    
    // TODO: Replace with your actual API call
    // Simulasi delay API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulasi login berhasil (hapus ini saat sudah ada backend)
    const mockUser = {
      id: 1,
      name: 'Admin',
      email: formData.value.email,
      role: 'admin'
    }
    
    localStorage.setItem('token', 'mock-jwt-token-' + Date.now())
    localStorage.setItem('user', JSON.stringify(mockUser))
    
    if (formData.value.rememberMe) {
      localStorage.setItem('rememberMe', 'true')
    }
    
    // Success - redirect ke home atau dashboard
    alert(`Login berhasil! Selamat datang ${mockUser.name}`)
    router.push('/')
    
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = error.message || 'Email atau password salah. Silakan coba lagi.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #FF9800;
  border-color: #FF9800;
}

/* Loading spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>