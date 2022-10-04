let obj = {}
let n = 10000
for (let i = 0; i < n; i++) {
  let numbers = Math.floor(Math.random() * (10e3 - 20e3) + 20e3);
  obj["name" + numbers] = "name" + numbers
}

let arr = Object.keys(obj).sort((p, q) => p.substring(4) < q.substring(4) ? -1 : p.substring(4) > q.substring(4) ? 1 : 0);
console.log(arr)
let arr2 = Object.values(obj).sort((p, q) => p.substring(4) < q.substring(4) ? -1 : p.substring(4) > q.substring(4) ? 1 : 0);
console.log(arr2)

console.log(Object.keys(obj).length)

let obj2 = {}
for (let i = 0; i < arr.length; i++) {
  obj2[arr[i]] = arr2[i]
}
console.log(obj2);