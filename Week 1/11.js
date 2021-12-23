function modifyInside(obj) {
  obj.counter += 1;
}

const myObj = {
  counter: 0,
};

console.log(myObj);
modifyInside(myObj);
console.log(myObj);
