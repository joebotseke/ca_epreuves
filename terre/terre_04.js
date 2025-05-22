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

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}
