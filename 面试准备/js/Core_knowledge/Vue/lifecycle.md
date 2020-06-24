## vue的知识点

### 生命周期
1. beforeCreate
vue的实例刚刚被创建，还未拥有data和methods方法
```js
  var vm = new Vue({
    el: '#app',
    data () {
      return {
        message: 'hello'
      }
    },
    methods: {
      show() {
        console.log('show')
      }
    },
    // 第一个生命周期，实例刚刚初始化，其他都还未拥有
    beforeCreate() {
      this.show()   //不会打印，表示methods还未初始化
      console.log(this.message)   //显示undefined，表示data还未初始化
      console.log('beforeCreate阶段')
    }
  })
```
2. created
实例已经完成：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调 的配置
```js
  var vm = new Vue({
    el: '#app',
    data() {
      return {
        msg: 'hi'
      }
    },
    methods: {
      show() {
        console.log('show')
      }
    },
    created() {
      this.show() //show
      console.log(this.msg)   //msg
    }
  })
```
3. beforeMount
此声明周期已经完成模板的编译，但是还未挂载到页面上
该钩子在服务器端渲染期间不被调用。
```js
  var vm = new Vue({
    el: '#app',
    data () {
      return {
        msg: 'hi'
      }
    },
    methods: {
      show() {
        console.log(document.getElementById('p').innerText)
      }
    },
    // 已经完成了模板的编译，但是还未挂载到页面上
    // 该钩子在服务器端渲染期间不被调用。
    beforeMount() {
      console.log('beforeMount函数')
      this.show()   //显示为{{msg}},
    }
  })
```
4. mounted
编译好的模板已经挂载到页面上，且el会被vm.$el替换
注意：mounted生命周期 并不会保证所有的子组件也都一起被挂载

//  适合做一些ajax请求
```js
  var vm = new Vue({
    el: '#app',
    data () {
      return {
        msg: 'hi'
      }
    },
    methods: {
      show() {
        console.log(document.getElementById('p').innerText)
      }
    },
    // 实例已经被挂载到页面上，且el会被新创建的vm.$el替换
    // 注意：mounted生命周期 并不会保证所有的子组件也都一起被挂载
    mounted() {
      console.log('mounted函数')
      this.show()   //显示为hi
      console.log(this.$el) //#app整个元素
    }
    })
```
5. beforeUpdate
此声明周期表示vue已经在运行的状态了，当数据发生改变时，数据会立马变为最新的，但是页面还是渲染新的DOM
这和Vue时异步更新有关，每次数据更新的时候，都会开启一个队列。这是vue提高性能的一种手段，当数据多次更新的时候，并不是每次都会更新数据，而是更新一次总和，这样可以规避不必要的重复计算和频繁的DOM操作。
这和虚拟DOM非常相似
```js
  var app = new Vue({
    el: '#app',
    data () {
      return {
        msg: "hi"
      }
    },
    methods: {
      change() {
        this.msg = "hello"
      }
    },
    beforeUpdate() {
      console.log('beforeUpdate调用');
      console.log("dom上的数据："+document.getElementById('msg').innerText)   //取得了hi，还是更新前的数据
      console.log("data中的数据："+this.msg)    //数据为hello，证明了data数据是最新的，页面还未和最新数据同步，适合在更新之前访问现在的DOM
    }
  }) 
```
6. updated
updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以使用nextTick取得最新的DOM
```js
  var app = new Vue({
    el: '#app',
    data () {
      return {
        msg: "hi"
      }
    },
    methods: {
      change() {
        this.msg = "hello"
      }
    },
    //updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以使用nextTick取得最新的DOM
    updated() {
      console.log('updated');
      console.log("dom上的数据："+document.getElementById('msg').innerText)   //取得了hello，数据已经完成更新
      console.log("data中的数据："+this.msg)    //数据为hello，页面和 data 数据已经保持同步了，都是最新的。
    }
  }) 
```
7. beforeDestroy
  实例被销毁之前调用，在这异步，实例还是可以继续使用
  
  在我的项目中，详情页的头部组件，做全局事件解绑的时候调用了

8. destroy
  实例已经被销毁，所有子实例和绑定的事件也都会销毁
  
### keep-alive
包裹动态组件时，会缓存不活动的组件，而不是销毁他们，这样可以有效的提升性能

- activated 缓存组件激活调用

在我的项目中，我使用activated声明周期，判断首页的城市是否和城市选择的页面选择的城市是否相同，相同的话，就不会重新发送ajax请求
不同的话就会发送ajax，这样就不需要每次选择城市都发送数据请求

1. 缓存所有组件
```html
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
```
2. 根据条件缓存组件
```html
  <template>
    <div id="app">
    // 1. 将缓存 name 为 test 的组件
    <keep-alive include='test'>
      <router-view/>
    </keep-alive>
   	
   	// 2. 将缓存 name 为 a 或者 b 的组件，结合动态组件使用
   	<keep-alive include='a,b'>
     	  <router-view/>
   	</keep-alive>
   	
   	// 3. 使用正则表达式，需使用 v-bind
   	<keep-alive :include='/a|b/'>
     	  <router-view/>
   	</keep-alive>	
   	
   	// 5.动态判断
   	<keep-alive :include='includedComponents'>
     	  <router-view/>
   	</keep-alive>
   	
   	// 5. 将不缓存 name 为 test 的组件
   	<keep-alive exclude='test'>
     	  <router-view/>
   	</keep-alive>
     </div>
  </template>
```

- deactivated 缓存组件停用的时候调用

- fastClick 解决的问题
1. 手动点击与真正触发click事件会存在300ms的延迟
2. 点击穿透问题

存在的问题
快速点击或者滑动都出先报错，阻止了touchStart的默认行为就可以
touch-action: none; 这个样式并没有用