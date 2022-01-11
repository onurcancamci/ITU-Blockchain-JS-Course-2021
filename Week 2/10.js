// examples with map filter reduce

const functions = abi
  .filter((obj) => obj.type === "function")
  .filter((obj) => obj.stateMutability === "pure")
  .map((obj) => obj.name);

console.log(functions);
