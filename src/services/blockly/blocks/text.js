export const Text = {
  kind: "block",
  type: "text",
  fields: {
    TEXT: "",
  },
};

export const TextJoin = {
  kind: "block",
  type: "text_join",
  extraState: {
    itemCount: 2,
  },
};

export const TextAppend = {
  kind: "block",
  type: "text_append",
  fields: {
    VAR: {
      id: "c0-Y=yk6z5]2./@T+Y]M",
      name: "item",
      type: "",
    },
  },
  inputs: {
    TEXT: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "",
        },
      },
    },
  },
};

export const TextLength = {
  kind: "block",
  type: "text_length",
  inputs: {
    VALUE: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};

export const TextIsEmpty = {
  kind: "block",
  type: "text_isEmpty",
  inputs: {
    VALUE: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "",
        },
      },
    },
  },
};

export const TextIndexOf = {
  kind: "block",
  type: "text_indexOf",
  fields: {
    END: "FIRST",
  },
  inputs: {
    VALUE: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "nlc$kR#I7:2:-C9NhMbZ",
            name: "text",
            type: "",
          },
        },
      },
    },
    FIND: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};

export const TextCharAt = {
  kind: "block",
  type: "text_charAt",
  extraState: '<mutation at="true"></mutation>',
  fields: {
    WHERE: "FROM_START",
  },
  inputs: {
    VALUE: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "nlc$kR#I7:2:-C9NhMbZ",
            name: "text",
            type: "",
          },
        },
      },
    },
  },
};

export const TextGetSubstring = {
  kind: "block",
  type: "text_getSubstring",
  extraState: '<mutation at1="true" at2="true"></mutation>',
  fields: {
    WHERE1: "FROM_START",
    WHERE2: "FROM_START",
  },
  inputs: {
    STRING: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "nlc$kR#I7:2:-C9NhMbZ",
            name: "text",
            type: "",
          },
        },
      },
    },
  },
};

export const TextChangeCase = {
  kind: "block",
  type: "text_changeCase",
  fields: {
    CASE: "UPPERCASE",
  },
  inputs: {
    TEXT: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};

export const TextTrim = {
  kind: "block",
  type: "text_trim",
  fields: {
    MODE: "BOTH",
  },
  inputs: {
    TEXT: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};

export const TextPrint = {
  kind: "block",
  type: "text_print",
  inputs: {
    TEXT: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};

export const TextPromptExt = {
  kind: "block",
  type: "text_prompt_ext",
  extraState: '<mutation type="TEXT"></mutation>',
  fields: {
    TYPE: "TEXT",
  },
  inputs: {
    TEXT: {
      shadow: {
        type: "text",
        fields: {
          TEXT: "abc",
        },
      },
    },
  },
};
