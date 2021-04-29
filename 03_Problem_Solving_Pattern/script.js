// Problem solving pattern

// frequency counter

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const element = arr2.indexOf(arr1[i] ** 2);

    if (element === -1) {
      return false;
    }
    arr2.splice(element, 1);
  }
  return true;
}

console.log(same([2, 1, 3], [1, 4, 9]));

function sameSquareElement(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1.forEach((el1) => {
    arr2.forEach((el2, i) => {
      if (el1 ** 2 === el2) {
        console.log(`[${el2}] is square of [${el1}]`);
        arr2.splice(i, 1);
      }
    });
  });
}
console.log(sameSquareElement([2, 1, 3], [1, 4, 9]));

console.log(Math.sqrt(16));
console.log(Math.pow(4, 2));

console.log(" #_#".repeat(20));

// #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_#
// frequency counter
function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));

// const a1 = [1, 2, 3, 4, 5];
// const a2 = [1, 4, 9, 16, 25];

// const f1 = {};
// const f2 = {};

// for (const val of a1) {
//   f1[val] = (f1[val] || 0) + 1;
// }

// for (const val of a2) {
//   f2[val] = (f2[val] || 0) + 1;
// }

// console.log(f1);
// console.log(f2);

// for (const key in f1) {
//   if (key ** 2 in f2) {
//     console.log("True");
//   }
//   if (f2[key ** 2] === f1[key]) {
//     console.log("True");
//   }
// }

// Anagrams
function anagrams(a, b) {
  let res1 = 0,
    res2 = 0;

  for (const iterator of a) {
    res1 += +iterator.charCodeAt(0);
  }
  for (const iterator of b) {
    res2 += +iterator.charCodeAt(0);
  }

  if (res1 === res2) return true;
  else return false;
}

console.log(anagrams("text", "xett"));

function anagram1(a, b) {
  const r1 = a.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0),
    r2 = b.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return r1 === r2 || false;
}

console.log(anagram1("MMMa", "MMM"));
// console.log("M".charCodeAt() + "M".charCodeAt() + "M".charCodeAt());

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram("anagrams123", "aganrams123"));

// Implementation Stack

// var Stack = function () {
//   this.top = null;
//   this.size = 0;
// };

// var Node = function (data) {
//   this.data = data;
//   this.previous = null;
// };

// Stack.prototype.push = function (data) {
//   var node = new Node(data);

//   node.previous = this.top;
//   this.top = node;
//   this.size += 1;
//   return this.top;
// };

// Stack.prototype.pop = function () {
//   temp = this.top;
//   this.top = this.top.previous;
//   this.size -= 1;
//   return temp;
// };

// var stack = new Stack();

// stack.push(1);
// console.log(stack.push(33));

// console.log(stack);

// console.log(stack.pop()['data']);

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return `${[arr[left], arr[right]]} := ${arr[right] + arr[left]}`;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 4, 5, 2, 10]));

function countUniqueValue(arr) {
  let temp = [];

  for (const item of arr) {
    if (item in temp) {
      continue;
    } else {
      temp.push(item);
    }
  }
  return `${temp.length - 1} unique value`;
}

console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 2, 3, 10, 11]));

function countUniqueValue2(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return (i += 1);
}

console.log(
  countUniqueValue2([1, 1, 1, 2, 3, 3, 3, 4, 5, 6]) + " Unique value"
);

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let maxTemp = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  maxTemp = maxSum;
  for (let i = num; i < arr.length; i++) {
    maxTemp = maxTemp - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, maxTemp);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// let a = "Mostafa";
// let b = "";
// for (let i = 0; i < a.length; i++) {
//   const element = a[i].charCodeAt(0);
//   b += `${element.toString("2")} `;
// }

// console.log(b);
// console.log(b.length / 8 - 1);

// let ascii = b.split(" ").map((el) => parseInt(el, 2));
// let chars = String.fromCharCode(...ascii);
// console.log(ascii);
// console.log(chars);

// #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_# #_#
// divide and conquer

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    console.log(currentElement);
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = arr[middle] - 1;
    } else {
      return `Index: ${middle} `;
    }
  }
  return -1;
}
debugger;
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
