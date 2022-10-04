let multiiplication = 1;
function multiply() {
  for (let i = 200; i < 301; i++) {
    if (i % 7 == 0) {
      multiiplication *= i;
    }
  }
  return `La multiiplication de los números múltiplos de 7 es ${multiiplication}`
}
console.log(multiply());