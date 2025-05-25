const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!arg || isNaN(num)) {
  console.log("Missing number of occurrences");
} else if (num > 0) {
  let i = 0;
  while (i < num) {
    console.log("C is fun");
    i++;
  }
}
// If num <= 0, print nothing
