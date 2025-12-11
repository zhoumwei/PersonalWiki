# Node.js 面试题目汇总

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它使得 JavaScript 可以脱离浏览器运行。以下是常见的 Node.js 面试题目及答案。

## Node.js 的应用场景

Node.js 凭借其高性能、高并发的特性，在多个领域得到了广泛应用：

### 1. Web 服务器开发
- 构建高性能的 HTTP 服务器
- RESTful API 服务开发
- 微服务架构后端服务

### 2. 实时应用
- 聊天应用和即时通讯服务
- 在线游戏服务器
- 实时协作工具
- 直播平台

### 3. 数据密集型应用
- 数据流处理应用
- JSON API 服务器
- 单页应用（SPA）后端

### 4. I/O 密集型应用
- 文件上传服务
- 数据备份和同步工具
- 日志处理系统

### 5. 命令行工具
- 构建自动化工具
- 项目脚手架工具
- 代码质量检测工具
- 打包和构建工具

### 6. 代理服务器
- 反向代理
- 负载均衡
- 请求路由

### 7. 桌面应用
- 使用 Electron 构建跨平台桌面应用
- 如 Visual Studio Code、Slack、Discord 等知名应用

### 8. 移动端开发
- 使用 NativeScript、Cordova 等框架进行移动端开发

### 9. 物联网（IoT）
- 设备数据收集和处理
- IoT 网关服务

Node.js 特别适合处理大量并发连接和 I/O 密集型任务，但在 CPU 密集型任务方面表现相对较弱。选择是否使用 Node.js 应根据具体项目需求和特点来决定。

## 1. 什么是 Node.js？

Node.js 是一个开源、跨平台的 JavaScript 运行时环境，它允许开发者使用 JavaScript 编写服务器端应用程序。Node.js 使用事件驱动、非阻塞 I/O 模型，使其轻量且高效。

### 关键特点：
- 单线程但事件驱动
- 非阻塞 I/O
- 跨平台支持
- npm 生态系统

## 2. Node.js 的优势是什么？

1. **高性能**：采用 V8 引擎，执行速度快
2. **高并发**：事件驱动、非阻塞 I/O 模型支持大量并发连接
3. **前后端统一**：使用同一种语言（JavaScript）进行全栈开发
4. **丰富的生态系统**：npm 提供海量第三方包
5. **活跃的社区**：持续更新和改进

## 3. 什么是事件循环（Event Loop）？

事件循环是 Node.js 处理非阻塞 I/O 操作的机制。由于 Node.js 是单线程的，事件循环允许它通过将操作卸载到系统内核来支持多个操作几乎同时执行。

### 事件循环的阶段：
1. **timers**：执行 setTimeout() 和 setInterval() 回调
2. **pending callbacks**：执行延迟到下一个循环迭代的 I/O 回调
3. **idle, prepare**：仅系统内部使用
4. **poll**：检索新的 I/O 事件；执行与 I/O 相关的回调（除了关闭回调、定时器调度的回调）
5. **check**：执行 setImmediate() 回调
6. **close callbacks**：执行一些关闭回调，如 socket.on('close', ...)

## 4. Node.js 是单线程还是多线程？

Node.js 在主线程上是单线程的，但它通过 libuv 库使用线程池来处理某些异步操作，例如文件 I/O。这意味着虽然 JavaScript 代码在单个线程上运行，但底层系统可以使用多个线程来处理耗时任务。

### 注意事项：
- CPU 密集型任务会阻塞事件循环
- 对于 CPU 密集型任务，可以使用 worker_threads 或 cluster 模块

## 5. 什么是中间件（Middleware）？

中间件是在请求和响应循环过程中执行的函数。它可以访问请求对象(req)、响应对象(res)和应用程序请求-响应循环中的下一个中间件函数(next)。

### 中间件的功能：
- 执行任何代码
- 修改请求和响应对象
- 结束请求-响应循环
- 调用堆栈中的下一个中间件

```javascript
// Express 中间件示例
app.use((req, res, next) => {
  console.log('请求时间:', Date.now());
  next();
});
```

## 6. module.exports 和 exports 有什么区别？

两者都是用于导出模块的方法，但存在关键差异：

### module.exports：
- 是一个真正的引用
- 可以直接赋值给任意值（对象、函数、字符串等）
- 是模块系统的实际接口

### exports：
- 是 module.exports 的引用
- 只能添加属性，不能直接赋值
- 如果直接赋值会破坏与 module.exports 的连接

```javascript
// 正确使用 exports
exports.add = (a, b) => a + b;

// 错误使用 exports（这样不会生效）
exports = (a, b) => a + b;

// 正确使用 module.exports
module.exports = (a, b) => a + b;
```

## 7. 什么是错误优先回调（Error-First Callback）？

错误优先回调是 Node.js 中处理异步操作错误的一种约定。在这种模式中，回调函数的第一个参数保留给错误对象，如果操作成功，则第一个参数为 null 或 undefined。

```javascript
fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    // 处理错误
    console.error(err);
    return;
  }
  // 成功处理数据
  console.log(data);
});
```

## 8. 如何避免回调地狱（Callback Hell）？

回调地狱是指嵌套过多回调函数导致代码难以阅读和维护的问题。

### 解决方案：
1. **使用 Promise**
2. **使用 async/await**
3. **模块化代码**
4. **使用工具函数**

```javascript
// 回调地狱示例
getData((a) => {
  getMoreData(a, (b) => {
    getEvenMoreData(b, (c) => {
      getEvenEvenMoreData(c, (d) => {
        // ...
      });
    });
  });
});

// 使用 Promise 改进
getData()
  .then(getMoreData)
  .then(getEvenMoreData)
  .then(getEvenEvenMoreData)
  .catch(handleError);

// 使用 async/await 改进
async function processData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    const d = await getEvenEvenMoreData(c);
    // ...
  } catch (error) {
    handleError(error);
  }
}
```

## 9. 什么是 REPL？

REPL（Read-Eval-Print-Loop）是 Node.js 提供的一个交互式环境，类似于浏览器控制台。它读取用户输入，执行代码，打印结果，然后循环等待下一次输入。

启动 REPL：
```bash
node
```

REPL 命令：
- `.help` - 显示帮助信息
- `.break` - 退出多行表达式
- `.clear` - 退出多行表达式
- `.save` - 保存当前 REPL 会话到文件
- `.load` - 加载文件到 REPL 会话
- `.exit` - 退出 REPL

## 10. 什么是 npm？它有什么作用？

npm（Node Package Manager）是 Node.js 的默认包管理器。

### 主要功能：
- 安装和管理第三方包
- 发布自己的包
- 管理项目依赖关系
- 运行脚本命令

```bash
# 安装包
npm install express

# 全局安装包
npm install -g nodemon

# 安装开发依赖
npm install --save-dev jest

# 查看已安装的包
npm list
```

## 11. package.json 文件的作用是什么？

package.json 是项目的配置文件，包含了项目的元数据和依赖信息。

### 主要字段：
- `name` - 项目名称
- `version` - 项目版本
- `description` - 项目描述
- `main` - 入口文件
- `scripts` - 可执行脚本
- `dependencies` - 生产环境依赖
- `devDependencies` - 开发环境依赖
- `keywords` - 关键词
- `author` - 作者信息
- `license` - 许可证

## 12. Buffer 是什么？

Buffer 是 Node.js 中用于处理二进制数据的类。它主要用于处理 TCP 流、文件系统操作和其他需要处理字节流的上下文中。

### 特点：
- 类似于整数数组
- 对应于 V8 堆外的原始内存分配
- 大小在创建时确定且不可更改

```javascript
// 创建 Buffer
const buf1 = Buffer.alloc(10); // 创建长度为10的零填充Buffer
const buf2 = Buffer.from('hello'); // 从字符串创建Buffer
const buf3 = Buffer.from([1, 2, 3]); // 从数组创建Buffer

// Buffer 操作
console.log(buf2.toString()); // 转换为字符串
console.log(buf2.length); // 获取长度
```

## 13. 什么是 Stream？

Stream 是 Node.js 中处理流数据的抽象接口。流可以是可读的、可写的，或者两者兼具。

### 流的类型：
1. **Readable** - 可读流（如 fs.createReadStream()）
2. **Writable** - 可写流（如 fs.createWriteStream()）
3. **Duplex** - 可读可写流（如 net.Socket）
4. **Transform** - 在读写过程中可以修改或转换数据的 Duplex 流（如 zlib.createGzip()）

```javascript
// 可读流示例
const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
  console.log(`接收到 ${chunk.length} 字节的数据`);
});

readableStream.on('end', () => {
  console.log('读取完成');
});

// 可写流示例
const writableStream = fs.createWriteStream('output.txt');
writableStream.write('Hello World!');
writableStream.end();
```

## 14. EventEmitter 是什么？

EventEmitter 是 Node.js 中处理事件的核心模块。许多 Node.js 核心 API 都继承自 EventEmitter 类。

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// 注册事件监听器
myEmitter.on('event', () => {
  console.log('事件被触发！');
});

// 触发事件
myEmitter.emit('event');
```

## 15. 什么是 Cluster 模块？

Cluster 模块允许轻松创建共享同一端口的子进程，从而充分利用多核系统的能力。

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork 工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);
}
```

## 16. 如何处理未捕获的异常？

Node.js 应用程序可能因未捕获的异常而崩溃。可以通过以下方式处理：

```javascript
// 捕获未处理的异常
process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err);
  process.exit(1); // 优雅退出
});

// 捕获未处理的 Promise 拒绝
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的 Promise 拒绝:', reason);
  process.exit(1);
});
```

## 17. Node.js 有哪些常用的内置模块？

1. **fs** - 文件系统操作
2. **http/https** - HTTP/HTTPS 服务器和客户端
3. **path** - 路径处理
4. **url** - URL 解析
5. **util** - 实用工具函数
6. **os** - 操作系统信息
7. **events** - 事件处理
8. **stream** - 流处理
9. **buffer** - 二进制数据处理
10. **crypto** - 加密功能
11. **zlib** - 压缩功能
12. **dns** - DNS 查询

## 18. 如何调试 Node.js 应用程序？

### 方法：
1. **使用内置调试器**
```bash
node inspect app.js
```

2. **使用 Chrome DevTools**
```bash
node --inspect app.js
```

3. **使用 console.log**
4. **使用第三方调试工具如 ndb**

## 19. Express 和 Koa 有什么区别？

### Express：
- 更成熟稳定，生态丰富
- 使用回调函数处理异步操作
- 中间件线性执行

### Koa：
- 更现代化，使用 async/await
- 更轻量，核心精简
- 中间件通过组合方式执行，有更好的错误处理

## 20. 什么是 JWT（JSON Web Token）？

JWT 是一种开放标准（RFC 7519），用于在各方之间安全地传输信息作为 JSON 对象。

### 结构：
1. **Header** - 头部
2. **Payload** - 载荷
3. **Signature** - 签名

```javascript
const jwt = require('jsonwebtoken');

// 生成 token
const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });

// 验证 token
try {
  const decoded = jwt.verify(token, 'secretKey');
  console.log(decoded);
} catch (err) {
  console.log('Token 无效');
}
```