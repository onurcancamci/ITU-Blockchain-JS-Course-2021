// filter

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

const biggerThan3 = arr.filter((el) => el.val > 3).map((el) => el.val);
const biggerThanBool = arr.map((el) => el.val > 3);

console.log(biggerThan3, biggerThanBool);
