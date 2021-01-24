// https://leetcode-cn.com/problems/reverse-integer/solution/zhi-xing-yong-shi-chao-guo-9617nei-cun-xiao-hao-ch/

/*
* 输入 123
* 返回 321
*
*     +123
*     -321
* */

/* 字符串版本  API*/
let reverse = function(x) {
  let now = Math.abs(x).toString().split('').reverse().join('');
  if (x < 0) {
    return now <= Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }
}

/* 不用字符串版本 */
let reverse2 = function(x) {
  let now = Math.abs(x).toString().split(''),
      len = now.length,
      s = ''
  for (let i = len - 1; i >= 0; i--) {
    s += now[i]
  }
  s = parseInt(s)
  if (x < 0) {
    return s <= Math.pow(2, 31) ? -s : 0;
  } else {
    return s < Math.pow(2, 31) ? s : 0;
  }
}

/* 数字做法 */
let reverse3 = function(x) {
  let ord = Math.abs(x);//去符号
  let now = 0;
  while(ord > 0){
    now = now * 10 + ord % 10;
    ord = Math.floor(ord / 10);
  }
  if(x < 0){
    return now <= Math.pow(2,31) ? -now : 0;
  }else{
    return now < Math.pow(2,31) ? now : 0;
  }
};


console.log(reverse2(123))
console.log(reverse2(-123))
