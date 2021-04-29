// Radix sort section

// intro

// Helper Methods
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Implement radix sort
function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

debugger;
console.log(radixSort([1, 4, 44, 34, 55, 100]));

// Time Complexity
// const arr = Array.from({ length: 10000 }, (_, $) => Math.random() * 10000);

// const t1 = performance.now();
// console.log(radixSort(arr));
// const t2 = performance.now();
// console.log(`Time Estimated => ${(t2 - t1) / 1000}`);
