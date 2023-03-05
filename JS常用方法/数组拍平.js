const arr = [1, 2, [3, 4, [5, 6]]]
const flatArr = arr.flat(2)
console.log(flatArr)

// 判断数组层数
function getNestedLevel(arr) {
  let level = 1 // 初始化层数为1

  // 递归函数
  function getLevel(arr, curLevel) {
    // 遍历数组
    arr.forEach(item => {
      if (Array.isArray(item)) {
        // 如果当前元素仍然是数组，递归调用函数
        getLevel(item, curLevel + 1)
      } else {
        // 如果当前元素不是数组，更新层数的最大值
        level = Math.max(level, curLevel)
      }
    })
  }

  // 调用递归函数
  getLevel(arr, 1)

  return level
}
