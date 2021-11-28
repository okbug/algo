/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseEvenLengthGroups = function(arr) {
    
    let arys = [];
    let needCount = 1;
    while (arr.length) {
        let temp = [];
        let count = needCount;
        while(count--) {
            if (!arr.length) {
                break;
            }
            temp.push(arr.shift())
        }
        console.log(arr)
        // if (count) {
            if (needCount % 2 === 1) arys.push(temp);
            else {
                arys.push(temp.reverse());
            }
        // }
        needCount++
    }
    
    console.log(arys)
};


let res = reverseEvenLengthGroups([5,2,6,3,9,1,7,3,8,4]);
let res2 = reverseEvenLengthGroups([2, 1])
// console.log(res, res2)