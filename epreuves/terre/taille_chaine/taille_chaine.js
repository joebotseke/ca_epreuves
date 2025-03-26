const { argv } = require('node:process');
let tailleChaine = 0;

argv.forEach((value, index) => {
    let longueur = 0;
    if (index >=2){
        while (value[longueur] !== undefined){
            longueur++;
        }
    }
    tailleChaine += longueur;

});

console.log("Taille de la chaîne : " + tailleChaine);