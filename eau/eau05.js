/**
 * a program that determines whether a character string is contained in another string.
 */


// === Utils ===
function getLength(arguments){
    let argumentsLength = 0;
    for (let char of arguments) {
        argumentsLength++;
    }
    return argumentsLength;
}

function isValidArguments(arguments, maxLength){
    if(getLength(arguments) !== maxLength){
        console.error(`You need to pass only ${maxLength} arguments (!)`);
        return false;
    }
    return true;
}

function sliceFrom(arguments, index){
    let newArguments = [];
    for (let i = index; i < getLength(arguments); i++){
        newArguments.push(arguments[i]);
    }
    return newArguments;
}

function containsNumber(arguments){
     for (const argument of arguments){
        const argumentToNumber = Number(argument);
        if (!Number.isNaN(argumentToNumber)) {
            return true; 
        }
    }
    return false;
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
if (!isValidArguments(userArguments, 2)){
    process.exit();
}
if (containsNumber(userArguments)) {
    console.error("Error: numbers are not allowed");
    process.exit();
}
// === Parsing ===
const firstUserArgument = userArguments[0];
const secondUserArgument = userArguments[1];

// === Solving ===
function isStringInString(firstString, secondString) {
    const firstStringLength = getLength(firstString);
    const secondStringLength = getLength(secondString);

    for (let i = 0; i <= secondStringLength - firstStringLength; i++) {
        let found = true;  
        for (let j = 0; j < firstStringLength; j++) {
            if (secondString[i + j] !== firstString[j]) {
                found = false; 
                break;         
            }
        }

        if (found) {
            return true; 
        }
    }
    return false;
}

// === Display ===
function main(){
    const result = isStringInString(secondUserArgument, firstUserArgument);
    console.log(result);
}
main();
