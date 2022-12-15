import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { sensorColor } from "./utils/colors";

const sensor_getUltrasonicValue = {
    kind: "block",
    type: "sensor_getUltrasonicValue",
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_getUltrasonicValue",
        message0: "Get ultrasonic sensor value",
        output: "Number",
        colour: sensorColor,
        tooltip: "Get the value of the ultrasonic sensor",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_getUltrasonicValue"] = function (block) {
    return ["myRobot.get_ultrasonic_value()", pythonGenerator.ORDER_NONE];
};

export default sensor_getUltrasonicValue;
