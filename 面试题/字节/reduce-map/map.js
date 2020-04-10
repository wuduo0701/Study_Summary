const arr = [ {age: 10}, {age: 20} ];
// const newArray = arr.map(e => {
//   return{
//     age: e.age*2
//   }
  
// })
Array.prototype.mymap = function(cb) {
  // let t = [];
  // for(let i = 0; i< this.length; i++){   //使用for循环来模拟map
  //   t.push(cb(this[i]))
  // }
  return this.reduce((acc,current) => {
    let res = cb(current)
    return acc.concat(res)
  }, [])
  // return t;
}

Array.prototype._map = function(fn, callbackThis) {
  // 最终返回的新数组
  let res = [];
  // 定义回调函数的执行环境
  // call第一个参数传入null，则 this指向全局对象，同 map的规则
  let CBThis = callbackThis || null;
  this.reduce((brfore, after, idx, arr) => {
      // 传入map回调函数拥有的参数
      // 把每一项的执行结果push进res中
      res.push(fn.call(CBThis, after, idx, arr));
  }, null);
  return res;
};
// 先定义一个数组的在return的都可以用reduce进行简化


const newArray = arr.map(e => {
  return{
    age: e.age*2
  }
  
})
console.log(newArray)

function test(callback){
  setTimeout(() => {
    callback('hello word')
  }, 2000);
}
// 让2s输出 ，完成test
test(function(str){
  console.log(str)
})