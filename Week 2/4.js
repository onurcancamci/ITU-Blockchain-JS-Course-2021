//functions can be created inside other functions

function makeOp(name) {
  if (name === "add") {
    return (a, b) => a + b;
  } else if (name === "sub") {
    return (a, b) => a - b;
  } else if (name === "div") {
    return function div(a, b) {
      return a / b;
    };
  } else {
    return (a, b) => a * b;
  }
}

function doMath(a, b, op) {
  return op(a, b);
}

const myMult = makeOp("mult");
const probably6 = doMath(2, 3, myMult);
const probably8 = doMath(4, 4, makeOp("add"));
console.log(probably6, probably8);
