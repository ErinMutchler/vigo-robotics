import Blockly from "blockly";
import { options } from "@/services/blockly/BlocklyOptions";

class BlocklyService {
  constructor() {
    this.workspace = {};
  }

  inject(blocklyArea, blocklyDiv) {
    this.workspace = Blockly.inject(blocklyDiv, options);

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
}

export const blocklyService = new BlocklyService();
