// === Utils ===
function getLength(arguments) {
    let argumentsLength = 0;
    for (const char of arguments) {
        argumentsLength++;
    }
    return argumentsLength;
}

function sliceFrom(arguments, index) {
    let newArguments = [];
    for (let i = index; i < getLength(arguments); i++) {
        newArguments.push(arguments[i]);
    }
    return newArguments;
}

function isValidArguments(arguments, minLength) {
    if (getLength(arguments) < minLength) {
        console.error("error");
        return false;
    }
    return true;
}

function containsInvalidNumber(arguments) {
    for (const argument of arguments) {
        if (isNaN(Number(argument))) {
            return true;
        }
    }
    return false;
}

function absoluteDifference(a, b) {
    return a > b ? a - b : b - a;
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);

if (!isValidArguments(userArguments, 2) || containsInvalidNumber(userArguments)) {
    console.error("error");
    process.exit();
}

// === Parsing ===
const numbers = [];
for (let i = 0; i < getLength(userArguments); i++) {
    numbers.push(Number(userArguments[i]));
}

// === Solving ===
function getMinAbsoluteDifference(array) {
    let minDiff = Infinity;

    for (let i = 0; i < getLength(array); i++) {
        for (let j = i + 1; j < getLength(array); j++) {
            const diff = absoluteDifference(array[i], array[j]);
            if (diff < minDiff) {
                minDiff = diff;
            }
        }
    }
    return minDiff;
}

// === Display ===
function main() {
    const result = getMinAbsoluteDifference(numbers);
    console.log(result);
}
main();
