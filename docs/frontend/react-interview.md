# React 面试题

## 目录
- [基础概念](#基础概念)
- [JSX](#jsx)
- [组件](#组件)
- [生命周期](#生命周期)
- [Hooks](#hooks)
- [状态管理](#状态管理)
- [路由](#路由)
- [性能优化](#性能优化)
- [Redux](#redux)
- [React 18 新特性](#react-18-新特性)

---

## 基础概念

### 1. 什么是 React？

React 是 Facebook 开发的一个用于构建用户界面的 JavaScript 库，采用组件化开发思想。

### 2. React 的特点？

- 组件化开发
- 虚拟 DOM
- 单向数据流
- 函数式编程
- 生态丰富

### 3. React 和 Vue 的区别？

| 特性 | React | Vue |
|------|-------|-----|
| 编程范式 | 函数式 | 声明式 |
| 模板 | JSX | 模板语法 |
| 状态管理 | setState/hooks | reactive/ref |
| 学习曲线 | 较陡峭 | 较平缓 |

### 4. 虚拟 DOM 是什么？

虚拟 DOM 是一个轻量级的 JavaScript 对象，它是真实 DOM 的抽象表示。通过 diff 算法比较前后虚拟 DOM 的差异，最小化地更新真实 DOM。

---

## JSX

### 1. 什么是 JSX？

JSX 是 JavaScript 的语法扩展，允许在 JS 中书写类似 HTML 的语法。

### 2. JSX 和 HTML 的区别？

- class 变为 className
- for 变为 htmlFor
- 内联样式使用对象形式
- 事件处理使用驼峰命名

### 3. 为什么 React 不直接使用 HTML 模板？

- 更强的表达能力
- 避免注入攻击
- 更好的错误提示
- 类型检查友好

### 4. JSX 的本质？

JSX 会被 Babel 编译成 React.createElement() 调用。

```jsx
// JSX
const element = <h1>Hello, world!</h1>;

// 编译后
const element = React.createElement('h1', null, 'Hello, world!');
```

---

## 组件

### 1. 函数组件和类组件的区别？

函数组件：
- 更简洁
- 性能更好
- 更易于测试
- 支持 Hooks

类组件：
- 有状态和生命周期
- 有 this 指向问题
- 更复杂

### 2. 受控组件和非受控组件？

受控组件：表单数据由 React 组件管理
非受控组件：表单数据由 DOM 元素本身管理

### 3. 高阶组件（HOC）？

高阶组件是参数为组件，返回值为新组件的函数。

用途：
- 代码复用
- 状态抽象和操作
- 渲染劫持

### 4. Render Props？

Render Props 是一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。

---

## 生命周期

### 1. React 16.3 之前的生命周期？

挂载阶段：
- constructor()
- componentWillMount()
- render()
- componentDidMount()

更新阶段：
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

卸载阶段：
- componentWillUnmount()

### 2. React 16.3 之后的生命周期？

挂载阶段：
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

更新阶段：
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

卸载阶段：
- componentWillUnmount()

### 3. 废弃的生命周期方法？

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

原因：这些生命周期方法经常被误用，容易导致问题。

### 4. useEffect 相当于哪些生命周期？

- componentDidMount：useEffect(() => {}, [])
- componentDidUpdate：useEffect(() => {})
- componentWillUnmount：useEffect(() => { return () => {} }, [])

---

## Hooks

### 1. 什么是 Hooks？

Hooks 是 React 16.8 引入的新特性，让你可以在不编写 class 的情况下使用 state 以及其他的 React 特性。

### 2. 常用 Hooks？

- useState：状态钩子
- useEffect：副作用钩子
- useContext：上下文钩子
- useReducer：状态管理钩子
- useMemo：记忆化钩子
- useCallback：回调钩子
- useRef：引用钩子
- useImperativeHandle：自定义暴露给父组件的实例值
- useLayoutEffect：布局副作用钩子
- useDebugValue：自定义 Hook 的调试值

### 3. useState 的使用？

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 4. useEffect 的使用？

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 5. 自定义 Hooks？

自定义 Hooks 是一个函数，其名称以 "use" 开头，函数内部可以调用其他的 Hooks。

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

---

## 状态管理

### 1. React 状态提升？

当几个组件需要共享状态时，将共享状态提升到它们的最近共同父组件中。

### 2. Context API？

Context 提供了一种在组件树中传递数据的方式，而不必手动地在每一层传递 props。

### 3. Redux 和 Context 的区别？

| 特性 | Redux | Context |
|------|-------|---------|
| 中间件支持 | 支持 | 不支持 |
| 调试工具 | 支持 | 有限支持 |
| 适用场景 | 大型应用 | 小型应用 |
| 学习成本 | 较高 | 较低 |

---

## 路由

### 1. React Router 是什么？

React Router 是 React 应用的路由管理库，用于处理页面跳转和组件展示。

### 2. 常用组件？

- BrowserRouter：路由容器
- Route：路由匹配组件
- Switch：只渲染第一个匹配的路由
- Link：导航链接
- NavLink：带样式的导航链接
- Redirect：重定向

### 3. 路由传参？

- 动态路由：`/user/:id`
- 查询参数：`/user?id=123`
- state 传参：通过 history 对象传递

### 4. 路由守卫？

React Router 没有内置的路由守卫，可以通过高阶组件或自定义组件实现。

---

## 性能优化

### 1. React.memo？

React.memo 是一个高阶组件，用于优化函数组件的重渲染问题。

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

### 2. useMemo？

useMemo 用于缓存计算结果，避免不必要的重复计算。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 3. useCallback？

useCallback 用于缓存函数，避免子组件不必要的重渲染。

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### 4. PureComponent 和 React.memo？

PureComponent 是类组件的浅比较优化，React.memo 是函数组件的浅比较优化。

### 5. 虚拟滚动？

对于大量数据列表，使用虚拟滚动技术只渲染可视区域内的元素。

### 6. 懒加载组件？

```jsx
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

---

## Redux

### 1. Redux 的核心概念？

- Store：存储应用状态
- Action：描述发生了什么
- Reducer：描述 Action 如何改变状态
- Dispatch：派发 Action

### 2. Redux 工作流程？

1. 用户发起 Action
2. Store 调用 Reducer 传入当前 State 和 Action
3. Reducer 返回新的 State
4. State 发生变化后，View 重新渲染

### 3. Redux 中间件？

中间件是位于 Action 发起之后，到达 Reducer 之前的扩展点。

常用中间件：
- redux-thunk：处理异步操作
- redux-saga：处理复杂异步流程
- redux-logger：日志记录

### 4. Redux Toolkit？

Redux Toolkit 是官方推荐的编写 Redux 逻辑的方式，简化了 Redux 的使用。

优势：
- 简化 Redux Store 配置
- 包含 Redux Thunk 中间件
- 包含 Reselect 库
- 减少样板代码

---

## React 18 新特性

### 1. 自动批处理？

React 18 通过默认启用批处理来获得更好的开箱即用性能。

### 2. 并发渲染？

并发渲染是一组 React 功能，帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。

### 3. Suspense 的改进？

React 18 中 Suspense 支持更多的功能，如 SSR 支持。

### 4. 新的 Root API？

```jsx
// React 17
ReactDOM.render(<App />, rootElement);

// React 18
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
```

### 5. Strict Mode 的改进？

React 18 中 Strict Mode 会在开发环境中模拟立即卸载和重新挂载每个组件，帮助发现意外的副作用。

### 6. Transition？

Transition 允许将状态更新标记为非紧急状态，从而降低更新的优先级。

```jsx
import { startTransition } from 'react';

startTransition(() => {
  setSearchQuery(input);
});
```