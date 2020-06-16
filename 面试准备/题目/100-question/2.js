/**
 * ['1', '2', '3'].map(parseInt) what & why ?
 */

console.log(['1', '2', '3'].map(parseInt));   //[ 1, NaN, NaN ]

// 原因：因为map方法会给原数组中的每个元素都按顺序调用一次  callback 函数，生成的callback函数，会自动传入三个参数：数组元素，元素索引，原数组本身。
// 而在parseInt函数里会传入前两个参数，parseInt(string, radix); 第一个为是要被解析的值，第二个就是需要转化的进制数。
//  所以就导致后面parseInt使用了解析的值，和元素索引作为了进制数就变成了parseInt('1', 0), parseInt('2', 1), parseInt('3', 2)
// 所以输出的就是1，NaN，NaN。因为2没有1进制，3没有2进制，都是无法解析的，返回NaN。

