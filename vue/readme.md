## Vue的一些总结
- v-if 与 v-show
  他们都是可以表示元素是否显示的
  但是v-if是整个元素彻底消失，重新渲染则要重新挂载DOM
  而v-show则是在不显示的时候加display:none，DOM节点是依然存在的
  + 显然v-show的性能更高，它不需要重新挂载DOM节点

- computed 计算属性
  计算属性是一个函数
  计算结果会被缓存，除非属性发生了改变才会从新计算
  否则会一直取上一次计算的结果，这样更优化

  所依赖的值发生变化才会触发
  1. get  取得值
  2. set  设置值
```js
  get: function() {
    return this.firstName + this.secondName + this.thirdName;
  },
  set: function() {
    this.fullName = 'Mike'
  }
```

  而在methods里，不会进行缓存，每一次数据改变都会重新计算
  不利于性能

- watch 监听器
  监听属性的改变而发生的
+ 有逻辑行为的代码最好放在computed里，watch也行，但会更加复杂，不推荐使用，最好不要放在methods里，性能是负优化的

- 生命周期函数
  befroeCreate
  created
  beforeMounte
  mounted
  beforeUpdate
  updated
  beforeDestroy
  destroyed

- 父子组件传值
  $emit

- 非父子组件传值
  通过总线bus传递，在main.js中注册全局的bus
```js
Vue.prototype.bus=new Vue();
```
  总线/发布订阅者模式/观察者模式
