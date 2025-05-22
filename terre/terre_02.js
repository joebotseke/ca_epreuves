const arguments = process.argv.slice(2);
if (arguments.length <= 1){
    console.error("You need to pass at least two arguments (!)")
    process.exit();
}
for (let argument of arguments) {
  console.log(argument);
}