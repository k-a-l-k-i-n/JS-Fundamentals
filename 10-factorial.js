function factorial(n) {
  n = parseInt(n);
  if (isNaN(n) || n <= 1) return 1;
  return n * factorial(n - 1);
}

const arg = process.argv[2];
console.log(factorial(arg));
