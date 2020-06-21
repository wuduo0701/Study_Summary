## BFC 是什么？如何创造一个 BFC？

### BFC是什么？
BFC(块级格式化上下文) 是web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

简单来说：BFC就是一个作用范围。可以把他理解成是一个独立的容器。**独立**意味着他与外界无关

### BFC能解决什么问题?
1. 清除浮动
2. 阻止 margin发生层叠
3. 阻止元素被浮动元素覆盖

### 如何创造一个 BFC？
1. float: left等等，只要不是float：none就可以
2. position的值为不是static 或者 relative
3. display：inline-block table-cell flex等等
4. overflow：hidden等等，除了visable

## 谈谈你对 CSS 工程化的理解

1. 宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
2. 编码优化：怎样写出更好的 CSS？
3. 构建：如何处理我的 CSS，才能让它的打包结果最优？
4. 可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？

### 解决办法
1. 使用预处理器: stylus,less等
2. Webpack loader 配置：css-loader， style-loader等
3. 重要的工程化插件： PostCss；

优点：
1. 让css有了js能力，出现了css in js， css也可以写变量，函数等编程性更强的css，这样可以让我们少写很多代码
2. 能够优化css目录，对现有的css文件进行复用
3. 允许对代码片段进行 extend 和 mixin；