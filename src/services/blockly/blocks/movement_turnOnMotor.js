import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";
import {powerValue, directionDropdown, motorDropdown} from "./utils/arguments";
import {powerBlock} from "./utils/shadowBlocks";

const movement_turnOnMotor = {
    kind: "block",
    type: "movement_turnOnMotor",
    fields: {
        MOTOR: "LEFT",
        DIRECTION: "FORWARD",
    },
    inputs: {
        POWER: powerBlock,
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_turnOnMotor",
        message0: "Turn the %1 motor %2 at %3 power",
        args0: [
            motorDropdown,
            directionDropdown,
            powerValue,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Turn the given motor on moving the given direction at the given power",
        helpUrl: "",
    },
]);

pythonGenerator["movement_turnOnMotor"] = function (block) {
    let motor = block.getFieldValue("MOTOR").toString();
    let direction = block.getFieldValue("DIRECTION").toString();
    let power = pythonGenerator.valueToCode(
        block,
        "POWER",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    return `myRobot.turn_on_motor("${motor}", "${direction}", ${power})\n`;
};

export default movement_turnOnMotor;