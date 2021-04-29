// Recursion

// -=-=-=-=-=-==-=-=-=-=-=-=-=-=-= Call Stack =-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=
function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

// -=-=-=-=-=-==-=-=-=-=-=-=-=-=-= Recursive Functions =-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=

// Sum Range Function
function sumRange(num) {
  if (num === 1) return 1;
  else return num + sumRange(num - 1);
}
// debugger;
console.log(sumRange(5));

// Count Down Function
function countDown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// writing Factorial Iteratively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

// -=-=-=-=-=-==-=-=-=-=-=-=-=-=-= Helper Functions =-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=

function collectOddValue(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValue([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(
  collectOddValues([1, 2, 3, 4, 5]).slice(
    0,
    collectOddValues([1, 2, 3, 4, 5]).length - 1
  )
);

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr.concat(arr2);
console.log(arr3);
