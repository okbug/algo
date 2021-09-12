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
