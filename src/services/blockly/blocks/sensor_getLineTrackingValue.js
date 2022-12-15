import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { sensorColor } from "./utils/colors";
import {sensorDropdown} from "./utils/arguments";

const sensor_getLineTrackingValue = {
    kind: "block",
    type: "sensor_getLineTrackingValue",
    fields: {
        SENSOR: "LEFT",
    },
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "sensor_getLineTrackingValue",
        message0: "Get the %1 line tracking sensor value",
        args0: [
            sensorDropdown,
        ],
        output: "Number",
        colour: sensorColor,
        tooltip: "Get the value of the given line tracking sensor from 0 to 65536",
        helpUrl: "",
    },
]);

pythonGenerator["sensor_getLineTrackingValue"] = function (block) {
    let sensor = block.getFieldValue("SENSOR").toString()
    return [`myRobot.get_line_tracking_value("${sensor}")`, pythonGenerator.ORDER_NONE];
};

export default sensor_getLineTrackingValue;
