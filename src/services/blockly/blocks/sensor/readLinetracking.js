import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadLinetracking = {
  kind: "block",
  type: "sensor_read_linetracking",
  fields: {
    SENSOR: "LEFT",
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_linetracking",
    message0: "Read %1 line-tracking sensor value",
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
    output: "Number",
    colour: "#D401D4",
    tooltip: "Returns the value read from the listed line-tracking sensor",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_linetracking"] = function (block) {
  let linetracking = block.getFieldValue("SENSOR").toString();
  return [`sensor.read_linetracking("${linetracking}")`, pythonGenerator.ORDER_NONE];
};

export default ReadLinetracking;
