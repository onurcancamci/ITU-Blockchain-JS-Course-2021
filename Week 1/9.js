const user = {
  id: 1,
  name: "Onurcan",
  email: "example@gmail.com",
  address: "Istanbul",
  createdAt: Date.now(),
};

const idName = "id";

console.log(user);
console.log(user.id, user.name, user.createdAt);
console.log(user[idName], user["name"], user["createdAt"]);

user.additionalProperty = true;
user.name = "Not Onurcan";

console.log(user);

const mySet = new Set();
mySet.add(1);
console.log(mySet, mySet.has(1));

const myKeyObject = { a: 1 };
const myMap = new Map();
const myDict = {};

console.log(myKeyObject.toString());
myDict[myKeyObject] = 123;
myMap.set(myKeyObject, 123);
console.log(myDict["[object Object]"]);
//console.log(myMap, myMap.get(myKeyObject), myDict, myDict[myKeyObject]);
