import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { sensorColor } from "./utils/colors";
import {motorDropdown} from "./utils/arguments";

const sensor_getDistanceCounter = {
    kind: "block",
    type: "sensor_getDistanceCounter",
    fields: {
        MOTOR: "LEFT",
    },
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_getDistanceCounter",
        message0: "Get the %1 motor distance counter",
        args0: [
            motorDropdown,
        ],
        output: "Number",
        colour: sensorColor,
        tooltip: "Get the current distance traveled by the given motor in centimeters",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_getDistanceCounter"] = function (block) {
    let motor = block.getFieldValue("MOTOR").toString();
    return [`myRobot.get_distance_counter("${motor}")`, pythonGenerator.ORDER_NONE];
};

export default sensor_getDistanceCounter;
