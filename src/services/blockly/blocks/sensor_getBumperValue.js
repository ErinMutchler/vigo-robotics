import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { sensorColor } from "./utils/colors";
import {sensorDropdown} from "./utils/arguments";

const sensor_getBumperValue = {
    kind: "block",
    type: "sensor_getBumperValue",
    fields: {
        SENSOR: "LEFT",
    },
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_getBumperValue",
        message0: "Get the %1 bumper value",
        args0: [
            sensorDropdown,
        ],
        output: "Boolean",
        colour: sensorColor,
        tooltip: "Get the value of the given bumper",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_getBumperValue"] = function (block) {
    let sensor = block.getFieldValue("SENSOR").toString()
    return [`myRobot.get_bumper_value("${sensor}")`, pythonGenerator.ORDER_NONE];
};

export default sensor_getBumperValue;
