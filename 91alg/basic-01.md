# 数组

数组使用连续的内存空间，来存储一系列同一数据类型的值。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfqvddm3zaj30na0jkjte.jpg)

那么为什么数组要存储相同类型的值呢？为什么有的语言就可以存储不同类型的值呢？

实际上存储相同的类型有两个原因：

1. 相同的类型**大小是固定且连续的**，这样数组就可以**随机访问**了。试想数组第一项是4字节，第二项是8字节，第三项是6字节，我怎么随机访问？
2. 强类型语言要求指定数组的类型。

> 虽然在一些语言，比如 JavaScript中，数组可以保存不同类型的值。这是因为内部做了处理，这个不在我们的讨论范围，感兴趣的可以查下相关资料。

数组的一个特点就是**支持随机访问**，请务必记住这一点。当你需要支持随机访问的数据结构的话， 自然而然应该想到数组。

本质上数组是一段连续的地址空间，这个是和我们之后要讲的链表的本质差别。 虽然二者从逻辑上来看都是线性的数据结构。

需要注意的是虽然数据结构有很多，比如树，图，哈希表，但是这只是逻辑数据结构。而真正实现它们的还需要落实到具体的物理数据结构，即**数组和链表**。

- 一个数组表示的是一系列的元素
- 数组（static array）的长度是固定的，一旦创建就不能改变（但是可以有dynamic array）
- 所有的元素需要是同一类型（个别的语言除外）
- 可以通过下标索引获取到所储存的元素（随机访问）。 比如 array[index]
- 下标可以是是 0 到 array.length - 1 的任意整数


当数组里的元素也是一个数组的时候，就可以形成多维数组。例子：

1. 用一个多维数组表示坐标 `array[y]`
2. 用一个多维数组来记录照片上每一个pixel的数值

力扣中有很多二维数组的题目，我一般称其为board。

## 数组的常见操作

1. 随机访问，时间复杂度 O(1)

```py
arr = [1,2,33]
arr[0] # 1
arr[2] # 33
```
2. 遍历，时间复杂度 O(N)

```py
for num in nums:
  print(num)
```
3. 任意位置插入元素、删除元素

```py
arr = [1,2,33]
# 在索引2前插入一个5
arr.insert(2, 5)
print(arr) # [1,2,5,33]
```

我们不难发现， 插入 2 之后，新插入的元素之后的元素（最后一个元素）的索引发生了变化，从2变成了3，而其前面的元素没有影响。从平均上来看，数组插入元素和删除元素的时间复杂度为$O{N}$。最好的情况删除和插入发生在尾部，时间复杂度为 $O(1)$。

基本上数组都支持这些方法。 虽然命名各有不同，但是都是上面四种操作的实现：

- each()： 遍历数组
- pop(index)：删除数组中索引为 index 的元素
- insert(item, index)：数组索引为 index 处插入元素

**时间复杂度分析小结**

- 随机访问 -> O(1)
- 根据索引修改 -> O(1)
- 遍历数组 -> O(N)
- 插入数值到数组 -> O(N)
- 插入数值到数组最后 -> O(1)
- 从数组最后删除数值 -> O(1)

## 基本概念

- 数组交集
- 数组并集
- 数组合并

## 题目推荐

### [380. 常数时间插入、删除和获取随机元素](https://leetcode-cn.com/problems/insert-delete-getrandom-o1/)

### [75. 颜色分类](https://leetcode-cn.com/problems/sort-colors/)

做题的时候经常会用到数组，常常会遍历数组，排序数组以及将元素插入或删除


# Stack

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfbikq9ipmj30cd0a73yp.jpg)

栈是一种受限的数据结构， 体现在只允许新的内容从一个方向插入或删除，这个方向我们叫栈顶，而从其他位置获取内容是不被允许的

栈最显著的特征就是LIFO(Last In, First Out - 后进先出)

举个例子：

栈就像是一个放书本的抽屉，进栈的操作就好比是想抽屉里放一本书，新进去的书永远在最上层，而退栈则相当于从里往外拿书本，永远是从最上层开始拿，所以拿出来的永远是最后进去的哪一个

## 栈的常用操作

1. 进栈 - push - 将元素放置到栈顶
2. 退栈 - pop - 将栈顶元素弹出
3. 栈顶 - top - 得到栈顶元素的值
4. 是否空栈 - isEmpty - 判断栈内是否有元素

## 栈的常用操作时间复杂度

由于栈只在尾部操作就行了，我们用数组进行模拟的话，可以很容易达到O(1)的时间复杂度。当然也可以用链表实现，即链式栈。

1. 进栈 - O(1)
2. 出栈 - O(1)

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfbil9jqqej30sd0fhdgz.jpg)

## 应用

- 函数调用栈
- 浏览器前进后退
- 匹配括号
- 单调栈用来寻找下一个更大（更小）元素

## 题目推荐

- [1381. 设计一个支持增量操作的栈](https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/)
- [394. 字符串解码](https://leetcode-cn.com/problems/decode-string/)
- [946. 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences/)

# 队列

- 正如前面所说，队列是逻辑结构，底层可以用数组实现，也可以用链表实现，不同实现有不同的取舍。
- 队列也是一种受限的数据结构。和栈相反的是队列是只允许在一端进行插入，在另一端进行删除的线性表。
- 队列(Queue)是一种先进先出(FIFO - First In First Out)的数据结构
- 队列中，插入元素会发生在尾部而删除元素会发生在头部 - 先进先出原则

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfbilukn6tj30ng0a30t6.jpg)

## 队列分类

- 双端队列
- 优先级队列

## 队列的操作

- 插入 - 在队列的尾部添加元素
- 删除 - 在队列的头部删除元素
- 查看首个元素 - 返回队列头部的元素的值

## 队列操作的时间复杂度

时间复杂度取决于你的底层实现是数组还是链表。我们知道直接用数组模拟队列的话， 在队头删除元素是无法达到O(1) 的复杂度的， 上面提到了由于存在调整数组的原因，时间复杂度为$O(N)$。因此我们需要一种别的方式，这种防方式就是下面要讲的Linked List。 以链表为例，其时间复杂度：

- 插入 - O(1)
- 删除 - O(1)

## 队列的实现（Linked List）

我们知道链表的删除操作，尤其是删除头节点的情况下，是很容易做到O(1)。那么我们是否可利用这一点来弥补上面说的删除无法达到O(1)？

> 删除非头节点可以做到O(1)么？什么情况下可以？

但是在链表末尾插入就不是O(1)，而是O(n)了。别急， 我们只要维护一个遍历tail 存放当前链表的尾节点即可在O(1)的时间完成插入操作。

具体来说有两个指针 - 一个在头部 一个在尾部。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfbjwbk20wj30jr0mtq5q.jpg)

> 还有一种队列是循环队列，用的不是很多，大家可以自己查一下。

## 推荐题目
- [min-stack](https://leetcode-cn.com/problems/min-stack/)
- [evaluate-reverse-polish-notation](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)
- [decode-string](https://leetcode-cn.com/problems/decode-string/)
- [binary-tree-inorder-traversal](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
- [clone-graph](https://leetcode-cn.com/problems/clone-graph/)
- [number-of-islands](https://leetcode-cn.com/problems/number-of-islands/)
- [largest-rectangle-in-histogram](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
- [implement-queue-using-stacks](https://leetcode-cn.com/problems/implement-queue-using-stacks/)
- [01-matrix](https://leetcode-cn.com/problems/01-matrix/)

## 常见套路

- 前缀和


## 更多

- [基础数据结构 by lucifer](https://github.com/azl397985856/leetcode/blob/master/thinkings/basic-data-structure.md)
