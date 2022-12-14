export const ControlsIf = {
  kind: "block",
  type: "controls_if",
};

export const LogicCompare = {
  kind: "block",
  type: "logic_compare",
  fields: {
    OP: "EQ",
  },
};

export const LogicOperation = {
  kind: "block",
  type: "logic_operation",
  fields: {
    OP: "AND",
  },
};
export const LogicNegate = {
  kind: "block",
  type: "logic_negate",
};

export const LogicBoolean = {
  kind: "block",
  type: "logic_boolean",
  fields: {
    BOOL: "TRUE",
  },
};

export const LogicNull = {
  kind: "block",
  type: "logic_null",
};

export const LogicTernary = {
  kind: "block",
  type: "logic_ternary",
};
