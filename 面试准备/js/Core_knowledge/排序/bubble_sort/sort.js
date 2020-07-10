/**
 * 冒泡排序
 * arr 数组
 * n  数组大小
 */
var arr = [3, 5, 4, 1, 2, 6];
const n = arr.length;

function bubble_sort(arr, n) {
  if(n <= 1 ) return arr;
  for(let i = 0; i < n; i++) {
    var flag = false; //表示是否有数据交换
    for(let j = 0; j < n-i-1; j++) {
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        flag = true;  //存在数据交换
      }
    }
  }
  if(!flag) // 没有数据交换，表示排序已经完成
    return arr;
}
console.log(bubble_sort(arr, n))


