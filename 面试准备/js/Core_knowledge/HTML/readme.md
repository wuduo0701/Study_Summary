## 常见的标签
分为块级标签与行内标签
- 块级标签
div, p, h1-h6, ul, ol, li, form, table等
- 行内标签
a, button, img, input, label, span, select等

### img/input是行内标签，为什么也可以设置宽高？
img/input 是可置换元素，要根据其属性来决定的标签就是可置换元素
  比如 img 根据 src 属性来显示，input 根据 value 属性来显示，因此可知道 img 和 input 是置换元素，
1. 可置换元素：标签显示的具体内容要根据其属性来决定的标签就是可置换标签，如img，input，textarea，select等。
2. 不可置换元素：标签显示的具体内容直接呈现给用户

**置换元素就是会根据标签属性来显示的元素，反之就是不可置换元素了**
几乎大部分的可置换元素都是行内元素


