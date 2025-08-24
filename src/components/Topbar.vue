<template>
  <div
     :class="['fixed top-0 left-0 w-full h-12 bg-gray-900 text-white flex flex-row justify-center items-center gap-x-4 transition-all duration-500',
              { 'translate-y-0': showNavbar, '-translate-y-full': !showNavbar }]"
   >
   <a
      href="https://github.com/akdes034"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-500"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
    </a>
    <a
      href="https://linkedin.com/in/akdes-simamora-661664259"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-500"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
    </a>
    <a
      href="https://www.instagram.com/simonsimamora3112/"
      target="_blank"
      class="mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-gray-500"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl" />
    </a>
   </div>
 </template>

 <script lang="ts">
 import { defineComponent, onMounted, ref } from 'vue'

 export default defineComponent({
   name: 'Topbar-',
   setup() {
     const isImageLoaded = ref(false)
     const showNavbar = ref(true)
     let lastScrollY = 0

     const handleImageLoad = () => {
       isImageLoaded.value = true
     }
     const handleScroll = () => {
       if (window.scrollY > lastScrollY) {
         // scroll ke bawah → sembunyikan
         showNavbar.value = false
       } else {
         // scroll ke atas → tampilkan
         showNavbar.value = true
       }
       lastScrollY = window.scrollY
     }


     onMounted(() => {
       const divElement = document.querySelector('div')
       if (divElement) {
         divElement.addEventListener('load', handleImageLoad)
       }
       window.addEventListener('scroll', handleScroll)
     })

     return {
       isImageLoaded,showNavbar
     }
   },
 })
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
