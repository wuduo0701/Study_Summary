// 递归
function fb(n) {
  if(n <= 2) {
    return 1;
  } else {
    return fb(n - 1) + fb(n-2)
  }
}
// console.log(fb(50))

// 动态规划
function fb1(n) {
  var nums = [1, 1];
  if(n < 0) {
    throw new Error("不能输出小于0的数")
  }
  for(let i = 2; i <= n; i++) {
    nums[i] = nums[i-1] + nums[i-2];
  }
  return nums[n-1]
}

console.log(fb1(50))