var arr = [1, 3, 2, 4, 3, 2, 5];

function quickSort(nums) {
  if(nums.length <= 0) return nums;
  //定义左右区间，以及对比的支点
  let left = [], right = [], privot = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] <= privot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  //  递归调用
  return quickSort(left).concat(privot, quickSort(right));
}

console.log(quickSort(arr));