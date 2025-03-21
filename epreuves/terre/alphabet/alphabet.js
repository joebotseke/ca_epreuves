/*
Un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne
*/

const fs = require('fs');
const path = require('path');

// Chargement du fichier JSON
const lettersJson = fs.readFileSync(path.join(__dirname, 'letters.json'), 'utf8');
const alphabet = JSON.parse(lettersJson).alphabet;


/**
 * Fonction qui affiche les lettres d'un alphabet
 * @param {string[]} alphabet_tab - Un tableau de lettres
 * @returns {string} Une chaîne de caractères
 * @author Joe Botseke
 */

function printAlphabetLetters(alphabet_tab){
    let chaines = "";
    for (letter in alphabet_tab){
        chaines += alphabet_tab[letter]; 
    }

    return (chaines.toLocaleLowerCase() + "\n");

}

//Exécution
console.log(printAlphabetLetters(alphabet));

//Test
let outputAttendu = "abcdefghijklmnopqrstuvwxyz" +"\n"; 
if(printAlphabetLetters(alphabet) != outputAttendu){
    console.log("Soit l'alphabet n'est pas fr/en ou il faut revérifier la fonction")
}
else{
    console.log("Tout est OK")
}
    