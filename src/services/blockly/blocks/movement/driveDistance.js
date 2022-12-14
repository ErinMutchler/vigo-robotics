import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const DriveDistance = {
  kind: "block",
  type: "movement_drive_distance",
  fields: {
    DIRECTION: "FORWARD",
  },
  inputs: {
    DISTANCE: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 0,
        },
      },
    },
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
    type: "movement_drive_distance",
    message0: "Drive %1 %2 %3 cm %4 at %5 cm/s",
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
        name: "DISTANCE",
        check: "Number",
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

pythonGenerator["movement_drive_distance"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let distance = pythonGenerator.valueToCode(
    block,
    "DISTANCE",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  let speed = pythonGenerator.valueToCode(
    block,
    "SPEED",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `movement.drive_distance("${direction}", ${distance}, ${speed})\n`;
};

export default DriveDistance;
