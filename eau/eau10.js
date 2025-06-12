// === Utils ===
function getLength(arguments) {
    let argumentsLength = 0;
    for (const char of arguments) {
        argumentsLength++;
    }
    return argumentsLength;
}

function isValidArguments(arguments, minLength) {
    if (getLength(arguments) < minLength) {
        console.error("error");
        return false;
    }
    return true;
}

function sliceFrom(arguments, index) {
    let newArguments = [];
    for (let i = index; i < getLength(arguments); i++) {
        newArguments.push(arguments[i]);
    }
    return newArguments;
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
if (!isValidArguments(userArguments, 2)) {
    process.exit();
}

// === Parsing ===
const searchElement = userArguments[getLength(userArguments) - 1];
const argumentsToSearchIn = [];
for (let i = 0; i < getLength(userArguments) - 1; i++) {
    argumentsToSearchIn.push(userArguments[i]);
}

// === Solving ===
function findIndexOfElement(arguments, element) {
    for (let i = 0; i < getLength(arguments); i++) {
        if (arguments[i] === element) {
            return i;
        }
    }
    return -1;
}

// === Display ===
function main() {
    const result = findIndexOfElement(argumentsToSearchIn, searchElement);
    console.log(result);
}
main();
