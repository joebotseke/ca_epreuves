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
function selectSort(array) {
    const arrayLength = getLength(array);
    for (let i = 0; i < arrayLength - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrayLength; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

// === Display ===
function main() {
    const result = selectSort(numbers);
    console.log(result);
}
main();
