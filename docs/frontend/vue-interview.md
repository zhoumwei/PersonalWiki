---
title: Vue 面试题
---

# Vue 面试题

## 目录
- [基础概念](#基础概念)
- [响应式原理](#响应式原理)
- [生命周期](#生命周期)
- [组件通信](#组件通信)
- [路由](#路由)
- [状态管理](#状态管理)
- [Vue 3 新特性](#vue-3-新特性)
- [性能优化](#性能优化)
- [工程化](#工程化)

---

## 基础概念

### 1. 什么是 Vue？

Vue 是一套用于构建用户界面的渐进式 JavaScript 框架，采用自底向上的增量开发设计。

### 2. Vue 的核心特性？

- 数据驱动视图
- 组件化开发
- 响应式系统
- 虚拟 DOM
- 指令系统

### 3. MVVM 模式？

MVVM 是 Model-View-ViewModel 的缩写，Vue 采用了这种模式：
- Model：数据模型
- View：视图模板
- ViewModel：连接 Model 和 View 的桥梁

### 4. Vue 与其他框架的对比？

与 React 对比：
- Vue 模板更接近 HTML，学习成本更低
- React 使用 JSX，更灵活但学习成本更高

与 Angular 对比：
- Vue 更轻量，API 更简洁
- Angular 更重量级，功能更全面

---

## 响应式原理

### 1. Vue 2.x 响应式原理？

Vue 2.x 通过 Object.defineProperty() 实现响应式：
- 数据劫持：拦截对象属性的读取和设置
- 依赖收集：在 getter 中收集依赖
- 派发更新：在 setter 中通知更新

### 2. Vue 3.x 响应式原理？

Vue 3.x 使用 Proxy 实现响应式：
- 可以监听对象新增/删除属性
- 可以监听数组索引和 length 变化
- 嵌套对象可以深层监听

### 3. 为什么 Vue 3 要用 Proxy 替代 Object.defineProperty？

Proxy 的优势：
- 可以监听对象而非属性
- 可以监听数组变化
- 有多达 13 种拦截方法
- 返回新对象而非直接修改原对象

### 4. 数组变异方法？

Vue 重写了数组的以下方法使其可以触发视图更新：
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

---

## 生命周期

### 1. Vue 实例生命周期钩子？

创建阶段：
- beforeCreate：实例创建前
- created：实例创建后，数据观测和事件配置完成

挂载阶段：
- beforeMount：挂载开始前
- mounted：挂载完成后

更新阶段：
- beforeUpdate：数据更新前
- updated：数据更新后

销毁阶段：
- beforeDestroy：实例销毁前（Vue 2）
- destroyed：实例销毁后（Vue 2）
- beforeUnmount：实例卸载前（Vue 3）
- unmounted：实例卸载后（Vue 3）

### 2. 父子组件生命周期执行顺序？

加载渲染过程：
父 beforeCreate → 父 created → 父 beforeMount → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted → 父 mounted

更新过程：
父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated

销毁过程：
父 beforeDestroy → 子 beforeDestroy → 子 destroyed → 父 destroyed

### 3. keep-alive 的生命周期？

被 keep-alive 包裹的组件会多出两个生命周期钩子：
- activated：组件激活时调用
- deactivated：组件停用时调用

---

## 组件通信

### 1. 父子组件通信？

- props：父向子传递数据
- $emit：子向父传递事件

### 2. 非父子组件通信？

- EventBus：中央事件总线
- provide/inject：祖先后代组件通信
- Vuex：状态管理模式

### 3. v-model 的实现原理？

v-model 是语法糖，本质上是：
```html
<input v-model="value">
<!-- 等价于 -->
<input :value="value" @input="value = $event.target.value">
```

### 4. .sync 修饰符？

.sync 是 v-model 的扩展，可以实现多个 prop 的双向绑定：
```html
<comp :title.sync="title"></comp>
<!-- 等价于 -->
<comp :title="title" @update:title="title = $event"></comp>
```

---

## 路由

### 1. Vue Router 是什么？

Vue Router 是 Vue.js 官方的路由管理器。

### 2. 路由模式？

- hash 模式：使用 URL hash 值来模拟完整的 URL
- history 模式：利用 history.pushState() API 完成 URL 跳转

### 3. 导航守卫？

全局守卫：
- beforeEach：全局前置守卫
- afterEach：全局后置守卫

路由独享守卫：
- beforeEnter：路由配置中定义

组件内守卫：
- beforeRouteEnter：进入路由前
- beforeRouteUpdate：路由参数变化时
- beforeRouteLeave：离开路由前

### 4. 路由传参？

- query：/user?id=123
- params：/user/123
- props：组件内通过 props 接收参数

---

## 状态管理

### 1. Vuex 是什么？

Vuex 是专为 Vue.js 应用程序开发的状态管理模式。

### 2. Vuex 核心概念？

- State：存储应用状态
- Getter：从 State 派生出一些状态
- Mutation：更改 State 的唯一方法
- Action：提交 Mutation，可以包含异步操作
- Module：将 store 分割成模块

### 3. Mutation 和 Action 的区别？

| 特性 | Mutation | Action |
|------|----------|--------|
| 执行环境 | 同步 | 异步 |
| 调用方式 | commit | dispatch |
| 参数 | state 作为第一个参数 | context 作为第一个参数 |

### 4. 为什么要通过 Mutation 修改 State？

- 更明确地追踪状态变化
- DevTools 可以捕捉到每一次状态变化
- 便于调试和时间旅行

---

## Vue 3 新特性

### 1. Composition API？

Composition API 是 Vue 3 的一大亮点，提供更灵活的组件逻辑复用机制。

优势：
- 更好的逻辑组织
- 更好的类型推导
- 更好的代码复用

### 2. 性能提升？

- 打包体积更小
- 初始渲染更快
- 更新性能更好
- 内存占用更少

### 3. Tree-shaking 支持？

Vue 3 更好地支持 Tree-shaking，未使用的模块会被打包工具自动移除。

### 4. Fragment？

Vue 3 支持多个根节点，不再需要单一根元素包装。

### 5. Teleport？

Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染 HTML。

### 6. Suspense？

Suspense 可以在组件渲染之前的等待过程中显示后备内容。

---

## 性能优化

### 1. 列表渲染优化？

- 使用 key 属性
- 使用 Object.freeze() 冻结不需要响应式的对象
- 使用函数式组件

### 2. 路由懒加载？

```javascript
const Home = () => import('./Home.vue')
```

### 3. 组件懒加载？

```javascript
components: {
  Home: () => import('./Home.vue')
}
```

### 4. keep-alive 缓存组件？

```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

### 5. 虚拟滚动？

对于大量数据列表，使用虚拟滚动技术只渲染可视区域内的元素。

---

## 工程化

### 1. Vue CLI？

Vue CLI 是官方提供的标准开发工具，提供：
- 项目脚手架
- 插件系统
- 图形化管理界面

### 2. Vite？

Vite 是下一代前端构建工具，具有：
- 快速冷启动
- 热更新迅速
- 按需编译

### 3. 单文件组件（SFC）？

.vue 文件包含了模板、脚本和样式，便于组件化开发。

### 4. TypeScript 支持？

Vue 3 对 TypeScript 有更好的支持，提供了完整的类型推导。