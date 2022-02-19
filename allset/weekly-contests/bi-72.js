var countPairs = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    const arr = map.get(n) || [];
    arr.push(i);
    map.set(n, arr);
  }
  let count = 0;
  console.log(map);
  Array.from(map).forEach((item) => {
    const [key, arr] = item;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let [a, b] = [arr[i], arr[j]];
        if ((a * b) % k === 0) {
          count++;
          console.log(a, b);
        }
      }
    }
  });

  return count;
};

// let res1 = countPairs([3,1,2,2,2,1,3], 2);
// console.log(res1);

// let res2 = countPairs([1,2,3,4], 1);
// console.log(res2);

var sumOfThree = function (num) {
  let n = Math.floor(num / 3);
  if (n * 3 !== num) return [];

  if (n > 1) {
    return [n - 1, n, n + 1];
  } else {
    return [];
  }
};

// console.log(sumOfThree(10203));


var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) return [];
    let res = [];
    let num = finalSum;
    let now = 2;
    while (num >= 0) {
        res.push(now);
        num -= now;
        now += 2;
        console.log(num)
    }
    console.log(res)
    let sum = res.reduce((a, b) => a + b);
    console.log(sum)

    return res
};

console.log(maximumEvenSplit(28))
