let count = 0;
let pasos = 0;

function multiples() {
  for (let i = 200; i < 301; i++) {
    pasos++
    if (i % 7 == 0) {
      count++
    }
  }

  return `Los multiples de 7 en total son:${count}`;

}
console.log(multiples())
console.log(`Este algoritmo tomo ${pasos + count} pasos`)