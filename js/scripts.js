const STEP_STRINGS = [
    [
        "* **",
        "** "
    ],
    [
        "(",
        "; "
    ],
    [
        "",
        ")"
    ],
    [
        "\n" + "  * **Helper Text**: ",
        "" + "\n"
    ]
];

function parseRequirements() {
    let rawData = document.getElementById("inputText").value;
    let cleanedArray = cleanData(rawData);
    let splittedArray = splitArray(cleanedArray, STEP_STRINGS.length);

    formattedText = arrayToText(splittedArray, STEP_STRINGS);
    document.getElementById("outputArea").innerHTML = formattedText;
}

function cleanData(rawData) {
    let cleanedData = rawData.replace(/\t/g, "\n"); // replace tabs with newlines
    cleanedData = cleanedData.trim().split("\n"); // split and trim
    return cleanedData;
}

function splitArray(array, steps) {
    // Split array into nested array based on steps number
    let parsedArray = [];
    let iter = 0;
    while (iter < array.length) {
        subArray = [];
        for (let step = 0; step < steps; step++) {
            subArray.push(array[iter]);
            iter++;
        }
        parsedArray.push(subArray);
    }

    return parsedArray;
}

function arrayToText(dataArray, constArray) {
    let formattedText = "";

    // create single string using constant string and user input values
    for (let x = 0; x < dataArray.length; x++) {
        for (let y = 0; y < constArray.length; y++) {
            fieldString = dataArray[x][y];
            formattedText += constArray[y][0] + fieldString + constArray[y][1];
        }
    }
    return formattedText.trim();
}