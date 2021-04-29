// Analyzing Performance Objects and Arrays

// Objects
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favNumber: [1, 2, 3, 4],
};

console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(Object.values(instructor));
console.log(instructor.hasOwnProperty("firstName"));

// Arrays
const arr = [1, 2, 3, 4];
arr.unshift(0);

console.log(arr);