import * as categories from "@/services/blockly/BlocklyToolboxCategories";

export const toolbox = {
    kind: "categoryToolbox",
    contents: [
        categories.Movement,
        categories.Sensor,
        categories.Actuator,
        categories.Audio,
        categories.Separator,
        categories.Logic,
        categories.Loops,
        categories.Math,
        categories.Text,
        categories.Lists,
        categories.Separator,
        categories.Variables,
        categories.Functions,
    ],
};