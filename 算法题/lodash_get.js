function get(obj, path, defaultValue) {
  // 将路径字符串转换成数组
  const pathArr = path.split('.')
  let result = obj

  // 遍历数组，依次访问对象的属性
  for (let i = 0; i < pathArr.length; i ++) {
    const key = pathArr[i]
    result = result[key]
    if (result === undefined) {
      // 如果属性不存在，返回默认值
      return defaultValue
    }
  }

  return result
}

const obj = {
  a: {
    b: {
      c: 'hello',
    },
  },
}

// 获取对象 a.b.c 属性的值
console.log(get(obj, 'a.b.c')) // 输出 'hello'

// 获取对象 a.b.d 属性的值，由于属性不存在，返回默认值 'world'
console.log(get(obj, 'a.b.d', 'world')) // 输出 'world'
