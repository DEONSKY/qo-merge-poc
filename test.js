function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Example usage:
const sequence = generateFibonacci(10);
console.log(sequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
