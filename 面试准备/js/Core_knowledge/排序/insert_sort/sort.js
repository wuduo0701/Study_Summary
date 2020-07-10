/**
 * 插入排序
 * arr 数组
 * n 数组长度
 */

var arr = [3, 5, 4, 1, 2, 6];
const n = arr.length;

function insertSort(arr, n) {
  if(n <= 1) return arr;
  for(let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i-1;
    for(; j >= 0; j--) {
      if(arr[j] > value) {
        arr[j+1] = arr[j]; // 数据移动
      }else {
        break;
      }
    }
    arr[j+1] = value; // 插入数据
  }
  return arr;
}

console.log(insertSort(arr, n));

function sort(arr, n) {
  if(n <= 1) return arr;
  for(let i = 1; i < n; i++) {
    let value = arr[i];
    let j = i - 1
    for(; j > 0; j++) {
      if(arr[j] > value) {
        arr[j+1] = a[j]
      }else {
        break;
      }
    }
    arr[j+1] = value
  }
  return arr;
}
console.log(sort(arr, n))