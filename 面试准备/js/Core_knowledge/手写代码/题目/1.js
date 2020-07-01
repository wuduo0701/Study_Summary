// 手写一个函数把aaa-bbb-ccc转换成aaaBbbCcc

var str1= "aaa-bbb-ccc";

function funString(str) {
  // 存取字符串
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    // 如果碰到字符串为'-',就把它下一个变为大写字母，并且自身的要移动一步
    if(str[i] === '-') {
      i++;
      arr.push(str[i].toUpperCase())
    }else {
      arr.push(str[i]);
    } 
  }
  //转化为字符串
  return arr.join('');
}

console.log(funString(str1));