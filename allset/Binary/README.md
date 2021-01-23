# 1.模板


### 二分查找一般由三个主要部分组成：

- 预处理 —— 如果集合未排序，则进行排序。

- 二分查找 —— 使用循环或递归在每次比较后将查找空间划分为两半。

- 后处理 —— 在剩余空间中确定可行的候选者。


根据不同的情况，二分法也有不同的模板，一共有三个模板

## 模板1
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

----

> 区分语法
>
> - 初始条件：left = 0, right = length-1
> - 终止：left > right
> - 向左查找：right = mid-1
> - 向右查找：left = mid+1

