# 1.模板

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 test:
        [-1,0,3,5,9,12]
        9
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1
    let i = 0, j = nums.length - 1
    while(i <= j) {
        let mid = i + Math.floor((j - i) / 2)
        if(nums[mid] < target) {
            i = mid + 1
        } else if(nums[mid] > target) {
            j = mid - 1
        } else {
            return mid
        }
    }
    return -1
};
```