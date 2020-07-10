var arr = [3, 5, 4, 1, 2, 6];
const n = arr.length;

// 冒泡排序
function bubbleSort(arr, n) {
  if(n <= 1) return arr;
  for(let i = 0; i < n; i++) {
    var flag = false;
    for(let j = 0; j < n - i - 1; j++) {
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        flag = true;
      }
    }
  }
  if(flag == false)
    return arr;
}
//  快速排序
function quickSort(arr) {
  if(arr.length <= 1) return arr;
  let privot = arr[0];
  let left = [], right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] <= privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(privot, quickSort(right))
}
// 桶排序
function bucketSort(arr) {
  let newArray = Array.from({length: 10}).fill(0);
  arr.forEach(item => {
    newArray[item] ++;
  })
  let a = []
  for(let i = 0; i < newArray.length; i++) {
    let j = i;
    while(newArray[j] !== 0) {
      a.push(j);
      newArray[j] --;
    }
  }
  return a;
}
console.log(bubbleSort(arr, n))
console.log(quickSort(arr))
console.log(bucketSort(arr))

