import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      client: createClient({
        space: config.public.CONTENTFUL_SPACE,
        accessToken: config.public.CONTENTFUL_ACCESS_TOKEN,
      }),
    },
  };
});
