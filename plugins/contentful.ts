import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient({
        space: "hm3eztweb2rs",
        accessToken: "Ja5jwDNyj2buGBSyQpO3MLiiigOs8ayyo8V6wWt5EL4",
      }),
    },
  };
});
