promise -> generator -> async,awaiw


## generator

每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。

value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。false表示未完成，true完成。

如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

## async await

  - await 后面接promise 接promise之后才能保证 顺序