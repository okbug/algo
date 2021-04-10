function A(){
  this.a = 1
}
A.prototype = {
  b: 1,
  c: 2
}
let a = new A()
console.log(a.b)

A.prototype = {
  b: 2,
  c: 3,
  d: 4
}
let b = new A()
console.log(b.d)
console.log(a.d)