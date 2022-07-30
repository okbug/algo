# vector

## 什么是vector
vector就是CPP 中的动态数组
它的定义方式

```cpp
// 这是头文件，也可以用 using namespace std;

#include<vector>


int main(){
  vector<int /* T */> res(n);
  // 定义了一个长度为n的数组
  // 默认每一项都是0
  vector<vector<int>> arr(n, vector<int(n)>);
  // 定义了一个二维数组，每一项都是0
  }
```

## vector的方法

- 排序数组
sort(arr.begin(), arr.end()); // 从小到大排序

- 获得数组的最后一个元素
arr.top()

- 删除栈顶元素
arr.pop_back();
- 添加元素
arr.push_back();

- 获取数组长度
arr.size()
- 清空所有
arr.clear();

- 翻转数组
reverse(arr.begin(), arr.end())
// sort和reverse都是algorithm里面的函数方法

### 真题
LC 59. 螺旋矩阵||

```cpp
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> res(n, vector<int>(n));
        int x = 0, y = 0, d = 0;
        int dx[] = {0, 1, 0, -1}, dy[] = {1, 0, -1, 0};

        for (int i = 1; i<= n  * n; i++) {
            res[x][y] = i;
            int a = x + dx[d], b = y + dy[d];
            if (a < 0 || b < 0 || a >= n || b >= n || res[a][b]) {
                d = (d + 1) % 4;
            }
            x += dx[d], y += dy[d];
        }
        return res;
    }
};
```



# Map
C++中的Map
头文件叫做
unordered_map

## 用法

int main() {
  unordered_map<int, int /*KeyType, ValueType */> map;
  map[1]++; // 默认为1
  map.count(1); // 1的值
  // 剩下的不记得了
  
}
