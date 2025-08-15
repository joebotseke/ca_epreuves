// === Utils ===
function getLength(array) {
    let length = 0;
    for (const _ of array) {
        length++;
    }
    return length;
}

function sliceFrom(array, index) {
    let newArray = [];
    for (let i = index; i < getLength(array); i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

function isValidArguments(array, minLength) {
    if (getLength(array) < minLength) {
        console.error("error");
        return false;
    }
    return true;
}

// === Error handling ===
const userArguments = sliceFrom(process.argv, 2);

if (!isValidArguments(userArguments, 1)) {
    process.exit(1);
}

// ===  Solving - Tri ASCII ===
function asciiSort(array) {
    const arrayLength = getLength(array);

    for (let i = 0; i < arrayLength - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrayLength; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// === Display ===
function main() {
    const result = asciiSort(userArguments);
    console.log(result.join(" "));
}

main();
