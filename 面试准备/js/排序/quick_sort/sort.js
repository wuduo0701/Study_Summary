
// 1. 找到正确位置(数组里的索引)  !!!!  partition 分区
// 2. 左边 小于provit的数 < provit < 右边 大于 provit的数
var arr = [6, 8, 3, 9, 1, 2, 5];
function quickSort (arr) {
  if(arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [], right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // return [...(quickSort(left)), pivot, ...(quickSort(right))];
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr))
