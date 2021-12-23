function writeChars(char, n) {
  for (let i = 0; i < n; i++) {
    document.write(char);
  }
}

function newLine() {
  document.write("<br/>");
}

function tree(level) {
  document.body.innerHTML = "";
  for (let i = 1; i <= level; i++) {
    writeChars(".", level - i);
    writeChars("*", i);
    writeChars(".", level - i);
    newLine();
  }

  const starCount = Math.floor(level / 4);
  for (let i = 0; i < level / 3; i++) {
    writeChars(".", level - starCount);
    writeChars("*", starCount);
    writeChars(".", level - starCount);
    newLine();
  }
}

tree(10);
