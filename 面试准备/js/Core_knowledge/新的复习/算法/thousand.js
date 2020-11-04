/**
 * 每千位加个逗号
 */
let number = 123456789, number2 = 12355544.3333;
function thousand(str) {
  return str.toLocaleString();
}

// 千分位需要从个位数开始计算，则倒叙排序的时候，没3个数的时候倒叙插入新数组，即又恢复了新数组，并且插好了，号。
//  最后把数组形式改回字符串
function format(nums) {
  nums += '';
  let temp = [], flag = 0;
  for(let i = nums.length - 1; i >= 0; i--) {
    temp.unshift(nums[i]);
    flag++;
    if(flag % 3 === 0 && i !== 0) {
      temp.unshift(',');
    }
  }
  return temp.join('');
  // return nums;
}

console.log(thousand(number2));