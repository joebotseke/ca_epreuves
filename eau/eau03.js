/**
 * a program that displays the Nth element of the famous Fibonacci sequence. 
 * (0, 1, 1, 2) being the start of the sequence and the first element being at index 0.

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

function sliceFrom(arguments, index){
    let newArguments = [];
    for (let i = index; i < getLength(arguments); i++){
        newArguments.push(arguments[i]);
    }
    return newArguments;

}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);
const userFirstAgument = userArguments[0];
if (!isValidArguments(userArguments, 1)){
    process.exit();
}
if (isNaN(parseInt(userFirstAgument))){
    console.log(`${userFirstAgument} is NaN`);
    process.exit();
}
if (parseInt(userFirstAgument) < 0){
    console.log("-1");
    process.exit();
}

// === Parsing ===
const userArgumentsParsed = parseInt(userFirstAgument);

// === Solving ===
function fibonacci(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= number; i++) {
    let next = previous + current;
    previous = current;
    current = next;
    }
return current;
}

// === Display ===
function main(){
    const result = fibonacci(userArgumentsParsed);
    console.log(result);
}
main();
