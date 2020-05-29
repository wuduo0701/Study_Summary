console.log(['1', '2', '3','22', '123'].map(parseInt))
// 这里map传的是(item, index)作为parseInt作为参数
// 而parseInt的参数为(string, radix)
// string要被解析的值, radix 从 2 到 36，代表该进位系统的数字。

console.log(parseInt('1', 0))   //1
console.log(parseInt('2', 1))   //NaN  2不是一进制数
console.log(parseInt('3', 2))   //NaN  3不是二进制数

console.log(['1', '2', '3'].map(function(item) {
  return parseInt(item)
}))

let unary = fn => val => fn(val)    //返回一个只接收一个参数的函数
let unary = fn => {
  return (val) => {
    fn(val)
  }
}

let parse = unary(parseInt)
['1', '2', '3'].map(parse)