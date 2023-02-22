let arr = [1, 2, 3, 4, 5];
let max = arr.reduce((a, b) => Math.max(a, b));
let min = arr.reduce((a, b) => Math.min(a, b));
console.log(max, min);

let names = ['小白', '小红', '小黑'];3
let reduceName = names.reduce((pre, cur) => `${pre}、${cur}`);
console.log(names);
