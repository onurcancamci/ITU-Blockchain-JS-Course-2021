function writeChars(char, n) {
  for (let i = 0; i < n; i++) {
    document.write(char);
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    writeChars("*", i);
  } else {
    writeChars("a", i);
  }
  document.write("<br/>");
}
