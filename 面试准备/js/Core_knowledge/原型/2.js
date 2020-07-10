var obj1 = {
  a: 2
}

var obj2 = Object.create(obj1)
console.log(obj2.a)

// hasOwnProperty 判断属性是否有指定的属性值,返回布尔值
console.log(obj1.hasOwnProperty('a'))

console.log(obj2.hasOwnProperty('a'))

obj1.a ++

console.log(obj1.a) //3
console.log(obj2.a) //3

console.log(obj2)   //{}  这里为空]]

obj2.a ++ //这里隐式创建了obj2.a的值
console.log(obj1.a) //3
// 这里的只有obj2.a变化是因为obj2上没有
console.log(obj2.a) //4

console.log(obj2) //{a:4}

