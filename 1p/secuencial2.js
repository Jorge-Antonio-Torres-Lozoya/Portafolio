let arr = [];
for (let j = 0; j < 10000; j++) {
  let numbers = Math.floor(Math.random() * 10000);
  arr.push(numbers);
}
console.log(arr);
function sequentialSearch(number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return `Encontre el numero ${number} en ${[i]} pasos en el inidce ${i}`
    }
  }
  return `No encontre el numero ${number}`
}
console.log(sequentialSearch(5));