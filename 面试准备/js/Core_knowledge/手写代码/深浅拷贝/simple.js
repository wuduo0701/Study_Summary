/**
 * 手写浅拷贝
 * @param {*} target 
 */
function simpleClone(target) {
  //创建一个克隆对象
  let cloneObj = {};
  //遍历需要克隆的对象，进行赋值
  for(let key in target) {
    cloneObj[key] = target[key];
  }
  return cloneObj;
}