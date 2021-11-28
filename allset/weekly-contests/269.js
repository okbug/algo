var getAverages = function(nums, k) {
    let res = new Array(nums.length).fill(-1);
    for (let i = k; i < nums.length - k; i++) {
        // let arr = nums.slice(i - k,i - k + k * 2 + 1);
        // let num = arr.reduce((a, b) => a + b);
        let sum = 0
        for (let j = i - k; j < i - k + k * 2 + 1; j++) {
            sum += nums[j];
        }
        res[i] = Math.floor(sum / (k * 2 + 1));
    }

    return res
};

// let res = getAverages([7,4,3,9,1,8,5,2,6], 3);
// console.log(res);

// let res2 = getAverages([8], 10000)
// console.log(res2);



var minimumDeletions = function(nums) {
    if (nums.length === 1) return 1;
    let max = Math.max(...nums)
    let min = Math.min(...nums);
    let minIndex = nums.indexOf(min)
    let maxIndex = nums.indexOf(max);
    if (minIndex === maxIndex) {
        return 1;
    }
    // console.log(minIndex, maxIndex)
    let n = nums.length;
    let a = Math.max(n - minIndex, n - maxIndex);
    let b = n - minIndex + maxIndex + 1;
    let c = n - maxIndex + minIndex + 1;
    let d = Math.max(minIndex, maxIndex) + 1
    return Math.min(a, b ,c, d)
    // if (minIndex <= (n >>> 1) && maxIndex <= (n >>> 1)) {
    //     return Math.max(minIndex, maxIndex) + 1;
    // };
    // if (minIndex >= (n >>> 1) && maxIndex >= (n >>> 1)) {
    //     return Math.max(n - minIndex, n - maxIndex)
    // }
    // let lFlag = 0,rFlag = 0
    // let minDistance = 0, maxDistance = 0
    // if (n - minIndex < minIndex + 1) {
    //     minDistance = n - minIndex
    // } else if(n - minIndex >= minIndex + 1){
    //     minDistance = minIndex + 1
    //     lFlag = 1
    // }
    // if (n - maxIndex < maxIndex + 1) {
    //     maxDistance = n - maxIndex;
    // } else if (n - maxIndex >= maxIndex + 1){
    //     maxDistance = maxIndex + 1
    //     rFlag = 1
    // }
    // if (lFlag === 1 && rFlag === 1) {
    //     return Math.max(n - minIndex, n - maxIndex)
    // }
    // if (lFlag === 0 && rFlag === 0) {
    //     return Math.max(minIndex, maxIndex) + 1;
    // }
    // // let minDistance = Math.min(n - minIndex, minIndex + 1);
    // // let maxDistance = Math.min(n - maxIndex, maxIndex + 1);
    // console.log(minDistance, maxDistance)
    // return minDistance + maxDistance
};

let res = minimumDeletions([2,10,7,5,4,1,8,6])
console.log(res); // 5
console.log('-----')
let res2 = minimumDeletions([0,-4,19,1,8,-2,-3,5])
console.log(res2) // 3
console.log('-----');
let res3 = minimumDeletions([101])
console.log(res3) // 1
console.log('-----------------')
let res4 = minimumDeletions([-1,-53,93,-42,37,94,97,82,46,42,-99,56,-76,-66,-67,-13,10,66,85,-28]);
console.log(res4) // 11
