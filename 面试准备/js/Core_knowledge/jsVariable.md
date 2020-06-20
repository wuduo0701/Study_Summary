## 变量提升

变量提升就是该变量还未声明,但是却可以使用未声明的变量 或者 在创建阶段将变量声明赋予默认值的过程就叫做变量提升
❗ 原理：因为js在代码执行前有一个编译阶段，他是边编译边执行的，在编译阶段，js引擎会收集所有的变量声明，而剩下的部分要等到js执行阶段运行。

- let 和 const 不存在变量提升
```js
console.log(a) //undefined
var a = 1

console.log(b)  //报错
let b = 2
```

7. 暂时性死区
使用let定义变量前，该变量都是不可用的，这种语法就叫做暂时性锁区
```js
var a = 1;
if(true) {
  console.log(a);    //会正常的读取到全局变量a
}
if(true) {
  a = 2;  
  let a;    用let定义，会被绑定到块级作用域中， 这样就是在let声明前定义变量，会直接报错
  console.log(a);
}

if (true) {
  tmp = 'abc'; //暂时性锁区
  console.log(tmp); //声明之前使用tmp变量，报错

  let tmp;    //定义了变量，锁区结束
  console.log(tmp);   //显示为undefined

  tmp = 123;  //赋值
  console.log(tmp);   //显示为123
}
```