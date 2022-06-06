let n = prompt("n ni kirit");

for (let k = 1; k <= n; k++) {
  let s = 0;

  for (let i = 1; i < k; i++) {
    if (k % i == 0) {
      s += i;
    }
  }

  if (k == s) {
    document.write(s);
    document.write("<br>");
  }
}
