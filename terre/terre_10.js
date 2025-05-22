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

if (number < 2) {
  console.log(`${number} is not a prime number`);
  process.exit(0);
}

let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}
