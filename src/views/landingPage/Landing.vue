<template>
  <div class="landing-page">
    <!-- Header Navigation -->
    <header class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <div class="logo">
        <img src="@/assets/logo-white.png" alt="FansEngage Logo" class="h-12 w-auto" />
      </div>
      <nav class="flex gap-4">
        <button
          @click="navigateToLogin"
          class="px-8 py-2 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Login
        </button>
        <button
          @click="navigateToRegister"
          class="px-8 py-2 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Register
        </button>
      </nav>
    </header>

    <!-- Hero Section with Video Background -->
    <section class="hero-section relative h-screen w-full overflow-hidden">
      <!-- Video Background -->
      <video
        ref="videoPlayer"
        class="absolute inset-0 w-full h-full object-cover"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
      ></video>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>

      <!-- Video Controls Overlay -->
      <div class="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white z-10">
        <!-- Play/Pause Button -->
        <button @click="togglePlay" class="p-2 hover:bg-white/20 rounded transition">
          <svg v-if="!isPlaying" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>

        <!-- Time Display -->
        <span class="text-sm">{{ formatTime(currentTime) }}</span>

        <!-- Progress Bar -->
        <div
          class="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
          @click="seek"
        >
          <div
            class="h-full bg-white transition-all"
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>

        <!-- Mute/Unmute Button -->
        <button @click="toggleMute" class="p-2 hover:bg-white/20 rounded transition">
          <svg v-if="isMuted" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
        </button>

        <!-- Fullscreen Button -->
        <button @click="toggleFullscreen" class="p-2 hover:bg-white/20 rounded transition">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
        </button>

        <!-- More Options -->
        <button class="p-2 hover:bg-white/20 rounded transition">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
        </button>
      </div>

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div class="text-left text-white max-w-[84%] px-8 w-full">
          <!-- Sliding Text Content -->
          <div
            class="relative h-[600px] mb-8 flex flex-col items-center justify-center p-8 rounded-lg pointer-events-auto mt-40"
          >
            <transition name="slide-fade">
              <div v-if="currentSlide === 0" key="slide-0" class="absolute inset-0">
                <h1 class="w-full font-bold mb-3 leading-tight" style="font-size: 6vw">
                  FAN SUBSCRIPTION
                  <br />MADE EASY
                </h1>
                <p
                  class="font-semibold mb-2 uppercase tracking-wide leading-tight"
                  style="font-size: 4vw"
                >
                  GET EXCLUSIVE CONTENT INSTANTLY
                </p>
                <p class="leading-normal" style="font-size: 2em">
                  Subscribe to your favorite creators now.
                </p>

                <button
                  @click="exploreNow"
                  class="px-12 py-4 my-5 bg-white text-gray-800 rounded font-semibold text-lg hover:bg-gray-100 transition pointer-events-auto uppercase tracking-wider"
                >
                  EXPLORE NOW
                </button>
              </div>
            </transition>

            <transition name="slide-fade">
              <div v-if="currentSlide === 1" key="slide-1" class="absolute inset-0">
                <h1 class="w-full font-bold mb-3 leading-tight" style="font-size: 6vw">
                  THE BEST ONLYFANS ALTERNATIVE YOU'LL LOVE
                </h1>
                <p
                  class="font-semibold mb-2 uppercase tracking-wide leading-tight"
                  style="font-size: 4vw"
                >
                  CONNECT WITH CREATORS & FANS
                </p>
                <p class="leading-normal" style="font-size: 2em">
                  Enjoy private, premium content securely.
                </p>

                <button
                  @click="exploreNow"
                  class="px-12 py-4 my-5 bg-white text-gray-800 rounded font-semibold text-lg hover:bg-gray-100 transition pointer-events-auto uppercase tracking-wider"
                >
                  EXPLORE NOW
                </button>
              </div>
            </transition>

            <transition name="slide-fade">
              <div v-if="currentSlide === 2" key="slide-2" class="absolute inset-0">
                <h1 class="w-full font-bold mb-3 leading-tight" style="font-size: 6vw">
                  JOIN THE CREATOR ECONOMY
                </h1>
                <p
                  class="font-semibold mb-2 uppercase tracking-wide leading-tight"
                  style="font-size: 4vw"
                >
                  CONNECT. ENGAGE. MONETIZE.
                </p>
                <p class="leading-normal" style="font-size: 2em">
                  Build your brand and earn from content.
                </p>
                <button
                  @click="exploreNow"
                  class="px-12 py-4 my-5 bg-white text-gray-800 rounded font-semibold text-lg hover:bg-gray-100 transition pointer-events-auto uppercase tracking-wider"
                >
                  EXPLORE NOW
                </button>
              </div>
            </transition>
          </div>

          <!-- Constant Explore Now Button -->
        </div>
      </div>
    </section>

    <!-- Section 2: Hey there! I'm Elis -->
    <section
      class="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center overflow-hidden"
    >
      <!-- Pink accent line at top -->
      <div
        class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
      ></div>

      <div class="container mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-white z-10">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hey there! I'm Elis –<br />
            Let's Get Closer! 💕
          </h2>
          <p class="text-2xl md:text-3xl mb-6 font-light">Real. Unfiltered. Just for You.</p>
          <p class="text-lg md:text-xl mb-4 font-semibold">
            74K amazing people already here... are you in? 👀
          </p>
          <p class="text-base md:text-lg leading-relaxed max-w-2xl">
            Think of this as your VIP pass to my world! From behind-the-scenes moments to personal
            chats, I keep it real, fun, and totally exclusive. Ready to dive in?
          </p>

          <!-- Wave emoji decoration -->
          <div class="mt-8 text-6xl animate-wave inline-block">👋</div>
        </div>

        <!-- Right Content - Animated Circle -->
        <div class="relative flex items-center justify-center">
          <!-- Animated circular frame with wave motion -->
          <div
            class="wave-circle relative w-[500px] h-[500px] rounded-full border-4 border-purple-400/30 flex items-center justify-center"
          >
            <!-- Inner gradient circle -->
            <div
              class="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm"
            ></div>

            <!-- Profile image placeholder -->
            <img
              src="@/assets/logo.png"
              alt="Profile"
              class="relative z-10 w-64 h-64 rounded-full object-cover border-4 border-pink-500/50"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Find & Hire Influencers Effortlessly -->
    <section
      class="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center overflow-hidden"
    >
      <div class="container mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content - Phone Mockup -->
        <div class="relative flex items-center justify-center">
          <!-- Phone mockup placeholder -->
          <div
            class="relative w-[300px] h-[600px] bg-gray-800 rounded-[3rem] border-8 border-gray-700 shadow-2xl overflow-hidden"
          >
            <!-- Phone screen -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"
            >
              <img
                src="@/assets/logo.png"
                alt="App Preview"
                class="w-32 h-32 object-contain opacity-50"
              />
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="text-white z-10">
          <!-- Subscription badge -->
          <div
            class="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30"
          >
            <span class="w-3 h-3 bg-pink-500 rounded-sm"></span>
            <span class="text-pink-300 font-semibold">Subscription</span>
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find & Hire Influencers Effortlessly.
          </h2>

          <p class="text-lg md:text-xl mb-8 leading-relaxed">
            <span class="font-bold">Discover top creators</span> across Instagram, TikTok, and
            YouTube in seconds. Whether you're looking for lifestyle influencers, fashion icons, or
            content creators, the right match is just a search away.
          </p>

          <div class="space-y-6 mb-8">
            <h3 class="text-2xl font-bold">How it works?</h3>

            <!-- Feature 1 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <p class="leading-relaxed">
                  <span class="font-bold">Search & Connect</span> – Browse thousands of vetted
                  influencers tailored to your needs.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <p class="leading-relaxed">
                  <span class="font-bold">Secure Collaboration</span> – Chat, negotiate, and pay
                  securely through the platform. Your payment is held safely until the work is
                  completed.
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <p class="leading-relaxed">
                  <span class="font-bold">Get Quality Content</span> – Receive high-quality,
                  engaging content directly from influencers.
                </p>
              </div>
            </div>
          </div>

          <p class="text-lg mb-6">Start exploring and collaborate with the best today!</p>

          <button
            @click="navigateToRegister"
            class="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition uppercase tracking-wider shadow-lg hover:shadow-pink-500/50"
          >
            Become a Creator
          </button>
        </div>
      </div>
    </section>

    <!-- Section 4: Trusted by the World's Biggest Creators -->
    <section class="relative min-h-screen bg-white py-20">
      <div class="container mx-auto px-8">
        <!-- Section Title -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-900">
          TRUSTED BY THE WORLD'S BIGGEST CREATORS
        </h2>

        <!-- Carousel Container -->
        <div class="relative">
          <!-- Left Arrow -->
          <button
            @click="prevCreator"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <svg
              class="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Creators Grid -->
          <div class="overflow-hidden px-16">
            <div
              class="flex transition-transform duration-500 ease-in-out gap-6"
              :style="{ transform: `translateX(-${currentCreatorIndex * 25}%)` }"
            >
              <!-- Creator Card 1 -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Lily Moretti"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Lily Moretti</h3>
                    <p class="text-sm text-gray-600">Photographer | 420k followers</p>
                  </div>
                </div>
              </div>

              <!-- Creator Card 2 -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Marcus Reed"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Marcus Reed</h3>
                    <p class="text-sm text-gray-600">Fitness Coach | 9.1m followers</p>
                  </div>
                </div>
              </div>

              <!-- Creator Card 3 -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-amber-400 to-amber-600 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Maya Green"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Maya Green</h3>
                    <p class="text-sm text-gray-600">Food Blogger | 7.3k followers</p>
                  </div>
                </div>
              </div>

              <!-- Creator Card 4 -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Mia Rose"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Mia Rose</h3>
                    <p class="text-sm text-gray-600">Wellness Influencer | 6.1m followers</p>
                  </div>
                </div>
              </div>

              <!-- Creator Card 5 -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-red-600 to-blue-600 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Leo James"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Leo James</h3>
                    <p class="text-sm text-gray-600">Independent Artist | 670k+ followers</p>
                  </div>
                </div>
              </div>

              <!-- Duplicate cards for infinite scroll effect -->
              <div class="flex-shrink-0 w-[calc(20%-1.2rem)]">
                <div
                  class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div
                    class="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden"
                  >
                    <img
                      src="@/assets/logo.png"
                      alt="Lily Moretti"
                      class="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-bold text-xl text-gray-900 mb-1">Lily Moretti</h3>
                    <p class="text-sm text-gray-600">Photographer | 420k followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Arrow -->
          <button
            @click="nextCreator"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <svg
              class="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Section 5: Ready to Start Earning? -->
    <section
      class="relative min-h-[60vh] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-8 py-20 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Start Earning?
        </h2>
        <p class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Turn your content into income and grow your brand on your terms. No limits, just endless
          possibilities.
        </p>
        <button
          @click="navigateToRegister"
          class="px-10 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-gray-100 transition uppercase tracking-wider shadow-xl hover:shadow-2xl"
        >
          Get Started
        </button>
      </div>
    </section>

    <!-- Section 6: Become a Verified Creator -->
    <section class="relative min-h-screen bg-white py-20">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <!-- Trust Badge -->
            <div class="flex items-center gap-3 mb-8">
              <div class="flex -space-x-2">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"
                ></div>
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white"
                ></div>
              </div>
              <p class="text-gray-700 font-semibold">TRUSTED BY 150,000+ CREATORS</p>
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 italic">
              Become a Verified Creator in under three minutes & start
            </h2>

            <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              The only subscription platform that combines messaging, voice notes and analytics all
              in one place.
            </p>

            <div class="flex flex-wrap gap-4">
              <button
                @click="navigateToRegister"
                class="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition uppercase tracking-wider shadow-lg hover:shadow-pink-500/50"
              >
                Become a Creator
              </button>
              <button
                @click="navigateToRegister"
                class="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-full font-bold text-lg hover:bg-gray-50 transition uppercase tracking-wider"
              >
                Sign up as a Fan
              </button>
            </div>
          </div>

          <!-- Right Content - Phone Mockup -->
          <div class="relative flex items-center justify-center">
            <div
              class="relative w-[320px] h-[650px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden"
            >
              <!-- Phone notch -->
              <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"
              ></div>

              <!-- Phone screen -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 flex items-center justify-center"
              >
                <img
                  src="@/assets/logo-white.png"
                  alt="App Preview"
                  class="w-40 h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

       <!-- Giveaway Section: Fun Campaign with Balloons -->
    <section
      class="relative min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 py-20 overflow-hidden"
    >
      <!-- Floating Balloons Decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Balloon 1 -->
        <div class="balloon balloon-1 absolute" style="left: 5%; top: 10%">
          <div class="w-16 h-20 bg-red-500 rounded-full opacity-80"></div>
          <div class="w-1 h-20 bg-gray-400 mx-auto"></div>
        </div>
        <!-- Balloon 2 -->
        <div class="balloon balloon-2 absolute" style="left: 15%; top: 60%">
          <div class="w-20 h-24 bg-blue-500 rounded-full opacity-80"></div>
          <div class="w-1 h-24 bg-gray-400 mx-auto"></div>
        </div>
        <!-- Balloon 3 -->
        <div class="balloon balloon-3 absolute" style="right: 10%; top: 20%">
          <div class="w-18 h-22 bg-yellow-500 rounded-full opacity-80"></div>
          <div class="w-1 h-20 bg-gray-400 mx-auto"></div>
        </div>
        <!-- Balloon 4 -->
        <div class="balloon balloon-4 absolute" style="right: 20%; top: 70%">
          <div class="w-16 h-20 bg-green-500 rounded-full opacity-80"></div>
          <div class="w-1 h-20 bg-gray-400 mx-auto"></div>
        </div>
        <!-- Balloon 5 -->
        <div class="balloon balloon-5 absolute" style="left: 50%; top: 5%">
          <div class="w-20 h-24 bg-purple-500 rounded-full opacity-80"></div>
          <div class="w-1 h-24 bg-gray-400 mx-auto"></div>
        </div>
        <!-- Balloon 6 -->
        <div class="balloon balloon-6 absolute" style="left: 80%; top: 50%">
          <div class="w-16 h-20 bg-pink-500 rounded-full opacity-80"></div>
          <div class="w-1 h-20 bg-gray-400 mx-auto"></div>
        </div>
      </div>

      <div class="container mx-auto px-8 relative z-10">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            🎉 SPECIAL GIVEAWAY 🎉
          </h2>
          <p class="text-2xl md:text-3xl text-white font-semibold drop-shadow-md">
            Join FansNgage and Win Amazing Prizes!
          </p>
        </div>

        <!-- Two Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Fan Giveaway Card -->
          <div
            class="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div class="text-center mb-6">
              <div class="text-6xl mb-4">🎁</div>
              <h3 class="text-3xl font-bold text-pink-600 mb-2">GIVEAWAY FAN</h3>
              <p class="text-4xl font-bold text-gray-900">Vinci 50€ FREE!</p>
            </div>

            <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
              <p class="text-lg text-gray-800 font-semibold mb-4">
                Vuoi guardare i tuoi creators preferiti GRATIS? 🔥
              </p>
              <p class="text-gray-700 mb-4">
                Stiamo regalando <span class="font-bold text-pink-600">50€ di credito FREE</span> ai
                fan più veloci!
              </p>
            </div>

            <div class="mb-6">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Come partecipare:</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >1</span
                  >
                  <span class="text-gray-700"
                    >Segui la nostra pagina Instagram e iscriviti al nostro canale Telegram</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >2</span
                  >
                  <span class="text-gray-700"
                    >Condividi questo post nelle tue storie, tagga @fansngage e tagga 4 amici</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >3</span
                  >
                  <span class="text-gray-700">Compila il modulo di iscrizione su FansNgage</span>
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >4</span
                  >
                  <span class="text-gray-700"
                    >Inviaci un DM con la parola
                    <span class="font-bold text-pink-600">"FUN4FREE"</span></span
                  >
                </li>
              </ul>
            </div>

            <div class="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mb-6">
              <p class="text-center font-bold text-gray-900">
                🎁 I vincitori riceveranno 50€ direttamente nel loro wallet FansNgage.
              </p>
            </div>

            <p class="text-center text-red-600 font-bold text-lg">
              ⚡ Affrettati: posti limitati! 🚀
            </p>
          </div>

          <!-- Creator Giveaway Card -->
          <div
            class="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div class="text-center mb-6">
              <div class="text-6xl mb-4">🌟</div>
              <h3 class="text-3xl font-bold text-purple-600 mb-2">GIVEAWAY CREATORS</h3>
              <p class="text-4xl font-bold text-gray-900">1 MESE GRATIS!</p>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
              <p class="text-lg text-gray-800 font-semibold mb-4">
                Sei un creator? Questo è per te 👉
              </p>
              <p class="text-gray-700 mb-4">
                Ti offriamo <span class="font-bold text-purple-600">1 mese FREE OF CHARGE</span> su
                FansNgage:
                <span class="font-bold text-green-600">0% commissioni, guadagni il 100%!</span> 💸🔥
              </p>
            </div>

            <div class="mb-6">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Come partecipare:</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >1</span
                  >
                  <span class="text-gray-700"
                    >Segui la nostra pagina Instagram e iscriviti al nostro canale Telegram</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >2</span
                  >
                  <span class="text-gray-700"
                    >Condividi questo post nelle tue storie, tagga @fansngage e tagga 4 amici</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >3</span
                  >
                  <span class="text-gray-700"
                    >Compila il modulo di iscrizione Creator su FansNgage</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >4</span
                  >
                  <span class="text-gray-700"
                    >Inviaci un DM con la parola
                    <span class="font-bold text-purple-600">"NOCHARGE"</span></span
                  >
                </li>
              </ul>
            </div>

            <div class="bg-green-100 border-2 border-green-400 rounded-xl p-4 mb-6">
              <p class="text-center font-bold text-gray-900">
                💥 Guadagna senza commissioni per 30 giorni.
              </p>
            </div>

            <p class="text-center text-purple-700 font-bold text-lg">
              ✨ Perfetto per chi vuole iniziare o migrare la propria fanbase.
            </p>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-12">
          <button
            @click="navigateToRegister"
            class="px-12 py-5 bg-white text-purple-600 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl uppercase tracking-wider animate-pulse"
          >
            🎉 PARTECIPA ORA! 🎉
          </button>
        </div>
      </div>
    </section>

    <!-- Section 7: Frequently Asked Questions -->
    <section class="relative min-h-screen bg-gray-50 py-20">
      <div class="container mx-auto px-8">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div class="max-w-4xl mx-auto space-y-4">
          <!-- FAQ Item 1 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(0)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">What is Fansngage?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 0 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 0" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                Fansngage is a subscription-based platform where creators can monetize their content
                and connect directly with their fans through exclusive posts, messages, and more.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 2 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(1)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">Who can create on Fansngage?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 1 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 1" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                Anyone over 18 can become a creator on Fansngage! Whether you're an influencer,
                artist, fitness coach, or content creator, you can share your passion and earn.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 3 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(2)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">How much can I make on Fansngage?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 2 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 2" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                Earnings vary based on your content, engagement, and subscriber count. Many creators
                earn thousands monthly by offering exclusive content and personalized experiences.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 4 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(3)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">How long does it take to become a creator?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 3 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 3" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                You can set up your creator account in under 3 minutes! Simply sign up, verify your
                identity, and start posting content right away.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 5 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(4)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">How much of my earnings does FansNgage keep?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 4 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 4" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                FansNgage takes a 20% commission on all earnings. This covers platform maintenance,
                payment processing, and customer support to ensure a seamless experience.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 6 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(5)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">What kind of content can I share?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 5 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 5" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                You can share photos, videos, live streams, voice notes, and messages. All content
                must comply with our community guidelines and terms of service.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 7 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(6)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">Can I set my own price for subscriptions?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 6 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 6" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                Yes! You have full control over your subscription pricing. Set monthly rates that
                work for you and adjust them as your content and audience grow.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 8 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(7)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">What measures does FansNgage take for privacy and safety?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 7 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 7" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                We use industry-standard encryption, secure payment processing, and content
                monitoring. You control who sees your content, and we protect your personal
                information.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 9 -->
          <div class="faq-item">
            <button
              @click="toggleFAQ(8)"
              class="w-full px-6 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-left flex items-center justify-between transition"
            >
              <span class="text-lg">How does FansNgage help me grow my fanbase?</span>
              <svg
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-180': openFAQ === 8 }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq-expand">
              <div v-if="openFAQ === 8" class="px-6 py-4 bg-white rounded-b-2xl text-gray-700">
                We provide analytics, promotional tools, and discovery features to help fans find
                you. Plus, our messaging system helps you build deeper connections with subscribers.
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8: Launch Your Content Monetization -->
    <section class="relative min-h-screen bg-gray-100 py-20">
      <div class="container mx-auto px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2
            class="inline-block text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-blue-600 px-8 py-4 rounded-lg mb-4"
          >
            LAUNCH YOUR CONTENT MONETIZATION. Keep 80%
          </h2>
          <p class="text-gray-700 text-lg">
            Join the top <span class="font-bold">Platform</span> in the creator economy and
            <span class="font-bold text-pink-500">start earning</span> more today.
          </p>
        </div>

        <!-- Two Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Left Card: Join a Content Monetization Platform -->
          <div
            class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl"
          >
            <div class="mb-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl">👋</span>
                <h3 class="text-xl font-bold">HI THERE</h3>
              </div>
              <p class="text-lg font-semibold mb-2">NEED HELP WITH MONETIZATION?</p>
              <p class="text-sm opacity-90 mb-2">Ask us anything —</p>
              <p class="text-sm opacity-75">we're here to guide creators like you.</p>
            </div>

            <div class="border-t border-white/30 pt-6">
              <h4 class="text-2xl md:text-3xl font-bold mb-4">
                JOIN A CONTENT<br />MONETIZATION PLATFORM
              </h4>
              <p class="text-base leading-relaxed">
                We're more than a fan subscription platform — we help creators
                <span class="font-bold">succeed</span> in the creator economy with
                <span class="font-bold">real tools</span> and
                <span class="font-bold">real support</span>.
              </p>
            </div>
          </div>

          <!-- Right Card: Fast & Easy Content Monetization -->
          <div
            class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 text-white shadow-xl"
          >
            <div class="mb-6">
              <p class="text-lg font-semibold mb-4">WHAT DO YOU PLAN ON CREATING?</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >📸 Media</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >📹 Vlogs</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >🎨 Creative</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >🎵 Travel</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >📚 Research</span
                >
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >🎭 Music</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >💪 Educ</span
                >
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">🎨 Art</span>
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                  >🍔 Recipe</span
                >
              </div>
            </div>

            <div class="border-t border-white/30 pt-6">
              <h4 class="text-2xl md:text-3xl font-bold mb-4">
                FAST & EASY CONTENT<br />MONETIZATION
              </h4>
              <p class="text-base leading-relaxed">
                Become a verified creator and start earning with
                <span class="font-bold">exclusive content</span> in under
                <span class="font-bold">5 minutes</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Video Player State
const videoPlayer = ref(null)
const isPlaying = ref(true)
const isMuted = ref(true)
const currentTime = ref(0)
const duration = ref(0)
const progressPercent = ref(0)

// Slide State
const currentSlide = ref(0)
const totalSlides = 3
let slideInterval = null

// Creator Carousel State
const currentCreatorIndex = ref(0)
const totalCreators = 5

// FAQ State
const openFAQ = ref(null)

// Replace this with your actual video URL
const videoSrc = 'https://cdn.pixabay.com/video/2023/08/25/177169-857679233_large.mp4' // Placeholder video - Beautiful woman portrait
// const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4' // Placeholder video


// Navigation Functions
const navigateToLogin = () => {
  router.push('/login')
}

const navigateToRegister = () => {
  router.push('/register')
}

const exploreNow = () => {
  router.push('/explore')
}

// Creator Carousel Functions
const nextCreator = () => {
  if (currentCreatorIndex.value < totalCreators - 1) {
    currentCreatorIndex.value++
  } else {
    currentCreatorIndex.value = 0
  }
}

const prevCreator = () => {
  if (currentCreatorIndex.value > 0) {
    currentCreatorIndex.value--
  } else {
    currentCreatorIndex.value = totalCreators - 1
  }
}

// FAQ Functions
const toggleFAQ = (index) => {
  openFAQ.value = openFAQ.value === index ? null : index
}

// Video Control Functions
const togglePlay = () => {
  if (videoPlayer.value) {
    if (isPlaying.value) {
      videoPlayer.value.pause()
    } else {
      videoPlayer.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted
    isMuted.value = videoPlayer.value.muted
  }
}

const toggleFullscreen = () => {
  if (videoPlayer.value) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoPlayer.value.requestFullscreen()
    }
  }
}

const seek = (event) => {
  if (videoPlayer.value) {
    const rect = event.currentTarget.getBoundingClientRect()
    const percent = (event.clientX - rect.left) / rect.width
    videoPlayer.value.currentTime = percent * duration.value
  }
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const updateProgress = () => {
  if (videoPlayer.value) {
    currentTime.value = videoPlayer.value.currentTime
    duration.value = videoPlayer.value.duration || 0
    progressPercent.value = duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0
  }
}

// Slide Functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const startSlideshow = () => {
  slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

// Lifecycle Hooks
onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.addEventListener('timeupdate', updateProgress)
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      duration.value = videoPlayer.value.duration
    })
  }

  // Start slideshow
  startSlideshow()
})

onBeforeUnmount(() => {
  if (videoPlayer.value) {
    videoPlayer.value.removeEventListener('timeupdate', updateProgress)
  }

  // Stop slideshow
  stopSlideshow()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

.landing-page {
  min-height: 100vh;
  background: #000;
  font-family: 'Poppins', sans-serif;
}

.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure video covers the entire section */
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Custom scrollbar for modern look */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #e82264;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c71d52;
}

/* Slide Transition Animation */
.slide-fade-enter-active {
  transition: transform 0.8s ease-out;
  transition-delay: 1s;
}

.slide-fade-leave-active {
  transition: transform 0.8s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(-100%);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
}

/* Wave animation for circle */
@keyframes wave-motion {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    border-radius: 50%;
  }
  25% {
    transform: translate(-15px, -15px) scale(1.02);
    border-radius: 48% 52% 50% 50%;
  }
  50% {
    transform: translate(0, -20px) scale(1.05);
    border-radius: 50% 50% 52% 48%;
  }
  75% {
    transform: translate(15px, -15px) scale(1.02);
    border-radius: 52% 48% 50% 50%;
  }
}

.wave-circle {
  animation: wave-motion 6s ease-in-out infinite;
}

/* Hand wave animation */
@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30% {
    transform: rotate(14deg);
  }
  20%,
  40% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(14deg);
  }
  60% {
    transform: rotate(0deg);
  }
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

/* FAQ Expand Animation */
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq-expand-enter-to,
.faq-expand-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
