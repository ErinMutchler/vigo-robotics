import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";
import {powerBlock} from "./utils/shadowBlocks";
import {directionDropdown, powerValue} from "./utils/arguments";

const movement_drive = {
    kind: "block",
    type: "movement_drive",
    fields: {
        DIRECTION: "FORWARD",
    },
    inputs: {
        POWER: powerBlock,
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_drive",
        message0: "Drive %1 at %2 power",
        args0: [
            directionDropdown,
            powerValue,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Move the robot in the given direction at the given power",
        helpUrl: "",
    },
]);

pythonGenerator["movement_drive"] = function (block) {
    let direction = block.getFieldValue("DIRECTION").toString()
    let power = pythonGenerator.valueToCode(
        block,
        "POWER",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    return `myRobot.drive("${direction}", ${power})\n`;
};

export default movement_drive;