const arguments = process.argv.slice(2);

if (arguments.length < 2) {
  console.error("You need to pass at least two arguments (!)");
  process.exit(1);
}

const numbers = [];

for (let arg of arguments) {
  const num = Number(arg);
  if (isNaN(num) || !Number.isInteger(num)) {
    console.error(`Invalid argument: "${arg}" isn't a valid integer.`);
    process.exit(1);
  }
  numbers.push(num);
}

let isSorted = true;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("is sort");
} else {
  console.log("not sort");
}