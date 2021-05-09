var maximumPopulation = function(logs) {
  let map = new Map()
  for(let p of logs) {
    for(let i = p[0]; i < p[1]; i ++) {
      map.set(i, map.has(i) ? map.get(i) + 1: 1)
    }
  }
  let arr =   Array.from(map.entries())
  arr.sort((a, b) => a[1] - b[1])
  let max = arr[arr.length - 1][1]
  let arr1 = []
  for(let i = 0 ; i < arr.length; i++) {
    if(arr[i][1] === max) arr1.push(arr[i][0])
  }
  return Math.min(...arr1)
};

// let res = maximumPopulation([[2033,2034],[2039,2047],[1998,2042],[2047,2048],[2025,2029],[2005,2044],[1990,1992],[1952,1956],[1984,2014]])
var maxDistance = function(nums1, nums2) {
  // let count = 0
  let res = []
  for(let i = 0 ; i < nums1.length; i ++) {
    if( i > 0 && nums1[i] < nums1[i - 1]) i++
    for(let j = i + 1; j < nums2.length; j ++) {
      if(nums1[i] <= nums2[j]) res.push(j - i)
    }
  }
  let r = 0
  r = Math.max(r, ...res)
  return r
};
let res = maxDistance([55,30,5,4,2], [100,20,10,10,5])
let res2 = maxDistance([2,2,2], [10,10,1])
let res3 = maxDistance([30,29,19,5], [25,25,25,25,25])
let res4 = maxDistance([5,4], [3,2])
console.log(res, res2, res3, res4);