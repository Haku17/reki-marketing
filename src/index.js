const newObject = {
  a: 1,
  b: 2,
  c: 3
}

const secondObject = {
  ...newObject,
  d: 4,
  b: 10
}

console.log(newObject)
console.log(secondObject)