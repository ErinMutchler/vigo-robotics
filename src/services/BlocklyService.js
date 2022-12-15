import Blockly from "blockly";
import options from "@/services/blockly/options";
import { pythonGenerator } from "blockly/python";

class BlocklyService {
  constructor() {
    this.workspace = {};
  }

  inject(injectionDiv, injectionArea) {
    this.injectionDiv = injectionDiv;
    this.injectionArea = injectionArea;
    this.workspace = Blockly.inject(this.injectionArea, options);

    document.querySelectorAll('[class$="CategoryLabel"]').forEach((element) => {
      element.classList.add("categoryLabel");
    });

    document.querySelectorAll('[class$="CategoryIcon"]').forEach((element) => {
      element.classList.add("categoryIcon");
    });
  }

  startChangeListener(eventHandler) {
    this.workspace.addChangeListener((event) => {
      if (
        event.type === Blockly.Events.BLOCK_CREATE ||
        event.type === Blockly.Events.BLOCK_DELETE ||
        event.type === Blockly.Events.BLOCK_CHANGE ||
        event.type === Blockly.Events.BLOCK_DRAG ||
        event.type === Blockly.Events.BLOCK_MOVE ||
        event.type === Blockly.Events.VAR_CREATE ||
        event.type === Blockly.Events.VAR_RENAME ||
        event.type === Blockly.Events.VAR_DELETE
      ) {
        eventHandler();
      }
    });
  }

  startResizeListener() {
    window.addEventListener(
      "resize",
      () => {
        let element = this.injectionDiv;
        let x = 0;
        let y = 0;
        while (element) {
          x += element.offsetLeft;
          y += element.offsetTop;
          element = element.offsetParent;
        }
        this.injectionArea.style.left = x + "px";
        this.injectionArea.style.top = y + "px";
        this.injectionArea.style.width = this.injectionDiv.offsetWidth + "px";
        this.injectionArea.style.height = this.injectionDiv.offsetHeight + "px";
        Blockly.svgResize(this.workspace);
      },
      false
    );
  }

  clearWorkspace() {
    Blockly.getMainWorkspace().clear();
  }

  loadWorkspace(workspace) {
    Blockly.serialization.workspaces.load(workspace, this.workspace);
  }

  getWorkspaceAsString() {
    return JSON.stringify(
      Blockly.serialization.workspaces.save(this.workspace)
    );
  }

  getPythonCode() {
    return pythonGenerator.workspaceToCode(this.workspace);
  }
}

export const blocklyService = new BlocklyService();
