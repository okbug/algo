const hash = {
    'R': 0,
    'G': 1,
    'B': 2,
}

var countPoints = function(rings) {
    const map = new Map();
    for (let i = 0; i < rings.length; i+=2) {
        let color = rings[i];
        let index = rings[i + 1];
        const pos = map.get(index) || new Array(3).fill(0);
        pos[hash[color]] = 1;
        map.set(index, pos)
    }

    let need = 0;
    let cur = [0, 0, 0];
    const arr = Array.from(map);

    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        if (value.every(i => i === 1)) {
            console.log(key, value)
            need = 1;
            return need;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        
    }

    return need;
};


const res = countPoints("B0B6G0R6R0R6G9");

console.log(res);


var subArrayRanges = function(nums) {
    // nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            sum += Math.abs(nums[j] - nums[i])
        }
    }

    return sum;
};



// const res = subArrayRanges([4,-2,-3,4,1])
// console.log(res);

