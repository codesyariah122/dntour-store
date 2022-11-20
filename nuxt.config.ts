// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
  app: {
    head: {
      title: "D & N Tour Travel | Travel Bandung Bandara",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [{ src: "https://awesome-lib.js" }],
      link: [{ rel: "stylesheet", href: "https://awesome-lib.css" }],
      style: [],
      noscript: [],
    },
  },
});
