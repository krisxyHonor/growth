import { createPinia, Pinia, defineStore, StoreDefinition } from "pinia";

const pinia: Pinia = createPinia();

const useCommonStore: StoreDefinition = defineStore("common", {
  state: () => ({}),
  actions: {},
});

export { pinia, useCommonStore };
