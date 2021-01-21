function ListNode(val) {
    this.val = val
    this.next = null
}

function arr2link(arr) {
    let head = new ListNode(0)
    let p1 = head
    arr.forEach(i => {
        p1.next = new ListNode(i)
        p1 = p1.next
    })
    return head.next
}
function link2arr(head) {
  let p1 = head
  let result = []
  while(p1) {
    result.push(p1.val)
    p1 = p1.next
  }
  return result
}

// console.log(arr2link([1,2,3]))

/* let head = arr2link([1,2,3,4,5])
// console.log(link2arr(head),'arrrrrrr')
let m = 2, n = 4
let idx = 1
let p1 = head
let mNode = null, nNode = null
let beforeM = null
let afterN = null
while(p1) {
  if(idx == m - 1) {
    beforeM = p1
  }
  if(idx === m) {
    mNode = p1
    // console.log('m 节点', 'val', mNode.val)
  }
  if(idx === n) {
    nNode = p1
    // console.log('n  节点', 'val', nNode.val)
    afterN = nNode.next
    nNode.next = null
  }
  p1 = p1.next
  idx++
}
let cur = mNode
let pre = null
while(cur) {
  let next = cur.next
  cur.next = pre
  pre = cur
  cur = next
}
// console.log(afterN)
// console.log(link2arr(pre))
// console.log(link2arr(afterN))
let p3 = pre
// console.log(1,111)
while(p3 && p3.next) {
  p3 = p3.next
}
p3.next = afterN
// console.log(afterN,'arterrrrr')
beforeM.next = pre
console.log(link2arr(beforeM)) */


var kthToLast = function(head, k) {
  let len = 0
  let p1 = head
  while(p1) {
      len++
      p1 = p1.next
  }
  p1 = head
  // console.log(len)  5 
  for(let i = 0;i < k - 1;i++) {
      p1 = p1.next
      // console.log(p1.val)
  }
  // 现在p1 在 第 k 个节点

  let p2 = head
  while(p1.next) {
    console.log(1)
    p1 = p1.next
    p2 = p2.next
  }
  console.log(p2.val)
};

kthToLast(arr2link([1,2,3,4,5]), 2)