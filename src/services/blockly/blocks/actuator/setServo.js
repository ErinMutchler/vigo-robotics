import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const SetServo = {
  kind: "block",
  type: "actuators_set_servo",
  fields: {
    SERVO: "1",
  },
  inputs: {
    POSITION: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 90,
        },
      },
    },
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "actuators_set_servo",
    message0: " Set servo %1 %2 to %3",
    args0: [
      {
        type: "field_dropdown",
        name: "SERVO",
        options: [
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "POSITION",
        check: "Number",
        value: 0,
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#E63022",
    tooltip: "Set the given servo to the given position",
    helpUrl: "",
  },
]);

pythonGenerator["actuators_set_servo"] = function (block) {
  let servo = block.getFieldValue("SERVO").toString();
  let position = pythonGenerator
    .valueToCode(block, "POSITION", pythonGenerator.ORDER_ATOMIC)
    .toString();
  return `myRobot.set_servo(${servo}, ${position})\n`;
};

export default SetServo;
