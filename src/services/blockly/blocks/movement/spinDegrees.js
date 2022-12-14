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
    type: "movement_spin_degrees",
    message0: "Spin %1 %2 %3 ° %4 at %5 °/s",
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
        name: "DEGREES",
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

pythonGenerator["movement_spin_degrees"] = function (block) {
  let direction = block.getFieldValue("DIRECTION").toString();
  let degrees = pythonGenerator.valueToCode(
    block,
    "DEGREES",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  let speed = pythonGenerator.valueToCode(
    block,
    "SPEED",
    pythonGenerator.ORDER_ATOMIC
  ).toString();
  return `movement.spin_degrees("${direction}", ${degrees}), ${speed})\n`;
};

export default SpinDegrees;
