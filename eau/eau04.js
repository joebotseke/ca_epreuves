/**
 * a program that displays the first prime greater than the number given as an argument.
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

function isPrime(number){
    if (number < 2){
        return false;
    }
    for (let i = 2; i <= squareRoot(number); i++) {
        if (number % i === 0) {
        return false;  
    }
}
    return true;
}
function squareRoot(number) {
    if (number < 0) {
        console.error("Negative numbers are not allowed.");
        process.exit();
    }

    let result = 0;
    for (let i = 0; i * i <= number; i++) {
        result = i;
    }
    return result;
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
function findNextPrimeNumber(number) {
    for (let i = number + 1; ; i++) {
        if (isPrime(i)) {
            return i;
        }
    }
}

// === Display ===
function main(){
    const result = findNextPrimeNumber(userArgumentsParsed);
    console.log(result);
}
main();
