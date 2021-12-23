// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

const validJson = {
  a: "example",
  b: {
    c: 1,
    d: [2, 3, "4"],
  },
  e: true,
  f: null,
  fn: function test() {
    console.log("test");
  },
};

console.log(validJson);
const str = JSON.stringify(validJson);
validJson.fn();
console.log(str);

const parsed = JSON.parse(str);
console.log(parsed);
