let a = null;
let b = 1;

function f1(x) {
  console.log(typeof x);
  if (x) {
    return "muhtemelen true";
  } else {
    return;
  }
}
const returnValue = f1("");
console.log(returnValue, typeof returnValue);
