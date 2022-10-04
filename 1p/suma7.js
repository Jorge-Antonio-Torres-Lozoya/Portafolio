let addition = 0;
function add() {
  for (let i = 200; i < 301; i++) {
    if (i % 7 == 0) {
      addition += i
    }
  }
  return `La suma de los números múltiplos de 7 es ${addition}`;
}
console.log(add())