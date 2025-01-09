<template>
  <header class="bg-gradient-to-r from-gray-800 to-black text-white p-4">
    <div class="flex justify-end">
      <img
        src="@/assets/myicon.png"
        alt="Profile Picture"
        class="w-20 h-20 rounded-full transition-opacity duration-1000 opacity-0 animate-fade-in"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Header_page',
  setup() {
    const isImageLoaded = ref(false);

    const handleImageLoad = () => {
      isImageLoaded.value = true;
    };

    onMounted(() => {
      const imgElement = document.querySelector('img');
      if (imgElement) {
        imgElement.addEventListener('load', handleImageLoad);
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
