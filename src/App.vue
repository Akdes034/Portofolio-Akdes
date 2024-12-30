<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Body,
    Footer,
  },
});
</script>

<style>
@import 'tailwindcss/tailwind.css';
</style>
