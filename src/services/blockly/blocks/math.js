export const MathNumber = {
  kind: "block",
  type: "math_number",
  fields: {
    NUM: 0,
  },
};

export const MathArithmetic = {
  kind: "block",
  type: "math_arithmetic",
  fields: {
    OP: "ADD",
  },
  inputs: {
    A: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
    B: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
  },
};

export const MathSingle = {
  kind: "block",
  type: "math_single",
  fields: {
    OP: "ROOT",
  },
  inputs: {
    NUM: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 9,
        },
      },
    },
  },
};

export const MathTrig = {
  kind: "block",
  type: "math_trig",
  fields: {
    OP: "SIN",
  },
  inputs: {
    NUM: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 45,
        },
      },
    },
  },
};

export const MathConstant = {
  kind: "block",
  type: "math_constant",
  fields: {
    CONSTANT: "PI",
  },
};

export const MathNumberProperty = {
  kind: "block",
  type: "math_number_property",
  extraState: '<mutation divisor_input="false"></mutation>',
  fields: {
    PROPERTY: "EVEN",
  },
  inputs: {
    NUMBER_TO_CHECK: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 0,
        },
      },
    },
  },
};

export const MathRound = {
  kind: "block",
  type: "math_round",
  fields: {
    OP: "ROUND",
  },
  inputs: {
    NUM: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 3.1,
        },
      },
    },
  },
};

export const MathOnList = {
  kind: "block",
  type: "math_on_list",
  extraState: '<mutation op="SUM"></mutation>',
  fields: {
    OP: "SUM",
  },
};

export const MathModulo = {
  kind: "block",
  type: "math_modulo",
  inputs: {
    DIVIDEND: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 64,
        },
      },
    },
    DIVISOR: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 10,
        },
      },
    },
  },
};

export const MathConstrain = {
  kind: "block",
  type: "math_constrain",
  inputs: {
    VALUE: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 50,
        },
      },
    },
    LOW: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 1,
        },
      },
    },
    HIGH: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 100,
        },
      },
    },
  },
};

export const MathRandomInt = {
  kind: "block",
  type: "math_random_int",
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
          NUM: 100,
        },
      },
    },
  },
};

export const MathRandomFloat = {
  kind: "block",
  type: "math_random_float",
};
