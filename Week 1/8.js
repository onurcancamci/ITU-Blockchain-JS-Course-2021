function rec(n) {
  console.log(n);
  if (n > 0) {
    rec(n - 1);
  }
}

const myFunction = rec;
console.log(console.log(1), console.log(2), console.log(3));
//rec(10);
