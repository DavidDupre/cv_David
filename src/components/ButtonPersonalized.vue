<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 bg-black text-white rounded-full w-12 h-12 flex items-center
      justify-center text-xl cursor-pointer duration-300 hover:bg-gray-800 transition-all"
    >
    ↑
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '/');
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
