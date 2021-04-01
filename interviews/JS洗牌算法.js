let arr = [1, 2, 3, 4, 5, 6, 7, 8]
function random(arr) {
  arr = [...arr]
  let len = arr.length
  let res = []
  while(len--) {
    let num = Math.floor(Math.random() * len)
    res.push(arr.splice(num, 1))
  }
  return res.flat(1)
}
for(let i = 0; i < 5;i++) {
  console.log(random(arr))
}

// 也考到了 力扣第三题 的 原题