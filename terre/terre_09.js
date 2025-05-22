const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("You need to pass exactly one argument (!)");
  process.exit(1);
}

const value = arguments[0];
const number = Number(value);

if (isNaN(number)) {
  console.error(`"${value}" is not a valid number.`);
  process.exit(1);
}

if (!Number.isInteger(number)) {
  console.warn(`"${value}" is not an integer. Only integers are supported.`);
  process.exit(1);
}
if (number < 0) {
  console.error("Negative numbers are not allowed.");
  process.exit(1);
}

let result = 0;
for (let i = 0; i <= number; i++){
    if (i*i === number){
        result = i;
        break;
    }  
}
if (result === 0 && number !== 0) {
  console.log("This number has no exact integer square root.");
} else {
  console.log(`Result: ${result}`);
}
