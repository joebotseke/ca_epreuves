const { argv } = require('node:process');

let nombreUn = parseInt(argv[2]);
let nombreDeux = parseInt(argv[3]);

function puissance(n1, n2){
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Erreur : les arguments ne sont pas des nombres.");
    } else if (n2 == 0) {
        console.log("Erreur.");
    } else {
        let result = n1 ** n2;
        console.log("Résultat : " + result);
    }
}

if (argv.length < 4) {
    console.log("Il faut passer deux arguments.");
} else {
    puissance(nombreUn, nombreDeux);
}