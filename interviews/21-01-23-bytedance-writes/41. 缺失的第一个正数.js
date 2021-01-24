// https://leetcode-cn.com/problems/first-missing-positive/

/* API 版本*/
let firstMissingPositive = function(nums) {
  let len = nums.length
  for (let i = 1; i <= len; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return len + 1
};



console.log(firstMissingPositive([1, 2, 0])) // 3
