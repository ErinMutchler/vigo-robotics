import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadAccelerometer = {
  kind: "block",
  type: "sensor_read_accelerometer",
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_accelerometer",
    message0: "Read accelerometer sensor value",
    output: "Array",
    colour: "#D401D4",
    tooltip: "Returns an array with the X, Y, and Z axis accelerometer values",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_accelerometer"] = function (block) {
  return ["sensor.read_accelerometer()", pythonGenerator.ORDER_NONE];
};

export default ReadAccelerometer;
