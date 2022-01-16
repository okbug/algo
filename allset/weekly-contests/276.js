var minMoves = function(target, max) {
    let x = target;
    let _max = max;
    let record = [];
    while (_max--) {
        x = Math.floor(x / 2);
        record.push(x)
    }
    console.log(record);
    record = record.filter(i => i !== 0)

    console.log(record);
    // record.reverse();
    let sum = 0;
    let now = 1;
    let len = record.length
    for (let i = 0; i < len; i++) {
        let num = record.pop();
        // let top = record[record.length - 1];
        console.log(sum, now);
        sum += num - now;
        now = num * 2
        console.log(sum, now);
    }
    if (now === target - 1) sum++
    
    console.log(record)

    return sum + len
};
let res = minMoves(19, 2); // 7
// let res = minMoves(10, 4); // 4

console.log(res);