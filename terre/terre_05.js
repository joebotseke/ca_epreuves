const arguments = process.argv.slice(2);

if (arguments.length !== 2) {
  console.error("You need to pass exactly two arguments (!)");
  process.exit(1);
}

const dividend = Number(arguments[0]);
const divisor = Number(arguments[1]);

if (
  isNaN(dividend) || isNaN(divisor) ||
  !Number.isInteger(dividend) || !Number.isInteger(divisor) ||
  dividend <= 0 || divisor <= 0 ||
  divisor > dividend
) {
  console.error("Only positive integers are allowed, and divisor must be less than or equal to dividend.");
  process.exit(1);
}

const quotient = Math.floor(dividend / divisor);
const remainder = dividend % divisor;

console.log(`Quotient : ${quotient}\nRemainder : ${remainder}`);
