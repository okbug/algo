/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

/*
cut("12345", 3) => "345"
*/
function cut(numStr, x) {
  return numStr.substr(numStr.length - x, numStr.length);
}

function cutToNum(num, x) {
  return BigInt(cut(num.toString(), x));
}
var smallestTrimmedNumbers = function (nums, queries) {
  const strLen = nums[0].length;
  const time = queries.length;
  let res = [];
  for (let i = 0; i < time; i++) {
    const [index, x] = queries[i];
    let newArr = nums.map((item, curIndex) => {
      return {
        curIndex,
        value: cutToNum(item, x),
      };
    });
    console.log(newArr)
    let sortArr = [...newArr]
        .sort((a, b) => Number(BigInt(a.value) - BigInt(b.value)))
    // console.log(sortArr)
    let num = sortArr[index - 1];
    console.log(num.curIndex);
    // res.push(newArr.lastIndexOf(num))
    res.push(num.curIndex);
    console.log("---");
  }

  console.log(res)

  return res;
};

// let res = smallestTrimmedNumbers(["325240361872","440618160237","785744447413","820980201297","470082520306","874146483840","425300857082","088636787077","813218016629","459000328006","188683382600"]
// ,[[1,1],[3,1],[11,10]])
// let res = smallestTrimmedNumbers(["325240361872","440618160237","785744447413","820980201297","470082520306","874146483840","425300857082","088636787077","813218016629","459000328006","188683382600"]
// ,[[6,7],[4,4],[1,8],[11,10],[4,8],[11,6],[1,1],[3,1],[11,10]])
// console.log(res) // 5 0 9

// wa: 7 0 => 19 20
let res = smallestTrimmedNumbers(
  [
    "8331019423839036903",
    "2215783497319194533",
    "3244863164120264914",
    "2723857887888553250",
    "1069645833408356268",
    "3799170975306313470",
    "3300849027471666477",
    "8896469467436127218",
    "9595084104356246555",
    "4601424390471226348",
    "2777623221871959897",
    "2660664761264162910",
    "4830224756337097853",
    "2239177595019260973",
    "5704104074606481922",
    "5158962343348888307",
    "4957489822885409209",
    "5533958195540658313",
    "6712811206814843536",
    "9775503283462317096",
    "1975389311819120035",
    "1292135637676764140",
    "9838972337538013522",
    "7609294617007602893",
    "0186572359592634437",
    "9236053726818307461",
    "7264888050655615544",
    "4990296885039745852",
    "1417868535147288083",
  ],
  [
    [21, 4],
    [1, 3],
  ]
);
