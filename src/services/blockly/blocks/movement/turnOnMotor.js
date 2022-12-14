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
    NAME: {
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
    type: "movement_turn_on_motor",
    message0: "Run %1 motor %2 at %3 %4 cm/s",
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
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "NAME",
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

pythonGenerator["movement_turn_on_motor"] = function (block) {
  let motor = block.getFieldValue("MOTOR").toString();
  let direction = block.getFieldValue("DIRECTION").toString();
  let power = pythonGenerator.valueToCode(
    block,
    "NAME",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `movement.run_motor("${motor}", "${direction}", ${power})\n`;
};

export default turnOnMotor;
