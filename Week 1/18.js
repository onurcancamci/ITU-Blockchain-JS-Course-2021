for (let i = 0; i < abi.length; i++) {
  if (abi[i].type !== "function") {
    continue;
  }

  //console.log(Object.keys(abi[i]));
  //console.log(abi[i].name);

  // if (abi[i].name) {
  //   console.log(abi[i].name);
  // } else {
  //   console.log("Name is not defined");
  // }
}

function findFunction(name) {
  for (let i = 0; i < abi.length; i++) {
    if (abi[i].type !== "function") {
      continue;
    }
    if (abi[i].name === name) {
      return abi[i];
    }
  }
}

const addLiquidity = findFunction("addLiquidity");
//console.log(addLiquidity.inputs);

for (let input of addLiquidity.inputs) {
  console.log(input.name);
}
