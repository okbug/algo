
var capitalizeTitle = function (title) {
  const arr = title.split(" ").map((i) => i.toLowerCase());

  console.log(arr);
  const str = arr.map((s) => {
    const _a = s.split("");
    if (_a.length >= 2) _a[0] = _a[0].toUpperCase();
    return _a.join("");
  });

  return str;
};

// const res = capitalizeTitle("capiTalIze tHe titLe");

// console.log(res);


var longestPalindrome = function(words) {
    const start = [], end = [], mid = []
    let count = 0
    function same(i, j) {
        let a = words[i], b = words[j];
        return a[0] === b[1] && a[1] === b[0];
    }

    words.forEach((s, i)=> {
        if (s[0] === s[1]) mid.push(i)
    })
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j ++) {
            if (same(i, j)) {
                start.push(i);
                end.push(j);
            }
        }
    }

    console.log(start, end, mid);

    return (start.length + end.length + mid.length) * 2;
};

const res = longestPalindrome(["lc","cl","gg"])
const res2 = longestPalindrome(["ab","ty","yt","lc","cl","ab"])

console.log(res);

console.log(res2);