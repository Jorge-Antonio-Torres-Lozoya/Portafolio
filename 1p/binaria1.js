function busquedaBinaria(value) {
  let steps = 0;
  let start = 0;
  let arr = [];

  for (let j = 0; j < 1000; j++) {
    let numbers = Math.floor(Math.random() * 1000);
    arr.push(numbers);
  }
  arr.sort(function(a, b) {
    return a - b;
  })
  let end = arr.length - 1
  console.log(arr);

  while (start <= end) {
    steps++;
    let middle = Math.floor((start + end) / 2)

    if (arr[middle] === value) {
      return `Encontre el valor ${value} en la posición ${middle} en ${steps} pasos`
    } else if (arr[middle] < value) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  console.log(value);
  return 'El valor no esta'
}
console.log(busquedaBinaria(30));