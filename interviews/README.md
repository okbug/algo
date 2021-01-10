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

> https://www.nowcoder.com/discuss/578701

2020-12-09 第一次面试(二面挂)
字节跳动
一面，上来让我自我介绍，可能是因为说的不够多吧，面试官先问我，学习前端多久和如何学习前端，然后说了一句：“接下来正式开始面试了，问你一些网络的问题吧”
后来想想，先前问我的两个问题可能就是在教我怎么自我介绍吧，还是挺感激的。
然后直接开始问网络，给我问到不会了为止。具体流程：
先问我网络模型是啥 我就说OSI7层，然后把每一层都背了一遍（物数网传会表应)
有一个和这个模型类似的，是啥，我说是一个什么五层（物数网传应）
分别说说每一层中有哪些东西
  我就说了http啊 TCP/IP之类的 然后就根据我说的这些来展开问
经典题目：从url输入到页面展现之间发生了什么
从这个题目引导问我：重排重绘，浏览器缓存、三握四挥等等。还有script标签的async和defer

接下来开始CSS题目：
盒子模型有哪些：
  box-sizing的两个属性
  好像没有了，也可能是忘记了。
JS：
数据类型有哪些 （我说了Symbol和BigInt后也简单问了一下这两是什么）
如何判断数据类型
[] instanceof Object 的结果是什么:
true，问我为什么 因为[] instanceof Array, Array instanceof Function、Function instanceof Object所以结果是true
手写bind
什么是事件委托和事件冒泡
如何启动事件冒泡和事件委托 (addEventListener的第三个参数）
IE中如何触发click事件（除了DOM中的onclick=“”，addEventListener，onclick) 这个我真不知道
然后问了斐波那契函数 
其实就是下面这题
[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/) 
本来是用一个数组来存的(空间O(n))，最后让我空间用O(1)（知道思路但是忘了 只用两个值来存储前两个数 而不是数组）很可惜
```js
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
```

```python3
class Solution(object):
    def Fibonacci(self, n):
        if n < 2 :
            return n
        p = q = 0
        r = 1
        for i in range(2, n + 1):
            p = q
            q = r
            r = q + p
        return r
```



然后考了一题打印二叉树 也是原题（不会做， 就怪自己当时没有好好刷一刷）
然后我开玩笑说让面试官给出一题链表题，结果出了一题 不会做的 还是自己没好好刷题的缘故。
[92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/) 反转从位置 m 到 n 的链表。
[剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

然后是反问阶段。


二面：
让我自我介绍，并且说比较熟悉的技术栈。
我就说了vue。
vur-router的基本使用啊，包括如何在实例中通过this.$router来获取router实例。
跨域 手写JSONP
ES6中出现的新特性有什么你认为比较好用的(这里给自己挖坑了)
手写继承 inherit(A, B) 其实没懂到底怎么继承
给Number加一个方法 可以获取小数点后n位 (1.23457.xxfunc(2) -> 1.23) 
别问为啥叫xxfunc，因为原来的方法名字我忘了
```js
Number.prototype.xxfunc = function(n) {
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
console.log(str1, str2) // 1.234 1.23
```
面试官自己出了一个力扣第一题加强版 就是 三数之和 要求数组中找三个数 这三个数相加等于target 我说了下思路，说自己写不出来。
最后问我，目前在学习什么（问了我这个问题的时候我还以为自己是要过了）
但是最后很可惜 不出半个小时就有hr加了我的微信告诉我已经挂掉了。

总体来说还是很可惜，以后努力朝网络和算法这方面学习吧。
现在就是准备春招了