import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const Stop = {
  kind: "block",
  type: "movement_stop",
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "movement_stop",
    message0: "Stop motors",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "",
    helpUrl: "",
  },
]);

pythonGenerator["movement_stop"] = function (block) {
  return `movement.stop()\n`;
};

export default Stop;
