// In js functions can be declared in multiple ways.

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

console.log(div(1, 2));
