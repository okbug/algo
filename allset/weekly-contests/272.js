const f = n => n * (n + 1) / 2;
var getDescentPeriods = function(prices) {
    const arr = [];
    let i = 0;
    const n = prices.length
    while (i < n) {
        let t = 1;
        for (; i < n; i++) {
            if (prices[i + 1] === prices[i] - 1) t ++;
            else break;
        }
        i++
        
        arr.push(t)
    }

    let sum = 0;
    arr.forEach(i => {
        sum += f(i)
    })
    
    // console.log(arr);
    console.log(sum)
};

const res = getDescentPeriods([3,2,1,4])

console.log(res)