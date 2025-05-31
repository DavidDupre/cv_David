<template>
  <div class="min-h-screen">
    <NavBar />
    <HomeSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceSection />
    <ProyectsSection />
    <ContactSection />
    <FooterSection />
    <ButtonPersonalizedSection />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const HomeSection = defineAsyncComponent(() => import('./components/Home.vue'));
const ServicesSection = defineAsyncComponent(() => import('./components/Services.vue'));
const AboutSection = defineAsyncComponent(() => import('./components/AbaoutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('./components/Experience&skills.vue'));
const ProyectsSection = defineAsyncComponent(() => import('./components/Proyects.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/Contact.vue'));
const FooterSection = defineAsyncComponent(() => import('./components/Footer.vue'));
const ButtonPersonalizedSection = defineAsyncComponent(() => import('./components/buttonPersonalized.vue'));
</script>
