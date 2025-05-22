const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("You need to pass exactly one argument (!)");
  process.exit(1);
}

const time = arguments[0];

if (!/^\d{2}:\d{2}$/.test(time)) {
  console.error("Time format must be HH:MM (24-hour format)");
  process.exit(1);
}

const hour = parseInt(time.slice(0,2),10);
const minute = parseInt(time.slice(3,5),10);

if (hour < 0 || hour > 23) {
  console.error("Hour must be between 00 and 23.");
  process.exit(1);
}

if (minute < 0 || minute > 59) {
  console.error("Minute must be between 00 and 59.");
  process.exit(1);
}

let hour12 = hour;
let suffix = "AM";

if (hour === 0) {
  hour12 = 12;
} else if (hour === 12) {
  suffix = "PM";
} else if (hour > 12) {
  hour12 = hour - 12; 
  suffix = "PM";
}


const minuteStr = minute.toString().padStart(2, "0");
console.log(`${hour12}:${minuteStr}${suffix}`);
