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
        <img src="@/assets/profile.jpg" alt="Profile Picture" class="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
    <div id="projects" class="max-w-4xl mx-auto bg-dark p-8 rounded-lg shadow-lg mb-8 mt-16 flex flex-wrap justify-center gap-4">
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-2 text-white">Project 1</h3>
        <p class="text-white">Description of Project 1.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-2 text-white">Project 2</h3>
        <p class="text-white">Description of Project 2.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-2 text-white">Project 3</h3>
        <p class="text-white">Description of Project 3.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4 bg-gray-700 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-2 text-white">Project 4</h3>
        <p class="text-white">Description of Project 4.</p>
      </div>
    </div>
    <svg
      v-if="showArrow"
      @click="scrollToProjects"
      class="animate-bounce w-12 h-12 fixed bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" stroke="none" fill="white" />
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="white" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8L12 16M12 16L8 12M12 16L16 12" />
    </svg>
    <ChatBot />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ChatBot from '../components/ChatBot.vue';

export default defineComponent({
  name: 'HomeViews',
  components: {
    ChatBot,
  },
  setup() {
    const typingText = ref<HTMLElement | null>(null);
    const showArrow = ref(true);

    const typeText = (element: HTMLElement, text: string, speed: number) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    };

    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showArrow.value = false;
        } else {
          showArrow.value = true;
        }
      });
    };

    onMounted(() => {
      if (typingText.value) {
        const text = typingText.value.innerHTML;
        typingText.value.innerHTML = '';
        typeText(typingText.value, text, 25); // Adjust the speed as needed
      }

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });

      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        observer.observe(projectsSection);
      }
    });

    return {
      typingText,
      scrollToProjects,
      showArrow,
    };
  },
});
</script>

<style scoped>
/* Add any component-specific styles here */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
