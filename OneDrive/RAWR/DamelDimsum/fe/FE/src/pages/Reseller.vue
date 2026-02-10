<template>
  <div class="reseller-page">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img 
              src="/src/assets/images/LogoDamelDimsum.png" 
              alt="Damel Dimsum Logo" 
              class="h-16 w-16"
            />
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium">
              Beranda
            </router-link>
            <router-link to="/tentang-kami" class="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium">
              Tentang Kami
            </router-link>
            <router-link to="/produk" class="text-gray-700 hover:text-[#D32F2F] transition-colors font-medium">
              Produk
            </router-link>
            <router-link to="/program" class="text-[#FF9800] hover:text-[#FB8C00] transition-colors font-semibold">
              Program
            </router-link>
          </div>
          
          <!-- Right Side Actions -->
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-700 hover:text-[#D32F2F] transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button class="bg-gradient-to-r from-[#EB4E28] to-[#FB8C00] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all">
              Daftar Reseller
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-[#5a0f0f] via-[#8b1b1b] to-[#771816] overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

             <!-- Floating orbs -->
      <div class="absolute w-[380px] h-[380px] rounded-full blur-[60px] opacity-35 z-[1] -top-[10%] -left-[8%] bg-[#E53935] animate-orb-float"></div>
      <div class="absolute w-[260px] h-[260px] rounded-full blur-[60px] opacity-25 z-[1] -bottom-[5%] right-[10%] bg-[#FB8C00] animate-orb-float animation-delay-3"></div>
      <div class="absolute w-[180px] h-[180px] rounded-full blur-[60px] opacity-20 z-[1] top-[15%] right-[22%] bg-[#FFB74D] animate-orb-float animation-delay-5"></div>
          
          <!-- Left Content -->
          <div class="text-white">
            <p class="text-lg font-medium mb-4 tracking-wide">Reseller Dimsum</p>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Jadi Reseller<br/>
              <span class="text-[#FFD54F]">Dàmel Dimsum</span>
            </h1>
            <p class="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              Ingin memulai usaha? Bergabung sebagai reseller Dàmel Dimsum dan kembangkan peluang bisnis bersama kami. Hubungi admin untuk informasi lebih lanjut!
            </p>
            
            <!-- CTA Button -->
            <button 
              @click="contactAdmin"
             class="inline-flex items-center gap-3 bg-gradient-to-r from-[#E53935] to-[#FB8C00] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#B71C1C] hover:to-[#F4511E] hover:shadow-xl transition-all transform hover:-translate-y-1">

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi Kami
            </button>
          </div>
          
          <!-- Right Content - Product Images -->
          <div class="relative">
            <!-- Main Images Container -->
            <div class="relative">
              <!-- Background circle for branding -->
              <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
              
              <!-- Dimsum Images Stack -->
              <div class="relative z-10 flex items-center justify-center">
                <img 
                  src="/src/assets/images/DimsumPilihan.png" 
                  alt="Dimsum Products" 
                  class="w-full max-w-lg drop-shadow-2xl"
                />
              </div>
              
              <!-- Floating Contact Card -->
<div class="absolute bottom-4 left-4 bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex items-center gap-4 transform hover:scale-105 transition-all">                
    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src="/src/assets/images/LogoDamelDimsum.png" 
                    alt="Logo" 
                    class="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                <p class="font-bold text-white drop-shadow">Dàmel Dimsum</p>
<p class="text-sm text-white/90 drop-shadow">085747885881</p>

                </div>
                <button class="w-10 h-10 bg-gradient-to-r from-[#EB4E28] to-[#FB8C00] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Package Section -->
    <section class="py-20 bg-[#FAF7F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left - Product Image -->
          <div class="relative">
            <div class="relative">
             
              <!-- Product Image -->
              <img 
                src="/src/assets/images/dimsum2 2.png" 
                alt="Paket Dimsum" 
                class="w-full rounded-3xl shadow-2xl"
              />
              
              <div class="absolute -bottom- -right-6 z-10">
                <div class="bg-gradient-to-br from-[#] to-[#] text- px-6 py-3 rounded-full font-bold shadow-x transform rotate-12">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right - Package Info -->
          <div>
            <p class="text-[#000000] font-semibold text-lg mb-3">Saatnya Cuan Bareng Dàmel!</p>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Paket Dimsum Mulai Dari
            </h2>
            
            <div class="mb-8">
              <p class="text-5xl md:text-6xl font-bold">
                <span class="text-[#FB8C00]">Rp 210.000</span>
                <span class="text-gray-600 text-3xl">/ 100 pcs</span>
              </p>
            </div>
            
            <p class="text-lg text-gray-700 mb-10 leading-relaxed">
Paket dimsum lengkap dengan saus gratis. Cocok untuk kebutuhan usaha anda. Yuk bergabung menjadi dimsumprenuer bersama Dàmel Dimsum!            </p>
            
            <!-- CTA Button -->
            <button 
              @click="contactReseller"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-[#EB4E28] to-[#FB8C00] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Bergabung Menjadi Reseller
            </button>
          </div>
          
        </div>
      </div>
    </section>

    

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-lg font-medium">Copyright © 2026 Dàmel Dimsum</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Methods
const contactAdmin = () => {
  // WhatsApp number from the design
  const phoneNumber = '6285747885881' // Format internasional
  const message = encodeURIComponent('Halo, saya tertarik untuk menjadi reseller Dàmel Dimsum. Mohon informasi lebih lanjut.')
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}

const contactReseller = () => {
  const phoneNumber = '6285747885881'
  const message = encodeURIComponent('Halo, saya ingin pesan paket reseller Dàmel Dimsum 100pcs. Mohon info lebih lanjut.')
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Ensure images don't break layout */
img {
  max-width: 100%;
  height: auto;
}
</style>