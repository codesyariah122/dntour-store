<template>
  <div class="bg-grey">
    <NuxtLayout name="default">
      <template #header> Some header template content. </template>
      The rest of the page
      <button @click="testStore.setMessage('New Message')">Test Store</button>
      <pre>
          {{ testStore.message }}
        </pre
      >

      <h2>
        {{ counter.count }}
      </h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <form class="text-gray-600 body-font">
        <div class="container px-5 py-24">
          <div class="lg:w-3/5 md:w-1/2">
            <h1 class="text-gray-900">Subscribe to my newsletter</h1>
            <p class="leading-relaxed mt-4">
              I send out a weekly newsletter with tips and tricks for web
              development.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Subscribe
            </h2>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded"
              />
            </div>
            <button class="text-white bg-indigo-500">Subscribe</button>
          </div>
        </div>
      </form>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useNuxtApp } from "#app";
import { useTestStore, useCounter, useContentStore } from "~/stores";

const testStore = useTestStore();
const counter = useCounter();
const herosContent = useContentStore();

const heros = computed(() => herosContent.heros);

const getHeroContent = async () => {
  await herosContent.getHeroContent();
};

const increment = () => {
  counter.increment();
};
const decrement = () => {
  counter.decrement();
};

const updateLayout = () => {
  setPageLayout("artikel");
};

onMounted(() => {
  getHeroContent();
});

definePageMeta({
  layout: "false",
});
</script>
