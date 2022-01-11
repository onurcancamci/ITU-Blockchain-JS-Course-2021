//Functions can be composed with new functions or with using bind

const collA = {};
const collB = {};
const arrA = [];
const arrB = [];

function addToCollection(col, key, value) {
  col[key] = value;
}

function addToArray(arr, key, value) {
  arr.push([key, value]);
}

addToCollection(collA, "test", 42);
addToArray(arrA, "test", 42);
console.log(collA, arrA);

function addALotOfValues(addFn) {
  for (let k = 0; k < 10; k++) {
    const key = `key_${k}`;
    addFn(key, k);
  }
}

addALotOfValues((key, value) => {
  addToCollection(collA, key, value);
});
console.log(collA);

const myAddFn = addToCollection.bind(null, collB);
// (key, value) => void

addALotOfValues(myAddFn);
console.log(collB);
