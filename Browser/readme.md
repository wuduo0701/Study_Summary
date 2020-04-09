## 从输入URL到页面展示，这中间发生了什么？
1. 多进程的架构
  Inter-Process Communication 进程间通信

1. 浏览器 proxy 通过浏览器来代理我们访问网页

    url 补全协议
    juejin.im 自动补全为  https://juejin.im/  用户体验很好
2.  发生在浏览器中 操作系统的进程
    浏览器里的进程  Shift + Esc
    主进程  管家  并发执行 多进程的 chrome比IE优秀(消耗更多的内存)
    打开一个页面 至少有四个进程
    <!-- GPU 进程(渲染进程)    GPU 加速  3d 渲染 three.js  css transform 3d 或者canvas都会用到GPU
    Network Service -->
    - 浏览器主进程(chrome)
      启动浏览器   提供了的交互(url输入)  子进程管理(进程间的通信 IPC)  文件存储功能  文件缓存  cookie localstorage  BOM(Browser Object Model)
    - 渲染进程(GPU进程)
      html，css，js 图片 渲染成可交互的页面
    - 网络进程(Network Service)
      提供下载功能
    - 标签页
### 执行过程
  1. 浏览器进程收朵用户输入的URL 请求时 在主进程，IPC 将url 交给网络进程
  2. 网络进程中发起真正的url请求 url 请求是由 c++模块来完成的 node -> c++
    2.1 request
    2.2 response
  3. 网络进程响应头数据(head + body)  通知 渲染进程开始准备的
    响应头先到达
  
2. 发出请求




1. leetcode 题
2. 怎么复习？ 学习效率
    看掘金面试相关技能点的列表
    问自己问题  不会就去搜 ，学习
    高效的学习

    要自己学会思考，有自己主动式的学习
3. 写文章的方式来学习
  