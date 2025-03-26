const { argv } = require('node:process');

let nombreUn = parseInt(argv[2]);

function racineCarree(nombre){
    if (isNaN(nombre)) {
        console.log("Erreur : les arguments ne sont pas des nombres.");
    } else if (nombre == 0) {
        console.log("Erreur.");
    } else {
        let result = nombre * nombre;
        console.log("Résultat : " + result);
    }
}

if (argv.length < 3) {
    console.log("Il faut passer deux arguments.");
} else {
    racineCarree(nombreUn);
}