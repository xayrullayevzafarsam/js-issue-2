let n = prompt("1-son");

let s = 0;

for (let i = 1; i <= n; i++) {
  s += 1 / i;
  document.write(s);
  document.write("<br>");
}

document.write(s);
