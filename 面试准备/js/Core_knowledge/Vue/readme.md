## React 与 Vue的区别
- 相同点
1. 数据驱动页面，提供响应式的试图组件
2. 都有virtual DOM,组件化的开发，通过props参数进行父子之间组件传递数据，都实现了webComponents规范
3. 数据流动单向，都支持服务器的渲染SSR
4. 都有支持native的方法，react有React native， vue有wexx
- 不同点
1. 数据绑定：Vue实现了双向的数据绑定，react数据流动是单向的
2. 数据渲染：大规模的数据渲染，react更快
3. 使用场景：React配合Redux架构适合大规模多人协作复杂项目，Vue适合小快的项目
4. 开发风格：react推荐做法jsx + inline style把html和css都写在js了
  vue是采用webpack + vue-loader单文件组件格式，html, js, css同一个文件

  
## 介绍下MVVM(数据的双向绑定）
M: Model数据模型
V：View视图层
VM：ViewModel Model和view之间的桥梁
实现了数据的双向绑定

## Vue如何实现双向数据绑定的(原理)？

核心就是数据劫持 + 发布/订阅者模式：vue使用的是Object.defineProperty()通过监听他的get/set事件，监听对数据的操作，从而触发数据同步
- 步骤
1. 实现数据监听器Observe。对数据对象进行遍历，包括子属性对象的属性，利用Object.defineProperty(),对属性加上setter/getter。这样给某个对象赋值的话，就会触发 setter，从而监听数据的变化
2. 实现解析器Compile：解析Vue模板指令，将模板中的遍历都替换成数据，渲染到页面上。并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
3. 实现一个订阅者Watcher。Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
4. 实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

- 缺点
1. 只能对属性进行数据劫持
2. 不能对整个对象，数组进行劫持
3. Object.defineProperty是ES5的一个属性，使得Vue不支持IE8甚至更低的版本

所以Vue在下个版本用Proxy

### Proxy与Object.defineProperty对比
- 优点
1. Proxy可以监听之前Vue不能监听的对象和数组。
2. Proxy多达13种拦截方式，比如 apply，ownKeys，deleteProperty
3. Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；

## 组件中 data 为什么是一个函数？

因为组件是用来复用的，且JS之间对象存在引用关系。如果子组件的data是一个对象的话，因为对象之间是存在引用关系的，当我们修改其中一个属性的时候，会影响到所有与之有关的数据。但是如果data作为一个函数返回一个对象的话，那么每个data属性都是独立的，不会相互影响。

## 怎么理解Vue的单向数据流
所有的prop都使得其父子prop之间形成一个单向下行的绑定：父级prop的更新会向下流动子组件中，但是反过来则不行。这样防止从子组件意外改变父组件的状态，防止你不理解你的组件数据流动。

## 组件间的通信
- 父子组件之间通信
1. 父传子，通过props属性，绑定父组件数据。
2. 子传父，通过 **$emit**
3. 通过ref获取DOM进行操作

- 兄弟组件通信
通过EventBus($emit/$on).这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

- vuex数据管理

## vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。
（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

- 模块
1. State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
2. Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

## v-if和v-show的区别
v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建
v-show只是组件显示不显示，就是display:none,属性的切换。

## v-model的原理
v-model本质上是一个语法糖，我们一般在表单 input、textarea、select 等元素上创建双向数据绑定。v-model在内部为不同的输入元素使用不同的属性并抛出不同的事件：
1. text 和 textarea 元素使用 value 属性和 input 事件；
2. checkbox 和 radio 使用 checked 属性和 change 事件；
3. select 字段将 value 作为 prop 并将 change 作为事件。

## v-dom实现原理
1. 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
2. diff 算法 — 比较两棵虚拟 DOM 树的差异；
3. pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

## v-dom的优缺点
- 优点
1. **保证性能下限**： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
2. **无需手动操作 DOM**： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
3. **跨平台**： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

## methods、computed和watch的区别
1. methods
写方法，主要用来写业务逻辑的，数据量大，需要缓存，可以用computed，每次都需要重新加载，不需要缓存，则用methods
2. computed
计算的结果会被缓存，除非依赖的属性也发生了改变才会重新计算。
3. watch
是一个对象，键是需要观察的表达式，值是对应的回调函数，监听某些数据的变化从而进行相应的业务逻辑

## Vue 的父组件和子组件生命周期钩子函数执行顺序？

1. 加载渲染过程
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 Created  -> 子 beforeMounted -> 子 mounted -> 父

2. 子组件更新过程
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

3. 父组件更新过程
父 beforeUpdate -> 父 updated

4. 销毁过程
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

