export const options = {
    sounds: true,
    trashcan: false,
    renderer: "zelos",
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
    toolbox: {
        kind: "flyoutToolbox",
        contents: [
            {
                kind: "block",
                type: "controls_if",
            },
            {
                kind: "block",
                type: "controls_repeat_ext",
            },
            {
                kind: "block",
                type: "logic_compare",
            },
            {
                kind: "block",
                type: "math_number",
            },
            {
                kind: "block",
                type: "math_arithmetic",
            },
            {
                kind: "block",
                type: "text",
            },
            {
                kind: "block",
                type: "text_print",
            },
        ],
    },
};