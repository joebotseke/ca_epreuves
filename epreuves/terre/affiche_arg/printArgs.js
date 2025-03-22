const { argv } = require('node:process');

// Affichage uniquement des arguments passés par l'utilisateur
for (let i = 2; i < argv.length; i++) {
  console.log(argv[i]);
}
