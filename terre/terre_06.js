const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("You need to pass exactly one argument (!)");
  process.exit(1);
}
if (arguments[0].trim() === "") {
  console.error("The argument cannot be empty or just spaces.");
  process.exit(1);
}


const input = arguments[0];
let reversedString = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversedString += input[i];
}

console.log(reversedString);
