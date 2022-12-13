import { defineStore } from "pinia";

export const useUIStore = defineStore("UIStore", {
    state: () => ({
        showBlocklyEditor: false,
        showMonacoEditor: true,
        showLoadProjectModal: false,
    }),
});
