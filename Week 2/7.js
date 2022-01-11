// map
// map filter reduce
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

const onlyVals = arr
  .map((el, arr, index) => {
    return el.val;
  })
  .map((el) => el + 1)
  .map((el) => el.toString());

console.log(onlyVals);

const withAddedRandom = arr.map((el) => {
  return {
    ...el,
    rand: Math.random(),
  };
});

console.log(withAddedRandom);
