// var a = ?使得if成立

// var a = {
//   value: 1,
//   valueOf: function() {
//     return a.value++
//   }
// };

let a = {
  gn: (function *() {
    yield 1;
    yield 2;
    yield 3;
  })(),
  valueOf() {
    return this.gn.next().value
  }
}

// 这里 == 会触发隐式类型转化函数 ，只有重定义这个函数，让值自增就可以实现
if(a == 1 && a == 2 && a == 3){
  console.log(1)
} 