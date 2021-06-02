const all = (n, x) => {
  let arr = n.split('')
  let res = []
  for(let i = 0; i < n + 1; i++) {
      let temp = '';
      for(let j = 0 ; j < i; j++) {
          temp += n[j]
      }
      temp = temp + x.toString() + n.substr(i)
      res.push(~~temp)
  }
  return res.filter(i => i !== 0)
}
var maxValue = function(n, x) {
  if(n[0] === '-') {
      let a = all(n.substr(1), x)
      let min = Math.min(...a)
      return '-' + min.toString()
  } else {
      let a = all(n, x)
      let max = Math.max(...a)
      return max.toString()
  }
};

let res = maxValue("-13", 2)
console.log(res)