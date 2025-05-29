/**
 * a program that displays all the different combinations of two numbers between 00 and 99 in ascending order.
 */

// === Utilities ===
function padNumber(n) {
    return n.toString().padStart(2, '0');
}


// === Solving ===
function twoNumbersCombinations(){
    let combination = "";
    for (let i = 0; i<100; i++){
        for (j = i+1; j<100; j++){
            combination += `${padNumber(i)} ${padNumber(j)}`;

            if (!(i === 98 && j === 99)){
                combination +=", ";
            }        
        }
    }
    return combination;
}

// === Display === 
function main() {
    const result = twoNumbersCombinations();
    console.log(result);
}

main();