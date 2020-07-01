

// 1. 如果是原始数据类型，无需拷贝，直接返回
// 2. 如果是引用类型，创建一个新对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
function deepClone(target) {
  // 如果是原始数据类型，不需要拷贝，直接返回
  if(typeof target !== 'object') return target;
  // 判断目标对象是数组还是对象
  const obj = Array.isArray(target) ? [] : {};
  for (let key in target) {
    // 递归遍历
    obj[key] = deepClone(target[key]);
  }
  return obj;
}