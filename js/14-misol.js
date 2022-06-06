let a = prompt("son kiriting");

for (let k = 1; k <= a; k++) {
  if (k % 2 == 0) {
    document.write(k * k);
    document.write("<br>");
  }
}

let b = prompt("2-sonni kiriting: ");

for (let i = 1; i <= a; i++) {
  if (i % 2 != 0) {
    document.write(i * i);
    document.write("<br>");
  }
}
