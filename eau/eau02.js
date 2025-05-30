/**
 * a program that displays its received arguments in reverse.
 */

// === Utils ===
function getLength(arguments){
    let argumentsLength = 0;
    for (let char of arguments) {
        argumentsLength++;
    }
    return argumentsLength;
}

function isValidArguments(arguments, minLength){
    if(getLength(arguments) < minLength){
        console.error(`You need to pass at least ${minLength} arguments (!)`);
        return false;
    }
    return true;
}

function parseArguments(rawArgs) {
    return rawArgs;
}

function sliceFrom(arguments, index){
    let newArguments = [];
    for (let i = index; i < getLength(arguments); i++){
        newArguments.push(arguments[i]);
    }
    return newArguments;

}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
if (!isValidArguments(userArguments, 2)){
    process.exit();
}

// === Parsing ===
const parsedArguments = parseArguments(userArguments);

// === Solving ===
function reverseArguments(arguments){
    let reversedArguments = [];
    for (let i = getLength(arguments) - 1; i >= 0; i--) {
        reversedArguments.push(arguments[i]);
    }
    return reversedArguments;
}

// === Display ===
function main(){
    const result = reverseArguments(parsedArguments);
    for (const argument of result) {
        console.log(argument);
    }
}
main();
