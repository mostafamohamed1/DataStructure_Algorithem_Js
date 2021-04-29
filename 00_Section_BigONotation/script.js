// Big O Notation

//$_$_$_$_$_$_$_$_$_$_$_$_$_$ Timing Complexity $_$_$_$_$_$_$_$_$_$_$_$_$_$
// addUpTo [1] O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

// addUpTo [2] O(n)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(6));
let t2 = performance.now();
console.log(`Estimated Time : ${(t2 - t1) / 1000} Second.`);

let t11 = performance.now();
console.log(addUpTo2(6));
let t22 = performance.now();
console.log(`Estimated Time : ${(t22 - t11) / 1000} Second.`);

//$_$_$_$_$_$_$_$_$_$_$_$_$_$ Space Complexity $_$_$_$_$_$_$_$_$_$_$_$_$_$

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(2 * arr[i]);

  return newArr.join(" ");
}

console.log(double([2, 3, 4, 5, 6, 7, 8, 9, 10]));
