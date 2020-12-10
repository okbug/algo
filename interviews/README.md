参考链接：https://www.nowcoder.com/discuss/573906 腾讯wxg 前端面试


题目列表：

- [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
- [189.旋转数组](https://leetcode-cn.com/problems/rotate-array/)
- [1669. 合并两个链表](https://leetcode-cn.com/problems/merge-in-between-linked-lists/)
- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
- [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)
- [剑指 Offer 48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)
- [1668. 最大重复子字符串](https://leetcode-cn.com/problems/maximum-repeating-substring/)
- [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

----
- [剑指 Offer 27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

KMP 最长子串类型题目(滑动窗口)


----

2020-12-09 第一次面试(二面挂)
字节跳动
一面先来直接问网络，给我问到不会了为止
然后CSS、JS、算法

力扣原题：

[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/) 
本来是用一个数组来存的，最后让我用两个值来存储前两个数（知道思路但是忘了）很可惜
[92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/) 反转从位置 m 到 n 的链表。
[剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

JS手写题
手写bind
手写继承 inherit(A, B) 其实没懂到底怎么继承
给Number加一个方法 可以获取小数点后n位 (1.23457.xxfunc(2) -> 1.23)
```js
Number.prototype.func = function(n) {
  let str = String(this)
  let [inter, float] = str.split('.')
  inter = inter + '.'
  for(let i = 0;i < n;i++) {
    inter+=float[i]
  }
  return Number(inter)
}
let str1 = 1.2345.func(3)
let str2 = 1.2345.func(2)
console.log(str1, str2)
```
