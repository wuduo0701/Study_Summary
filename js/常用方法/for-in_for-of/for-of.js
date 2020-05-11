// for of遍历所有对象(Array，Map，Set，String，TypedArray，arguments )
//  但是不能遍历对象
let nums = [1, 3, 5];
let obj = {a:1 , b:2};

for(let i of nums) {
  console.log(i)
}

for(let i in nums) {
  console.log(nums[i])
}