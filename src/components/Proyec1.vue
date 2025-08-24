<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-2xl max-h-screen overflow-y-auto">
      <button @click="closePopup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="text-xl font-bold mb-4">Covid-19 Tracking Website</h2>
      <p class="mb-2"><strong>Role:</strong> Programmer</p>
      <p class="mb-2"><strong>Duration:</strong> Feb 2023 - Jun 2023</p>
      <p class="mb-2"><strong>Technologies:</strong> .NET Core, Entity Framework, ASP.NET Core Web API, ASP.NET Core MVC</p>

      <!-- Video dengan aspect ratio 16:9 -->
      <div class="mt-4 w-full aspect-w-16 aspect-h-9">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/Ai9Ee8QFjZ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

      <h3 class="text-lg font-semibold mt-4 mb-2">Key Contributions:</h3>
      <ul class="list-disc list-inside text-base">
        <li>Developed a website for Covid-19 tracking using the .NET Core framework with a Web Service approach.</li>
        <li>Designed and implemented database models using Entity Framework, ensuring optimal functionality.</li>
        <li>Created and deployed ASP.NET Core Web API services for data retrieval, processing, and delivery.</li>
        <li>Built controllers to integrate web services with frontend views, enabling efficient data management and display.</li>
        <li>Implemented logic to retrieve, process, and display Covid-19 data in a user-friendly format.</li>
      </ul>
    </div>
  </div>
</template>




<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:"Proyek-1",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
});
</script>
