import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const turnOffMotor = {
  kind: "block",
  type: "movement_turn_off_motor",
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "movement_turn_off_motor",
    message0: "Stop %1 motor",
    args0: [
      {
        type: "field_dropdown",
        name: "MOTOR",
        options: [
          ["left", "LEFT"],
          ["right", "RIGHT"],
        ],
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#1E90FF",
    tooltip: "Turn the given motor off",
    helpUrl: "",
  },
]);

pythonGenerator["movement_turn_off_motor"] = function (block) {
  let motor = block.getFieldValue("MOTOR").toString();
  return `myRobot.turn_off_motor("${motor}")\n`;
};

export default turnOffMotor;
