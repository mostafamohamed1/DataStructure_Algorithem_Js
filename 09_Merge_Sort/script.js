// merge sort section

// merge sorting implementation

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const med = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, med));
  const right = mergeSort(arr.slice(med));
  return merge(left, right);
}

// console.log(merge([100, 200], [2, 14, 99]));
// debugger;
console.log(mergeSort([4, 2]));
