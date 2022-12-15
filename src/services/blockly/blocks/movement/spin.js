import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const Spin = {
  kind: "block",
  type: "movement_spin",
  fields: {
    DIRECTION: "LEFT",
  },
  inputs: {
    POWER: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 50,
        },
      },
    },
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "movement_spin",
    message0: "Spin %1 at %2 % power",
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
        type: "input_value",
        name: "POWER",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "Spin the robot in the given direction at the given power",
    helpUrl: "",
  },
]);

pythonGenerator["movement_spin"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let power = pythonGenerator.valueToCode(
    block,
    "POWER",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `myRobot.spin("${direction}", ${power})\n`;
};

export default Spin;
