<template>
  <div class="bg-[#FFF5F0] overflow-x-hidden">
    <!-- Header -->
    <header
      class="fixed top-0 w-full z-[1000] bg-[#FFF5F0] shadow-sm transition-transform duration-500"
      :class="{ 'animate-slideDown': true }"
    >
      <div class="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
            <img
              src="@/assets/images/LogoDamelDimsum.png"
              alt="Dimsum Icon"
              class="w-[150%] h-[250%] object-contain"
            />
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex gap-6 lg:gap-10 list-none">
            <li><a href="#home" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Home</a></li>
            <li><a href="#tentang-kami" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Tentang Kami</a></li>
            <li><router-link to="/menu" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Produk</router-link></li>
            <li><a href="#program" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Program</a></li>
          </ul>
        </nav>

        <!-- Header Right -->
        <div class="flex gap-3 lg:gap-5 items-center">
          <span class="hidden md:block cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="Search"
              class="w-6 h-6 object-contain"
            />
          </span>
          <a
            href="#pesan"
            class="bg-gradient-to-br from-[#C62828] to-[#771816] text-white px-5 lg:px-8 py-2 lg:py-3 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C62828]/40 transition-all text-sm lg:text-base"
          >
            Pesan Sekarang
          </a>
          
          <!-- Mobile Menu Toggle -->
          <div class="md:hidden flex flex-col gap-1.5 cursor-pointer" @click="toggleMenu">
            <span class="w-6 h-0.5 bg-[#C62828] rounded transition-all"></span>
            <span class="w-6 h-0.5 bg-[#C62828] rounded transition-all"></span>
            <span class="w-6 h-0.5 bg-[#C62828] rounded transition-all"></span>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-[#FFF5F0] shadow-lg"
      >
        <ul class="flex flex-col gap-4 p-5">
          <li><a href="#home" @click="closeMobileMenu" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Home</a></li>
          <li><a href="#tentang-kami" @click="closeMobileMenu" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Tentang Kami</a></li>
          <li><router-link to="/menu" @click="closeMobileMenu" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Produk</router-link></li>
          <li><a href="#program" @click="closeMobileMenu" class="text-[#333] font-medium hover:text-[#C62828] transition-colors">Program</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section
      id="home"
      class="relative bg-gradient-to-br from-[#8B0000] via-[#C62828] to-[#741111] text-white pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 px-5 md:px-10 lg:px-20 min-h-screen flex items-center overflow-hidden"
    >
      <!-- Glow Effects -->
      <div class="absolute w-[500px] h-[500px] top-[5%] left-1/2 -translate-x-1/2 rounded-full opacity-60 blur-[80px] bg-gradient-radial from-pink-300 to-transparent animate-float"></div>
      <div class="absolute w-[450px] h-[450px] bottom-[10%] right-[15%] rounded-full opacity-50 blur-[70px] bg-gradient-radial from-orange-400 to-transparent animate-float-reverse"></div>

      <!-- Decorative Icons -->
      <div class="hidden md:flex absolute top-[12%] left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-3xl animate-pulse border-2 border-white/30 shadow-lg">
        ⏰
      </div>
      <div class="hidden md:block absolute top-[8%] right-[8%] text-5xl animate-float drop-shadow-[0_5px_15px_rgba(255,152,0,0.6)]">
        🔥
      </div>
      <div class="hidden md:flex absolute top-[32%] right-[5%] w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-300 rounded-full items-center justify-center text-4xl animate-bounce shadow-[0_12px_35px_rgba(255,152,0,0.6)]">
        👍
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Hero Text -->
        <div class="animate-fadeInLeft">
          <span class="inline-block bg-white/25 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
            #DimsumPilihan
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-5">
            Rasa Mewah<br />Harga <span class="text-[#FFB74D]">Murah</span>
          </h1>
          <p class="text-sm md:text-base opacity-95 leading-relaxed mb-8 max-w-lg">
            Kami hadir dengan dimsum berkualitas, dibuat fresh setiap hari, dengan harga yang tetap terjangkau
          </p>

          <a
            href="https://wa.me/6285747855881"
            class="inline-flex items-center gap-3 bg-gradient-to-br from-[#E53935] to-[#FB8C00] text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-bold shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/60 transition-all mb-8"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join Reseller Dimsum
          </a>

          <!-- Testimonial Preview -->
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div class="flex -space-x-3">
              <div class="w-12 h-12 rounded-full border-3 border-[#8B0000] bg-white overflow-hidden shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User 1" class="w-full h-full object-cover" />
              </div>
              <div class="w-12 h-12 rounded-full border-3 border-[#8B0000] bg-white overflow-hidden shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="User 2" class="w-full h-full object-cover" />
              </div>
              <div class="w-12 h-12 rounded-full border-3 border-[#8B0000] bg-white overflow-hidden shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="User 3" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-sm">Testimoni Pelanggan</span>
              <div class="text-yellow-400 font-semibold">⭐ 5,0</div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative flex justify-center items-center h-96 md:h-[550px] mt-10 lg:mt-0 animate-fadeInRight">
          <!-- Brand Badge -->
          <div class="absolute bottom-12 md:bottom-12 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:-left-10 bg-white/25 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/30 z-30 min-w-[280px]">
            <img src="@/assets/images/Male Memojis.png" alt="Logo" class="w-11 h-11 rounded-full object-cover" />
            <div class="flex-1">
              <div class="font-bold text-sm text-white">Dàmel Dimsum</div>
              <div class="text-xs text-white/90">085747855881</div>
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-[#C62828] to-[#E53935] rounded-full flex items-center justify-center text-xl shadow-md">
              📞
            </div>
          </div>

          <!-- Dimsum Plate -->
          <div class="relative w-64 md:w-[520px] h-64 md:h-[520px] flex items-center justify-center">
            <div class="absolute inset-0 scale-110 rounded-full opacity-40 blur-[40px] bg-gradient-radial from-orange-400 to-transparent animate-spin-slow"></div>
            <div class="absolute inset-0 scale-105 rounded-full opacity-30 blur-[50px] bg-gradient-radial from-pink-400 to-transparent"></div>
            <img
              src="@/assets/images/Group 25.png"
              alt="Dimsum Premium"
              class="relative w-[130%] md:w-[150%] h-[130%] md:h-[150%] object-contain z-10"
              style="top: 60px; left: 20px;"
            />
          </div>

          <!-- Product Card -->
          <div class="absolute bottom-5 md:bottom-5 right-1/2 md:right-auto translate-x-1/2 md:translate-x-0 md:-right-14 bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/30 z-30 min-w-[260px]">
            <img src="@/assets/images/Dimsum Ori 4pcs.png" alt="Dimsum Ori" class="w-16 h-16 rounded-xl object-cover" />
            <div class="flex-1">
              <div class="font-bold text-white text-sm">Dimsum Ori 4 Pcs</div>
              <div class="text-yellow-400 text-xs tracking-wider">★★★★★</div>
              <div class="font-bold text-[#FFB74D]">Rp 12.000</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="tentang-kami" class="py-16 md:py-20 px-5 md:px-10 lg:px-20 bg-[#FFF5F0]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="animate-on-scroll">
          <img
            src="@/assets/images/image 1.png"
            alt="Dimsum dalam steamer"
            class="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
        <div class="animate-on-scroll">
          <span class="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-3 block">
            TENTANG KAMI
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl text-[#333] font-bold leading-tight mb-5">
            Yuk, Kenalan Sama<br />Dàmel Dimsum
          </h2>
          <p class="text-[#666] leading-relaxed mb-4">
            Dàmel Dimsum menghadirkan berbagai pilihan dimsum yang dibuat dari bahan segar dan diproduksi setiap hari. Kami berkomitmen menyajikan dimsum berkualitas tinggi dengan cita rasa autentik, diproses secara higienis, dan tetap terjangkau untuk semua kalangan
          </p>
          <p class="text-[#666] leading-relaxed">
            Dengan standar kebersihan dan kehalalan yang terjaga, Dàmel Dimsum terus berinovasi untuk memberikan pengalaman kuliner terbaik serta menjadi mitra terpercaya bagi pelanggan dan mitra usaha kami
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-20 px-5 md:px-10 lg:px-20 bg-white text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl text-[#333] font-bold mb-12 md:mb-16 animate-on-scroll">
        Kenapa Pilih Dàmel Dimsum?
      </h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-gradient-to-br from-[#C62828] to-[#B71C1C] p-12 md:p-16 rounded-3xl text-white cursor-pointer hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#C62828]/40 transition-all animate-on-scroll"
        >
          <div class="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-5 p-4">
            <img :src="feature.icon" :alt="feature.title" class="w-full h-full object-contain brightness-0 invert" />
          </div>
          <h3 class="text-xl font-semibold mt-5">{{ feature.title }}</h3>
        </div>
      </div>
    </section>

    <!-- Reseller Section -->
    <section id="program" class="py-16 md:py-20 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-[#8B0000] via-[#C62828] to-[#B71C1C] text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="animate-on-scroll">
          <span class="text-yellow-400 font-bold text-sm tracking-widest mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-yellow-400">
            PROGRAM RESELLER
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Gabung Bersama<br />Reseller Dàmel Dimsum!
          </h2>
          <p class="opacity-95 leading-relaxed max-w-md">
            Jadi bagian dari reseller Dàmel Dimsum dan tumbuh bersama menghadirkan dimsum berkualitas untuk lebih banyak pelanggan!
          </p>
        </div>

        <div class="bg-gradient-to-br from-[#C62828]/90 to-[#8B0000]/90 rounded-[30px] grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl overflow-hidden min-h-[350px] animate-on-scroll">
          <div class="p-8 md:p-10 flex items-center justify-center">
            <img
              src="@/assets/images/Group 28.png"
              alt="Dimsum Steamer"
              class="w-full max-w-[320px] object-contain drop-shadow-2xl"
            />
          </div>
          <div class="p-8 md:p-12 text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Yuk Jadi Reseller</h3>
            <p class="opacity-95 mb-6 text-sm md:text-base">
              Bergabung sebagai reseller Dàmel Dimsum dengan produk siap jual dan panduan penjualan
            </p>
            <a
              href="#"
              class="inline-block bg-gradient-to-br from-[#FFB74D] to-[#FF9800] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/60 transition-all"
            >
              Program Reseller
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-20 px-5 md:px-10 lg:px-20 bg-[#FFF5F0] text-center">
      <div class="animate-on-scroll mb-12 md:mb-16">
        <span class="text-orange-500 font-bold text-sm tracking-widest inline-block relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500">
          TESTIMONI
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl text-[#333] font-bold mt-4">Apa Kata Mereka?</h2>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="bg-gradient-to-br from-[#C62828] via-[#E53935] to-[#C62828] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <!-- Glow Effects -->
          <div class="absolute w-[300px] h-[300px] -top-24 -left-12 rounded-full opacity-30 blur-xl bg-gradient-radial from-orange-400 to-transparent"></div>
          <div class="absolute w-[250px] h-[250px] -bottom-20 right-24 rounded-full opacity-20 blur-xl bg-gradient-radial from-orange-400 to-transparent"></div>

          <!-- Testimonial Track -->
          <div class="relative z-10 overflow-hidden">
            <div
              class="flex gap-8 transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * (isMobile ? 100 : 50)}%)` }"
            >
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="min-w-full md:min-w-[calc(50%-16px)] bg-gradient-to-br from-[#8B0000]/80 to-[#B71C1C]/60 backdrop-blur-md p-8 md:p-10 rounded-3xl border-2 border-orange-500/30"
              >
                <div class="w-20 h-20 bg-white rounded-full -mt-16 mb-6 mx-auto overflow-hidden shadow-xl border-4 border-white/20">
                  <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
                </div>
                <div class="text-yellow-400 text-2xl mb-5 tracking-widest">★★★★★</div>
                <p class="text-white opacity-98 leading-relaxed">{{ testimonial.text }}</p>
              </div>
            </div>
          </div>

          <!-- Slider Arrows -->
          <div class="hidden md:block">
            <button
              @click="prevSlide"
              class="absolute top-1/2 -left-16 lg:-left-20 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#C62828] text-3xl font-bold shadow-lg hover:bg-[#C62828] hover:text-white hover:scale-110 transition-all"
            >
              ‹
            </button>
            <button
              @click="nextSlide"
              class="absolute top-1/2 -right-16 lg:-right-20 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#C62828] text-3xl font-bold shadow-lg hover:bg-[#C62828] hover:text-white hover:scale-110 transition-all"
            >
              ›
            </button>
          </div>
        </div>

        <!-- Slider Dots -->
        <div class="flex justify-center gap-3 mt-8">
          <span
            v-for="(dot, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="h-3 rounded-full cursor-pointer transition-all hover:bg-orange-500"
            :class="currentSlide === index ? 'w-8 bg-[#C62828]' : 'w-3 bg-gray-300'"
          ></span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-[#8B0000] to-[#C62828] text-white py-12 md:py-16 px-5 md:px-10 lg:px-20">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-10">
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <img src="@/assets/images/Male Memojis.png" alt="Dimsum Icon" class="w-full h-full object-contain" />
            </div>
            <span class="font-bold text-2xl">Dàmel Dimsum</span>
          </div>
          <p class="opacity-90 leading-relaxed mb-3">
            Kami hadir dengan kualitas terbaik dan harga paling terjangkau untuk semua kalangan.
          </p>
          <p class="opacity-90 leading-relaxed">Nikmati kelezatan dimsum premium di setiap sajian.</p>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-5">Hubungi Kami</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" class="w-5 h-5" />
              <span class="text-[#FFB74D] font-semibold">Alamat:</span>
              <span>Purwokerto, Desa Bana Mahakaruna</span>
            </div>
            <div class="flex items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Address" class="w-5 h-5" />
              <span class="text-sm">Blok T no 29 Karanganyar KSS RT 1 RW 8</span>
            </div>
            <div class="flex items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" class="w-5 h-5" />
              <span class="text-[#FFB74D] font-semibold">No Telepon:</span>
              <span>+6283 21 2786881</span>
            </div>
            <div class="flex items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/2838/2838590.png" alt="Clock" class="w-5 h-5" />
              <span class="text-[#FFB74D] font-semibold">Jam Operasional:</span>
              <span>Setiap Hari Pukul 10.00 - 17.00</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/20 pt-8 text-center opacity-80">
        <p>Copyright © 2025 Damai Dimsum</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const isMobileMenuOpen = ref(false);
const currentSlide = ref(0);
const isMobile = ref(false);

const features = [
  {
    icon: '/src/assets/images/no pengawet 1.png',
    title: 'Tanpa Pengawet'
  },
  {
    icon: '/src/assets/images/halal 1.png',
    title: 'Halal'
  },
  {
    icon: '/src/assets/images/harga terjangkau 1.png',
    title: 'Harga Terjangkau'
  }
];

const testimonials = [
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'User 1',
    text: 'Enakkk tee dimsum nya guede guedebangett mantepp full daging😍'
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    name: 'User 2',
    text: 'Dimsum nya enak bangetttt mba, bakal ketagihan dan langganan ini 👍😁😁'
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    name: 'User 3',
    text: 'Dimsum paling enak yang pernah saya coba! Teksturnya pas, rasanya mantap, dan harganya sangat terjangkau.'
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    name: 'User 4',
    text: 'Sebagai reseller, saya sangat puas dengan kualitas produk dan pelayanan dari Dàmel Dimsum. Recommended banget! 🔥'
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    name: 'User 5',
    text: 'Anak-anak saya suka sekali dengan varian mentai nya! Harganya affordable dan rasanya juara 😊👍'
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
    name: 'User 6',
    text: 'Gak nyesel beli dimsum disini, porsinya banyak, enak, fresh, dan harganya ramah di kantong! 💯'
  }
];

const totalSlides = computed(() => {
  return isMobile.value ? testimonials.length : Math.ceil(testimonials.length / 2);
});

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

let autoSlideInterval;

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);

  // Auto slide
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);

  // Animate on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});
</script>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(20px); }
}

.animate-slideDown {
  animation: slideDown 0.5s ease;
}

.animate-fadeInLeft {
  animation: fadeInLeft 1s ease;
}

.animate-fadeInRight {
  animation: fadeInRight 1s ease;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 5s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.animate-fadeIn {
  opacity: 1;
  transform: translateY(0);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>