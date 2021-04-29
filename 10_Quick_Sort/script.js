// Quick sort section

// intro


// Helper Methods
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(swapIdx);
  return swapIdx;
}

// implement Quick sort 
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
// debugger;
console.log(quickSort([4, 3, 7, 9]));

let arr = Array.from({ length: 1000 }, (_, $) => $);

let t1 = performance.now();

console.log(quickSort(arr).flat());
let t2 = performance.now();

console.log(`Time Estimated => ${(t2 - t1) / 1000}`);
