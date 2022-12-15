import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";
import {directionDropdown, distanceValue, powerValue} from "./utils/arguments";
import {distanceBlock, powerBlock} from "./utils/shadowBlocks";

const movement_driveDistance = {
    kind: "block",
    type: "movement_driveDistance",
    fields: {
        DIRECTION: "FORWARD",
    },
    inputs: {
        POWER: powerBlock,
        DISTANCE: distanceBlock,
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_driveDistance",
        message0: "Drive %1 at %2 power for %3 centimeters",
        args0: [
            directionDropdown,
            powerValue,
            distanceValue,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Move the robot in the given direction at the given power for the given distance",
        helpUrl: "",
    },
]);

pythonGenerator["movement_driveDistance"] = function (block) {
    let direction = block.getFieldValue("DIRECTION").toString()
    let power = pythonGenerator.valueToCode(
        block,
        "POWER",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    let distance = pythonGenerator.valueToCode(
        block,
        "DISTANCE",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    return `myRobot.drive_distance("${direction}", ${power}, ${distance})\n`;
};

export default movement_driveDistance;