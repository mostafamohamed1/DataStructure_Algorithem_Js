// Problem Solving

const countCharacterFirst = function (input) {
  if (!input) return;
  if (typeof input !== typeof "string") return;
  const chars = {};
  for (let iterator of input) {
    iterator = iterator.toLowerCase();
    if (/[a-z0-9]/.test(iterator)) {
      chars[iterator] = ++chars[iterator] || 1;
    }
  }
  return chars;
};

const countCharacterSecond = function (input) {
  if (!input) return;
  if (typeof input !== typeof "string") return;
  const chars = {};
  for (let iterator of input) {
    iterator = iterator.toLowerCase();
    if (isAlfaNumeric(iterator)) {
      chars[iterator] = ++chars[iterator] || 1;
    }
  }
  return chars;
};

const isAlfaNumeric = function (code) {
  code = code.charCodeAt();
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
};

console.log(
  "0".charCodeAt(),
  "9".charCodeAt(),
  "a".charCodeAt(),
  "z".charCodeAt()
);
const t1 = performance.now();
console.log(countCharacterFirst("Hello hi!"));
const t2 = performance.now();
console.log(`Time Estimated ${(t2 - t1) / 1000}`);

const t11 = performance.now();
console.log(countCharacterSecond("Hello hi!"));
const t22 = performance.now();
console.log(`Time Estimated ${(t22 - t11) / 1000}`);
