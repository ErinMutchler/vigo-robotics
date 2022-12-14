import * as monaco from "monaco-editor";
import { useProjectStore } from "@/stores/ProjectStore";

class MonacoService {
  constructor() {
    this.editor = null;
  }

  inject(injectionDiv) {
    this.editor = monaco.editor.create(injectionDiv, {
      value: "",
      lineNumbers: "on",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: "vs",
      language: "python",
      automaticLayout: true,
    });
    this.projectStore = useProjectStore();
    this.projectStore.currentProject.type = "monaco";
    this.editor.getModel().onDidChangeContent(() => {
      this.projectStore.currentProject.unsavedChangesExist = true;
      this.projectStore.currentProject.code = this.editor.getValue();
    });
  }
}

export const monacoService = new MonacoService();
