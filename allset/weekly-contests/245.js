var makeEqual = function(words) {
    let count = 0;
    for(let i = 0; i < words.length; i++) {
      count += words[i].length
    }
    
    if(count % words.length !== 0) return false

    let len = count / words.length
    let t = []
    let u = []
    for(let i = 0; i < words.length; i++) {
      let s = words[i]
      if(s.length !== len) {
        t.push(s)
      } else {
        u.push(s)
      }
      
    }
    console.log(t)
    let str
    for(let i = 0; i < t.length; i++) {
      let a = t[i]
      if(a.length > len) {
        str = a.split(u.length > 0 ? u[0] : "").join("")
        console.log(str)
      } else {
        if(str) {
          return str + a === u[0]
        }
      }
    }
};

// let res = makeEqual(["ab","a"])
// console.log(res)

let res2 = makeEqual(["abc","aabc","bc"])
console.log(res2)