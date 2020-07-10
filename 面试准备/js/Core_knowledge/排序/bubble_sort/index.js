var arr = [1, 3, 2, 4, 3, 2, 5];
var Len = arr.length;
function bubbleSort(nums, n) {
  if(n <= 1) return nums;
  for(let i = 0; i < n; i++) {
    var flag = false; //判断是否有数据交换
    for(let j = 0; j < n - i - 1; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        flag = true;  //存在数据交换
      }
    }
  }
  // 没有数据交换了
  if(flag === false) {
    return nums;
  }
}

console.log(bubbleSort(arr, Len));