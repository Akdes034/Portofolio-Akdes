<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-2xl max-h-screen overflow-y-auto">
      <button @click="closePopup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <h2 class="text-xl font-bold mb-4">Caladium Classification App</h2>
      <p class="mb-2"><strong>Role:</strong> Project Manager & Programmer</p>
      <p class="mb-2"><strong>Duration:</strong> Aug 2023 - Jul 2024</p>
      <p class="mb-2"><strong>Technologies:</strong> YOLOv5, GAN, Kotlin (Mobile App)</p>

      <!-- Video placeholder -->
      <div class="mt-4 w-full aspect-w-16 aspect-h-9">
        <!-- <iframe class="w-full h-full" src="https://www.youtube.com/embed/VIDEO_ID" title="Caladium Classification App" frameborder="0" allowfullscreen></iframe> -->
      </div>

      <h3 class="text-lg font-semibold mt-4 mb-2">Key Contributions:</h3>
      <ul class="list-disc list-inside text-base">
        <li>Researched and applied GAN to generate Caladium images for small datasets.</li>
        <li>Created structured training, evaluation, and testing pipelines for YOLOv5 and GAN models.</li>
        <li>Developed a mobile Kotlin application integrating YOLOv5 for real-time plant detection.</li>
        <li>Augmented dataset with GAN to improve detection accuracy.</li>
        <li>Evaluated YOLOv5 model performance after integration into the app.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Proyek-4',
  props: { isVisible: { type: Boolean, required: true } },
  methods: { closePopup() { this.$emit('close') } },
})
</script>
