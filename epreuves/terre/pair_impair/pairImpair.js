const { argv } = require('node:process');

function pairImpair(nombre){
    let messageErreur = "Tu ne me la mettras pas à l'envers";
    if(nombre %2== 0){
        console.log("pair");
    }
    else if(nombre == 0 ){
        console.log(messageErreur)
    }
  
    else if (nombre %3==0){
        console.log("Impair");
    }
    
    else if (nombre < 0 || nombre == NaN || nombre == undefined){
        console.log(messageErreur);
    }
    else {
        console.log(messageErreur);
    }
}


pairImpair(argv[2]);