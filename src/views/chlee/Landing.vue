<template>
  <div class="min-h-screen font-sans bg-[#140132]">
    <section
      class="relative min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#3a1550] to-[#1a0a2e] overflow-hidden"
    >
      <!-- Header -->
      <header
        class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 py-4 md:py-6"
      >
        <div class="flex items-center gap-2 md:gap-6">
          <button
            class="px-4 md:px-8 py-2 md:py-3 bg-transparent border-2 border-cyan-400 text-white font-bold rounded-full hover:bg-cyan-400/10 transition flex items-center gap-1 md:gap-2 text-xs md:text-base"
          >
            <span class="hidden sm:inline">DOWNLOAD</span>
            <span class="sm:hidden">DL</span>
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
            <svg
              class="w-4 h-4 md:w-5 md:h-5 hidden sm:inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
              />
            </svg>
          </button>
          <div class="hidden md:flex items-center gap-3 text-white text-sm">
            <div class="flex items-center gap-1">
              <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span>$1.12</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span>$0.53</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 md:gap-6">
          <button
            class="text-white text-xs md:text-base font-semibold hover:text-cyan-400 transition hidden sm:inline"
          >
            ENG ▼
          </button>
          <button
            class="px-3 md:px-6 py-2 md:py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition text-xs md:text-base"
          >
            MENU ☰
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <div
        class="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-4 md:px-12 lg:px-20 py-20 lg:py-0 gap-8 lg:gap-4"
      >
        <!-- Left Side - Bold Text -->
        <div class="max-w-2xl text-white text-center lg:text-left order-1 lg:order-1">
          <div class="hidden lg:block absolute top-32 left-12 text-cyan-400 text-7xl opacity-60">
            ★
          </div>
          <img
            src="@/assets/dollar-02@1x.a15fea2b.png"
            alt="Dollar"
            class="hidden lg:block absolute top-20 left-32 w-16 h-16 opacity-60 animate-bounce"
          />
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none tracking-tight mb-6 lg:mb-8"
          >
            CONNECT.<br />
            ENGAGE.<br />
            EARN
          </h1>
          <button
            class="px-6 md:px-8 py-2 md:py-3 bg-cyan-400 text-black font-bold text-base md:text-lg rounded-full hover:bg-cyan-300 transition shadow-2xl"
          >
            JOIN NGAGEGLASS
          </button>
        </div>
        <!-- Center - Phone Mockup with Video Preview -->
        <div class="relative order-2 lg:order-2">
          <!-- Phone Frame -->
          <div
            class="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] h-[480px] sm:h-[560px] md:h-[640px] lg:h-[680px] bg-black rounded-[40px] lg:rounded-[50px] shadow-2xl border-4 lg:border-8 border-gray-900 overflow-hidden"
          >
            <!-- Video Content Area with Background Image -->
            <div class="absolute inset-0">
              <!-- Background Image -->
              <img
                src="@/assets/image1.jpg"
                alt="Creator Content"
                class="w-full h-full object-cover"
              />

              <!-- Gradient Overlay for better text visibility -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
              ></div>

              <!-- Simulated TikTok-style UI -->
              <div class="absolute top-4 left-4 flex items-center gap-2 z-10">
                <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span class="text-white text-xs font-semibold drop-shadow-lg">10:35</span>
              </div>

              <!-- Profile Section -->
              <div class="absolute bottom-24 left-4 right-20 text-white z-10">
                <div class="flex items-center gap-2 mb-2">
                  <svg class="w-4 h-4 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span class="text-sm font-semibold drop-shadow-lg">89.5M</span>
                </div>
                <p class="font-bold text-lg drop-shadow-lg">@Ngageglassgirl</p>
                <p class="text-sm drop-shadow-lg">Chill and Ngage!</p>
              </div>

              <!-- Right Side Actions -->
              <div class="absolute bottom-24 right-4 flex flex-col items-center gap-6">
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center mb-1"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </div>
                  <span class="text-white text-xs font-semibold">44.4K</span>
                </div>
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                      />
                    </svg>
                  </div>
                  <span class="text-white text-xs font-semibold">1.8k</span>
                </div>
                <div class="flex flex-col items-center">
                  <div
                    class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Dollar Sign -->
          <img
            src="@/assets/dollar-02@1x.a15fea2b.png"
            alt="Dollar"
            class="absolute -right-8 sm:-right-12 lg:-right-20 top-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-90 drop-shadow-2xl animate-pulse"
          />
          <!-- Decorative Elements -->
          <div
            class="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-50 blur-2xl"
          ></div>
        </div>

        <!-- Right Side - Description Card -->
        <div class="max-w-md text-center lg:text-right order-3 lg:order-3">
          <div
            class="hidden lg:block absolute top-40 right-20 text-pink-400 text-5xl opacity-60 animate-pulse"
          >
            ✦
          </div>
          <p
            class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-6 lg:mb-8"
          >
            Ngageglass is a new social network where you get
            <span class="text-cyan-400">real money for content watching</span>
          </p>
          <div class="text-center lg:text-right relative">
            <img
              src="@/assets/dollar-02@1x.a15fea2b.png"
              alt="Dollar"
              class="hidden lg:block absolute -top-8 -right-12 w-10 h-10 opacity-70"
            />
            <p class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">OVER +18M</p>
            <p class="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-4">INSTALLS</p>
            <p class="text-base sm:text-lg font-semibold text-cyan-400">GET PAID FOR WATCHING</p>
          </div>
        </div>
      </div>
      <!-- Bottom Popup Banner -->
      <img
        src="@/assets/dollar-02@1x.a15fea2b.png"
        alt="Dollar"
        class="hidden lg:block absolute bottom-32 left-1/4 w-12 h-12 opacity-50 z-20"
      />
      <div
        class="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30 bg-gradient-to-r from-purple-600 to-purple-700 backdrop-blur-md rounded-2xl md:rounded-3xl px-4 md:px-10 py-3 md:py-5 text-white shadow-2xl flex flex-col sm:flex-row items-center gap-3 md:gap-6 border border-purple-400/30 max-w-[90%] md:max-w-none"
      >
        <button
          class="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
        >
          <span class="text-white text-lg md:text-xl">×</span>
        </button>
        <div class="text-center sm:text-left">
          <p class="text-base md:text-xl font-black">18M+ INSTALLS</p>
          <p class="text-xs md:text-sm font-medium opacity-90">
            Try the app that's changing the game
          </p>
        </div>
        <button
          class="px-5 md:px-7 py-2 md:py-2.5 bg-white text-purple-900 font-bold text-sm md:text-base rounded-full hover:bg-gray-100 transition shadow-lg whitespace-nowrap"
        >
          JOIN NGAGEGLASS
        </button>
      </div>
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      ></div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative bg-[#1a0a2e] py-16 px-4 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">What Our Users Say</h2>
          <p class="text-purple-300 text-lg">Real earnings from real creators</p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Testimonial 1 - Left Column -->
          <div class="flex flex-col gap-6">
            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">M</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">milla***@gmail.com</div>
                  <div class="text-green-400 font-bold text-lg">+$60</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                Never have I thought that those "earn money on your phone" ads were real. However,
                after hearing so much about Cheelee...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>

            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">K</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">katja***@gmail.com</div>
                  <div class="text-green-400 font-bold text-lg">+$140</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                I recently discovered the Cheelee app. Started off small and began earning small
                cash out — was a bit disappointed. Then I...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>
          </div>

          <!-- Testimonial 2 - Center Column (Featured) -->
          <div
            class="bg-gradient-to-br from-purple-600/60 to-pink-600/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105"
          >
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 ring-4 ring-purple-400/30"
              >
                <span class="text-white font-bold text-lg">R</span>
              </div>
              <div class="flex-1">
                <div class="text-white font-semibold">robert***@outlook.com</div>
                <div class="text-green-300 font-bold text-2xl">+$200</div>
              </div>
            </div>
            <p class="text-white text-base leading-relaxed mb-4">
              Honestly, I never thought I'd be making money just by scrolling through content. I
              made $200 in a month — no jokes! And I didn't even do anything. It's really phone time
              into cash. I'm definitely sticking with this app, man, reels are really cool and I can
              spend some minutes even more.
            </p>
            <button
              class="text-purple-200 hover:text-white text-sm font-semibold transition-colors"
            >
              Read more
            </button>
          </div>

          <!-- Testimonial 3 - Right Column -->
          <div class="flex flex-col gap-6">
            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">L</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">lana***@gmail.com</div>
                  <div class="text-green-400 font-bold text-lg">+$260</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                I'm a beginner creator. I joined Cheelee hoping to find inspiration and maybe
                monetize some small donations — no shame in that. But what I...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>

            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">D</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">cleve.strejn***@outlook.co...</div>
                  <div class="text-green-400 font-bold text-lg">+$50</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                I earn $50 a week on Cheelee by actively watching content which isn't easy but makes
                the most out of every paid watching...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>
          </div>

          <!-- Additional Testimonials Row -->
          <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">M</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">markkyle***@gmail.com</div>
                  <div class="text-green-400 font-bold text-lg">+$125</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                If you'd told me two months ago that I'd be making money just from watching reels, I
                would've called you crazy. But here I am, at...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>

            <div
              class="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div class="flex items-start gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-white font-bold text-sm">T</span>
                </div>
                <div class="flex-1">
                  <div class="text-white font-semibold text-sm">tusya***@gmail.com</div>
                  <div class="text-green-400 font-bold text-lg">+$95</div>
                </div>
              </div>
              <p class="text-white/90 text-sm leading-relaxed">
                Cheelee has been a game-changer for me. The platform is intuitive and the earning
                potential is real. I've made consistent income...
              </p>
              <button
                class="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-3 transition-colors"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        <!-- Background Decorations -->
        <div
          class="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -z-10"
        ></div>
      </div>
    </section>

    <section
      class="relative bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#120021] text-white py-20 overflow-hidden"
    >
      <div class="max-w-5xl mx-auto px-6 text-center relative">
        <!-- Heading with Illustrative Images -->
        <div class="flex flex-col items-center justify-center mb-2">
          <!-- <div class="flex gap-4 mb-2 justify-center">
        <img src="@/assets/card@2x.fed39b4d.avif" alt="Card" class="w-12 h-12 rounded-lg shadow-lg" />
        <img src="@/assets/path-01@2x.ab35416e.avif" alt="Path 01" class="w-12 h-12 rounded-lg shadow-lg" />
        <img src="@/assets/path-02@2x.34a5251f.avif" alt="Path 02" class="w-12 h-12 rounded-lg shadow-lg" />
      </div> -->
          <h2 class="text-sm tracking-widest text-purple-300 uppercase">Ngageglass Shares</h2>
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold mb-6">
          70% of all its revenue <br />
          <span class="text-purple-400">with the community</span>
        </h1>

        <!-- Earn From -->
        <div class="mb-10">
          <p class="text-sm text-purple-200 mb-4 font-semibold uppercase">We earn from:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-5 py-2 rounded-full border border-purple-400 text-sm">
              Brand Partnerships
            </span>
            <span class="px-5 py-2 rounded-full border border-purple-400 text-sm">
              In-App Sales
            </span>
            <span class="px-5 py-2 rounded-full border border-purple-400 text-sm"> Ads </span>
          </div>
        </div>

        <!-- Funnel -->
        <div class="relative flex flex-col items-center gap-8">
          <!-- Top Funnel -->
          <div
            class="w-72 h-28 bg-gradient-to-r from-purple-600 to-pink-500 rounded-b-full flex items-center justify-center text-sm font-semibold"
          >
            Revenue Pool
          </div>

          <!-- Earn By -->
          <div>
            <p class="text-sm text-purple-200 mb-3 font-semibold uppercase">You earn by</p>
            <div class="flex gap-4 justify-center">
              <span class="px-5 py-2 rounded-full border border-green-400 text-sm">
                Watch Content
              </span>
              <span class="px-5 py-2 rounded-full border border-green-400 text-sm"> Mine LEE </span>
            </div>
          </div>

          <!-- Conversion -->
          <div class="mt-6">
            <h3 class="font-bold text-lg mb-4">
              Convert LEE to <br />
              your wallet
            </h3>

            <!-- Wallet Cards -->
            <div class="relative flex flex-wrap justify-center gap-4">
              <div
                class="bg-gradient-to-r from-teal-400 to-cyan-500 text-black rounded-xl p-4 w-48 shadow-lg"
              >
                <p class="text-xs">You received</p>
                <p class="font-bold text-lg">$565.45</p>
              </div>

              <div
                class="bg-gradient-to-r from-purple-400 to-indigo-500 text-black rounded-xl p-4 w-48 shadow-lg"
              >
                <p class="text-xs">You received</p>
                <p class="font-bold text-lg">$450.34</p>
              </div>

              <div
                class="bg-gradient-to-r from-green-400 to-emerald-500 text-black rounded-xl p-4 w-48 shadow-lg"
              >
                <p class="text-xs">You received</p>
                <p class="font-bold text-lg">$980.01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works (Modern Format) -->
    <section class="py-16 bg-[#140132] px-[5%]" id="get-started">
      <div class="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <!-- Left: Steps and CTA -->
        <div class="flex flex-col items-start md:items-start text-left">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-2">GET STARTED</h2>
          <p class="text-lg text-white font-semibold mb-6">BY WATCHING CONTENT: Earn up to $700</p>
          <div class="w-full flex flex-col gap-6 mb-12 items-center justify-center">
            <div
              class="bg-[#2b0055] text-white py-7 px-8 rounded-2xl text-left border-2 border-transparent w-full max-w-2xl shadow-lg"
            >
              <div class="font-bold text-base md:text-lg leading-tight">Visit Miniapp</div>
              <div class="text-xs md:text-sm opacity-80 mt-1">
                To begin, users need to visit the NgageGlass mini app from their Telegram account.
              </div>
            </div>
            <div
              class="bg-[#2b0055] text-white py-7 px-8 rounded-2xl text-left border-2 border-transparent w-full max-w-2xl shadow-lg"
            >
              <div class="font-bold text-base md:text-lg leading-tight">Start The Bot</div>
              <div class="text-xs md:text-sm opacity-80 mt-1">
                Start the telegram bot and click the Open App Button.
              </div>
            </div>
            <div
              class="bg-[#2b0055] text-white py-7 px-8 rounded-2xl text-left border-2 border-transparent w-full max-w-2xl shadow-lg"
            >
              <div class="font-bold text-base md:text-lg leading-tight">Put on glasses</div>
              <div class="text-xs md:text-sm opacity-80 mt-1">
                Upon registration, users receive Basic Glass to test the platform and start earning
                rewards. To boost potential rewards by up to 5.5x, users need to purchase Lenses of
                higher rarity. The rarer the Lenses, the greater the potential earnings.
              </div>
            </div>
            <div
              class="bg-[#2b0055] text-white py-7 px-8 rounded-2xl text-left border-2 border-transparent w-full max-w-2xl shadow-lg"
            >
              <div class="font-bold text-base md:text-lg leading-tight">Engage with content</div>
              <div class="text-xs md:text-sm opacity-80 mt-1">
                Complete regular tasks, engage, and earn from $10 to $1000 per month.
              </div>
            </div>
            <div
              class="bg-[#2b0055] text-white py-7 px-8 rounded-2xl text-left border-2 border-transparent w-full max-w-2xl shadow-lg"
            >
              <div class="font-bold text-base md:text-lg leading-tight">Withdraw money</div>
              <div class="text-xs md:text-sm opacity-80 mt-1">Withdraw money to your wallet.</div>
            </div>
          </div>
        </div>
        <!-- Right: Phone Mockup -->
        <div class="flex-1 flex justify-center md:justify-end">
          <div class="relative w-[220px] max-w-full">
            <!-- <img src="@/assets/image1.jpg" alt="App Screenshot" class="w-full rounded-2xl shadow-2xl border-4 border-[#2b0055] bg-[#1a0033]" /> -->
            <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
              <!-- Decorative neon elements -->
              <span
                class="absolute right-4 bottom-8 w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-400 rounded-full blur-xl opacity-60"
              ></span>
              <span
                class="absolute left-2 top-6 w-4 h-4 bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full blur-md opacity-50"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engage Glasses Table -->
    <section class="py-16 px-4 bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#120021]">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white uppercase tracking-wide"
        >
          Engage Glasses – Earn While You Engage
        </h2>
        <p class="text-white text-center text-sm md:text-base mb-10 max-w-2xl mx-auto">
          Choose your tier and start earning. Higher tiers unlock greater daily rewards and
          multipliers!
        </p>
        <div class="overflow-x-auto">
          <table
            class="min-w-full bg-gradient-to-br from-[#6c3ae6] to-[#5a2bc4] rounded-2xl shadow-2xl text-center border-2 border-purple-400/30 overflow-hidden"
          >
            <thead>
              <tr class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <th class="py-4 px-6 text-base md:text-lg font-extrabold uppercase tracking-wide">
                  Tier
                </th>
                <th class="py-4 px-6 text-base md:text-lg font-extrabold uppercase tracking-wide">
                  Entry Fee
                </th>
                <th class="py-4 px-6 text-base md:text-lg font-extrabold uppercase tracking-wide">
                  Daily Earning
                </th>
                <th class="py-4 px-6 text-base md:text-lg font-extrabold uppercase tracking-wide">
                  Lifetime
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-purple-400/20 hover:bg-purple-600/20 transition">
                <td class="py-4 px-6 font-bold text-white text-base md:text-lg">Free</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">0 USDT</td>
                <td class="py-4 px-6 text-cyan-400 font-bold text-sm md:text-base">3 USDT</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">3 days</td>
              </tr>
              <tr class="border-b border-purple-400/20 hover:bg-purple-600/20 transition">
                <td class="py-4 px-6 font-bold text-white text-base md:text-lg">Bronze</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">15 USDT</td>
                <td class="py-4 px-6 text-cyan-400 font-bold text-sm md:text-base">0.5 USDT</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">~90 days</td>
              </tr>
              <tr class="border-b border-purple-400/20 hover:bg-purple-600/20 transition">
                <td class="py-4 px-6 font-bold text-white text-base md:text-lg">Silver</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">100 USDT</td>
                <td class="py-4 px-6 text-cyan-400 font-bold text-sm md:text-base">5 USDT</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">~60 days</td>
              </tr>
              <tr class="hover:bg-purple-600/20 transition">
                <td class="py-4 px-6 font-bold text-white text-base md:text-lg">Gold</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">150 USDT</td>
                <td class="py-4 px-6 text-cyan-400 font-bold text-sm md:text-base">10 USDT</td>
                <td class="py-4 px-6 text-white text-sm md:text-base">~45 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-center mt-8">
          <button
            class="bg-cyan-400 text-black font-extrabold px-10 py-4 rounded-full hover:bg-cyan-300 transition shadow-2xl text-base md:text-lg"
          >
            GET YOUR GLASSES NOW
          </button>
        </div>
      </div>
    </section>

    <!-- Rewards Section (Updated Design) -->
    <section class="py-16 px-4 bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#120021]">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <!-- Left: Testimonial Card with Glasses -->
        <div class="flex-1 flex flex-col items-center md:items-start">
          <div class="bg-[#2b0055] bg-opacity-80 rounded-2xl p-6 mb-6 shadow-lg w-full max-w-sm">
            <div class="flex items-center gap-3 mb-2">
              <span
                class="inline-block w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400"
              ></span>
              <div>
                <div class="text-white font-semibold text-sm">simple.s505</div>
                <div class="text-xs text-purple-200">Verified User</div>
              </div>
            </div>
            <div class="text-white text-xs md:text-sm mb-3">
              I invested $30 and got as much as $430 in a month. Thanks to the app for the earning
              opportunity and the donations feature. I’m excited about it! I invite you, your
              friends, and your friends’ friends!
            </div>
            <img
              src="@/assets/card@2x.fed39b4d.avif"
              alt="Glasses"
              class="w-32 h-20 object-contain mx-auto"
            />
          </div>
        </div>
        <!-- Right: Rewards Info -->
        <div class="flex-1 flex flex-col gap-6 items-center md:items-start">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-wide">
            FansNgage Rewards
          </h2>
          <div class="text-xl text-purple-300 font-bold mb-2 uppercase tracking-wide">
            Verified Users
          </div>
          <div class="flex flex-col gap-4 w-full max-w-md">
            <div
              class="bg-[#6c3ae6] bg-opacity-90 rounded-2xl px-7 py-5 text-white font-semibold shadow-lg text-sm md:text-base border border-purple-400/20"
            >
              Get Engage glasses – your secure key to withdraw earnings
            </div>
            <div
              class="bg-[#6c3ae6] bg-opacity-90 rounded-2xl px-7 py-5 text-white font-semibold shadow-lg text-sm md:text-base border border-purple-400/20"
            >
              Better glasses multiply your rewards up to 5.5x
            </div>
            <div
              class="bg-[#6c3ae6] bg-opacity-90 rounded-2xl px-7 py-5 text-white font-semibold shadow-lg text-sm md:text-base border border-purple-400/20"
            >
              Over $00000 already paid to verified users
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Earning Tools Section -->
    <section class="py-16 px-4 bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#120021]">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-white text-center mb-4 uppercase tracking-wide"
        >
          Additional Earning Mechanics
        </h2>
        <p
          class="text-white text-center text-sm md:text-base mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          FansNgage targets the mass market, focusing on social media and fintech. To ensure high
          engagement and retention, the platform evolves, regularly updates its features, and
          expands earning functionality with features like Referral Program, Task Center and Social
          Boosts.
        </p>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Card 1: Referral Program -->
          <div
            class="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 shadow-2xl border-2 border-blue-300/30"
          >
            <div class="absolute top-4 right-4">
              <span
                class="inline-block w-12 h-12 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <span class="text-2xl">👥</span>
              </span>
            </div>
            <h3 class="text-white font-extrabold text-xl mb-3 mt-8">Referral Program</h3>
            <p class="text-white text-sm mb-4 leading-relaxed">
              Drive user acquisition by inviting others. Earn rewards for each successful
              registration and Glass purchases. Plus, earn 10% commission of your referrals' daily
              earnings. Bonus amounts depend on item rarity.
            </p>
            <button
              class="bg-white text-blue-900 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm"
            >
              INVITE NOW
            </button>
          </div>

          <!-- Card 2: Task Center -->
          <div
            class="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 shadow-2xl border-2 border-blue-300/30"
          >
            <div class="absolute top-4 right-4">
              <span
                class="inline-block w-12 h-12 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <span class="text-2xl">✅</span>
              </span>
            </div>
            <h3 class="text-white font-extrabold text-xl mb-3 mt-8">Task Center</h3>
            <p class="text-white text-sm mb-4 leading-relaxed">
              Earn additional rewards by joining partner offers and completing special tasks.
              Multiple earning opportunities available daily to boost your income.
            </p>
            <button
              class="bg-white text-blue-900 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm"
            >
              VIEW TASKS
            </button>
          </div>

          <!-- Card 3: Social Boost -->
          <div
            class="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 shadow-2xl border-2 border-orange-300/30"
          >
            <div class="absolute top-4 right-4">
              <span
                class="inline-block w-12 h-12 bg-gradient-to-tr from-yellow-400 to-red-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <span class="text-2xl">📱</span>
              </span>
            </div>
            <h3 class="text-white font-extrabold text-xl mb-3 mt-8">Social Boost</h3>
            <p class="text-white text-sm mb-4 leading-relaxed">
              Share FansNgage content on Instagram or other social media Stories. Receive a 10%
              boost to your earnings for 24 hours. Bonus can be claimed again after each period.
            </p>
            <button
              class="bg-white text-orange-900 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm"
            >
              BOOST NOW
            </button>
          </div>
        </div>

        <!-- Surprise Banner -->
        <div
          class="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 shadow-2xl border-2 border-pink-400/30 overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl"
          ></div>

          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex-1">
              <h3 class="text-white font-extrabold text-3xl md:text-4xl mb-2 uppercase">
                Surprise
              </h3>
              <p class="text-white text-base md:text-lg font-semibold leading-relaxed">
                Even this website scroll wasn't free<br />
                — you've earned your first<br />
                <span class="text-yellow-300 font-extrabold text-xl">FREE NGAGEGLASS GLASSES</span>
              </p>
            </div>
            <div class="flex-shrink-0">
              <button
                class="bg-cyan-400 text-black font-extrabold px-8 py-4 rounded-full hover:bg-cyan-300 transition shadow-xl text-base md:text-lg"
              >
                UNLOCK YOUR FREE GIFT
              </button>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute top-4 right-4 text-4xl opacity-60">🎁</div>
          <div class="absolute bottom-4 left-4 text-3xl opacity-60">✨</div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 px-4 bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#120021]">
      <h2
        class="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white uppercase tracking-wide"
      >
        F.A.Q
      </h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="bg-gradient-to-r from-[#6c3ae6] to-[#5a2bc4] rounded-2xl shadow-lg border-2 border-purple-400/30"
        >
          <button
            @click="toggle(idx)"
            class="w-full text-left flex items-center justify-between p-6 hover:bg-purple-600/20 transition rounded-2xl"
          >
            <span class="font-bold text-base md:text-lg text-white uppercase tracking-wide">{{
              faq.question
            }}</span>
            <span class="ml-4 text-white text-2xl font-bold flex-shrink-0">{{
              openIndex === idx ? '×' : '+'
            }}</span>
          </button>
          <div
            v-if="openIndex === idx"
            class="px-6 pb-6 text-white text-sm md:text-base leading-relaxed"
          >
            <div v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="relative bg-gradient-to-b from-[#1a0033] via-[#2b0055] to-[#0d001a] py-16 px-4 overflow-hidden"
    >
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-6xl mx-auto">
        <!-- Main Footer Content -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
            NgageGlass is Redefining the<br />Future of Social Networks
          </h2>
          <p class="text-white text-base md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Our goal is to redefine the creator–fan relationship by building a decentralized,
            transparent, and rewarding social ecosystem. By combining our mission, vision, and
            objectives into one focused strategy, Fansngage seeks to create a global hub where every
            interaction counts — and everyone earns.
          </p>
          <button
            class="bg-cyan-400 text-black font-extrabold px-10 py-4 rounded-full hover:bg-cyan-300 transition shadow-2xl text-lg"
          >
            JOIN NGAGEGLASS
          </button>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-purple-400/30 pt-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <!-- Copyright -->
            <div class="text-white text-sm">ALL RIGHTS RESERVED 2026</div>

            <!-- Social Links -->
            <div class="flex items-center gap-4">
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.15-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.55-2.12-9.92-5.03-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-cyan-400 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                  />
                </svg>
              </a>
            </div>

            <!-- Links -->
            <div
              class="flex flex-wrap items-center gap-4 sm:gap-6 text-white text-sm justify-center sm:justify-start"
            >
              <a href="#" class="hover:text-cyan-400 transition">FAQ</a>
              <a href="#" class="hover:text-cyan-400 transition">Support</a>
              <a href="#" class="hover:text-cyan-400 transition">Privacy policy</a>
              <a href="#" class="hover:text-cyan-400 transition">Terms of use</a>
              <a href="#" class="hover:text-cyan-400 transition">Delete</a>
              <a href="#" class="hover:text-cyan-400 transition">Child protection</a>
              <a href="#" class="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>

          <!-- Install Banner -->
          <div
            class="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-purple-400/30"
          >
            <div class="flex items-center gap-4">
              <div class="text-4xl">📱</div>
              <div>
                <p class="text-white font-extrabold text-lg">18M+ INSTALLS</p>
                <p class="text-white text-sm">Try the app that's changing the game</p>
              </div>
            </div>
            <button
              class="bg-cyan-400 text-black font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition shadow-lg"
            >
              JOIN NGAGEGLASS
            </button>
            <button class="absolute top-2 right-2 text-white hover:text-gray-300 text-xl">×</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import cardImg from '@/assets/card@2x.fed39b4d.avif'
const openIndex = ref(null)
const faqs = ref([
  {
    question: 'What is Fansngage?',
    answer:
      'Fansngage is a socialfi  platform where creators connect with their audience. Both creators and fans earn rewards through interactions, content, and activities.'
  },
  {
    question: 'What is the Dual Earning Model?',
    answer:
      'Fans earn for engaging with creators, while creators earn from content monetization and fan activity. This creates a balanced ecosystem where everyone benefits.'
  },
  {
    question: 'What is the Engage Glass?',
    answer:
      'In Fansngage, Engage Glasses  are  digital assets that determine a user’s engagement tier and earning multiplier. They combine utility, gamification, and scarcity to make participation more rewarding.'
  },
  {
    question: 'How user earn money?',
    answer:
      'User equips Engage Glass and engage with content  to earn money . Each of their interaction (react, comment, share) converts into money.'
  },
  {
    question: 'How can I join Fansngage?',
    answer:
      'You can sign up for free on the Fansngage app. Once registered, you can start engaging, earning with the free trial Glass.'
  },
  {
    question: 'Is Engage Glass safe and legal?',
    answer:
      'Yes. Unlike traditional MLM schemes, Engage Glass rewards are tied to real activity inside the Fansngage platform, ensuring sustainability and compliance.'
  },
  {
    question: 'How much I can earn monthly ?',
    answer:
      "There are no income limits — you can earn $100 or even $1,000 per month. It's all up to you — you decide how much you make. As for us, we simply provide the opportunities, offering glasses of different rarities and additional reward features."
  }
])
function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<style scoped></style>
