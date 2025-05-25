const arg = process.argv[2];
const size = parseInt(arg, 10);

if (!arg || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  let i = 0;
  const row = "X".repeat(size);
  while (i < size) {
    console.log(row);
    i++;
  }
}
// if size <= 0, print nothing
