<template>
  <section class="text-secondary" id="acercademi">
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
      <div>
        <h2 class="text-4xl font-bold text-[#1A2E66] text-left mb-8 ">Mi educacion</h2>
        <div class="space-y-8 py-8">
          <div v-for="education in Education" ::key="education.id" class="flex center-items md:w-[80%] w-full rounded-xl bg-[#1A2E66] shadow-lg border border-secondary">
            <div class="w-1/4">
              <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="education.icon"/>
            </div>
            <div class="w3/4 pl-4">
              <h5 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white lg:text-xl">
                {{ education.institution }}
              </h5>
              <p class="text-white">{{ education.title }}</p>
              <p class="text-white"> {{ education.year }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full">
        <h2 class="text-4xl font-bold text-[#1A2E66] md:text-center text-left mb-4">Acerca
          <span class="text-primary bg-clip-text bg-gradient-to-r">de</span>
          Mi
        </h2>
        <p class="text-base lg:text-lg mt-8 py-8 text-[#4A4A4A]">Ingeniero de Software con 3 años de experiencia en desarrollo frontend, especializado en frameworks modernos como Angular y Vue.js.
        Apasionado por crear interfaces de usuario responsivas y eficientes utilizando tecnologías como TypeScript, JavaScript y Bootstrap.</p>
        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8 flex items-center justify-center">
          <div class="text-center rounded-xl bg-[#1A2E66] shadow-lg border border-secondary p-3">
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">10</h3>
            <p class="text-sm sm:text-base text-white">Tecnologías dominadas</p>
          </div>
          <div class="text-center rounded-xl bg-[#1A2E66] shadow-lg border border-secondary p-3">
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">7</h3>
            <p class="text-sm sm:text-base text-white">Proyectos</p>
          </div>
          <div class="text-center rounded-xl bg-[#1A2E66] shadow-lg border border-secondary p-3">
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">3</h3>
            <p class="text-sm sm:text-base text-white">Años de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const Education = ref([
  {
    id: 1,
    title: 'Ingeniería de Software',
    institution: 'Politécnico GranColombiano',
    year: '2022 - Actualidad',
  },
  {
    id: 2,
    title: 'Certificado en Angular: De cero a experto Edición 2023',
    institution: 'Udemy',
    year: '2023',
  },
  {
    id: 3,
    title: 'Certificado en Vue.js: De cero a experto',
    institution: 'Udemy',
    year: '2025',
  },
]);
</script>
