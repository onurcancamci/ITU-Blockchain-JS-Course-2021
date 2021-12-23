const obj = {};

while (true) {
  const input = prompt("Enter key and value comma seperated");
  if (input === "exit" || !input) {
    break;
  }

  const parts = input.split(",");
  console.log(parts);
  obj[parts[0]] = parts[1];
  console.log(obj);
}
