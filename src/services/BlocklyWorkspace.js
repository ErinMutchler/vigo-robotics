import Blockly, { Block } from "blockly";
import { options } from "@/services/blockly/BlocklyOptions";
import { pythonGenerator } from "blockly/python";
import { useProjectStore } from "@/stores/ProjectStore";

export class BlocklyWorkspace {
  constructor() {
    this.workspace = {};
    this.projectStore = {};
  }

  inject(blocklyDiv, blocklyArea, options) {
    this.workspace = Blockly.inject(blocklyDiv, options);
    this.projectStore = useProjectStore();
    this.startResizeListener(blocklyDiv, blocklyArea);
    this.startChangeListener();
  }
  // make this method pass in a callback which handles the event
  startChangeListener() {
    this.workspace.addChangeListener((event) => {
      this.projectStore.currentProject.code = this.getPythonCode();
      if (
        event.type == Blockly.Events.BLOCK_CREATE ||
        event.type == Blockly.Events.BLOCK_DELETE ||
        event.type == Blockly.Events.BLOCK_CHANGE ||
        event.type == Blockly.Events.BLOCK_DRAG ||
        event.type == Blockly.Events.BLOCK_MOVE ||
        event.type == Blockly.Events.VAR_CREATE ||
        event.type == Blockly.Events.VAR_RENAME ||
        event.type == Blockly.Events.VAR_DELETE
      ) {
        this.projectStore.currentProject.unsavedChangesExist = true;
        this.projectStore.currentProject.workspace =
          this.getWorkspaceAsString();
      }
    });
  }

  startResizeListener(blocklyDiv, blocklyArea) {
    window.addEventListener(
      "resize",
      () => {
        let element = blocklyArea;
        let x = 0;
        let y = 0;
        while (element) {
          x += element.offsetLeft;
          y += element.offsetTop;
          element = element.offsetParent;
        }
        blocklyDiv.style.left = x + "px";
        blocklyDiv.style.top = y + "px";
        blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
        blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
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
