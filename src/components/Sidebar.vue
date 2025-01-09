<template>
  <div
    class="fixed top-0 left-0 h-full w-16 bg-gray-900 bg-opacity-10 text-white flex flex-col justify-center items-center transition-opacity duration-1000 opacity-0 animate-fade-in"
    style="box-shadow: 0 4px 6px rgba(255, 255, 255, 0.5)"
  >
    <a
      href="https://github.com/yourusername"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-800"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
    </a>
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-800"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
    </a>
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-800"
    >
      <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Sidebar-',
  setup() {
    const isImageLoaded = ref(false);

    const handleImageLoad = () => {
      isImageLoaded.value = true;
    };

    onMounted(() => {
      const divElement = document.querySelector('div');
      if (divElement) {
        divElement.addEventListener('load', handleImageLoad);
      }
    });

    return {
      isImageLoaded,
    };
  },
});
</script>

<style scoped>
/* Add any component-specific styles here */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out forwards;
}
</style>
