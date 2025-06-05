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


// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
if (!isValidArguments(userArguments, 1)){
    process.exit();
}

// === Solving ===
function containsOnlyDigits(arguments) {
    const regex = /^[0-9]+$/;

    for (const argument of arguments){
        if (!regex.test(argument)) {
            return false;
        }
    }
    return true;
}


// === Display ===
function main(){
    const result = containsOnlyDigits(userArguments);
    console.log(result);
}
main();
