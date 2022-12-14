import { useProjectStore } from "@/stores/ProjectStore.js";
import { firestoreService } from "@/services/FirebaseConfig";
import { useAuthStore } from "@/stores/AuthStore";
import { blocklyService } from "@/services/BlocklyService";
import { monacoService } from "@/services/MonacoService";

class ProjectService {
  constructor() {
  }

  injectStores() {
    this.projectStore = useProjectStore();
    this.authStore = useAuthStore();
  }

  saveProject() {
    this.projectStore.currentProject.unsavedChangesExist = false;
    if (this.projectStore.currentProject.firestoreID === "") {
      if (this.projectStore.currentProject.name.trim().length === 0) {
        alert("Please enter a valid project name");
        return;
      }
      firestoreService
        .createProject(
          this.projectStore.currentProject.name,
          this.projectStore.currentProject.type,
          this.authStore.uid,
          this.projectStore.currentProject.workspace,
          this.projectStore.currentProject.code
        )
        .then((doc) => {
          this.projectStore.currentProject.firestoreID = doc.id;
        });
    } else {
      firestoreService.updateProject(
        this.projectStore.currentProject.workspace,
        this.projectStore.currentProject.code,
        this.projectStore.currentProject.firestoreID
      );
    }
  }

  createProject() {
    if (this.projectStore.currentProject.unsavedChangesExist) {
      if (
        !confirm("Unsaved changes exist.\nAre you sure you want to continue?")
      ) {
        return;
      }
    }
    this.projectStore.currentProject.name = "";
    this.projectStore.currentProject.firestoreID = "";
    this.projectStore.currentProject.unsavedChangesExist = false;

    if (this.projectStore.currentProject.type === "blockly") {
      blocklyService.clearWorkspace();
    } else if (this.projectStore.currentProject.type === "monaco") {
      monacoService.clearEditor();
    }
  }

  loadProject(firestoreID) {
    if (this.projectStore.currentProject.unsavedChangesExist) {
      if (
        !confirm("Unsaved changes exist.\nAre you sure you want to continue?")
      ) {
        return;
      }
    }
    firestoreService.loadProject(firestoreID).then((doc) => {
      const project = doc.data();
      if (this.projectStore.currentProject.type === "blockly") {
        blocklyService.loadWorkspace(JSON.parse(project.workspace));
      } else if (this.projectStore.currentProject.type === "monaco") {
        monacoService.loadCode(project.code);
      }
      setTimeout(() => {
        this.projectStore.currentProject.name = project.name;
        this.projectStore.currentProject.workspace = project.workspace;
        this.projectStore.currentProject.code = project.code;
        this.projectStore.currentProject.unsavedChangesExist = false;
        this.projectStore.currentProject.firestoreID = firestoreID;
      }, 200);
    });
  }

  deleteProject() {
    if (!confirm("Deleting this project cannot be undone.\nAre you sure you want to continue?")) {
      return;
    }
    if (this.projectStore.currentProject.firestoreID.length > 0) {
      firestoreService.deleteProject(this.projectStore.currentProject.firestoreID);
    }
    this.projectStore.currentProject.unsavedChangesExist = false;
    this.createProject();

  }

  async downloadProject() {
    const boilerplate = this.projectStore.currentProject.type === "blockly" ? "import time\nimport robot\nmyRobot = robot.Robot()\n" : "";
    const [fileHandle] = await window.showOpenFilePicker();
    const writable = await fileHandle.createWritable();
    await writable.write(boilerplate + this.projectStore.currentProject.code);
    await writable.close();
  }
}

export const projectService = new ProjectService();