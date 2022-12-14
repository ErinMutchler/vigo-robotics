import * as monaco from "monaco-editor";
import {options} from "@/services/monaco/MonacoOptions";

class MonacoService {
  constructor() {
    this.editor = null;
  }

  inject(injectionDiv) {
    this.editor = monaco.editor.create(injectionDiv, options);
  }

  startChangeListener(eventHandler) {
    this.editor.getModel().onDidChangeContent(eventHandler);
  }

  clearEditor() {
    this.editor.setValue(options.value);
  }

  loadCode(code) {
    this.editor.setValue(code + "");
  }

  getCode() {
    return this.editor.getValue();
  }
}

export const monacoService = new MonacoService();
