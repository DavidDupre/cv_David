<template>
  <header class="flex justify-between md:justify-center items-center p-6 bg-opacity-50 relative z-20">
    <div class="text-[#1A2E66] text-3xl font-bold md:hidden">Menú</div>

    <div class="md:hidden z-30">
      <button
        type="button"
        class="block focus:outline-none hover:opacity-80 transition-opacity duration-200"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="text-5xl"
          v-if="isMenuOpen"
        >
          <img
            src="https://img.icons8.com/ios-filled/100/00000/delete-sign.png"
            alt="close"
            width="50"
            height="50"
          />
        </span>
        <span
          v-else
          class="text-5xl"
        >
          <img
            src="https://img.icons8.com/ios-filled/100/00000/menu--v6.png"
            alt="menu"
            width="50"
            height="50"
          />
        </span>
      </button>
    </div>

    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-white md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
        isMenuOpen ? 'block' : 'hidden',
      ]"
    >
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li
          v-for="items in linksList"
          :key="items.title"
        >
          <a
            class="block transition-colors duration-300 hover:text-[#1A2E66] ease-in-out text-2xl md:text-lg"
            :href="items.href"
            @click.prevent="scrollToSection(items.href)"
          >
            {{ items.title }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const linksList = ref([
  { title: 'Servicios', href: '#services' },
  { title: 'Acerca de mi', href: '#acercademi' },
  { title: 'Experiencia', href: '#experience' },
  { title: 'Proyectos', href: '#projects' },
  { title: 'Contacto', href: '#contact' },
]);

const isMenuOpen = ref(false);
function scrollToSection(href) {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
