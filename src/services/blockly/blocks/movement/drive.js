import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const Drive = {
  kind: "block",
  type: "movement_drive",
  fields: {
    DIRECTION: "FORWARD",
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
    type: "movement_drive",
    message0: "Drive %1 at %2 %3 % power",
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
        name: "POWER",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "Move the robot in the given direction at the given power",
    helpUrl: "",
  },
]);

pythonGenerator["movement_drive"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let power = pythonGenerator.valueToCode(
    block,
    "POWER",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `myRobot.drive("${direction}", ${power})\n`;
};


export default Drive;
