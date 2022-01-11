// reduce
const arr = [
  {
    val: 1,
    name: "o1",
  },
  {
    val: 4,
    name: "o2",
  },
  {
    val: 5,
    name: "o3",
  },
  {
    val: 8,
    name: "o4",
  },
];

console.log(arr);

const sum = arr.reduce((acc, el) => {
  return acc + el.val;
}, 0);

const map = arr.reduce((m, el) => {
  m[el.name] = el.val;
  return m;
}, {});

const m2 = {};
arr.map((el) => {
  m2[el.name] = el.val;
});

console.log(sum, map, m2);
