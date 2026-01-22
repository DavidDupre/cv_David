<template>
  <section
    class="text-secondary mt-18"
    id="experience"
  >
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
        <h2 class="text-4xl font-bold text-[#1A2E66] text-left mb-8">
          Mis
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1A2E66] to-blue-300">
            Habilidades
          </span>
        </h2>
        <div
          class="mt-8"
          v-for="skills in Skills"
          :key="skills.id"
        >
          <div class="flex items-end justify-between">
            <h4 class="font-semibold uppercase text-[#4A4A4A]">
              {{ skills.name }}
            </h4>
            <h3 class="text-2xl font-bold text-[#4A4A4A]">
              {{ skills.width }}
            </h3>
          </div>
          <div class="mt-2 h-1-full bg-white rounded-full">
            <div
              class="h-1 rounded-full bg-[#1A2E66]"
              :style="`width: ${skills.width};`"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-4xl font-bold text-[#1A2E66] text-left mb-8 md:text-center md:mt-0 mt-8">
          Mi Experiencia
        </h2>
        <div class="space-y-8 py-8">
          <div
            v-for="experience in Experience"
            :key="experience.id"
            class="flex items-center rounded-xl p-4 bg-[#1A2E66] shadow-lg border"
          >
            <div class="w-1/4">
              <img
                src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png"
                alt="lawyer"
              />
            </div>
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
              >
                {{ experience.name }}
              </h3>
              <p class="text-white">
                {{ experience.company }}
              </p>
              <p class="text-white">
                {{ experience.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const Skills = ref([
  {
    id: 1,
    name: 'JavaScript',
    width: '80%',
  },
  {
    id: 2,
    name: 'Java',
    width: '70%',
  },
  {
    id: 3,
    name: 'Typescript',
    width: '80%',
  },
  {
    id: 4,
    name: 'Bootstrap',
    width: '70%',
  },
  {
    id: 5,
    name: 'Angular',
    width: '80%',
  },
  {
    id: 6,
    name: 'Html5',
    width: '90%',
  },
  {
    id: 7,
    name: 'Html',
    width: '90%',
  },
  {
    id: 8,
    name: 'Spring Boot',
    width: '70%',
  },
  {
    id: 9,
    name: 'Vue.Js',
    width: '80%',
  },
  {
    id: 10,
    name: 'CSS',
    width: '90%',
  },
  {
    id: 11,
    name: 'Node.JS',
    width: '70%',
  },
  {
    id: 12,
    name: 'Next.js',
    width: '60%',
  },
]);

const Experience = ref([
  {
    id: 1,
    name: 'Desarrollador',
    company: 'Linktic S.A.S',
    date: '2024 - Actualidad',
  },
  {
    id: 2,
    name: 'Desarrollador',
    company: 'Soluciones 360°',
    date: '2023 - 2024',
  },
]);
</script>
