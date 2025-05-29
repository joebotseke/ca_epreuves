/**
 * program that displays all the different possible combinations of three digits in ascending order. 
 */

// Solving
function ThreeDigitCombination(){
    let combination = "";
    for (let i = 0; i <=9; i++){
        for (let j = i+1; j<=9; j++){
            for (let k = j+1; k<=9; k++){
                combination += `${i}${j}${k}`;
                if (!(i === 7 && j === 8 && k === 9)){
                    combination += ", ";
                }
            }
        }
    }
    return combination;
}

// Display 
function main() {
    const result = getThreeDigitCombinations();
    console.log(result);
}

main();
