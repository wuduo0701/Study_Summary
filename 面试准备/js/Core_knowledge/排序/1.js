var arr = [4, 2, 3, 6, 1, 8, 0];
const arrLen = arr.length;

//冒泡排序
function bubble(arr, n) {
  for(let i = 0; i < n; i ++) {
    var flag = false;
    for(let j = 0; j < n - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        flag = true;  //表示有数据交换
      }
    }
  }
  if(!flag)
    return arr;
}
console.log(bubble(arr, arrLen))

//快速排序
function qucitSort(arr) {
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
  return qucitSort(left).concat(privot, qucitSort(right));
}
console.log(qucitSort(arr));

//桶排序
function bucketSort(arr) {
  // 这个9为数组的最大数
  let newArr = Array.from({length: 9}).fill(0);
  arr.forEach(item => {
    newArr[item]++;
  })
  console.log(newArr)
  let a = [];
  for(let i = 0; i < newArr.length; i++) {
    let j = i;
    while(newArr[j] !==0) {
      a.push(j);
      newArr[j]--;
    }
  }
  return a;
}
console.log(bucketSort(arr));