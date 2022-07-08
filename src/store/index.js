import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    countAddOne: (state) => state.counter + 1,
  },
  actions: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
});
