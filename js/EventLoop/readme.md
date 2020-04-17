## EventLoop 事件循环机制

为了协调事件(event)，用户交互，脚本，呈现(render)，网络等等

### 分类
- window event loop
- work event loop
- worklet event loop

事件循环有一个或多个(task queue)任务队列
task 的产生可能出自于下面面：
- Events
- Parsing

每个事件循环都有一个当前正在运行的运行的任务(task)
每个事件循环都有一个微任务队列(microtask queue)
每个事件循环都有 microtask checkpoint 布尔值(最初为 false)