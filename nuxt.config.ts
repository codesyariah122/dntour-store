// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        tailwindcss: {
          cssPath: "~/assets/css/tailwind.css",
          configPath: "tailwind.config",
          exposeConfig: false,
          config: {},
          injectPosition: 0,
          viewer: true,
        },
      },
    ],
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
    public: {
      CONTENTFUL_SPACE: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE,
      CONTENTFUL_ACCESS_TOKEN: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      apiBase: "/api",
    },
  },
  app: {
    head: {
      title: "D & N Tour Travel | Travel Bandung Bandara",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        { src: "https://awesome-lib.js" },
        {
          src: "https://unpkg.com/flowbite@1.5.4/dist/flowbite.js",
          body: true,
        },
      ],
      link: [
        { rel: "stylesheet", href: "https://awesome-lib.css" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css",
        },
      ],
      style: [],
      noscript: [],
    },
  },
});
