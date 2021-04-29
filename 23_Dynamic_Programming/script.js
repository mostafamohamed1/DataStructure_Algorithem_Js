// Dynamic Programming

// Fibonacci Number Bad Solution

/*
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
debugger;
console.log(fibonacci(4));
*/
// Fibonacci Number good Solution
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibMemo(40));

// Tabulation
function fibTabu(n) {
  if (n <= 2) return 1;
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fibTabu(3));
