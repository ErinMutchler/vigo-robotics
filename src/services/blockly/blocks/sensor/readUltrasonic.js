import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

const ReadUltrasonic = {
  kind: "block",
  type: "sensor_read_ultrasonic",
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "sensor_read_ultrasonic",
    message0: "Read ultrasonic sensor value",
    output: "Number",
    colour: "#D401D4",
    tooltip: "Returns the value read from the ultrasonic sensor in centimeters",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_ultrasonic"] = function (block) {
  return ["sensor.read_ultrasonic()", pythonGenerator.ORDER_NONE];
};

export default ReadUltrasonic;
