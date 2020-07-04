##  Vue + Vuex + Vue-Router + Fastclick + Stylus + Swiper + Axios 

### Vue-Router 路由模式有几种
1. hash模式:  使用URL hash值作为路由，支持所有浏览器。
2. history模式: 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
3. abstract模式: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

### hash模式的实现原理
早期的前端路由的实现就是基于location.hash来实现的。

+ 实现原理就是url中的#后面的内容

- hash模式的实现就是基于下面几个特性：
1. URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
2. hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；
3. 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；
4. 我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

总结：hash模式实现就是url中的#后面的内容，url只是客户端的状态，与服务器交互时，hash不会发送。hash值的改变会在浏览器的历史记录添加一个记录，可以使用前进后退来实现页面切换。

### history模式的实现原理
实现原理是基于HTML5提供的API来实现URL的变化。最主要的是**history.pushState**和**history.replaceState**。这两个API是可以操作浏览器的历史记录，不同的是，前者是新增历史记录和替换历史记录。
```js
history.pushState() //新增历史记录
history.replaceState()  //替换历史记录
```
history 路由模式主要是基于下面的几个特性
1. **pushState()**和**replaceState()**来操作URL的变化
2. 我们可以使用popState事件来监听url的变化，从而实现跳转。