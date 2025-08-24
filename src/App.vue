<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header untuk ukuran medium ke atas -->
    <header_page class="md:block hidden" />

    <!-- Header untuk ukuran mobile -->
    <div class="block md:hidden">
      <topbar_page></topbar_page>
    </div>


    <div class="min-h-screen flex flex-col">
      <!-- Sidebar untuk ukuran medium ke atas -->
      <sidebar_page class="md:flex hidden" />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sidebar_page from './components/Sidebar.vue'
import header_page from './components/Header.vue'
import topbar_page from './components/Topbar.vue'


export default defineComponent({
  name: 'App',
  components: {
    sidebar_page,
    header_page,
    topbar_page,
  },
})
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>
