let array = [1, 2, 3, 4];

console.log(array.reduce((prev, curr, index) => {
  return prev + curr
}))

// reduce接受四个参数
// 1. accumulator 累计器 相当于总计
// 2. currentValue 当前需要计算的值
// 3. currentIndex 当前索引
// 4. array 数组
console.log(array.reduce((prev, curr, index) => {
  return prev + curr
}, 10))
// 这里的10为初始值,
// reduce没有初始值时, prev则为数组第一个值,curr则为数组的第二个值
// reduce有初始值时,prev为初始值,curr则为数组的第一个值

// reduce也可以将二位数组转化为一维数组
let arr2 = [[1, 2], [3, 4]]
console.log(arr2.reduce((prev, curr) => {
  return prev.concat(curr)
}))
//  reduce 进行数组去重
let myarr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
console.log(myarr.reduce((prev, curr) => {
  if(prev.indexOf(curr) === -1){
    prev.push(curr);
  }
  return prev
}, []))
