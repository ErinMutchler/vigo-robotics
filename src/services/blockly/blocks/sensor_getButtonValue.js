import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { sensorColor } from "./utils/colors";
import {buttonDropdown} from "./utils/arguments";

const sensor_getButtonValue = {
    kind: "block",
    type: "sensor_getButtonValue",
    fields: {
        BUTTON: "A",
    },
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_getButtonValue",
        message0: "Get the %1 button value",
        args0: [
            buttonDropdown,
        ],
        output: "Boolean",
        colour: sensorColor,
        tooltip: "Get the value of the given button",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_getButtonValue"] = function (block) {
    let button = block.getFieldValue("BUTTON").toString();
    return [`myRobot.get_button_value(${button})`, pythonGenerator.ORDER_NONE];
};

export default sensor_getButtonValue;
