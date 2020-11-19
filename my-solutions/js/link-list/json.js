const json = {
    a: {
        b: {
            c:1
        }
    },
    d:{
        e:2
    }
}
const path = ['a','b','c']
function foo(json,path) {
    let p = json;
    path.forEach(k => {
        p = p[k]
    })
    console.log(p)
}
foo(json,path) 