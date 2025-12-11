<template><div><h1 id="node-js-面试题目汇总" tabindex="-1"><a class="header-anchor" href="#node-js-面试题目汇总"><span>Node.js 面试题目汇总</span></a></h1>
<p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它使得 JavaScript 可以脱离浏览器运行。以下是常见的 Node.js 面试题目及答案。</p>
<h2 id="node-js-的应用场景" tabindex="-1"><a class="header-anchor" href="#node-js-的应用场景"><span>Node.js 的应用场景</span></a></h2>
<p>Node.js 凭借其高性能、高并发的特性，在多个领域得到了广泛应用：</p>
<h3 id="_1-web-服务器开发" tabindex="-1"><a class="header-anchor" href="#_1-web-服务器开发"><span>1. Web 服务器开发</span></a></h3>
<ul>
<li>构建高性能的 HTTP 服务器</li>
<li>RESTful API 服务开发</li>
<li>微服务架构后端服务</li>
</ul>
<h3 id="_2-实时应用" tabindex="-1"><a class="header-anchor" href="#_2-实时应用"><span>2. 实时应用</span></a></h3>
<ul>
<li>聊天应用和即时通讯服务</li>
<li>在线游戏服务器</li>
<li>实时协作工具</li>
<li>直播平台</li>
</ul>
<h3 id="_3-数据密集型应用" tabindex="-1"><a class="header-anchor" href="#_3-数据密集型应用"><span>3. 数据密集型应用</span></a></h3>
<ul>
<li>数据流处理应用</li>
<li>JSON API 服务器</li>
<li>单页应用（SPA）后端</li>
</ul>
<h3 id="_4-i-o-密集型应用" tabindex="-1"><a class="header-anchor" href="#_4-i-o-密集型应用"><span>4. I/O 密集型应用</span></a></h3>
<ul>
<li>文件上传服务</li>
<li>数据备份和同步工具</li>
<li>日志处理系统</li>
</ul>
<h3 id="_5-命令行工具" tabindex="-1"><a class="header-anchor" href="#_5-命令行工具"><span>5. 命令行工具</span></a></h3>
<ul>
<li>构建自动化工具</li>
<li>项目脚手架工具</li>
<li>代码质量检测工具</li>
<li>打包和构建工具</li>
</ul>
<h3 id="_6-代理服务器" tabindex="-1"><a class="header-anchor" href="#_6-代理服务器"><span>6. 代理服务器</span></a></h3>
<ul>
<li>反向代理</li>
<li>负载均衡</li>
<li>请求路由</li>
</ul>
<h3 id="_7-桌面应用" tabindex="-1"><a class="header-anchor" href="#_7-桌面应用"><span>7. 桌面应用</span></a></h3>
<ul>
<li>使用 Electron 构建跨平台桌面应用</li>
<li>如 Visual Studio Code、Slack、Discord 等知名应用</li>
</ul>
<h3 id="_8-移动端开发" tabindex="-1"><a class="header-anchor" href="#_8-移动端开发"><span>8. 移动端开发</span></a></h3>
<ul>
<li>使用 NativeScript、Cordova 等框架进行移动端开发</li>
</ul>
<h3 id="_9-物联网-iot" tabindex="-1"><a class="header-anchor" href="#_9-物联网-iot"><span>9. 物联网（IoT）</span></a></h3>
<ul>
<li>设备数据收集和处理</li>
<li>IoT 网关服务</li>
</ul>
<p>Node.js 特别适合处理大量并发连接和 I/O 密集型任务，但在 CPU 密集型任务方面表现相对较弱。选择是否使用 Node.js 应根据具体项目需求和特点来决定。</p>
<h2 id="_1-什么是-node-js" tabindex="-1"><a class="header-anchor" href="#_1-什么是-node-js"><span>1. 什么是 Node.js？</span></a></h2>
<p>Node.js 是一个开源、跨平台的 JavaScript 运行时环境，它允许开发者使用 JavaScript 编写服务器端应用程序。Node.js 使用事件驱动、非阻塞 I/O 模型，使其轻量且高效。</p>
<h3 id="关键特点" tabindex="-1"><a class="header-anchor" href="#关键特点"><span>关键特点：</span></a></h3>
<ul>
<li>单线程但事件驱动</li>
<li>非阻塞 I/O</li>
<li>跨平台支持</li>
<li>npm 生态系统</li>
</ul>
<h2 id="_2-node-js-的优势是什么" tabindex="-1"><a class="header-anchor" href="#_2-node-js-的优势是什么"><span>2. Node.js 的优势是什么？</span></a></h2>
<ol>
<li><strong>高性能</strong>：采用 V8 引擎，执行速度快</li>
<li><strong>高并发</strong>：事件驱动、非阻塞 I/O 模型支持大量并发连接</li>
<li><strong>前后端统一</strong>：使用同一种语言（JavaScript）进行全栈开发</li>
<li><strong>丰富的生态系统</strong>：npm 提供海量第三方包</li>
<li><strong>活跃的社区</strong>：持续更新和改进</li>
</ol>
<h2 id="_3-什么是事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#_3-什么是事件循环-event-loop"><span>3. 什么是事件循环（Event Loop）？</span></a></h2>
<p>事件循环是 Node.js 处理非阻塞 I/O 操作的机制。由于 Node.js 是单线程的，事件循环允许它通过将操作卸载到系统内核来支持多个操作几乎同时执行。</p>
<h3 id="事件循环的阶段" tabindex="-1"><a class="header-anchor" href="#事件循环的阶段"><span>事件循环的阶段：</span></a></h3>
<ol>
<li><strong>timers</strong>：执行 setTimeout() 和 setInterval() 回调</li>
<li><strong>pending callbacks</strong>：执行延迟到下一个循环迭代的 I/O 回调</li>
<li><strong>idle, prepare</strong>：仅系统内部使用</li>
<li><strong>poll</strong>：检索新的 I/O 事件；执行与 I/O 相关的回调（除了关闭回调、定时器调度的回调）</li>
<li><strong>check</strong>：执行 setImmediate() 回调</li>
<li><strong>close callbacks</strong>：执行一些关闭回调，如 socket.on('close', ...)</li>
</ol>
<h2 id="_4-node-js-是单线程还是多线程" tabindex="-1"><a class="header-anchor" href="#_4-node-js-是单线程还是多线程"><span>4. Node.js 是单线程还是多线程？</span></a></h2>
<p>Node.js 在主线程上是单线程的，但它通过 libuv 库使用线程池来处理某些异步操作，例如文件 I/O。这意味着虽然 JavaScript 代码在单个线程上运行，但底层系统可以使用多个线程来处理耗时任务。</p>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项：</span></a></h3>
<ul>
<li>CPU 密集型任务会阻塞事件循环</li>
<li>对于 CPU 密集型任务，可以使用 worker_threads 或 cluster 模块</li>
</ul>
<h2 id="_5-什么是中间件-middleware" tabindex="-1"><a class="header-anchor" href="#_5-什么是中间件-middleware"><span>5. 什么是中间件（Middleware）？</span></a></h2>
<p>中间件是在请求和响应循环过程中执行的函数。它可以访问请求对象(req)、响应对象(res)和应用程序请求-响应循环中的下一个中间件函数(next)。</p>
<h3 id="中间件的功能" tabindex="-1"><a class="header-anchor" href="#中间件的功能"><span>中间件的功能：</span></a></h3>
<ul>
<li>执行任何代码</li>
<li>修改请求和响应对象</li>
<li>结束请求-响应循环</li>
<li>调用堆栈中的下一个中间件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Express 中间件示例</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'请求时间:'</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-module-exports-和-exports-有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-module-exports-和-exports-有什么区别"><span>6. module.exports 和 exports 有什么区别？</span></a></h2>
<p>两者都是用于导出模块的方法，但存在关键差异：</p>
<h3 id="module-exports" tabindex="-1"><a class="header-anchor" href="#module-exports"><span>module.exports：</span></a></h3>
<ul>
<li>是一个真正的引用</li>
<li>可以直接赋值给任意值（对象、函数、字符串等）</li>
<li>是模块系统的实际接口</li>
</ul>
<h3 id="exports" tabindex="-1"><a class="header-anchor" href="#exports"><span>exports：</span></a></h3>
<ul>
<li>是 module.exports 的引用</li>
<li>只能添加属性，不能直接赋值</li>
<li>如果直接赋值会破坏与 module.exports 的连接</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 正确使用 exports</span></span>
<span class="line">exports<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 错误使用 exports（这样不会生效）</span></span>
<span class="line"><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 正确使用 module.exports</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-什么是错误优先回调-error-first-callback" tabindex="-1"><a class="header-anchor" href="#_7-什么是错误优先回调-error-first-callback"><span>7. 什么是错误优先回调（Error-First Callback）？</span></a></h2>
<p>错误优先回调是 Node.js 中处理异步操作错误的一种约定。在这种模式中，回调函数的第一个参数保留给错误对象，如果操作成功，则第一个参数为 null 或 undefined。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/path/to/file'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理错误</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 成功处理数据</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-如何避免回调地狱-callback-hell" tabindex="-1"><a class="header-anchor" href="#_8-如何避免回调地狱-callback-hell"><span>8. 如何避免回调地狱（Callback Hell）？</span></a></h2>
<p>回调地狱是指嵌套过多回调函数导致代码难以阅读和维护的问题。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案：</span></a></h3>
<ol>
<li><strong>使用 Promise</strong></li>
<li><strong>使用 async/await</strong></li>
<li><strong>模块化代码</strong></li>
<li><strong>使用工具函数</strong></li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 回调地狱示例</span></span>
<span class="line"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getMoreData</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getEvenMoreData</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">getEvenEvenMoreData</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 Promise 改进</span></span>
<span class="line"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getMoreData<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getEvenMoreData<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getEvenEvenMoreData<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>handleError<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 async/await 改进</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getMoreData</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getEvenMoreData</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getEvenEvenMoreData</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-什么是-repl" tabindex="-1"><a class="header-anchor" href="#_9-什么是-repl"><span>9. 什么是 REPL？</span></a></h2>
<p>REPL（Read-Eval-Print-Loop）是 Node.js 提供的一个交互式环境，类似于浏览器控制台。它读取用户输入，执行代码，打印结果，然后循环等待下一次输入。</p>
<p>启动 REPL：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>REPL 命令：</p>
<ul>
<li><code v-pre>.help</code> - 显示帮助信息</li>
<li><code v-pre>.break</code> - 退出多行表达式</li>
<li><code v-pre>.clear</code> - 退出多行表达式</li>
<li><code v-pre>.save</code> - 保存当前 REPL 会话到文件</li>
<li><code v-pre>.load</code> - 加载文件到 REPL 会话</li>
<li><code v-pre>.exit</code> - 退出 REPL</li>
</ul>
<h2 id="_10-什么是-npm-它有什么作用" tabindex="-1"><a class="header-anchor" href="#_10-什么是-npm-它有什么作用"><span>10. 什么是 npm？它有什么作用？</span></a></h2>
<p>npm（Node Package Manager）是 Node.js 的默认包管理器。</p>
<h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能：</span></a></h3>
<ul>
<li>安装和管理第三方包</li>
<li>发布自己的包</li>
<li>管理项目依赖关系</li>
<li>运行脚本命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装包</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> express</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 全局安装包</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nodemon</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装开发依赖</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev jest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看已安装的包</span></span>
<span class="line"><span class="token function">npm</span> list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-package-json-文件的作用是什么" tabindex="-1"><a class="header-anchor" href="#_11-package-json-文件的作用是什么"><span>11. package.json 文件的作用是什么？</span></a></h2>
<p>package.json 是项目的配置文件，包含了项目的元数据和依赖信息。</p>
<h3 id="主要字段" tabindex="-1"><a class="header-anchor" href="#主要字段"><span>主要字段：</span></a></h3>
<ul>
<li><code v-pre>name</code> - 项目名称</li>
<li><code v-pre>version</code> - 项目版本</li>
<li><code v-pre>description</code> - 项目描述</li>
<li><code v-pre>main</code> - 入口文件</li>
<li><code v-pre>scripts</code> - 可执行脚本</li>
<li><code v-pre>dependencies</code> - 生产环境依赖</li>
<li><code v-pre>devDependencies</code> - 开发环境依赖</li>
<li><code v-pre>keywords</code> - 关键词</li>
<li><code v-pre>author</code> - 作者信息</li>
<li><code v-pre>license</code> - 许可证</li>
</ul>
<h2 id="_12-buffer-是什么" tabindex="-1"><a class="header-anchor" href="#_12-buffer-是什么"><span>12. Buffer 是什么？</span></a></h2>
<p>Buffer 是 Node.js 中用于处理二进制数据的类。它主要用于处理 TCP 流、文件系统操作和其他需要处理字节流的上下文中。</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h3>
<ul>
<li>类似于整数数组</li>
<li>对应于 V8 堆外的原始内存分配</li>
<li>大小在创建时确定且不可更改</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 创建 Buffer</span></span>
<span class="line"><span class="token keyword">const</span> buf1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建长度为10的零填充Buffer</span></span>
<span class="line"><span class="token keyword">const</span> buf2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从字符串创建Buffer</span></span>
<span class="line"><span class="token keyword">const</span> buf3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从数组创建Buffer</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Buffer 操作</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为字符串</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取长度</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-什么是-stream" tabindex="-1"><a class="header-anchor" href="#_13-什么是-stream"><span>13. 什么是 Stream？</span></a></h2>
<p>Stream 是 Node.js 中处理流数据的抽象接口。流可以是可读的、可写的，或者两者兼具。</p>
<h3 id="流的类型" tabindex="-1"><a class="header-anchor" href="#流的类型"><span>流的类型：</span></a></h3>
<ol>
<li><strong>Readable</strong> - 可读流（如 fs.createReadStream()）</li>
<li><strong>Writable</strong> - 可写流（如 fs.createWriteStream()）</li>
<li><strong>Duplex</strong> - 可读可写流（如 net.Socket）</li>
<li><strong>Transform</strong> - 在读写过程中可以修改或转换数据的 Duplex 流（如 zlib.createGzip()）</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 可读流示例</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> readableStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">readableStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">接收到 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chunk<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 字节的数据</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">readableStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'读取完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可写流示例</span></span>
<span class="line"><span class="token keyword">const</span> writableStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">'output.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">writableStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">writableStream<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-eventemitter-是什么" tabindex="-1"><a class="header-anchor" href="#_14-eventemitter-是什么"><span>14. EventEmitter 是什么？</span></a></h2>
<p>EventEmitter 是 Node.js 中处理事件的核心模块。许多 Node.js 核心 API 都继承自 EventEmitter 类。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'events'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MyEmitter</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册事件监听器</span></span>
<span class="line">myEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'事件被触发！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 触发事件</span></span>
<span class="line">myEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-什么是-cluster-模块" tabindex="-1"><a class="header-anchor" href="#_15-什么是-cluster-模块"><span>15. 什么是 Cluster 模块？</span></a></h2>
<p>Cluster 模块允许轻松创建共享同一端口的子进程，从而充分利用多核系统的能力。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cluster'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> numCPUs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Fork 工作进程</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCPUs<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'exit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">工作进程 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>worker<span class="token punctuation">.</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 已退出</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 工作进程可以共享任何 TCP 连接</span></span>
<span class="line">  http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Hello World\n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-如何处理未捕获的异常" tabindex="-1"><a class="header-anchor" href="#_16-如何处理未捕获的异常"><span>16. 如何处理未捕获的异常？</span></a></h2>
<p>Node.js 应用程序可能因未捕获的异常而崩溃。可以通过以下方式处理：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 捕获未处理的异常</span></span>
<span class="line">process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'uncaughtException'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'未捕获的异常:'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 优雅退出</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 捕获未处理的 Promise 拒绝</span></span>
<span class="line">process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'unhandledRejection'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">reason<span class="token punctuation">,</span> promise</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'未处理的 Promise 拒绝:'</span><span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-node-js-有哪些常用的内置模块" tabindex="-1"><a class="header-anchor" href="#_17-node-js-有哪些常用的内置模块"><span>17. Node.js 有哪些常用的内置模块？</span></a></h2>
<ol>
<li><strong>fs</strong> - 文件系统操作</li>
<li><strong>http/https</strong> - HTTP/HTTPS 服务器和客户端</li>
<li><strong>path</strong> - 路径处理</li>
<li><strong>url</strong> - URL 解析</li>
<li><strong>util</strong> - 实用工具函数</li>
<li><strong>os</strong> - 操作系统信息</li>
<li><strong>events</strong> - 事件处理</li>
<li><strong>stream</strong> - 流处理</li>
<li><strong>buffer</strong> - 二进制数据处理</li>
<li><strong>crypto</strong> - 加密功能</li>
<li><strong>zlib</strong> - 压缩功能</li>
<li><strong>dns</strong> - DNS 查询</li>
</ol>
<h2 id="_18-如何调试-node-js-应用程序" tabindex="-1"><a class="header-anchor" href="#_18-如何调试-node-js-应用程序"><span>18. 如何调试 Node.js 应用程序？</span></a></h2>
<h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法：</span></a></h3>
<ol>
<li><strong>使用内置调试器</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> inspect app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li><strong>使用 Chrome DevTools</strong></li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> <span class="token parameter variable">--inspect</span> app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li><strong>使用 console.log</strong></li>
<li><strong>使用第三方调试工具如 ndb</strong></li>
</ol>
<h2 id="_19-express-和-koa-有什么区别" tabindex="-1"><a class="header-anchor" href="#_19-express-和-koa-有什么区别"><span>19. Express 和 Koa 有什么区别？</span></a></h2>
<h3 id="express" tabindex="-1"><a class="header-anchor" href="#express"><span>Express：</span></a></h3>
<ul>
<li>更成熟稳定，生态丰富</li>
<li>使用回调函数处理异步操作</li>
<li>中间件线性执行</li>
</ul>
<h3 id="koa" tabindex="-1"><a class="header-anchor" href="#koa"><span>Koa：</span></a></h3>
<ul>
<li>更现代化，使用 async/await</li>
<li>更轻量，核心精简</li>
<li>中间件通过组合方式执行，有更好的错误处理</li>
</ul>
<h2 id="_20-什么是-jwt-json-web-token" tabindex="-1"><a class="header-anchor" href="#_20-什么是-jwt-json-web-token"><span>20. 什么是 JWT（JSON Web Token）？</span></a></h2>
<p>JWT 是一种开放标准（RFC 7519），用于在各方之间安全地传输信息作为 JSON 对象。</p>
<h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构：</span></a></h3>
<ol>
<li><strong>Header</strong> - 头部</li>
<li><strong>Payload</strong> - 载荷</li>
<li><strong>Signature</strong> - 签名</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jsonwebtoken'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 生成 token</span></span>
<span class="line"><span class="token keyword">const</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'secretKey'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token string">'1h'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 验证 token</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> decoded <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> <span class="token string">'secretKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>decoded<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Token 无效'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


