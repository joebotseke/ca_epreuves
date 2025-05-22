const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("Usage:'hh:mmAM/PM'");
  process.exit(1);
}

const timeStr = arguments[0].toUpperCase();

const hour = parseInt(timeStr.slice(0, 2), 10);
const minute = timeStr.slice(3, 5); 
const period = timeStr.slice(-2);  

let hour24;
if (period === "AM") {
  hour24 = hour === 12 ? 0 : hour;
} else if (period === "PM") {
  hour24 = hour === 12 ? 12 : hour + 12;
} else {
  console.error("Invalid format. Use AM or PM.");
  process.exit(1);
}

const formattedHour = hour24.toString().padStart(2, "0");
console.log(`${formattedHour}:${minute}`);
