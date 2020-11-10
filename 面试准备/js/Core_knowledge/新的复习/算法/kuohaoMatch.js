/**
 * 括号匹配
 */

// 用对列进行匹配
// 反方向进行匹配
// 括号都是以'(', '{', '['开头的
// 做')'到'('的映射

// 前面碰到'('这种的都会放进队列里
// 一旦遇到')'这种就会寻找队列里是否有映射的值
function isValid(s) {
  if(s.length === 0 || s.length % 2 !== 0) {
    return false;
  }
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
  // 存储映射的队列
  const stack = [];
  s.split('').forEach((ch, index) => {
    if(map.has(ch)) {
      stack.push(ch);
    } else {
      const stackTop = stack[stack.length - 1];
      if(s[index] !== map.get(stackTop)) {
        return false
      }
      stack.pop();
    }
  })
  return !stack.length
}

console.log(isValid("{}"));