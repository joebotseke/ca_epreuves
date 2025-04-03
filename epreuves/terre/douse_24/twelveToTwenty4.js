const { argv } = require('node:process');
console.log(argv[2]);
let heure;
let minute;

heure = parseInt(argv[2][0] + argv[2][1]);
minute = argv[2][3]+  argv[2][4];
if (heure <12){
    console.log(heure +12 + ":" + minute);
}
else if (heure == 12){
    console.log("00:" + minute);
}

else{
    console.log("Erreur");
}
