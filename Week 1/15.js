const user = {
  id: 1,
  name: "Onurcan",
  email: "example@gmail.com",
  address: "Istanbul",
  createdAt: Date.now(),
};

const keys = Object.keys(user);
console.log(keys);

const arr = [1, 2, 4];
console.log(Array.isArray(arr), typeof arr, typeof user);
