## 水平垂直居中

- 绝对定位方案
1. 通过position:relative相对父元素布局，left：50%，top: 50%.
  此时是相对于方块的左上角的水平垂直居中，我们需要的是方块中心水平居中。
  此时我们通过margin将方块向左移动自身宽度的 width/2， 向上移动自身高度的height /2

```css
  #center {
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
    width: 200px;
    height: 200px;
    background-color: red;
  }
```

2. 通过margin: auto; 利用了元素流体的特性，当一个绝对定位元素，其对立定位方向属性同时有具体定位数值的时候，流体特性就发生了。元素会自动填充父级元素的可用属性。
  auto在任何情况只会取下面两种情况
  1. 父元素剩余空间的宽度
  2. 0
```css
  #center {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background-color: red;
  }
```
3. 通过transform: translate(-50%, -50%) 来移动自身的左上各50%

```css
  #center {
    width: 200px;
    height: 200px;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
```

- Flex布局方案
1. 通过flex布局进行布局, 对父级元素添加样式
```css
#container {
    width: 100%;
    height: 100%;
    background-color: black;
    /* 利用flex进行布局 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

- table布局
1. 
```css
  #center {
    background-color: red;
    display: inline-block;
  }

  #container {
    width: 400px;
    height: 400px;
    background-color: black;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
```