import Blockly from "blockly";
import {toolbox} from "@/services/blockly/BlocklyToolbox";

export const options = {
  sounds: true,
  trashcan: false,
  renderer: "zelos",
  theme: Blockly.Theme.defineTheme("vcplTheme", {
    blockStyles: {
      logic_blocks: {
        colourPrimary: "#E3008C",
      },
      loop_blocks: {
        colourPrimary: "#00AA00",
      },
      math_blocks: {
        colourPrimary: "#00A4A6",
      },
      text_blocks: {
        colourPrimary: "#DC143C",
        colourTernary: "#DC143C",
        colourSecondary: "#DC143C",
      },
      list_blocks: {
        colourPrimary: "#9400D3",
      },
      variable_blocks: {
        colourPrimary: "#3455DB",
      },
      procedure_blocks: {
        colourPrimary: "#E65722",
      },
    },
  }),
  move: {
    scrollbars: true,
    wheel: true,
  },
  zoom: {
    controls: false,
    maxScale: 2.5,
    minScale: 0.2,
    scaleSpeed: 1.5,
    startScale: 1.1,
  },
  grid: {
    spacing: 45,
    length: 7,
    colour: "rgba(189, 195, 199, 0.30)",
    snap: false,
  },
  toolbox: toolbox,
};
