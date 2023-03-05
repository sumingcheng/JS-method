function compareVersions(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const len = Math.max(arr1.length, arr2.length)
  for (let i = 0; i < len; i ++) {
    const num1 = parseInt(arr1[i] || 0)
    const num2 = parseInt(arr2[i] || 0)
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return - 1
    }
  }
  return 0
}

compareVersions('1.0.0', '1.0.1') // -1
compareVersions('1.0.0', '1.0.0') // 0
compareVersions('2.0.0', '1.9.9') // 1
compareVersions('1.0.0-alpha', '1.0.0-beta') // -1

const versions = ['2.0.0', '1.0.0', '1.5.1', '1.0.1']
versions.sort(compareVersions) // ["1.0.0", "1.0.1", "1.5.1", "2.0.0"]
