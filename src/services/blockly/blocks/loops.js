import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export const ControlsRepeatExt = {
  kind: "block",
  type: "controls_repeat_ext",
  inputs: {
    TIMES: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 10,
        },
      },
    },
  },
};
export const ControlsWhileUntil = {
  kind: "block",
  type: "controls_whileUntil",
  fields: {
    MODE: "WHILE",
  },
};
export const ControlsFor = {
  kind: "block",
  type: "controls_for",
  fields: {
    VAR: {
      id: "$;T]/ZagbjbgR~/_%kFp",
      name: "i",
      type: "",
    },
  },
  inputs: {
    FROM: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
    TO: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 10,
        },
      },
    },
    BY: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
  },
};
export const ControlsForEach = {
  kind: "block",
  type: "controls_forEach",
  fields: {
    VAR: {
      id: "nclv1eL%3]Ac0UNW_x$7",
      name: "j",
      type: "",
    },
  },
};
export const ControlsFlowStatements = {
  kind: "block",
  type: "controls_flow_statements",
  fields: {
    FLOW: "BREAK",
  },
};

export const Sleep = {
  kind: "block",
  type: "loops_sleep",
  inputs: {
    DURATION: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
  },
};

Blockly.defineBlocksWithJsonArray([
  {
    type: "loops_sleep",
    message0: "Sleep for %1 seconds",
    args0: [
      {
        type: "input_value",
        name: "DURATION",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#00AA00",
    tooltip: "Sleep for given seconds",
    helpUrl: "",
  },
]);

pythonGenerator["loops_sleep"] = function (block) {
  let seconds = pythonGenerator.valueToCode(
    block,
    "DURATION",
    pythonGenerator.ORDER_ATOMIC
  );
  let code = `time.sleep(${seconds}`;
  return code;
};
