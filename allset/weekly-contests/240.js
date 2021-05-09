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
  let res = 0
  for(let j = nums2.length - 1, i = nums1.length - 1; j >= 0 ; j -- ) {
      while (i && nums1[i - 1] <= nums2[j]) i --;
      if (nums1[i] <= nums2[j]) res = Math.max(res, j - i)
  }
  return res
};