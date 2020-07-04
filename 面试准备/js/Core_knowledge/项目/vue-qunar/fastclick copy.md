## fastClick

### 移动端300ms延迟的真正原因
是早期iphone，手指在屏幕中快速点击两次，IOS自带的浏览器会将网页缩放到原始的比例。

- 应用场景：假如用户在操作IOS浏览器的时候，相要点击一个链接。由于用户可以进行双击缩放和双击滚动的操作，当用户点击的时候，浏览器不能立即判断用户是要双击操作还是点击跳转链接。因此IOS就设计出了300ms的延迟，来进行判断。

- 解决方案：
1. 使用fastClick专门来解决移动端的300ms的延迟
2. 指针事件的polyfill
我们现在关心的不是指针事件，而是与300ms延迟相关的CSS属性touch-action。由于除了IE之外的大部分浏览器都不支持这个新的CSS属性，所以这些指针事件的polyfill必须通过某种方式去模拟支持这个属性。

### 点击穿透问题
假设页面上有两个元素A和B，B在A元素之上。我们在touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，我们点击B元素，B元素被隐藏了，A又触发了click事件。

原因: 这是因为在移动端中，事件的执行顺序为：touchstart -> touchend -> click.而click事件是存在300ms的延迟，

解决办法：
1. 之前我是在那个样式中使用了**touch-action: none**，依旧未解决问题，而且还会造成页面无法滚动的bug。
2. 后面在touchstart加了一个prevent,即 touchstart.prevent，阻止点击穿透的默认行为，这样就不会触发接下来的click事件了。

#### 移动端手指触碰后的事件api触发顺序
touchstrat -> touchmove -> touchend -> click

如果只是滑动时不会触发click事件的，**执行顺序为**touchstart -> touchmove -> touchend

如果点击的话，**执行顺序为**: touchstart -> touchend -> click

