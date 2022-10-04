let array = [];
for (let j = 0; j < 5; j++) {
  let numbers = Math.floor(Math.random() * 4);
  array.push(numbers);
}
console.log(array);
let variable = 0;
let contador = 0;
let cuenta = 0;
let count = 0;
const busqueda = () => {
  array.map(p => {

    cuenta = 0
    array.map(x => {

      if (p == x) {
        count++
        cuenta++
      }
    })
    if (cuenta > contador) {
      contador = cuenta;
      variable = p;
    }
  });

  let promedio = Math.ceil(array.length / 2)
  if (contador >= promedio) {
    console.log(`El mayority es ${variable}, se repite: ${contador} veces`)
    console.log(`Me llevo ${count} pasos`);
  }
  else {
    console.log("No hay majority");
  }

}
busqueda()