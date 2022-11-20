import { defineStore } from "pinia";

export const useTestStore = defineStore({
  id: "test-store",
  state: () => ({
    message: "Hello",
  }),

  actions: {
    setMessage(newMessage) {
      this.message = newMessage;
    },
  },
});
