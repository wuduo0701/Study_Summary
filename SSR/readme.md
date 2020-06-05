## SSR (service side render) 服务端渲染
在服务器上将客户端程序渲染为html

服务器返回一堆html，在浏览器上显示
优点：兼顾了前端的组件化和后端的输出效率
## CSR (client side render) 客户端渲染
在浏览器渲染APP

- CSR的弊端：
1. 由于页面的显示过程要拉去js文件和执行，页面加载的时间会很慢，出现白屏
2. 对于SEO(搜索引擎优化)无能为力，因为搜索引擎爬虫只认识html的结构，而不能识别JS代码
## SSR和CSR的区别

最大的区别在于： CSR的页面渲染是JS负责进行的，而SSR是服务端直接返回HTML让浏览器直接渲染

## 同构
React代码客户端和服务器端各自运行一遍。
React的同构步骤
1. react运行代码生成html代码
2. 发送给浏览器
3. 浏览器显示html内容
4. 浏览器加载JS文件
5. JS文件接管各自的方法
