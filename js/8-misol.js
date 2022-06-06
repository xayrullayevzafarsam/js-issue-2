let a = prompt("1-son:");
let b = prompt("2-son");
let p = 1;

a *= 1;
b *= 1;

for (let i = a; i < b; i++) {
  p *= i;
}

document.write(p);
