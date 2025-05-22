const arguments = process.argv.slice(2);

if (arguments.length !== 2) {
  console.error("You need to pass exactly two arguments (!)");
  process.exit(1);
}

const base = Number(arguments[0]);
const exponent = Number(arguments[1]);

if (
  isNaN(base) || isNaN(exponent) ||
  !Number.isInteger(base) || !Number.isInteger(exponent) ||
  base <= 0 || exponent < 0
) {
  console.error("Only positive integers are allowed, and exponent must be >= 0.");
  process.exit(1);
}

let result = 1;

for (let i = 1; i <= exponent; i++) {
  result *= base;
}

console.log(`Result: ${result}`);
