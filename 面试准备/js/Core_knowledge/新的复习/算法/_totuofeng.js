const a = {  red_apple:'111',  blue_apple:{   green_apple:{    orange_apple:'222'   }  } };

let newObj = new Object;
function addNewObj(obj) {
  for (let [key, value] of Object.entries(obj)) {
    // true的时候则还是Object
    if (value instanceof Object) {
      addNewObj(value);
    } else {
      // 如果为字符串，就转化成小驼峰
      key = fn1(key);
      // 重新赋值
      newObj[key] = value;
    }
  }
  return newObj;
}
// 下划线转化成小驼峰
function fn1(str) {
    // replace不会改变原数组，第一个参数是需要匹配的字符串，第二个参数是进行替换的参数
    // 第二个是也可以是回调函数，这个函数的参数第一个是匹配的字串，第二个为
  return str.replace(/_(\w)/g, (match, p1) => {
    return p1.toUpperCase();
  });
}

console.log(addNewObj(a));