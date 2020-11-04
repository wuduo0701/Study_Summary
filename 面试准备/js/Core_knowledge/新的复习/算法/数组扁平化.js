var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 数组扁平化

const delayering = (arr) => {
  // 1. 扁平化成字符串数组
  arr = arr.toString().split(',');
  let newArr = [];
  // 2. 遍历成数组
  arr.map(item => {
    return newArr.push(Number(item));
  })
  // 3. 去重
  newArr = new Set(newArr);
  return [...newArr];
}

console.log(delayering(arr));

// 题目六：数组扁平+数组去重+排序
var arr2 = [ [ 2, 1, 2], [3, 4, 5, 5], [ 7, 8,6,9, [11, 12, [12, 13, [14] ] ] ], 10];

function fn() {
  let newArr = [];
  arr2.toString().split(',').map(item => {
    return newArr.push(Number(item));
  });
  newArr = [...new Set(newArr)];
  // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
  // 若 a 等于 b，则返回 0。
  // 若 a 大于 b，则返回一个大于 0 的值。

  // a < b 时，即a-b < 0  a应该在b前面
  return newArr.sort((a, b) => a - b);
  // return newArr.sort((a, b) => {
  //   return a-b;
  // })
}

console.log(fn());