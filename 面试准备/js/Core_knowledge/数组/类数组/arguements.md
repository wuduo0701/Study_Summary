## 类数组

ECMA-262对它的定义是：
1. 它必须是一个对象
2. 它必须拥有length属性

按照这个标准的话就是拥有length属性的对象就是类数组
```js
const book = {
  name: 'how to read a book',
  age: 10,
  length: 300 
} // 这是一个类数组对象
```

### 如何把类数组对象转换为真正的数组？
```js
const arrayLike = {0: 'Bob', 1: 'Lucy', 2: 'Daisy', length: 3 }

// 1. 第一种借用slice方法
const arr1 = Array.prototype.slice.call(arrayLike);

// 2. 第二种使用es6的Array.from方法
const arr2 = Array.from(arrayLike);

console.log(arr1);  //[ 'Bob', 'Lucy', 'Daisy' ]
console.log(arr2);    //[ 'Bob', 'Lucy', 'Daisy' ]
```