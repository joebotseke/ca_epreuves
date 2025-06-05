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

function isOnlyNumbers(arguments) {
    if (getLength(arguments) !== 2) {
        return false;
    }

    const regex = /^-?\d+$/;

     for (const argument of arguments){
        if (!regex.test(argument)) {
            return false;
        }}

    return true;
}

function getMin(arguments) {
    return Number(arguments[0]) < Number(arguments[1])
        ? Number(arguments[0])
        : Number(arguments[1]);
}

function getMax(arguments) {
    return Number(arguments[0]) > Number(arguments[1])
        ? Number(arguments[0])
        : Number(arguments[1]);
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);

if (!isOnlyNumbers(userArguments)) {
    console.error("error");
    process.exit();
}

// === Solving ===
function displayRange(arguments) {
    const min = getMin(arguments);
    const max = getMax(arguments);

    if (min === max) {
        console.log("Numbers are equals");
        return;
    }

    let result = "";
    for (let i = min; i < max; i++) {
        result += i + " ";
    }

    console.log(result.trim());
}

// === Display ===
function main() {
    displayRange(userArguments);
}
main();
