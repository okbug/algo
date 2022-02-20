/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
     let count = 0
    for (let i = 1; i <= num; i++) {
        if (isSum(i)) {
            count++
        }
    }

    return count;
};



let isSum = num => num.toString().split('').map(i => Number(i)).reduce((a, b) => a + b) % 2 === 0


// console.log(countEven(30))


var mergeNodes = function(head) {
    // let arr = [0, 3, 1, 0, 4, 5, 2, 0];
    let arr = []
    for (let p = head; p ; p = p.next) {
        arr.push(p.val);
    }

    let now = 0;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num === 0) {
            res.push(now)
            now = 0;
        } else {
            now += num;
        }
    }

    console.log(res)

    let dummy = new ListNode(-1);
    let cur = dummy;
    res.forEach(e => {
        cur = cur.next = new ListNode(e);
    })

    return dummy.next;
};


// mergeNodes()



var repeatLimitedString = function(s, repeatLimit) {
    let res = '';

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        const obj = map.get(c) || {firstTime: i, count: 0};
        obj.count++;
        map.set(c, obj);
    }
    console.log(map)
    const arr = Array.from(map).sort((a, b) => a.firstTime - b.firstTime);
    console.log(arr)
};

console.log(repeatLimitedString('cczazcc', 3));