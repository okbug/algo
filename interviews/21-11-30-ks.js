let arr = [2, 3, 5, 4, 3, 7, 9, 2, 2, 9, 10]

// 找到当前下表后面第一个比他大的值，没有的话就是-1
// [3, 5, 7, 7, 7, 9, -1, -1, -1]

function findBigNumber(arr) {
    let res = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            res[i] = res[i - 1];
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    res[i] = arr[j];
                    break;
                }
            }
        }
    }

    return res;
}

function findBigNumber(arr) {
    console.log('cur, arr[i], arr[i - 1]')
    let res = new Array(arr.length).fill(-1);
    let cur = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        console.log(cur, arr[i], arr[i - 1])
        if (arr[i - 1] < arr[i]) {
            // cur = arr[i]
            res[i] = arr[i]
            cur = arr[i]
        } else if (arr[i] < cur) {
            res[i] = cur;
        } else {
            cur = arr[i]
            // console.log(arr[i], cur)
            // res[i] = cur
            // cur = arr[i]
        }
    }

    return res
}

let res = findBigNumber(arr)
console.log(res)