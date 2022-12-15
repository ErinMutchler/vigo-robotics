export const motorDropdown = {
    type: "field_dropdown",
    name: "MOTOR",
    options: [
        ["left", "LEFT"],
        ["right", "RIGHT"],
    ],
};

export const directionDropdown = {
    type: "field_dropdown",
    name: "DIRECTION",
    options: [
        ["forward", "FORWARD"],
        ["backward", "BACKWARD"],
    ],
};

export const angularDirectionDropdown = {
    type: "field_dropdown",
    name: "DIRECTION",
    options: [
        ["left", "LEFT"],
        ["right", "RIGHT"],
    ],
};

export const powerValue = {
    type: "input_value",
    name: "POWER",
    check: "Number",
    min: 0,
    max: 100,
};

export const distanceValue = {
    type: "input_value",
    name: "DISTANCE",
    check: "Number",
    min: 0,
};

export const degreesValue = {
    type: "input_value",
    name: "DEGREES",
    check: "Number",
    min: 0,
};

export const sensorDropdown = {
    type: "field_dropdown",
    name: "SENSOR",
    options: [
        ["left", "LEFT"],
        ["right", "RIGHT"],
    ],
}

export const buttonDropdown = {
    type: "field_dropdown",
    name: "BUTTON",
    options: [
        ["A", "A"],
        ["B", "B"],
    ],
}

export const servoDropdown = {
    type: "field_dropdown",
    name: "SERVO",
    options: [
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
    ],
}

export const positionValue = {
    type: "input_value",
    name: "POSITION",
    check: "Number",
    min: 0,
    max: 180,
};