import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { actuatorColor } from "./utils/colors";
import {positionValue, servoDropdown} from "./utils/arguments";
import {positionBlock} from "./utils/shadowBlocks";

const actuator_setServo = {
  kind: "block",
  type: "actuator_setServo",
  fields: {
    SERVO: "1",
  },
  inputs: {
    POSITION: positionBlock,
  }
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "actuator_setServo",
    message0: "Set servo %1 to %2",
    args0: [
        servoDropdown,
        positionValue,
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: actuatorColor,
    tooltip: "Set the given servo to the given position",
    helpUrl: "",
  },
]);

pythonGenerator["actuators_set_servo"] = function (block) {
  let servo = block.getFieldValue("SERVO").toString();
  let position = pythonGenerator
      .valueToCode(block, "POSITION", pythonGenerator.ORDER_ATOMIC)
      .toString();
  return `myRobot.set_servo(${servo}, ${position})\n`;
};

export default actuator_setServo;
