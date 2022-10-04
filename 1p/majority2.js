let array = [];
let uniqueElements = [];
let timesRepeated = []
let count = 0;
let countRepe = 1;

for (let j = 0; j < 5; j++) {
  let numbers = Math.floor(Math.random() * 4);
  array.push(numbers);
}
let arraySort = [...array].sort();
console.log(arraySort);

for (let i = 0; i < arraySort.length; i++) {

  if (arraySort[i] == arraySort[i + 1]) {
    
    countRepe++
    count++

  }
  else {
    uniqueElements.push(arraySort[i])
    timesRepeated.push(countRepe)
    countRepe = 1;

  }
}
let max = Math.max(...timesRepeated);
let index = timesRepeated.indexOf(max)

let promedio = Math.ceil(arraySort.length / 2)
if (max >= promedio) {
  console.log("El majority es " + uniqueElements[index] + " y se repite " + max + " veces");
  console.log("me llevo " + count + " pasos");
}
else {
  console.log("No hay un numero majority");
}

