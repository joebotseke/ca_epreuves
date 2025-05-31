/**
 * a programme that capitalises every second letter in a string of characters. Only the letters (A-Z, a-z) are taken into account.
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
    if(getLength(arguments) < maxLength){
        console.error(`You need to pass at least ${maxLength} arguments (!)`);
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
        for (let i = 0; i < getLength(argument); i++) {
            if (!isNaN(argument[i]) && argument[i] !== " ") {
                return true;
            }
        }
    }
    return false;
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
if (!isValidArguments(userArguments, 1)){
    process.exit();
}
if (containsNumber(userArguments)) {
    console.error("Error: numbers are not allowed");
    process.exit();
}

// === Solving ===
function capitaliseLetters(arguments){
    let newArguments = "";

    for (const argument of arguments){
        let letterIndex = 0;
        const regex = /[A-Za-z]/; 
        for (let i = 0; i < getLength(argument); i++){
            char = argument[i];

            if (regex.test(char)){
                newArguments += (letterIndex % 2 === 0 ) ? char.toUpperCase() : char.toLowerCase();
                letterIndex++;
            }
            else {
                newArguments += char;
            }

        }
    }
    return newArguments;
}

// === Display ===
function main(){
    const result = capitaliseLetters(userArguments);
    console.log(result);
}
main();
