function getValueByPath(obj, path) {
    let paths = path
        .split('.')
        .map((path) => {
            if (path.includes("[")) {
                let leftIndex = path.indexOf("[");
                let rightIndex = path.indexOf("]");

                let value = path.slice(leftIndex + 1, leftIndex + rightIndex - 1);
                let object = path.slice(0, leftIndex);
                return [object, value];
            }
            return path;
        });

    let cur = obj;
    while (paths.length) {
        let str = paths.shift();
        if (!Array.isArray(str)) {
            cur = cur[str];
        } else {
            while (str.length) {
                cur = cur[str.shift()];
            }
        }
    }

    return cur;
}


const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(getValueByPath(object, 'a[0].b.cs'))

/**

 * 获取 object 指定 path 的值，若取不到，则返回 undefined

 * @param {object}

 * @returns {*}

 *

 * @example

 * const object = { 'a': [{ 'b': { 'c': 3 } }] };

 *

 * getValueByPath(object, 'a[0].b.c');  // => 3

 * getValueByPath(object, 'a.b.c'); // => undefined

 * getValueByPath(object, ['a', '0', 'b', 'c']); // => 3

 */






// =================

// 写一个useState

let states = []

let index = 0;
function useState(initialState) {
    let currentIndex = index;
    let state = states[currentIndex] || initialState;

    function setState(newState) {
        states[currentIndex] = state = newState;
        index = 0;
    }
    index++;
    return [state, setState];
}



// updated

// useState新的实现

let hookState = [];
let hookIndex = 0;

function useState(initialState) {
    hookState[hookIndex] = hookState[hookIndex] || initialState;
    let currentIndex = hookIndex;
    function setState(newState) {
        hookState[currentIndex] = newState;
        hookIndex = 0;
    }

    return [hookState[hookIndex++], setState];
}

/**
 * 第一步： 先将数组中当前下标的存储，如果是第一次执行， 走 || 后面，然后都是走前面的了
 * 第二步： 保存当前的下标索引
 * 第三步： 写setState函数，如果这个函数被执行了的话，会更新，此时所有的组件要重新执行
 * 那么所有的useState都会重新执行
 * 所以索引要从0开始，所以在更新函数中将全局的索引设置为0
 * 第四步： 在最后返回的时候将索引+1 这样下一次调用useState的时候就是取得数组之中下一个值
 */