import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadBumper = {
  kind: "block",
  type: "sensor_read_bumper",
  fields: {
    SENSOR: "LEFT",
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_bumper",
    message0: "Read %1 bumper sensor value",
    args0: [
      {
        type: "field_dropdown",
        name: "SENSOR",
        options: [
          ["left", "LEFT"],
          ["right", "RIGHT"],
        ],
      },
    ],
    output: "Boolean",
    colour: "#D401D4",
    tooltip: "Returns the state read from the listed bumper sensor",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_bumper"] = function (block) {
  let bumper = block.getFieldValue("SENSOR").toString();
  return [`sensor.read_bumper("${bumper}")`, pythonGenerator.ORDER_NONE];
};

export default ReadBumper;
