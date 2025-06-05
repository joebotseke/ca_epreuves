/**
 * a program that capitalises the first letter of each word in a string. The other letters must be in lower case. Words are only delimited by a space, a tab or a line break.
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
        let capitaliseNext = true;

        for (let i = 0; i < getLength(argument); i++){
            const char = argument[i];
            const regex = /[A-Za-z]/;

            if (char === ' ' || char === '\t' || char === '\n'){
                capitaliseNext = true;
                newArguments += char;
            }
            else if (regex.test(char)){
                newArguments += capitaliseNext ? char.toUpperCase() : char.toLowerCase();
                capitaliseNext = false;
            }
            else{
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
