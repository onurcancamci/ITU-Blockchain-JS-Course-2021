const numberArray = [5, 4, 3, 2, 1];
const mixedArray = [
  5,
  "example",
  {
    key: "test",
    value: 20,
  },
  ["nested", "array", 1],
];

console.log(numberArray, mixedArray);
console.log(numberArray[0]);
console.log(mixedArray[0]);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const arr = [];
console.log(arr);

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.shift());
console.log(arr);
