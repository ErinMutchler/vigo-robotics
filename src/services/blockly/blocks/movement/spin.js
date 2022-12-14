import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const Spin = {
  kind: "block",
  type: "movement_spin",
  fields: {
    DIRECTION: "LEFT",
  },
  inputs: {
    SPEED: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 30,
        },
      },
    },
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "movement_spin",
    message0: "Spin %1 at %2 %3 °/s",
    args0: [
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          ["left", "LEFT"],
          ["right", "RIGHT"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "",
    helpUrl: "",
  },
]);

pythonGenerator["movement_spin"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let speed = pythonGenerator.valueToCode(
    block,
    "SPEED",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `movement.spin("${direction}", ${speed})\n`;
};

export default Spin;
