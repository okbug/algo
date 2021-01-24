/*
 * 题目大意
 * 给出一个 n长度的数组  还有一串 数字字符串
 * 1. 如果数组实际长度 < n ， 则把数字填充进去(且不存在于数组中)
 * 2. 如果填充数字存在于数组中， 则删除原来位置的数。把它更新到最右侧
 * 3. 如果实际长度 > n 。则把最左侧的删除。 填充数字进入到最右侧
 *  */

let lruMock = (n, s) => {
  let arr = s.split(' ')
  let res = []
  for (let arrElement of arr) {
    // 满足条件1
    if (res.length < n && res.indexOf(arrElement) === -1) {
      res.push(arrElement)
      continue
    }
    // 条件2
    if (arrElement in res) {
      let index = res.indexOf(arrElement)
      let tmp = res.splice(index, 1)
      res.push(...tmp)
      continue
    }
    // 条件3
    if (res.length === n && res.indexOf(arrElement) === -1) {
      res.shift()
      res.push(arrElement)
    }
  }
  if (res.length < n) {
    for (let i = res.length - 1; i < n - 1; i++) {
      res.push('-1')
    }
  }
  return res

}

console.log(lruMock(5,'1 2 3 4 5 2 1 6 2')) // 4 5 1 6 2
console.log(lruMock(5, '1 2 2 1 3 2'))
