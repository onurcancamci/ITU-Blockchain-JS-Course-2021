// Functions can be stored in variables or passed as parameters

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Pls send only numbers");
    return null;
  }
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => a / b;

function doMath(a, b, op) {
  return op(a, b);
}

const myMult = mult;

const probably6 = doMath(3, 2, myMult);
const probably8 = doMath(2, 3, (a, b) => a ** b);
const probablyArr = doMath(5, 10, function (a, b) {
  return [a, b];
});
console.log(probably6, probably8);
console.log(probablyArr);

let num = 1;
