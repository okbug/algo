# Promise.all
```js
Promise.all = function(promises) {
  return new jPromise((resolve,reject)=>{
      // 异步：并发 使用for循环迭代执行 和串行 就是回调，一个任务是下一个任务的前提
      // 遍历数组，依次拿到结果
      let arr = []
      let index = 0;
      const processData = (key,data) => {
          arr[key] = data
          if(++index === promises.length) {
              resolve(arr)
          }
      }
      for(let i=0;i<promises.length;i++) {
          let result = promises[i];
          if(isPromise(result)) {
              result.then((data)=>{
                  processData(i,data)
              },reject)
          }else {
              // 如果这个result不是promise那么直接返回它。
              processData(i,result)
          }
      }
  })
}
```
# Array.prototype.map
```js
Array.prototype.map = function(fn) {
  let result = []
  for(let i = 0;i < this.length;i++) {
    result[i] = fn(this[i], i)
  }
  return result
}
```
# 二叉树的层序遍历
```js
function foo(root) {
  let res = []
  if(!root) return res
  let q = [root]
  while(q.length) {
    let t = q.shift()
    res.push(t.val)
    t.left && q.push(t.left)
    t.right && q.push(t.right)
  }
  return res
}
```
# 移动零
## 土狗写法
```js
function reverse(arr) {
  let arr1 = arr.filter(i => i !== 0)
  let arr2 = new Array(arr.length - arr1.length).fill(0)
  return arr2.concat(arr1)
}
```
## 高级写法
(还没去看)
# 2进制转16进制
先让我写了一个2转10的，写出来了
```js
function two2ten(num) {
  let res = 0
  let str = num.toString().split('').reverse().join('')
  for(let i = 0;i < str.length;i++) {
    res += str[i] * (2 ** i)
  }
  return res
}
```
然后让我10转16的话，我是先写了一个map，来存储A-F所对应的数字，然后依次类推的