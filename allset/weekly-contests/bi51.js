// 第一题 
var replaceDigits = function(s) {
  let a = 'abcdefghijklmnopqrstuvwxyz'
  // let map = {}
  // for(let i = 0 ; i < a.length; i++){
  //   map[a[i]] = (a.charCodeAt(i) - 97)
  // }

  let arr = a.split('')
  console.log(arr);
  let res = ''
  let stk = []
  let now = null
  for(let i = 0 ; i < s.length; i ++) {
    let c = s[i]
    if(!isNaN(Number(c))) { // 是数字
      let cc = arr.indexOf(now)
      res += arr[cc + +c]
    } else {
      res += c
      now = c
    }
  }
  return res
};
let res = replaceDigits("a1b2c3d4e")
let map = new Map()
map.set(1, true)
let a = Array.from(map.entries())
console.log(a, 'aa');
console.log(res);