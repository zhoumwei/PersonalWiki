---
title: JavaScript 面试题
---

# JavaScript 面试题

## 目录
- [基础概念](#基础概念)
- [数据类型](#数据类型)
- [作用域和闭包](#作用域和闭包)
- [this 指向](#this-指向)
- [原型和原型链](#原型和原型链)
- [异步编程](#异步编程)
- [ES6+ 特性](#es6-特性)
- [DOM 操作](#dom-操作)
- [事件处理](#事件处理)
- [Ajax 和 Fetch](#ajax-和-fetch)
- [模块化](#模块化)
- [性能优化](#性能优化)
- [常见算法题](#常见算法题)

---

## 基础概念

### 1. 什么是 JavaScript？

JavaScript 是一种轻量级的解释型或即时编译型的编程语言，主要用于 Web 页面开发，使网页具有交互性。

### 2. JavaScript 的特点？

- 解释型语言
- 动态类型
- 基于原型
- 多范式（面向对象、命令式、声明式）

### 3. JavaScript 与 ECMAScript、DOM、BOM 的关系？

- ECMAScript：JavaScript 的语法规范
- DOM：文档对象模型，提供操作 HTML 文档的接口
- BOM：浏览器对象模型，提供与浏览器交互的接口

### 4. JavaScript 执行过程？

JavaScript 代码的执行分为两个阶段：
1. 编译阶段：变量提升、函数提升
2. 执行阶段：代码逐行执行

---

## 数据类型

### 1. JavaScript 有哪些数据类型？

JavaScript 有两种数据类型：

基本数据类型（原始类型）：
- Number
- String
- Boolean
- Undefined
- Null
- Symbol (ES6)
- BigInt (ES2020)

引用数据类型（对象类型）：
- Object
- Array
- Function
- Date
- RegExp 等

### 2. null 和 undefined 的区别？

- null 表示一个空对象指针
- undefined 表示变量已声明但未赋值

### 3. typeof 和 instanceof 的区别？

- typeof 用于判断基本数据类型（除了 null）
- instanceof 用于判断对象的具体类型

### 4. 如何判断数组？

- Array.isArray()
- instanceof Array
- Object.prototype.toString.call()

---

## 作用域和闭包

### 1. 什么是作用域？

作用域是指程序中变量、函数等可访问的范围。

### 2. JavaScript 中的作用域类型？

- 全局作用域
- 函数作用域
- 块级作用域（ES6 let/const）

### 3. 什么是闭包？

闭包是指有权访问另一个函数作用域中变量的函数。

### 4. 闭包的应用场景？

- 模块化开发
- 私有变量模拟
- 函数柯里化
- 防抖节流

### 5. 闭包的缺点？

- 内存泄漏风险
- 性能影响

---

## this 指向

### 1. this 的指向规则？

1. 默认绑定：独立函数调用，this 指向全局对象（严格模式下是 undefined）
2. 隐式绑定：对象方法调用，this 指向调用对象
3. 显式绑定：call/apply/bind，this 指向传入的对象
4. new 绑定：构造函数调用，this 指向新创建的对象

### 2. 箭头函数的 this？

箭头函数没有自己的 this，它的 this 继承自外层作用域。

### 3. 如何改变 this 指向？

- call()
- apply()
- bind()

---

## 原型和原型链

### 1. 什么是原型？

每个函数都有一个 prototype 属性，这个属性指向函数的原型对象。

### 2. 什么是原型链？

当试图访问一个对象的属性时，如果对象本身没有这个属性，就会沿着原型链向上查找。

### 3. 原型链的终点？

Object.prototype.__proto__ === null

### 4. instanceof 的原理？

判断构造函数的 prototype 属性是否出现在实例对象的原型链上。

### 5. 如何实现继承？

- 原型链继承
- 借用构造函数继承
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承
- ES6 Class 继承

---

## 异步编程

### 1. JavaScript 是单线程还是多线程？

JavaScript 是单线程的，但可以通过浏览器提供的 Web APIs 实现异步。

### 2. 事件循环（Event Loop）？

JavaScript 运行环境通过事件循环机制处理异步任务。

### 3. 宏任务和微任务？

宏任务：
- setTimeout
- setInterval
- I/O 操作

微任务：
- Promise.then
- MutationObserver
- queueMicrotask

执行顺序：同步代码 > 微任务 > 宏任务

### 4. Promise 是什么？

Promise 是异步编程的一种解决方案，比传统的回调函数更加合理和强大。

### 5. async/await 的作用？

async/await 是基于 Promise 的语法糖，让异步代码看起来像同步代码。

---

## ES6+ 特性

### 1. let、const 和 var 的区别？

| 特性 | var | let | const |
|------|-----|-----|-------|
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 是 | 否 | 否 |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 |

### 2. 箭头函数与普通函数的区别？

- 箭头函数没有自己的 this
- 箭头函数不能用作构造函数
- 箭头函数没有 arguments 对象
- 箭头函数不能用 yield 命令

### 3. 解构赋值？

从数组或对象中提取值，按照一定模式赋值给变量。

### 4. 模板字符串？

使用反引号 `` 包裹字符串，支持多行和变量插值。

### 5. Set 和 Map？

- Set：类似于数组，但成员的值都是唯一的
- Map：类似于对象，但键可以是任意类型

### 6. 模块化？

ES6 模块化通过 export 和 import 实现。

---

## DOM 操作

### 1. 获取元素的方法？

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()

### 2. DOM 节点操作？

- createElement()
- appendChild()
- removeChild()
- replaceChild()
- insertBefore()

### 3. 元素属性操作？

- getAttribute()
- setAttribute()
- removeAttribute()

---

## 事件处理

### 1. 事件流？

事件流包括三个阶段：
1. 事件捕获阶段
2. 目标阶段
3. 事件冒泡阶段

### 2. 事件委托？

利用事件冒泡机制，将子元素的事件处理委托给父元素。

### 3. 事件监听器？

- addEventListener()
- removeEventListener()

---

## Ajax 和 Fetch

### 1. Ajax 是什么？

Ajax（Asynchronous JavaScript and XML）是一种在不重新加载整个网页的情况下，能够更新部分网页的技术。

### 2. XMLHttpRequest 对象？

原生实现 Ajax 的核心对象。

### 3. Fetch API？

现代浏览器提供的更优雅的异步请求 API，基于 Promise。

### 4. Axios？

基于 Promise 的 HTTP 客户端，可以用在浏览器和 node.js 中。

---

## 模块化

### 1. 为什么要模块化？

- 避免命名冲突
- 便于依赖管理
- 提高代码可维护性
- 提高代码复用性

### 2. 模块化规范？

- CommonJS（Node.js）
- AMD（RequireJS）
- CMD（SeaJS）
- ES6 Module

### 3. CommonJS 和 ES6 Module 的区别？

- CommonJS 是运行时加载，ES6 Module 是编译时输出接口
- CommonJS 输出的是值的拷贝，ES6 Module 输出的是值的引用

---

## 性能优化

### 1. 减少 HTTP 请求？

- 合并文件
- 雪碧图
- 使用 Base64

### 2. 减少 DOM 操作？

- 批量操作 DOM
- 使用 DocumentFragment
- 缓存 DOM 查询结果

### 3. 防抖和节流？

- 防抖：事件触发后等待一段时间再执行，如果期间再次触发则重新计时
- 节流：保证一定时间内只执行一次

### 4. 懒加载？

延迟加载图片或其他资源，减少初始加载时间。

### 5. Web Workers？

在后台线程中运行脚本，避免阻塞用户界面。

---

## 常见算法题

### 1. 数组去重？

```javascript
// 使用 Set
function unique(arr) {
  return [...new Set(arr)];
}

// 使用 filter + indexOf
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

### 2. 深拷贝？

```javascript
// 递归实现
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  
  let cloneObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}
```

### 3. 数组扁平化？

```javascript
// 递归实现
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 使用 flat 方法
arr.flat(Infinity);
```

### 4. 手写 Promise？

```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    
    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
    if (this.state === 'pending') {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
```

### 5. 实现 instanceof？

```javascript
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
```