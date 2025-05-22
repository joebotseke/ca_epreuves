const arguments = process.argv.slice(2);

if (arguments.length !== 3) {
  console.error("You need to pass exactly three arguments (!)");
  process.exit(1);
}

for ( let argument of arguments){
    if(isNaN(argument)){
        console.error(`Invalid argument ${argument} isn't a number`)
        process.exit(1);
    }
}

const a = Number(arguments[0]);
const b = Number(arguments[1]);
const c = Number(arguments[2]);
let middleNumber;

if ((a > b && a < c) || (a < b && a > c)) {
  middleNumber = a;
} else if ((b > a && b < c) || (b < a && b > c)) {
  middleNumber = b;
} else if ((c > a && c < b) || (c < a && c > b)) {
  middleNumber = c;
} else {
  console.log("Pas de valeur du milieu unique");
  process.exit(0);
}

console.log(middleNumber);