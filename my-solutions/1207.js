let arr = [1, 2]
let res = []
arr.forEach(item => {
    res[item] += 1
})
console.log(res)
let r;
res.forEach(i => {
    if(r == undefined) r = i
    if(i!=0 && r == i) {
        return false
    }
})