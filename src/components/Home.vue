<template>
  <section
    class="relative w-full"
    id="home"
  >
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2x1 md:max-w-3x1 mx-auto"
      >
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl text-[#1A2E66]">
              Hola, soy
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-[#1A2E66] to-blue-500"
              >
                David Dupre
              </span>
            </h1>
          </div>
          <p class="text-secondary pt-8 text-center lg:text-left mx-auto max-w-xl">
            <span class="font-semibold text-[#1A2E66]">Mi filosofía:</span>
            Código limpio, diseño intuitivo y soluciones escalables. Cuando no estoy programando,
            probablemente esté aprendiendo una nueva tecnología o mejorando mis habilidades
            existentes.
          </p>
          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
              @click="openWhatsApp"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-[#1A2E66] border-2 border-transparent"
              ></span>
              <span class="relative flex items-center justify-center text-white">WhatsApp</span>
            </button>
            <button
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              >
                <div class="svg-container">
                  <svg
                    class="download-icon"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="download-arrow"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                      stroke="#f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                    20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                    20.1213C16/6839 19.5587 17 18.7956 17 18V17"
                      stroke="f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                </div>
                <a
                  href="/CVDavidDupre.pdf"
                  download="CV_DavidDupre.pdf"
                  class="pl-2 text-primary"
                >
                  Descargar CV
                </a>
              </div>
            </button>
          </div>
        </div>
        <div class="lg:h-full md:flex">
          <div
            class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:h-full items-center relative"
          >
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w/5/6 right-0 h-[calc(80%+20px bg-gradient-to-tr opacity-25 from[#570cac] to-primary blur-2xl)]"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary"
            >
              <img
                src="../assets/1694626639540.jpg"
                alt="Imagen"
                width="500"
                height="auto"
                loading="lazy"
                class="object-cover rounded-full w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openWhatsApp = () => {
  const phoneNumber = '573143441694';
  const message = encodeURIComponent('Hola David, vi tu portafolio y me gustaría contactarte...');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, '_blank');
};
</script>

<style lang="scss"></style>
