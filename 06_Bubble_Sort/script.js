// Bubble Sort Section

// Built-In Sort

function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([4, 5, 2, 6, 8, 9, 2, 1].sort(numberCompare));

// String Length Compare

function strLenCompare(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  ["Mostafa", "Algorithm", "Data Structure", "Colt", "Jessica"].sort(
    strLenCompare
  )
);

// Bubble sort

function bubbleSort1(arr) {
  //   const final = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        // let tmp = arr[j];
        // arr[j] = arr[i];
        // arr[i] = tmp;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort1([1, 2, 3, 4, 5, 6, 8, 7]));

// Bubble sort optimization

function bubbleSort2(arr) {
  //   const final = [];
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        // let tmp = arr[j];
        // arr[j] = arr[i];
        // arr[i] = tmp;
        [arr[j], arr[i]] = [arr[i], arr[j]];
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  return arr;
}

console.log(bubbleSort2([1, 2, 3, 4, 5, 6, 8, 7]));
