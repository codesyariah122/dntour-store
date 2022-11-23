<script setup lang="ts">
import { useContentStore } from "~/stores";

const herosContent = useContentStore();

let heros: any = computed(() => herosContent.heros);

const getHeroContent = async () => {
  await herosContent.getHeroContent();
};

onMounted(() => {
  getHeroContent();
});
</script>
<template>
  <div class="container px-6 py-16 mx-auto">
    <div class="items-center lg:flex">
      <!-- <div v-for="hero in heros" :key="hero.id">
        <pre>
            {{ hero.fields.title }}
        </pre>
      </div> -->
      <div class="w-full lg:w-1/2">
        <div v-for="hero in heros" :key="hero.id" class="lg:max-w-lg sm:mt-12">
          <h1
            class="text-2xl font-semibold text-gray-800 uppercase dark:text-dark lg:text-3xl"
          >
            {{ hero.fields.headerContext }}
          </h1>

          <p class="mt-2 text-gray-600 dark:text-gray-400">
            {{ hero.fields.content }}
          </p>
          <button
            class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      <div
        v-for="hero in heros"
        :key="hero.id"
        class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
      >
        <img
          class="w-full h-74 lg:max-w-2xl lg:-mt-12"
          :src="`https:${hero.fields.cover.fields.file.url}`"
        />
      </div>
    </div>
  </div>
</template>
