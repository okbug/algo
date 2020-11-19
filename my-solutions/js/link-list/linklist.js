const a = { val: 1 }
const b = { val: 3 }
const c = { val: 5 }
const d = { val: 7 }
a.next = b;
b.next = c;
c.next = d;
console.log(a)

//遍历链表
let 遍历 = (x) => {
    let p = x;
    while (p) {
        console.log(p.val)
        p = p.next
    }
}
const e = { val: 9 }
    //插入 这时变成abcde
d.next = e
    遍历(a)
    console.log(a)
    //删除 这时e被删除
    // c.next=d;

// let p1=a;
// let p2=null;
// while(p1){
//     const tmp=p1.next
//     p1.next=p2
//     p2=p1                        
//     p1=tmp //p1=p1.next
//     // console.log(p1&&p1.val,p2&&p2.val)
// }

// let arr = []
// let p=a;
// while(p){
//     arr.push(p.val)
//     p=p.next
// }
// console.log(arr)
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let p1 = new ListNode(0)
// let aaa = p1
// for(let i=0;i<arr.length;i++) {
//     p.val = arr[i]
//     p = p.next
// }
// 遍历(p)

let p1 = a;
let p2 = a;
while(p1 && p2 && p2.next) {
    p1=p1.next;
    p2 = p2.next.next
    if(p1 === p2) {
        return true
    }
    
}
return false