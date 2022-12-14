import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [],
    currentProject: {
      name: "",
      type: null,
      firestoreID: null, // updated in ProjectService
      author: null, // updated in AuthService
      workspace: "", // updated in blockly
      code: "", // updated in BlocklyService and MonacoService
      unsavedChangesExist: false, // updated in ProjectService
    },
  }),
});
