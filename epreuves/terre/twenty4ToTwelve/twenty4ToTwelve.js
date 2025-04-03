const { argv } = require('node:process');
console.log(argv[2]);
let heure;
let minute;

heure = parseInt(argv[2][0] + argv[2][1]);
minute = argv[2][3]+  argv[2][4];
if (heure > 12 && heure <24){
    console.log(heure -12 + ":" + minute + "PM");
}
else if (heure >0 && heure < 12){
    console.log(heure+ ":" + minute + "AM");
}
else if (heure == "00"){
    console.log("12:" + minute + "AM");
}

else{
    console.log("Erreur");
}
