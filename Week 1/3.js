for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < i; j++) {
      document.write("*");
    }
  } else {
    for (let j = 0; j < i; j++) {
      document.write("a");
    }
  }
  document.write("<br/>");
}
