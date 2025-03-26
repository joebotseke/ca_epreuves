const { argv } = require('node:process');

if (argv.length <= 2) {
  console.log("Veuillez fournir des arguments à inverser.");
} else {
  let chaineConcatenee = "";
  for (let i = 2; i < argv.length; i++) {
    if (i > 2) {
      chaineConcatenee += " ";
    }
    chaineConcatenee += argv[i];
  }

  let resultatInverse = "";
  for (let j = chaineConcatenee.length - 1; j >= 0; j--) {
    resultatInverse += chaineConcatenee[j];
  }

  console.log(resultatInverse);
}
