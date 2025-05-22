let alphabet = "";
const firstLetter = 97;
const lastLetter = 122;

for (let i = firstLetter; i < lastLetter + 1; i++){
    alphabet += String.fromCharCode(i);
}
console.log(alphabet);