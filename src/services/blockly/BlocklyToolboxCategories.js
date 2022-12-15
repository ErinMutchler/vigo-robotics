import runMotor from "@/services/blockly/blocks/movement/turnOnMotor";
import drive from "@/services/blockly/blocks/movement/drive";
import driveDistance from "@/services/blockly/blocks/movement/driveDistance";
import spin from "@/services/blockly/blocks/movement/spin";
import spinDegrees from "@/services/blockly/blocks/movement/spinDegrees";
import turnOffMotor from "@/services/blockly/blocks/movement/turnOffMotor";
import stop from "@/services/blockly/blocks/movement/stop";

import readLinetracking from "@/services/blockly/blocks/sensor/readLinetracking";
import readUltrasonic from "@/services/blockly/blocks/sensor/readUltrasonic";
import readBumper from "@/services/blockly/blocks/sensor/readBumper";
import readButton from "@/services/blockly/blocks/sensor/readButton";
import readAccelerometer from "@/services/blockly/blocks/sensor/readAccelerometer";
import readGyroscope from "@/services/blockly/blocks/sensor/readGyroscope";
import readMotorSpeed from "@/services/blockly/blocks/sensor/readMotorSpeed";

import setServo from "@/services/blockly/blocks/actuator/setServo";

import * as logic from "@/services/blockly/blocks/logic";
import * as loops from "@/services/blockly/blocks/loops";
import * as math from "@/services/blockly/blocks/math";
import * as text from "@/services/blockly/blocks/text";
import * as lists from "@/services/blockly/blocks/lists";
import resetDistanceCounter from "@/services/blockly/blocks/sensor/resetDistanceCounter";

export const Separator = {
    kind: "sep",
    cssConfig: {
        container: "toolboxSeparator",
    },
};

export const Movement = {
    kind: "category",
    name: "Movement",
    colour: "#1E90FF",
    cssConfig: {
        label: "movementCategoryLabel",
        icon: "movementCategoryIcon",
    },
    contents: [
        runMotor,
        drive,
        driveDistance,
        spin,
        spinDegrees,
        turnOffMotor,
        stop,
    ],
};

export const Sensor = {
    kind: "category",
    name: "Sensors",
    colour: "#D401D4",
    cssConfig: {
        label: "sensorCategoryLabel",
        icon: "sensorCategoryIcon",
    },
    contents: [
        readLinetracking,
        readUltrasonic,
        readBumper,
        readButton,
        readAccelerometer,
        readGyroscope,
        readMotorSpeed,
        resetDistanceCounter
    ],
};

export const Actuator = {
    kind: "category",
    name: "Actuators",
    colour: "#E63022",
    cssConfig: {
        label: "actuatorCategoryLabel",
        icon: "actuatorCategoryIcon",
    },
    contents: [setServo],
};

export const Audio = {
    kind: "category",
    name: "Audio",
    colour: "#5C2D91",
    cssConfig: {
        label: "audioCategoryLabel",
        icon: "audioCategoryIcon",
    },
    contents: [],
};

export const Logic = {
    kind: "category",
    name: "Logic",
    colour: "#E3008C",
    cssConfig: {
        label: "logicCategoryLabel",
        icon: "logicCategoryIcon",
    },
    contents: [
        logic.ControlsIf,
        logic.LogicCompare,
        logic.LogicOperation,
        logic.LogicNegate,
        logic.LogicBoolean,
        logic.LogicNull,
        logic.LogicTernary,
    ],
};

export const Loops = {
    kind: "category",
    name: "Loops",
    colour: "#00AA00",
    cssConfig: {
        label: "loopsCategoryLabel",
        icon: "loopsCategoryIcon",
    },
    contents: [
        loops.ControlsRepeatExt,
        loops.ControlsWhileUntil,
        loops.ControlsFor,
        loops.ControlsForEach,
        loops.ControlsFlowStatements,
        loops.Sleep,
    ],
};

export const Math = {
    kind: "category",
    name: "Math",
    colour: "#00A4A6",
    cssConfig: {
        label: "mathCategoryLabel",
        icon: "mathCategoryIcon",
    },
    contents: [
        math.MathNumber,
        math.MathArithmetic,
        math.MathSingle,
        math.MathTrig,
        math.MathConstant,
        math.MathNumberProperty,
        math.MathRound,
        math.MathOnList,
        math.MathModulo,
        math.MathConstrain,
        math.MathRandomInt,
        math.MathRandomFloat,
    ],
};

export const Text = {
    kind: "category",
    name: "Text",
    colour: "#DC143C",
    cssConfig: {
        label: "textCategoryLabel",
        icon: "textCategoryIcon",
    },
    contents: [
        text.Text,
        text.TextJoin,
        text.TextAppend,
        text.TextLength,
        text.TextIsEmpty,
        text.TextIndexOf,
        text.TextCharAt,
        text.TextGetSubstring,
        text.TextChangeCase,
        text.TextTrim,
        text.TextPrint,
        text.TextPromptExt,
    ],
};

export const Lists = {
    kind: "category",
    name: "Lists",
    colour: "#9400D3",
    cssConfig: {
        label: "listsCategoryLabel",
        icon: "listsCategoryIcon",
    },
    contents: [
        lists.ListsCreateWithEmpty,
        lists.ListsCreateWith,
        lists.ListsRepeat,
        lists.ListsLength,
        lists.ListsIsEmpty,
        lists.ListsIndexOf,
        lists.ListsGetIndex,
        lists.ListsSetIndex,
        lists.ListsGetSublist,
        lists.ListsSplit,
        lists.ListsSort,
    ],
};

export const Variables = {
    kind: "category",
    name: "Variables",
    colour: "#3455DB",
    cssConfig: {
        label: "variablesCategoryLabel",
        icon: "variablesCategoryIcon",
    },
    custom: "VARIABLE",
};

export const Functions = {
    kind: "category",
    name: "Functions",
    colour: "#E65722",
    cssConfig: {
        label: "functionsCategoryLabel",
        icon: "functionsCategoryIcon",
    },
    custom: "PROCEDURE",
};