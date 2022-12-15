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
          NUM: 10,
        },
      },
    },
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
    type: "movement_drive_distance",
    message0: "Drive %1 at %2 %% power for %3 centimeters",
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
        type: "input_value",
        name: "POWER",
        check: "Number",
      },
      {
        type: "input_value",
        name: "DISTANCE",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip:
      "Move the robot in the given direction at the given power for the given distance",
    helpUrl: "",
  },
]);

pythonGenerator["movement_drive_distance"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let distance = pythonGenerator
    .valueToCode(block, "DISTANCE", pythonGenerator.ORDER_ATOMIC)
    .toString();
  let power = pythonGenerator
    .valueToCode(block, "POWER", pythonGenerator.ORDER_ATOMIC)
    .toString();
  return `myRobot.drive_distance("${direction}", ${power}, ${distance})\n`;
};

export default DriveDistance;
