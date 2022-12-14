import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadGyroscope = {
  kind: "block",
  type: "sensor_read_gyroscope",
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_gyroscope",
    message0: "Read gyroscope sensor value",
    output: "Array",
    colour: "#D401D4",
    tooltip: "Returns an array with the X, Y, and Z axis gyroscope values",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_gyroscope"] = function (block) {
  return ["sensor.read_gyroscope()", pythonGenerator.ORDER_NONE];
};

export default ReadGyroscope;
