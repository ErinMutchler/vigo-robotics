import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";
import {motorDropdown} from "./utils/arguments";

const movement_turnOffMotor = {
    kind: "block",
    type: "movement_turnOffMotor",
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_turnOffMotor",
        message0: "Turn the %1 motor off",
        args0: [
            motorDropdown
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Turn the given motor off",
        helpUrl: "",
    },
]);

pythonGenerator["movement_turnOffMotor"] = function (block) {
    const motor = block.getFieldValue("MOTOR").toString();
    return `myRobot.turn_off_motor(${motor})\n`;
};

export default movement_turnOffMotor;