## DOM事件

### 事件级别
三个事件级别，DOM0，DOM2，DOM3(注意没有DOM1)，因为 DOM1 标准制定的时候没有涉及 DOM事件。DOM3 比 DOM2 只是增加了一些事件类型。
- DOM0：element.onclick = function(){}
- DOM2：element.addEventListener('click', function(){}, false)
- DOM3：element.addEventListener('keyup', function(){}, false)

### 前端事件流
事件流描述的是从页面中接受事件的顺序，分为**事件捕获和事件冒泡**，事件捕获阶段 处于目标阶段 事件冒泡阶段 addeventListener 最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。

- 事件捕获的流程为：window -> document -> html -> body -> ... -> 目标元素。
- 事件冒泡的流程为：目标元素 -> ... -> body -> html -> document -> window。

1、事件捕获阶段：实际目标div在捕获阶段不会接受事件，也就是在捕获阶段，事件从document到<html>再到<body>就停止了。
2、处于目标阶段：事件在div发生并处理，但是事件处理会被看成是冒泡阶段的一部分。
3、冒泡阶段：事件又传播回文档

### 阻止事件冒泡
1. w3c的方法是e.stopPropagation()
2. IE则是使用e.cancelBubble = true
```js
//自定义阻止事件冒泡
function stopBubble(e) {
  if (e && e.stopPropagation) { // 如果提供了事件对象event 这说明不是IE浏览器
    e.stopPropagation()
  } else {
      window.event.cancelBubble = true //IE方式阻止冒泡
    }
  }
```
### 阻止事件默认行为
1. w3c的方法是e.preventDefault()
2. IE则使用e
```js
function stopDefault(e) {
  if (e && e.preventDefault) {    // 如果提供了事件对象event 这说明不是IE浏览器
    e.preventDefault()  
  } else {
    // IE浏览器阻止函数器默认动作的行为
    window.event.returnValue = false; 
  }
  return false; 
}
```
### 事件如何先捕获后冒泡？
在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，
对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获事件。

### 哪些事件不支持冒泡事件
鼠标事件：mouserleave  mouseenter
焦点事件：blur focus
UI事件：scroll resize
