let a = prompt("sonni kirit");

let s = 0,
  p = 1;

for (let i = 1; i <= a; i++) {
  p *= i;
  document.write(p);
  document.write("<br>");
  s += p;
}
document.write("<br>");
document.write(s);
