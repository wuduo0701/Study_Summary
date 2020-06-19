// 手写  instanceof
// 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
function myInstanceof(target, origin) {
  // 如果是基本数据类型直接返回false
  if(target === null || typeof target !== 'object') return false;
  // 获取源类型的原型链
  let proto = origin.prototype;
  // 如果需要对比的原型链不为null
  while(target.__proto__) {
    if(target.__proto__ === proto) return true;
    //向上递归查找原型链
    target = target.__proto__;
  }
  return false;
}

console.log(myInstanceof([], Object));

console.log(myInstanceof({}, Object));