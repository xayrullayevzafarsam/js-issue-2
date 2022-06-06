let a = prompt("1-son:");
let b = prompt("2-son");
let p = 0;

a *= 1;
b *= 1;
p *= 1;

for (let i = a; i <= b; i++) {
  p += i * i;
  document.write(p);
  document.write("<br>");
}

document.write(p);
