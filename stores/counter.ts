import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => ({
    count: 0,
  }),

  getters: {
    getCounter: (state) => {
      return state.count;
    },
  },

  actions: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count > 0 ? (this.count -= 1) : this.count;
    },
  },
});
