import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { movementColor } from "./utils/colors";
import {degreesBlock, powerBlock} from "./utils/shadowBlocks";
import {angularDirectionDropdown, degreesValue, powerValue} from "./utils/arguments";

const movement_spinDegrees = {
    kind: "block",
    type: "movement_spinDegrees",
    fields: {
        DIRECTION: "LEFT",
    },
    inputs: {
        POWER: powerBlock,
        DEGREES: degreesBlock,
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_spinDegrees",
        message0: "Spin %1 at %2 for %3 degrees",
        args0: [
            angularDirectionDropdown,
            powerValue,
            degreesValue,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Spin the robot in the given direction at the given power for the given degrees",
        helpUrl: "",
    },
]);

pythonGenerator["movement_spinDegrees"] = function (block) {
    let direction = block.getFieldValue("DIRECTION").toString()
    let power = pythonGenerator.valueToCode(
        block,
        "POWER",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    let degrees = pythonGenerator.valueToCode(
        block,
        "DEGREES",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    return `myRobot.spin_degrees("${direction}", ${power}, ${degrees})\n`;
};

export default movement_spinDegrees;