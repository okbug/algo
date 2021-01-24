// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if (s.length % 2 === 1) return false
  let map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  let len = s.length
  let stack = []

  for (let i = 0; i < len; i++) {
    let c = s[i]
    if (map.has(c)) { // 存在 （ 【  {
      if (stack.length) { //
        let cc = stack[stack.length - 1]
        if (
            (cc === '(' && (c === '[' || c === '{')) || (cc === '[' && c === '{')) {
          return false
        }
      }
      stack.push(c)
    } else {
      let topValue = stack[stack.length - 1]
      if (map.get(topValue) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

console.log(isValid('()'))
console.log(isValid('([])'))
console.log(isValid('{[()]}'))
console.log(isValid('{()}'))
console.log(isValid('[{}]'))
console.log(isValid('[()]'))
console.log(isValid('[[]]'))
