<template>
  <div>
    <NuxtLayout name="default">
      <template #header> Some header template content. </template>
      The rest of the page
      <button @click="testStore.setMessage('New Message')">Test Store</button>
      <pre>
        {{ testStore.message }}
      </pre>

      <h2>
        {{ counter.count }}
      </h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>

      <pre>
        {{ heros }}
      </pre>
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
console.log(heros);

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
