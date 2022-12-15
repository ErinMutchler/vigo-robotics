import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const turnOnMotor = {
  kind: "block",
  type: "movement_turn_on_motor",
  fields: {
    MOTOR: "LEFT",
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
    type: "movement_turn_on_motor",
    message0: "Turn %1 motor %2 at %3 % power",
    args0: [
      {
        type: "field_dropdown",
        name: "MOTOR",
        options: [
          ["left", "LEFT"],
          ["right", "RIGHT"],
        ],
      },
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
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "Turn the given motor on moving the given direction at the given power",
    helpUrl: "",
  },
]);

pythonGenerator["movement_turn_on_motor"] = function (block) {
  let motor = block.getFieldValue("MOTOR").toString();
  let direction = block.getFieldValue("DIRECTION").toString();
  let power = pythonGenerator.valueToCode(
    block,
    "NAME",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `myRobot.turn_motor_on("${motor}", "${direction}", ${power})\n`;
};

export default turnOnMotor;
