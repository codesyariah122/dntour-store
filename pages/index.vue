<template>
  <div>
    <NuxtLayout name="default">
      <template #header> Some header template content. </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const updateLayout = () => {
  setPageLayout("artikel");
};

definePageMeta({
  layout: "false",
});
</script>
