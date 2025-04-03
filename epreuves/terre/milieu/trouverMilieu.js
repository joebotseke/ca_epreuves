const { argv } = require('node:process');

function trouverMilieu(p1, p2, p3){
    let n1 = parseInt(p1);
    let n2 = parseInt(p2);
    let n3 = parseInt(p3);
    let result;
   
    if ((n1 > n2 || n1 > n3) && (n1 < n2 || n1 < n3) ){
        result = n1;
    }
    else if ((n2 > n1 || n2 > n3) && (n2 < n1 || n2 < n3)){
        result = n2;
    }
    else if ((n3 > n1 || n3 > n2) && (n3 < n1 || n3 < n2)){
        result = n3;
    }
    else {
        result = "Erreur";
    }
    console.log(result);
}
trouverMilieu(argv[2], argv[3], argv[4]);