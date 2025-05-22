const arguments = process.argv[1];
const lastSlashIndex = arguments.lastIndexOf("/") +1;
const fileName = arguments.slice(lastSlashIndex);
console.log(fileName);