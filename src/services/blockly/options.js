import Blockly from "blockly";
import {movementColor, sensorColor, actuatorColor} from "./blocks/utils/colors";

import movement_turnOffMotor from "./blocks/movement_turnOffMotor";
import movement_turnOnMotor from "./blocks/movement_turnOnMotor";
import movement_drive from "./blocks/movement_drive";
import movement_driveDistance from "./blocks/movement_driveDistance";
import movement_spin from "./blocks/movement_spin";
import movement_spinDegrees from "./blocks/movement_spinDegrees";
import movement_stop from "./blocks/movement_stop";
import actuator_setServo from "./blocks/actuator_setServo";
import sensor_getButtonValue from "./blocks/sensor_getButtonValue";
import sensor_getBumperValue from "./blocks/sensor_getBumperValue";
import sensor_getUltrasonicValue from "./blocks/sensor_getUltrasonicValue";
import sensor_getLineTrackingValue from "./blocks/sensor_getLineTrackingValue";
import sensor_getDistanceCounter from "./blocks/sensor_getDistanceCounter";
import sensor_resetDistanceCounter from "./blocks/sensor_resetDistanceCounter";
import * as logicBlocks from "./blocks/logic";
import * as loopsBlocks from "./blocks/loops";
import * as mathBlocks from "./blocks/math";
import * as textBlocks from "./blocks/text";
import * as listBlocks from "./blocks/list";

const movement = {
    kind: "category",
    name: "Movement",
    colour: movementColor,
    cssConfig: {
        label: "movementCategoryLabel",
        icon: "movementCategoryIcon",
    },
    contents: [
        movement_turnOnMotor,
        movement_turnOffMotor,
        movement_drive,
        movement_driveDistance,
        movement_spin,
        movement_spinDegrees,
        movement_stop,
    ],
};

const sensor = {
    kind: "category",
    name: "Sensor",
    colour: sensorColor,
    cssConfig: {
        label: "sensorCategoryLabel",
        icon: "sensorCategoryIcon",
    },
    contents: [
        sensor_getButtonValue,
        sensor_getBumperValue,
        sensor_getUltrasonicValue,
        sensor_getLineTrackingValue,
        sensor_getDistanceCounter,
        sensor_resetDistanceCounter,
    ],
};

const actuator = {
    kind: "category",
    name: "Actuator",
    colour: actuatorColor,
    cssConfig: {
        label: "actuatorCategoryLabel",
        icon: "actuatorCategoryIcon",
    },
    contents: [
        actuator_setServo,
    ],
};

const separator = {
    kind: "sep",
    cssConfig: {
        container: "toolboxSeparator",
    },
};

const audio = {
    kind: "category",
    name: "Audio",
    colour: "#5C2D91",
    cssConfig: {
        label: "audioCategoryLabel",
        icon: "audioCategoryIcon",
    },
    contents: [],
};

const logic = {
    kind: "category",
    name: "Logic",
    colour: "#E3008C",
    cssConfig: {
        label: "logicCategoryLabel",
        icon: "logicCategoryIcon",
    },
    contents: [
        logicBlocks.ControlsIf,
        logicBlocks.LogicCompare,
        logicBlocks.LogicOperation,
        logicBlocks.LogicNegate,
        logicBlocks.LogicBoolean,
        logicBlocks.LogicNull,
        logicBlocks.LogicTernary,
    ],
};

const loops = {
    kind: "category",
    name: "Loops",
    colour: "#00AA00",
    cssConfig: {
        label: "loopsCategoryLabel",
        icon: "loopsCategoryIcon",
    },
    contents: [
        loopsBlocks.ControlsRepeatExt,
        loopsBlocks.ControlsWhileUntil,
        loopsBlocks.ControlsFor,
        loopsBlocks.ControlsForEach,
        loopsBlocks.ControlsFlowStatements,
        loopsBlocks.Sleep,
    ],
};

const math = {
    kind: "category",
    name: "Math",
    colour: "#00A4A6",
    cssConfig: {
        label: "mathCategoryLabel",
        icon: "mathCategoryIcon",
    },
    contents: [
        mathBlocks.MathNumber,
        mathBlocks.MathArithmetic,
        mathBlocks.MathSingle,
        mathBlocks.MathTrig,
        mathBlocks.MathConstant,
        mathBlocks.MathNumberProperty,
        mathBlocks.MathRound,
        mathBlocks.MathOnList,
        mathBlocks.MathModulo,
        mathBlocks.MathConstrain,
        mathBlocks.MathRandomInt,
        mathBlocks.MathRandomFloat,
    ],
};

const text = {
    kind: "category",
    name: "Text",
    colour: "#DC143C",
    cssConfig: {
        label: "textCategoryLabel",
        icon: "textCategoryIcon",
    },
    contents: [
        textBlocks.Text,
        textBlocks.TextJoin,
        textBlocks.TextAppend,
        textBlocks.TextLength,
        textBlocks.TextIsEmpty,
        textBlocks.TextIndexOf,
        textBlocks.TextCharAt,
        textBlocks.TextGetSubstring,
        textBlocks.TextChangeCase,
        textBlocks.TextTrim,
        textBlocks.TextPrint,
        textBlocks.TextPromptExt,
    ],
};

const list = {
    kind: "category",
    name: "Lists",
    colour: "#9400D3",
    cssConfig: {
        label: "listsCategoryLabel",
        icon: "listsCategoryIcon",
    },
    contents: [
        listBlocks.ListsCreateWithEmpty,
        listBlocks.ListsCreateWith,
        listBlocks.ListsRepeat,
        listBlocks.ListsLength,
        listBlocks.ListsIsEmpty,
        listBlocks.ListsIndexOf,
        listBlocks.ListsGetIndex,
        listBlocks.ListsSetIndex,
        listBlocks.ListsGetSublist,
        listBlocks.ListsSplit,
        listBlocks.ListsSort,
    ],
};

const variables = {
    kind: "category",
    name: "Variables",
    colour: "#3455DB",
    cssConfig: {
        label: "variablesCategoryLabel",
        icon: "variablesCategoryIcon",
    },
    custom: "VARIABLE",
};

const functions = {
    kind: "category",
    name: "Functions",
    colour: "#E65722",
    cssConfig: {
        label: "functionsCategoryLabel",
        icon: "functionsCategoryIcon",
    },
    custom: "PROCEDURE",
};


const options = {
    toolbox : {
        kind: "categoryToolbox",
        contents: [
            movement,
            sensor,
            actuator,
            // audio,
            separator,
            logic,
            loops,
            math,
            text,
            // list,
            separator,
            variables,
            functions,
        ],
    },
    theme: Blockly.Theme.defineTheme('vcplTheme', {
        'blockStyles': {
            "logic_blocks": {
                "colourPrimary": "#E3008C",
            },
            "loop_blocks": {
                "colourPrimary": "#00AA00",
            },
            "math_blocks": {
                "colourPrimary": "#00A4A6",
            },
            "text_blocks": {
                "colourPrimary": "#DC143C",
                "colourTernary": "#DC143C",
                "colourSecondary": "#DC143C",
            },
            "list_blocks": {
                "colourPrimary": "#9400D3",
            },
            "variable_blocks": {
                "colourPrimary": "#3455DB",
            },
            "procedure_blocks": {
                "colourPrimary": "#E65722",
            },

        },
    }),
    move: {
        scrollbars: true,
        wheel: true,
    },
    zoom: {
        controls: false,
        maxScale: 2.5,
        minScale: 0.2,
        scaleSpeed: 1.5,
        startScale: 1.1,
    },
    grid: {
        spacing: 45,
        length: 7,
        colour: "rgba(189, 195, 199, 0.30)",
        snap: false,
    },
    sounds: true,
    trashcan: false,
    renderer: "zelos",
};

export default options;