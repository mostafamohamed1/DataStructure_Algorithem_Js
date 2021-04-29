// Linear Search

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([12, 34, 44, 55, 13, 190, 2], 2));

// Binary Search

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && middle < end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
// debugger;
const arr = [33, 44, 55, 66, 77, 88, 99, 100, 110];
console.log(binarySearch(arr, 33));

// Linear String Search

function searchString(long, pattern) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[j + i]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count === 0 ? null : count;
}

console.log(searchString("Mostafa Mohamed Mostafa", "Mos"));


