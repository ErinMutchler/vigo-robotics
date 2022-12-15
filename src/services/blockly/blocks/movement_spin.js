import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";
import {powerBlock} from "./utils/shadowBlocks";
import {angularDirectionDropdown, powerValue} from "./utils/arguments";

const movement_spin = {
    kind: "block",
    type: "movement_spin",
    fields: {
        DIRECTION: "LEFT",
    },
    inputs: {
        POWER: powerBlock,
    }
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_spin",
        message0: "Spin %1 at %2 power",
        args0: [
            angularDirectionDropdown,
            powerValue,
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Spin the robot in the given direction at the given power",
        helpUrl: "",
    },
]);

pythonGenerator["movement_spin"] = function (block) {
    let direction = block.getFieldValue("DIRECTION").toString()
    let power = pythonGenerator.valueToCode(
        block,
        "POWER",
        pythonGenerator.ORDER_ATOMIC
    ).toString();
    return `myRobot.spin("${direction}", ${power})\n`;
};

export default movement_spin;