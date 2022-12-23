import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import {movementColor} from "./utils/colors";

const movement_stop = {
    kind: "block",
    type: "movement_stop",
};

Blockly.defineBlocksWithJsonArray([
    {
        type: "movement_stop",
        message0: "Stop moving",
        args0: [],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: movementColor,
        tooltip: "Turn both motors off",
        helpUrl: "",
    },
]);

pythonGenerator["movement_stop"] = function (block) {
    return `myRobot.stop()\n`;
};

export default movement_stop;