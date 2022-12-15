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
    tooltip: "Get the value of the ultrasonic sensor",
    helpUrl: "",
  },
]);

pythonGenerator["sensor_read_ultrasonic"] = function (block) {
  return ["myRobot.get_ultrasonic_value()", pythonGenerator.ORDER_NONE];
};

export default ReadUltrasonic;
