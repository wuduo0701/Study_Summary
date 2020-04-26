## css3新特性
  css3是层叠样式表(Cascading Style Sheets), 是扩展css2.1的新版本
1. transition 过渡属性  让一些交互效果，显得更加生动一点，有个过渡阶段
  也可以为元素在不同状态之间切换 hover和active
  transition 带有四个属性

  transition-property: width;   //指应用过渡属性的名称
  transition-duration: 1s;      //指过渡动画所需要的时间
  transition-timing-function: linear;   //描述动画是怎么变化的 常见属性为ease ease-in ease-out
  transition-delay: 2s;     //指过渡动画在开始之前所需要等待的时间

2. animation  动画属性 让页面有动画效果，使得页面更加生动 与过渡属性参数有点类似
  一般带有的属性
  animation-name    //指动画属性的名称
  animation-duration    //指动画所需要的时间
  animation-timing-function: linear;   //描述动画是怎么变化的 常见属性为ease ease-in ease-out
  animation-delay: 2s;     //指动画在开始之前所需要等待的时间

3. tarnsform 转换属性， 允许你旋转，缩放，倾斜，平移给定元素
  适用于2D和3D转换的元素

4. 新增的css选择器
  例如  
  p~ul    选择p标签下的所有ul标签
	a[src^="https"]   选择其 src 属性值以 "https" 开头的每个 <a> 元素。
  a[src$=".pdf"]    	选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。

5.  box-shadow  阴影属性    在元素框架周围添加阴影效果
    box-shadow: 10px 5px 5px black; 
   / * x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */

6. border-radius    边框圆角
    border-radius: n1,n2,n3,n4;
    /*n1-n4四个值的顺序是：左上角，右上角，右下角，左下角。*/

7. 颜色的透明度
  color：rgba 这里的a指的就是透明度

8. word-wrap: break-word    或者 word-breack: normal  文字超出部分会换行
设置或检索当当前行超过指定容器的边界时是否断开转行
  text-overflow 文字超出部分会显示为省略号

9. 渐变效果(Gradient)

10. filter  过滤属性  相当于相机的滤镜效果

11. flex 弹性布局
  更加方便的页面布局方式
  flex：3 页面均匀分成3分

12. grid  网格布局 

13. box-sizing  盒子模型