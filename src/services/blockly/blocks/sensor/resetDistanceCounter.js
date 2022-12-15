import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const resetDistanceCounter = {
  kind: "block",
  type: "sensor_resetDistanceCounter",
  fields: {
    MOTOR: "LEFT",
    DIRECTION: "FORWARD",
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_resetDistanceCounter",
    message0: "Reset the %1 motor distance counter",
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
    colour: "#D401D4",
    tooltip: "Turn the given motor on moving the given direction at the given power",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_resetDistanceCounter"] = function (block) {
  let motor = block.getFieldValue("MOTOR").toString();
  return `myRobot.reset_distance_counter("${motor}")\n`;
};

export default resetDistanceCounter;
