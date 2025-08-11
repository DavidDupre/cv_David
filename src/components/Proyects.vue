<template>
  <section
    class="text-primary mt-20"
    id="projects"
  >
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-[#1A2E66]">Proyectos</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
          <button
            class="hover:text-[#1A2E66]"
            flat
            v-for="category in ['All', 'Web Development', 'Mobile App']"
            :key="category"
            @click="() => (selectCategory = category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
      >
        <div
          v-for="proyect in filterProjects"
          :key="proyect.id"
        >
          <div
            class="h-52 md:h-[24rem] rounded-t-xl relative group"
            :style="{
              backgroundImage: 'url(' + proyect.image + ')',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#4A4A4A] opacity-0 group-hover:opacity-60 transition-all duration-700"
            >
              <a
                class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#00000] hover:border-white group/link"
                target="_blank"
                :href="proyect.link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-10 w-10 text-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="text-white rounded-b-xl mt-3 bg-[#111a3a] shadow-lg border border-[#1f1641] py-6 px-4"
          >
            <h5 class="text-lg font-semibold uppercase lg:text-xl">{{ proyect.title }}</h5>
            <p class="text-gray-400">{{ proyect.description }}</p>
            <div class="flex flex-wrap p-2.5">
              <div
                v-for="technology in proyect.technologies"
                :key="technology"
                class="text-white flex items-center justify-center px-4 py-2 text-sm font-medium ml-1 mt-1 rounded-3xl bg-[#1A2E66]"
                style="
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  border: 1px solid #111827;
                  backdrop-filter: blur(9px);
                  -webkit-backdrop-filter: blur(9px);
                "
              >
                {{ technology }}
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import vue from '../assets/vue.png';
import angular from '../assets/angular.png';
import flutter from '../assets/flutter.png';
import html from '../assets/HTML.png';
import java from '../assets/java.png';
import react from '../assets/react.png';

const Proyect = ref([
  {
    id: 1,
    title: 'cod. fuente CV',
    description: 'CV interactivo y responsivo',
    image: vue,
    link: 'https://github.com/DavidDupre/cv_David',
    technologies: ['Vue', 'TypeScript', 'CSS', 'Quasar'],
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Gestion de Usuarios',
    description: 'Sistema de gestión de usuarios ',
    image: angular,
    link: 'https://github.com/DavidDupre/GestionUsuarios',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Ecommerse',
    image: react,
    description: 'Realizar pagos de productos tecnologicos a traves de un portal web',
    link: 'https://github.com/DavidDupre/ecommerce',
    technologies: ['JavaScript', 'TypeScript', 'Html', 'ReactJs'],
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'AppFlutter',
    image: flutter,
    description:
      'Aplicación móvil desarrollada en Flutter que permite realizar recargas móviles, consultar proveedores y almacenar información de transacciones',
    link: 'https://github.com/DavidDupre/AppFlutter',
    technologies: ['Flutter', 'TypeScript', 'CSS'],
    category: 'Mobile App',
  },
  {
    id: 4,
    title: 'proyecto-html-restaurante',
    image: html,
    description: 'Aplicación web de gestión de usuarios y pedidos para un sistema de restaurante',
    link: 'https://github.com/DavidDupre/proyecto-html-restaurante',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    category: 'Mobile App',
  },
  {
    id: 5,
    title: 'Prueba_Tecnica_davidDupre',
    image: java,
    description:
      'Calcular la liquidación de seguros para asegurados, aplicando reglas de negocio específicas',
    link: 'https://github.com/DavidDupre/Prueba_Tecnica_davidDupre',
    technologies: ['Java', 'SpringBoot', 'MySQL', 'Maven'],
    category: 'Mobile App',
  },
]);

const selectCategory = ref('All');
const filterProjects = computed(() => {
  const filtered =
    selectCategory.value === 'All'
      ? Proyect.value
      : Proyect.value.filter(
          (proyect) =>
            proyect.category.toLowerCase().trim() === selectCategory.value.toLowerCase().trim(),
        );
  return filtered;
});
</script>
