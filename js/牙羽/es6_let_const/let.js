// for(var i = 0; i < 5; i++){
//   console.log(i)
// }
// console.log(i)
// // 循环结束,依然可以访问i值
// for(i; i < 7; i++){
//   console.log("bb")
// }

// let 和块级声明的一种
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 3
