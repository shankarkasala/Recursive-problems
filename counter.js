function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let fact = factorial(5);

console.log(fact);

function solve(num) {
  if (num === 0) {
    return 0;
  } else {
    return (num % 10) + solve(Math.floor(num / 10));
  }
}

let s = solve(1234);
console.log(s);

function power(a, b) {
  if (b === 0) {
    return 1;
  }
  return a * power(a, b - 1);
}

let p = power(2, 6);

console.log(p);
