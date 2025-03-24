const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const { argv } = require('node:process');

// Récupérer l'argument, vérifier si il est dans l'alphabet
let argument = argv[2];
console.log("L'alphabet à partir de la lettre " + argument);

function printAlphabetWithArg(arg){
    let new_alphabet ="";
    let indice;
    
    for (let i=0; i<= alphabet.length; i++ ) 
        if(alphabet[i].toLowerCase() == arg){
            indice = i;
            break;
        }

        else if (indice === undefined) {
            console.error("Erreur : La lettre " + arg + " n'est pas présente dans l'alphabet.");
            process.exit(1);
          }

        for (let j = indice; j < alphabet.length; j++){
            new_alphabet += alphabet[j];
        }
       
    return new_alphabet.toLowerCase();
    }


console.log(printAlphabetWithArg(argument));
