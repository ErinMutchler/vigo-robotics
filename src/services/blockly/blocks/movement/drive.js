import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const Drive = {
  kind: "block",
  type: "movement_drive",
  fields: {
    DIRECTION: "FORWARD",
  },
  inputs: {
    SPEED: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 10,
        },
      },
    },
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "movement_drive",
    message0: "Drive %1 at %2 %3 cm/s",
    args0: [
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          ["forward", "FORWARD"],
          ["backward", "BACKWARD"],
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

pythonGenerator["movement_drive"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let speed = pythonGenerator.valueToCode(
    block,
    "SPEED",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `robot.drive("${direction}", ${speed})\n`;
};

export default Drive;
