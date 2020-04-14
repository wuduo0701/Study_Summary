// var condition;
//变量提升就是该变量还未声明,但是却可以使用未声明的变量
// if(condition) {
//   var value = 1;
// }

// var name = "sad"
// var handle = "@asdas"

// function getUser() {
//   return {
//     name: name,
//     handle: handle
//   }
// }
// console.log(getUser())
// ## 在创建阶段将变量声明赋予默认值的过程就叫做变量提升
// 提升不是真正意义上的提升,不是提升到代码顶部,而是在代码执行钱,先在词法环境进行了注册
// 使用了let和const定义变量时,我们不能在声明之钱使用变量,这叫做暂时性死区
console.log('name: ', name)
// 在这里变量声明已经发生,值为dundifined
console.log('handle: ', handle)
console.log('getUser :', getUser)

var name = 'Tyler'
var handle = '@tylermcginnis'

function getUser () {
  return {
    name: name,
    handle: handle
  }
}
getUser()
