import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [],
    currentProject: {
      name: "",
      type: null,
      firestoreID: "",
      author: "",
      workspace: "",
      code: "",
      unsavedChangesExist: false,
    },
  }),
  getters: {
    getProjects(state) {
      return state.projects.filter((project) => {
        return project.author === state.currentProject.author && project.type === state.currentProject.type;
      })
    },
  },
  actions: {
    resetCurrentProject() {
      this.currentProject.name = "";
      this.currentProject.firestoreID = "";
      this.currentProject.workspace = "";
      this.currentProject.code = "";
      this.currentProject.unsavedChangesExist = false;
    }
  }

});
