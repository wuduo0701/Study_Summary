## Redux
Redux 是 React的一个状态管理库, 他将React的状态管理抽离了出来

❗ 在React中，如果要访问redux，需要通过action，当reducer收到action，通过 swithc...case 语法比较 action 中type。 匹配时，更新对应的内容返回新的 state。当Redux状态更改时，连接到Redux的组件将接收新的状态作为props。

Action: Action 只是一个简单的json对象，type 和有payload作为键。type 是必须要有的，payload是可选的。下面是一个 action 的例子。
```js
// action
{ 
  type:"SEND_EMAIL", 
  payload: data
};
```
Action Creators：这些是创建Actions的函数，因此我们在派发action时不必在组件中手动编写每个 action。 以下是 action creator 的示例。
```js
// action creator
export function sendEamil(data) {
    return { type:"SEND_EMAIL", payload: data};
}
```
复制代码Reducers：Reducers 是纯函数，它将 action和当前 state 作为参数,计算必要的逻辑并返回一个新的state。 这些 Reducers 没有任何副作用。 它不会改变 state 而是总是返回 state 。
```js
export default function emailReducer(state = [], action){
  switch(action.type) {
      case "SEND_EMAIL":  return Object.assign({}, state, {
       email: action.payload
      });
      default: return state;
  }
}
```

## 使用redux的数据
mapStateToProps：此函数将state映射到 props 上，因此只要state发生变化，新 state 会重新映射到 props。 这是订阅store的方式。
mapDispatchToProps：此函数用于将 action creators 绑定到你的props 。以便我们可以在第12行中使用This . props.actions.sendemail()来派发一个动作。

## 什么是 React Router Dom 及其工作原理
react-router-dom是应用程序中路由的库，提供两个路由器BrowserRouter和HashRoauter

- 组件
1. BrowserRouter 和 HashRouter 是路由器。
2. Route 用于路由匹配。
3. Link 组件用于在应用程序中创建链接。 它将在HTML中渲染为锚标记。
4. NavLink是突出显示当前活动链接的特殊链接。
5. Switch 不是必需的，但在组合路由时很有用。
6. Redirect 用于强制路由重定向

## 提高性能

1. 适当地使用shouldComponentUpdate生命周期方法。 它避免了子组件的不必要的渲染。 如果树中有100个组件，则不重新渲染整个组件树来提高应用程序性能。
2. 使用create-react-app来构建项目，这会创建整个项目结构，并进行大量优化。
3. 不可变性是提高性能的关键。不要对数据进行修改，而是始终在现有集合的基础上创建新的集合，以保持尽可能少的复制，从而提高性能。
4. 在显示列表或表格时始终使用 Keys，这会让 React 的更新速度更快
5. 代码分离是将代码插入到单独的文件中，只加载模块或部分所需的文件的技术。



