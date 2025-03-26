const { argv } = require('node:process');

let nombreUn = parseInt(argv[2]);
let nombreDeux = parseInt(argv[3]);

function division(n1, n2){
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Erreur : les arguments ne sont pas des nombres.");
    } else if (n2 == 0) {
        console.log("Erreur : division par zéro impossible.");
    } else {
        let result = n1 % n2;
        console.log("reste " + result);
    }
}

if (argv.length < 4) {
    console.log("Il faut passer deux arguments.");
} else {
    division(nombreUn, nombreDeux);
}