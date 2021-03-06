计算机的数据结构是现实世界物体间关系的一种抽象。家族的族谱，公司架构中的人员组织关系，电脑中的文件夹结构，html渲染的dom结构等等，这些有层次关系的结构在计算机领域都叫做树。

树是一种非线性数据结构。

树结构的基本单位是节点。节点之间的链接，称为分支（branch）。节点与分支形成树状，结构的开端，称为根（root），或根结点。根节点之外的节点，称为子节点（child）。没有链接到其他子节点的节点，称为叶节点（Leaf）。

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfjv3xmkknj30jb0cymxw.jpg)

每个节点用以下结构表示

```c
Node {
	value: any; // 当前节点的值
	children: Array<Node>; // 指向其儿子
}
```

### 基本概念

- 树的高度
- 深度
- 层
- 二叉树，三叉树，。。。 N 叉树

### 二叉树

二叉树是树结构的一种，两个叉就是说每个节点最多只有两个子节点，我们习惯称之为左节点和右节点。

> 注意这个只是名字而已，并不是实际位置上的左右

二叉树也是我们做算法题最常见的一种树(最简单 🤓)。可以用以下结构表示

```c
Node {
	value: any; // 当前节点的值
	left: Node | null; // 左儿子
	right: Node | null; // 右儿子
}
```

二叉树分类：

- 完全二叉树
- 满二叉树
- 二叉搜索树
- 平横二叉树
- 红黑树


二叉树的表示：

- 链表存储
- 数组存储。非常适合完全二叉树

### 二叉树遍历

二叉树的大部分题都围绕二叉树遍历展开，二叉树以下遍历方式

1. 前序遍历
2. 中序遍历
3. 后序遍历
4. 层序遍历(BFS)

- 前序遍历
    1. 访问当前节点
    2. 遍历左子树
    3. 遍历右子树

![](https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/preorder-traversal.gif)

```jsx
preorder(root) {
	if root
	doSomething(root)
	preOrder(root.left)
	preOrder(root.right)
}
```

- 中序遍历
    1. 遍历左子树
    2. 访问当前节点
    3. 遍历右子树

```jsx
inorder(root) {
	if root
	inorder(root.left)
	doSomething(root)
	inorder(root.right)
}

```

![](https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/inorder-traversal.gif)

- 后序遍历
    1. 遍历左子树
    2. 遍历右子树
    3. 访问当前节点

```jsx
postorder(root) {
	if root
	postorder(root.left)
	postorder(root.right)
	dosomething(root)
```

![](https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/postorder-traversal.gif)

- 层序遍历(BFS)

```jsx
bfs(root) {
	queue = []
	queue.push(root)
	while queue.length {
		curLevel = queue
		queue = []
		for i = 0 to curLevel.length {
			doSomething(curLevel[i])
			if (curLevel[i].left) {
				queue.push(curLevel[i].left)
			}
			if (curLevel[i].right) {
				queue.push(curLevel[i].right)
			}
		}
	}
}
```

![https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/level-order-traversal.gif](https://cdn.jsdelivr.net/gh/wylu/cdn/post/Algorithm/Tree/%E4%BA%8C%E5%8F%89%E6%A0%91/level-order-traversal.gif)

二叉树是最能体现递归美感的结构，看到二叉树的题第一反应应该是递归。

### 二叉树构建

中序序列和前、后，层次序列任一组合唯一确定一颗二叉树。前、中，层次序列都是提供根结点的信息，中序序列用来区分左右子树；

注意单前/中/后序遍历是无法确定一棵树，比如以下所有二叉树的前序遍历都为123

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfjv6f92aqj316k0u0tcy.jpg)

构造一棵树的本质是

1. 确定根节点
2. 确定其左子树
3. 确定其右子树

比如拿到前序遍历结果preorder和中序遍历inorder，在preorder我们可以能确定树根root，拿到root可以将中序遍历切割中左右子树。这样就可以确定并构造一棵树，整个过程我们可以用递归完成。详情见 [105. 从前序与中序遍历序列构造二叉树]([https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/))

### 二叉搜索树

二叉搜索树是二叉树的一种，具有以下性质

1. 左子树的所有节点值小于根的节点值
2. 右子树的所有节点值大于根的节点值

二叉搜索树的中序遍历结果是一个有序列表，这个性质很有用。比如 [leetcode 1008]([https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/description/](https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/description/)), 根据先序遍历构建对应的二叉搜索树。由于二叉树的中序遍历是一个有序列表，我们可以有以下思路

1. 对先序遍历结果排序，排序结果是中序遍历结果
2. 根据先序遍历和中序遍历确定一棵树

### 堆

在这里讲堆是因为堆可以被看作近似的完全二叉树。堆通常以数组形式的存储，而非上述的链式存储。

表示堆的数组A中，如果A[1]为根节点，那么给定任意节点i，其父子节点分别为

- 父亲节点：Math.floor(i / 2)
- 左子节点：2 * i
- 右子节点:   2 * i + 1

如果 A[parent(i)] ≥ A[i]，则称该堆为最大堆，如果A[parent(i)] ≤ A[i]，称该堆为最小堆。

堆这个数据结构有很多应用，比如堆排序，TopK问题，共享计算机系统的作业调度(优先队列)等。下面看下给定一个数据如何构建一个最大堆。

```jsx
// 自底向上建堆
BUILD-MAX-HEAP(A)
	A.heap-size = A.length
	for i = Math.floor(A.length / 2) downto 1
		MAX-HEAPIFY(A, i)

// 维护最大堆的性质
MAX-HEAPIFY(A, i)
	l = LEFT(i)
	r = RIGHT(i)
	// 找到当前节点和左右儿子节点中最大的一个，并交换
	if l <= A.heap-size and A[l] > A[i]
		largest = l
	else largest = i
	if r <= A.heap-size and A[r] > A[largest]
		largest = r
	if largest != i 
		exchange A[i] with A[largest]
		// 递归维护交换后的节点堆性质
		MAX-HEAPIFY(A, largest)
```

*ps: 伪代码参考自算法导论*

### 递归

方法或者函数调用自身的方式成为递归调用。在这个过程中，调用称之为**递**，返回成为**归**。

#### 推荐题目

- 汉诺塔问题
- fibonacci 数列
- 二叉树的前中后序遍历
- 归并排序
- 求阶乘
- 递归求和
- [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/) (请分别使用BFS和DFS解决，空间复杂度尽可能低)
- [967. 连续差相同的数字](https://leetcode-cn.com/problems/numbers-with-same-consecutive-differences/description/) (隐形树的遍历)

## 相关题目

- 二叉树的最大路径和
- 给出所有路径和等于给定值的路径
- 最近公共祖先
- 各种遍历。前中后，层次，拉链式等。

### 参考

1. 图片参考自 [https://wylu.me/posts/e85d694a/](https://wylu.me/posts/e85d694a/)
2. 算法导论
### 更多内容

- [二叉树的遍历](https://github.com/azl397985856/leetcode/blob/master/thinkings/binary-tree-traversal.md)
- [前缀树专题](https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md) 
