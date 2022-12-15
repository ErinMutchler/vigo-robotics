import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const SpinDegrees = {
  kind: "block",
  type: "movement_spin_degrees",
  fields: {
    DIRECTION: "LEFT",
  },
  inputs: {
    DEGREES: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 90,
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
    type: "movement_spin_degrees",
    message0: "Spin %1 at %2 % power for %3 degrees",
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
      {
        type: "input_value",
        name: "DEGREES",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "Spin the robot in the given direction at the given power for the given degrees",
    helpUrl: "",
  },
]);

pythonGenerator["movement_spin_degrees"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let degrees = pythonGenerator.valueToCode(
    block,
    "DEGREES",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  let power = pythonGenerator.valueToCode(
    block,
    "POWER",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `myRobot.spin_degrees("${direction}", ${power}, ${degrees}))\n`;
};

export default SpinDegrees;
