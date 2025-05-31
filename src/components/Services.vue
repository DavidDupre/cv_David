<template>
  <section class="text-primary" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-[#1A2E66]">Sercvicios</h2>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      <div v-for="service in services" :key="service.title"
        class="px-8 py-12 rounded-xl bg-[#1A2E66] shadow-lg border border-secondary">
        <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
          :style="{ backgroundImage: 'url(' + service.image + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
        </div>
        <div class="text-center">
          <h5 class="pt-8 text-lg font-semibold uppercase text-white bg-clip-text bg-gardient-to-r lg:text-xl">{{
            service.title }}</h5>
          <p class="text-white pt-4 text-sm group-hover:text-white md:text-base">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import front from '../assets/front.png';
import back from '../assets/back.png';
import disenio from '../assets/disenio.png';
import cloud from '../assets/cloud.png';
import integracion from '../assets/integracion.png';
import web from '../assets/web.jpeg';

const services = ref([
  {
    title: 'Desarrollo Frontend',
    description: 'Creación de interfaces web responsivas con Vue.js, Angular, TypeScript y Bootstrap, optimizadas para todos los dispositivos.',
    image: front,
  },
  {
    title: 'APIs y Backend',
    description: 'Desarrollo de APIs robustas con Node.js, Spring Boot y .NET Core, con integración a bases de datos SQL/Oracle.',
    image: back,
  },
  {
    title: 'Diseño UI/UX',
    description: 'Prototipado y diseño de interfaces modernas centradas en la experiencia de usuario.',
    image: disenio,
  },
  {
    title: 'Aplicaciones Cloud',
    description: 'Despliegue y gestión de aplicaciones en entornos cloud (AWS y Azure) con arquitecturas escalables.',
    image: cloud,
  },
  {
    title: 'Integración de Sistemas',
    description: 'Conecto aplicaciones con APIs externas y aseguro la interoperabilidad entre sistemas.',
    image: integracion,
  },
  {
    title: 'Mantenimiento Web',
    description: 'Actualización, optimización y resolución de problemas en aplicaciones existentes.',
    image: web,
  },
]);
</script>
