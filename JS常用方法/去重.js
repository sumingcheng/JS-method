let arr = [1, 2, 3, 4, 3, 3, 2, 5]
let newArr1 = [...new Set(arr)]
console.log(newArr1)
// Set
let newArr2 = Array.from(new Set(arr))
console.log(newArr2)
// filter + indexOf
let newArr3 = arr.filter((value, index) => {
  return arr.indexOf(value) === index
})
console.log(newArr3)
// Map
let newArr4 = (arr) => {
  let map = new Map()
  arr.forEach((value) => {
    map.set(value, true)
  })
  return Array.from(map.keys())
}
console.log(newArr4(arr))
