<template>
  <main class="flex-1 p-4 bg-gradient-to-r from-gray-800 to-black">
    <div class="max-w-5xl mx-auto bg-dark p-12 rounded-lg shadow-lg mb-8  flex flex-col md:flex-row items-center">
      <div class="md:w-2/3">
        <h1 class="text-3xl font-bold mb-4 text-white">Welcome to My Developer Profile</h1>
        <p class="text-lg text-white" ref="typingText">
          Hi my name is Akdes Simon Simamora, I am a developer who specializes in creating mobile and web applications. With a strong
          background in both front-end and back-end development, I can bring your ideas to life.
          Whether you need a responsive website or a feature-rich mobile app, I have the skills and
          experience to deliver high-quality solutions.
        </p>
      </div>
      <div class="md:w-1/3 mt-4 md:mt-0 md:ml-4">
        <img src="@/assets/profile.jpg" alt="Profile Picture" class="w-full h-auto rounded-lg shadow-lg animate-fade-in" />
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="max-w-6xl mx-auto bg-dark p-8 rounded-lg shadow-lg mb-8 mt-16 flex flex-wrap justify-center gap-12">
      <!-- Proyek 1 -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2 text-white">Covid-19 Tracking Website</h3>
        <!-- Popup -->
        <DetailPopup1 :isVisible="isPopup1" @close="hidePopup1" />
        <p class="text-white mb-6">Developed a Covid-19 tracking website using .NET Core, ASP.NET Core Web API, and Entity Framework.</p>
        <button @click="showPopup1" class="px-4 py-2 bg-blue-500 text-white rounded self-end">Details</button>
      </div>

      <!-- Proyek 2 -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2 text-white">Grocery Bahagia Shop</h3>
        <!-- Popup -->
        <DetailPopup2 :isVisible="isPopup2" @close="hidePopup2" />
        <p class="text-white mb-6">Led the development of a web & mobile app using Laravel and Flutter. Built REST API with token-based authentication and implemented Bloc state management in Flutter.</p>
        <button @click="showPopup2" class="px-4 py-2 bg-blue-500 text-white rounded self-end">Details</button>
      </div>

      <!-- Proyek 3 -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2 text-white">BAAK Website Service</h3>
        <!-- Popup -->
        <DetailPopup3 :isVisible="isPopup3" @close="hidePopup3" />
        <p class="text-white mb-6">Developed REST API with Spring Boot, implemented authentication, and integrated the front-end using Laravel.</p>
        <button @click="showPopup3" class="px-4 py-2 bg-blue-500 text-white rounded self-end">Details</button>
      </div>

      <!-- Proyek 4 -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2 text-white">Caladium Classification App</h3>
        <!-- Popup -->
        <DetailPopup4 :isVisible="isPopup4" @close="hidePopup4" />
        <p class="text-white mb-6">Implemented YOLOv5 & GAN for object detection in a Kotlin-based mobile app to classify Caladium ornamental plants.</p>
        <button @click="showPopup4" class="px-4 py-2 bg-blue-500 text-white rounded self-end">Details</button>
      </div>

      <!-- Proyek 5 -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2 text-white">ISO 27001 Management System</h3>
        <!-- Popup -->
        <DetailPopup5 :isVisible="isPopup5" @close="hidePopup5" />
        <p class="text-white mb-6">Developed a full-stack ISO 27001 Management System using Laravel. Designed ERD, UI mockups, and implemented training material modules with quizzes and secure authentication.</p>
        <button @click="showPopup5" class="px-4 py-2 bg-blue-500 text-white rounded self-end">Details</button>
      </div>
    </div>

    <!-- Scroll Arrow -->
    <div
      v-if="showArrow"
      @click="scrollToProjects"
      class="flex flex-col items-center fixed bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <svg class="animate-bounce w-12 h-14" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="none" fill="white" />
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="white" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8L12 16M12 16L8 12M12 16L16 12" />
      </svg>
      <span class="text-white text-s ">See My Project</span>
    </div>

    <ChatBot />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ChatBot from '../components/ChatBot.vue'

// Popup komponen
import DetailPopup1 from '../components/Proyec1.vue'
import DetailPopup2 from '../components/Proyec2.vue'
import DetailPopup3 from '../components/Proyec3.vue'
import DetailPopup4 from '../components/Proyec4.vue'
import DetailPopup5 from '../components/Proyec5.vue'

export default defineComponent({
  name: 'HomeViews',
  components: {
    ChatBot,
    DetailPopup1,
    DetailPopup2,
    DetailPopup3,
    DetailPopup4,
    DetailPopup5,
  },
  data() {
    return {
      // visibility untuk tiap popup
      isPopup1: false,
      isPopup2: false,
      isPopup3: false,
      isPopup4: false,
      isPopup5: false,
    }
  },
  methods: {
    showPopup1() { this.isPopup1 = true },
    hidePopup1() { this.isPopup1 = false },

    showPopup2() { this.isPopup2 = true },
    hidePopup2() { this.isPopup2 = false },

    showPopup3() { this.isPopup3 = true },
    hidePopup3() { this.isPopup3 = false },

    showPopup4() { this.isPopup4 = true },
    hidePopup4() { this.isPopup4 = false },

    showPopup5() { this.isPopup5 = true },
    hidePopup5() { this.isPopup5 = false },
  },

  setup() {
    const typingText = ref<HTMLElement | null>(null)
    const showArrow = ref(true)
    const isImageLoaded = ref(false)
    const handleImageLoad = () => { isImageLoaded.value = true }

    const typeText = (element: HTMLElement, text: string, speed: number) => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i)
          i++
        } else {
          clearInterval(interval)
        }
      }, speed)
    }

    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' })
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => { showArrow.value = !entry.isIntersecting })
    }

    onMounted(() => {
      if (typingText.value) {
        const text = typingText.value.innerHTML
        typingText.value.innerHTML = ''
        typeText(typingText.value, text, 25)
      }

      const observer = new IntersectionObserver(observerCallback, {
        root: null, rootMargin: '0px', threshold: 0.1
      })
      const projectsSection = document.getElementById('projects')
      if (projectsSection) observer.observe(projectsSection)

      const divElement = document.querySelector('div')
      if (divElement) divElement.addEventListener('load', handleImageLoad)
    })

    return {
      typingText,
      scrollToProjects,
      showArrow,
      isImageLoaded,
    }
  },
})
</script>

<style scoped>
@keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0);} 40% { transform: translateY(-30px);} 60% { transform: translateY(-15px);} }
.animate-bounce { animation: bounce 2s infinite; }

@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
.animate-fade-in { animation: fade-in 1s ease-in-out forwards; }
</style>
