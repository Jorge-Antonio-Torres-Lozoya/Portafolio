let obj = {}
let n = 10000

for (let i = 0; i < n; i++) {
  let numbers = Math.floor(Math.random() * n);
  obj["name" + numbers] = "name" + numbers
}
console.log(obj)
console.log(Object.keys(obj).length)

