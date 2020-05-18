## babel

```html
<div>
  <p></p>
</div>
```
parse -> transform -> generate
  [抽象语法树解析](https://astexplorer.net/)
 - 解析： code -> AST 变为抽象语法树
  - 词法分析：状态机， 源码解析为一个个 token: start-div start-p end-p end-start
  - 语法分析：父子关系构造出来:
  - AST(语法分析完的结果)

babel解析也是解析为一个个抽象语法树
