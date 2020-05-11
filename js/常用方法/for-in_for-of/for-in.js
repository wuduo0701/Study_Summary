//for in只遍历枚举属性
// 为遍历对象属性而构建的
// 数组则为下标，对象为key值
let nums = [1, 3, 5];
let obj = {a:1, b:2};
for(let i in nums) {
  console.log(i)  //0, 1 , 2
}
for(let i in obj) {
  console.log(i)    //a , b
}
