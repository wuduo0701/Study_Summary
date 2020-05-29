/**
 * 
 * 
 */

function deepCopy(obj) {
  var cobj;
  if (obj === null) { // null 
    return obj;
  }

  let t = typeof obj;
  switch(t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return obj;
  }

  if (Array.isArray(obj)) {
    cobj = [];
    obj.forEach((c, j) => {
      cobj.push(deepCopy(obj[j]))
    })
  } else {
    cobj = {}
    if (Object.prototype.toString.call(obj) == "[object Object]") {
      // weakSet weakMap
      //遍历所有数据s
      Object.getOwnPropertyNames(obj)   //这样就可以遍历不可枚举出来和Symbol类型的数据了
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach(c => {
          cobj[c] = deepCopy(obj[c]);
        })
    } else {
      cobj = obj;
    }
  }
  // 简单数据类型
  // 复杂数据类型s
  return cobj;
}

let arr = [1,2,3]
let a = Symbol()
console.log(deepCopy(a))