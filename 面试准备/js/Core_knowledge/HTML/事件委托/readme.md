## 事件委托
- 不在事件的（直接dom）上设置监听函数，而是在其父元素上设置监听函数。通过事件冒泡，父元素可以监听到子元素上事件的触发
	通过判断事件发生元素DOM的类型，来做出不同的响应。
举例子： 最经典的就是ui和li标签的事件监听，比如我们在添加事件的时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加
好处：可以比较合适动态元素的绑定，新添加的子元素也会监听函数，也可以有事件触发机制

### 例子
- 手写实现事件委托，ul 套 3 个 li，点击 li 分别输出 1 2 3  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul id="event">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
    var el1 = document.getElementById('event');
    el1.addEventListener('click', function(e) {
      // var event = e || window.event;
      console.log(e.target.innerHTML)
    })
  </script>
</body>
</html>
```
