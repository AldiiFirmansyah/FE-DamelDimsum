<template>
  <div class="bg-[#FFF5F0] min-h-screen overflow-x-hidden">

    <!-- Top Bar "Kembali" -->
    <div class="bg-gradient-to-r from-[#8B0000] via-[#C62828] to-[#8B0000] px-5 md:px-10 lg:px-20 py-4">
      <router-link to="/" class="inline-flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Kembali
      </router-link>
    </div>

    <!-- Hero Banner -->
    <section class="px-5 md:px-10 lg:px-20 pt-6 pb-4">
      <div class="max-w-5xl mx-auto bg-gradient-to-r from-[#C62828] via-[#D32F2F] to-[#E53935] rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center shadow-xl">
        <!-- Hero Image -->
        <div class="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <img
            :src="heroImage"
            alt="Dimsum Hero"
            class="w-full max-w-[380px] object-contain drop-shadow-2xl"
          />
        </div>
        <!-- Hero Text -->
        <div class="w-full md:w-1/2 px-6 md:px-10 pb-8 md:pb-0 text-center md:text-right">
          <p class="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
            Dimsum kukus dengan pilihan ayam, udang, cumi, beef, dan mozzarella, dibuat dari bahan segar dengan tekstur lembut dan rasa gurih di setiap gigitan, disajikan dengan pilihan saus mentai
          </p>
        </div>
      </div>
    </section>

    <!-- Section Label -->
    <section class="px-5 md:px-10 lg:px-20 pt-10 pb-2 text-center">
      <span class="text-[#FF9800] font-bold text-sm tracking-widest uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#FF9800]">
        PRODUK KAMI
      </span>
      <h2 class="text-2xl md:text-3xl lg:text-4xl text-[#222] font-bold mt-4">
        Dimsum Original &amp; Mentai
      </h2>
    </section>

    <!-- Product Grid -->
    <section class="px-5 md:px-10 lg:px-20 py-10">
      <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative flex flex-col items-center"
        >
          <!-- Product Image (overflow ke atas) -->
          <div class="relative z-10 -mb-48 w-66 h-77 flex items-center justify-center drop-shadow-xl">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Card Body -->
          <div class="w-full bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] rounded-[10px] pt-20 pb-6 px-5 flex flex-col items-start shadow-lg">
            <!-- Name -->
            <h3 class="text-[#FB8C00] font-bold text-lg md:text-xl leading-snug mb-2">

              {{ product.name }}
            </h3>
            <!-- Description -->
            <p class="text-white/85 text-xs md:text-sm leading-relaxed mb-3">
              {{ product.description }}
            </p>
            <!-- Price -->
            <p class="text-white font-bold text-xl md:text-2xl mb-4">
              Rp <span class="tracking-wide">{{ product.price }}</span>
            </p>
            <!-- Tambah Button -->
            <button
              class="w-full bg-gradient-to-r from-[#EB4E28] to-[#FB8C00] text-white font-bold py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-[#8B0000] via-[#C62828] to-[#8B0000] text-white text-center py-5 mt-6">
      <p class="text-sm opacity-80">Copyright © 2026 Dàmel Dimsum</p>
    </footer>
  </div>
</template>

<script setup>
// ─── Import semua gambar ────────────────────────────────────────────
import heroImage        from '@/assets/images/Group 55.png'
import imgOri4          from '@/assets/images/DimsumOri4 (1).png'
import imgOri6          from '@/assets/images/DimsumOri6.png'
import imgOri8          from '@/assets/images/DimsumOri8.png'
import imgOri10          from '@/assets/images/DimsumOri10.png'
import imgMentai4       from '@/assets/images/DimsumMentai4 2.png'
import imgMentai6       from '@/assets/images/DimsumMentai6.png'
import imgMentai8       from '@/assets/images/DimsumMentai8.png'
import imgMentai10       from '@/assets/images/DimsumMentai10.png'
// ─────────────────────────────────────────────────────────────────────

const products = [
  {
    name: 'Paket Dimsum Ori Isi 4 Pcs',
    description: 'Paket dimsum original isi 4 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '12.000',
    image: imgOri4
  },
  {
    name: 'Paket Dimsum Ori Isi 6 Pcs',
    description: 'Paket dimsum original isi 6 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '18.000',
    image: imgOri6
  },
  {
    name: 'Paket Dimsum Ori Isi 8 Pcs',
    description: 'Paket dimsum original isi 8 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '23.000',
    image: imgOri8
  },
  {
    name: 'Paket Dimsum Ori Isi 10 Pcs',
    description: 'Paket dimsum original isi 10 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '29.000',
    image: imgOri10
  },
  {
    name: 'Paket Dimsum Mentai Isi 4 Pcs',
    description: 'Paket dimsum mentai isi 4 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '16.000',
    image: imgMentai4
  },
  {
    name: 'Paket Dimsum Mentai Isi 6 Pcs',
    description: 'Paket dimsum mentai isi 6 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '24.000',
    image: imgMentai6
  },
  {
    name: 'Paket Dimsum Mentai Isi 8 Pcs',
    description: 'Paket dimsum mentai isi 8 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '31.000',
    image: imgMentai8
  },
  {
    name: 'Paket Dimsum Mentai Isi 10 Pcs',
    description: 'Paket dimsum mentai isi 10 pcs dengan pilihan ayam, udang, cumi, beef, dan mozzarella',
    price: '39.000',
    image: imgMentai10
  }
];
</script>