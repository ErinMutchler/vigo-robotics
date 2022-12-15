import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {sensorColor} from "./utils/colors";
import {motorDropdown} from "./utils/arguments";

const sensor_resetDistanceCounter = {
    kind: "block",
    type: "sensor_resetDistanceCounter",
    fields: {
        MOTOR: "LEFT",
    },
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_resetDistanceCounter",
        message0: "Reset the %1 motor distance counter",
        args0: [
            motorDropdown,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: sensorColor,
        tooltip: "Set the distance counter for the given motor to 0",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_resetDistanceCounter"] = function (block) {
    let motor = block.getFieldValue("MOTOR").toString();
    return `myRobot.reset_distance_counter(${motor})\n`;
};

export default sensor_resetDistanceCounter;