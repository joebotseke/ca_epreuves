const arguments = process.argv.slice(2);
if (arguments.length !== 1){
    console.error("You need to pass at least one argument (!)")
    process.exit();
}
if (arguments[0].length > 1 || !/^[a-z]$/.test(arguments[0])){
    console.error("Only exactly one lowercase letter from a to z is valid");
    process.exit();
}
let alphabet = "";
const firstLetter = arguments[0].charCodeAt(0);
const lastLetter = 122;

for (let i = firstLetter; i < lastLetter + 1; i++){
    alphabet += String.fromCharCode(i);
}
console.log(alphabet);