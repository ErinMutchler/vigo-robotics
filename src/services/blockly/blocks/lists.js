export const ListsCreateWithEmpty = {
  kind: "blocks",
  type: "lists_create_with",
  extraState: {
    itemCount: 0,
  },
};

export const ListsCreateWith = {
  kind: "blocks",
  type: "lists_create_with",
  extraState: {
    itemCount: 3,
  },
};

export const ListsRepeat = {
  kind: "blocks",
  type: "lists_repeat",
  inputs: {
    NUM: {
      shadow: {
        type: "math_number",
        fields: {
          NUM: 5,
        },
      },
    },
  },
};

export const ListsLength = {
  kind: "blocks",
  type: "lists_length",
};

export const ListsIsEmpty = {
  kind: "blocks",
  type: "lists_isEmpty",
};

export const ListsIndexOf = {
  kind: "blocks",
  type: "lists_indexOf",
  fields: {
    END: "FIRST",
  },
  inputs: {
    VALUE: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "iaIB83z@S+eOw[X+|[o}",
            name: "list",
            type: "",
          },
        },
      },
    },
  },
};

export const ListsGetIndex = {
  kind: "blocks",
  type: "lists_getIndex",
  fields: {
    MODE: "GET",
    WHERE: "FROM_START",
  },
  inputs: {
    VALUE: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "iaIB83z@S+eOw[X+|[o}",
            name: "list",
            type: "",
          },
        },
      },
    },
  },
};

export const ListsSetIndex = {
  kind: "blocks",
  type: "lists_setIndex",
  fields: {
    MODE: "SET",
    WHERE: "FROM_START",
  },
  inputs: {
    LIST: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "iaIB83z@S+eOw[X+|[o}",
            name: "list",
            type: "",
          },
        },
      },
    },
  },
};

export const ListsGetSublist = {
  kind: "blocks",
  type: "lists_getSublist",
  fields: {
    WHERE1: "FROM_START",
    WHERE2: "FROM_START",
  },
  inputs: {
    LIST: {
      block: {
        type: "variables_get",
        fields: {
          VAR: {
            id: "iaIB83z@S+eOw[X+|[o}",
            name: "list",
            type: "",
          },
        },
      },
    },
  },
};

export const ListsSplit = {
  kind: "blocks",
  type: "lists_split",
  fields: {
    MODE: "SPLIT",
  },
  inputs: {
    DELIM: {
      shadow: {
        type: "text",
        fields: {
          TEXT: ",",
        },
      },
    },
  },
};

export const ListsSort = {
  kind: "blocks",
  type: "lists_sort",
  fields: {
    TYPE: "NUMERIC",
    DIRECTION: "1",
  },
};
