import { pythonGenerator } from "blockly/python";
import Blockly from "blockly";

const ReadButton = {
  kind: "block",
  type: "sensor_read_button",
  fields: {
    SENSOR: "A",
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_button",
    message0: "Read button %1 value",
    args0: [
      {
        type: "field_dropdown",
        name: "SENSOR",
        options: [
          ["A", "A"],
          ["B", "B"],
        ],
      },
    ],
    output: "Boolean",
    colour: "#D401D4",
    tooltip: "Get the value of the given button",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_button"] = function (block) {
  let button = block.getFieldValue("SENSOR").toString();
  return [`myRobot.get_button_value("${button}")`, pythonGenerator.ORDER_NONE];
};

export default ReadButton;
