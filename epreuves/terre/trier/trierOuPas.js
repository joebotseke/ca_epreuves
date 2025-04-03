const { argv } = require('node:process');

function estTriee(liste) {
  if (liste.length <= 0) {
    console.log("erreur.");
    return;
  }

  for (let i = 0; i < liste.length; i++) {
    if (isNaN(liste[i])) {
      console.log("erreur.");
      return;
    }
  }

  if (liste.length <= 1) {
    return true;
  }

  for (let i = 0; i < liste.length - 1; i++) {
    if (liste[i] > liste[i + 1]) {
      return false;
    }
  }

  return true;
}

const argumentsNumeriques = process.argv.slice(2).map(arg => parseInt(arg));

if (estTriee(argumentsNumeriques)) {
  console.log("Triée !");
} else {
  console.log("Pas triée !");
}