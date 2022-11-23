import { NuxtApp } from "#app";
import { defineStore } from "pinia";

export const useContentStore = defineStore({
  id: "content-store",
  state: () => ({
    heros: [],
  }),

  actions: {
    async getHeroContent() {
      try {
        const { $client } = useNuxtApp();
        const response = await $client.getEntries({
          content_type: "landingContent",
        });
        if (response.items.length > 0) {
          this.heros = response.items;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
