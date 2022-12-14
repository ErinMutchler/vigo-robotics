import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadMotorSpeed = {
  kind: "block",
  type: "sensor_read_motorspeed",
  fields: {
    MOTOR: "LEFT",
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_motorspeed",
    message0: "Read current speed of %1 motor",
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
    output: "Number",
    colour: "#D401D4",
    tooltip: "Returns the speed of the listed motor in cm/s",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_motorspeed"] = function (block) {
  let motor = block.getFieldValue("MOTOR").toString();
  return [`sensor.read_motorspeed("${motor}")`, pythonGenerator.ORDER_NONE];
};

export default ReadMotorSpeed;
