import { useProjectStore } from "@/stores/ProjectStore.js";

class ProjectService {
  constructor() {}

  attachProjectStore() {
    this.projectStore = useProjectStore();
  }

  saveProject() {
    this.projectStore.currentProject.unsavedChangesExist = false;
    if (this.projectStore.currentProject.firestoreID) {
    }
  }

  createProject() {
    console.log("creating");
  }

  loadProject() {
    this.projectStore.currentProject.unsavedChangesExist = false;
  }

  deleteProject() {
    console.log("deleting");
  }

  updateProject() {
    console.log("updating");
  }

  downloadProject() {
    console.log("downloading");
  }
}

export const projectService = new ProjectService();
