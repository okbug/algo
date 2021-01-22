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


var rotateRight = function(head, k) {
  let len = 0
  let p1 = head
  while(p1) {
      len++
      p1 = p1.next
  }
  k = k % len
  
  for(let i = 0; i < k;i++) {
    head = change(head)
  }
  console.log(link2arr(head))
  function change(head) {
      let first = head
      let second = first.next
      let end = head
      while(end.next.next) {
          end = end.next
      }
      let d2 = end
      end = end.next
      d2.next = null
      end.next = head
      return end
      // console.log(end.val) 此时 end 是最后的节点
  }
};

rotateRight(arr2link([1,2,3,4,5]), 2)