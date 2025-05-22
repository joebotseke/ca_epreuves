const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("You need to pass exactly one argument (!)");
  process.exit(1);
}

if (arguments[0].trim() === "") {
  console.error("The argument cannot be empty or just spaces.");
  process.exit(1);
}

let stringLength = 0;
for (let char of arguments[0]) {
  stringLength++;
}

console.log(stringLength);
