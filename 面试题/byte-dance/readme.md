- position
1. absolute 父级第一个非static定位的元素  ,没有父级就时视窗为父级 ，会脱离文档流，不会预先为他预留位置
2. relative 相对于自己来进行偏移，且不会影响到其他的值  没脱离文档流
3. fixed  固定定位  类似于绝对布局，该布局常出现于创建滚动屏幕时固定在相同位置的元素
4. static 浏览器
5. stick  粘性布局  相对和固定定位的混合  
#one { position: sticky; top: 10px; } 滚动到距离视窗为10px时触发，然后元素变为固定，常用于字母开头的头部元素，且必须指定top，right，left，bottom四个值之一

- padding 时相对于自己的宽度来计算的

call ??
bind  会返回一个新的函数
在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

## 相等性判断
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness

- 数据类型
1. 基本数据类型：Number，String，Undefined， Null， Boolean
2. 复杂数据类型(对象)： Array，Object，function
typeof  关键字可以检测数据类型
- 注：如果typeof null时会返回 object，因为特殊值null被认为时一个空对象的使用

栈内存          堆内存

存基本数据类型      复杂数据类型

let a = [1], b = [1], c = 1, d = 1;
数组为复杂类型数据   变量为基本
## *
这样变量和其值都是存储在栈内存里，而作为复杂类型数据  变量会存在栈内存里，其值会存在对内存里，栈内存得到的就是值的地址，一个映射，这样判断a == b是为false ，因为地址不一样，而c == d是为true，他们存取的都是值


==  非严格相等   === 严格相等 以及 Object.is()方法
Object.is 相同于 === 但是对于NAN -0 +0 上的处理不同
Object.is(NaN, NaN) 为true  而用 == 或者===比较两个NaN，都为false

- === 严格相等
比较两个值是否相等，且在比较前不会进行隐式转换
1. 类型不同，这两个值是不全等的，不会进行隐式转换，不会比较其值。
2. 类型相同，值相同，且都不是number类型，全等
3. 类型相同，值相同，且两个值都为number类型，不为NaN时，则为全等。
4. 浮点数0是不分正负的，浮点数包含了NaN的值，用来表示某些定义不明确的数学问题的解

- 非严格相等
比较两个值是否相等，在比较前会转换为相同类型的值进行比较。
转换后，最终的比较方式等同于严格相等， 即  A === B(类型相等)
           Undefined    NULL    Number   String       Boolean   Obiect   ->  B
Undefined   true      true      false     false         false     false
Null        true      true      false     false         false     false
Number      false     false    A===B   A===toNumber(B) 同左     A==ToPrimitive(B)
String      false     false  toNumber(A)===B  A===B toNumber(A)===toNumber(B)  同上
Boolean     false     false
Object      false     false
  |
  A
### 例  object可以为Array Object function
1. string 和 object 比较时  
  '1' 与 [1]   ([1]).toString() -> '1' , '1' === '1'为true
  '' 与 {}比较  ({}).toString() -> ['Object Object'] -> Number("[object Object]") -> NaN 而 Number('')为 0 ，NaN 与 0 为false
2. Number 与 Object
  1 与 [1] ([1]).toString() -> '1' , Number('1') -> 1, 1===1为true
  ([1]).toString() -> '1' , '1' === '1'为true
