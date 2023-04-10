function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let completedCount = 0

    promises.forEach((promise, index) => {
      promise.then(result => {
        results[index] = result
        completedCount ++

        if (completedCount === promises.length) {
          resolve(results)
        }
      }).catch(reject)
    })
  })
}
