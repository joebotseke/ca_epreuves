const { argv } = require('node:process');

function pairImpair(argument){
    let nombre = parseInt(argument);

    // Vérification si l'argument est un nombre
    if (isNaN(nombre)) {
        console.log("Tu ne me la mettras pas à l'envers");
        return;
    }

    // Traitement de 0 comme pair
    if (nombre % 2 == 0) {
        console.log("pair");
    } else {
        console.log("impair");
    }
}
// Vérification si un argument a été passé
if (argv.length < 3) {
    console.log("Il faut passer un argument");
} else {
    pairImpair(argv[2]);
}
