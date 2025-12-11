<template><div><h1 id="html-面试题" tabindex="-1"><a class="header-anchor" href="#html-面试题"><span>HTML 面试题</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5">基础概念</a></li>
<li><a href="#%E8%AF%AD%E4%B9%89%E5%8C%96%E6%A0%87%E7%AD%BE">语义化标签</a></li>
<li><a href="#html5-%E6%96%B0%E7%89%B9%E6%80%A7">HTML5 新特性</a></li>
<li><a href="#%E8%A1%A8%E5%8D%95">表单</a></li>
<li><a href="#%E5%A4%9A%E5%AA%92%E4%BD%93%E6%A0%87%E7%AD%BE">多媒体标签</a></li>
<li><a href="#web-storage">Web Storage</a></li>
<li><a href="#canvas-%E5%92%8C-svg">Canvas 和 SVG</a></li>
<li><a href="#seo-%E4%BC%98%E5%8C%96">SEO 优化</a></li>
<li><a href="#%E5%AE%89%E5%85%A8%E6%80%A7">安全性</a></li>
</ul>
<hr>
<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念"><span>基础概念</span></a></h2>
<h3 id="_1-什么是-html" tabindex="-1"><a class="header-anchor" href="#_1-什么是-html"><span>1. 什么是 HTML？</span></a></h3>
<p>HTML（HyperText Markup Language）超文本标记语言，是构成 Web 世界的基础，用于创建网页结构。</p>
<h3 id="_2-html、xml、xhtml-的区别" tabindex="-1"><a class="header-anchor" href="#_2-html、xml、xhtml-的区别"><span>2. HTML、XML、XHTML 的区别？</span></a></h3>
<ul>
<li>HTML：超文本标记语言，语法较宽松</li>
<li>XML：可扩展标记语言，语法严格</li>
<li>XHTML：可扩展超文本标记语言，是 HTML 和 XML 的结合，语法严格</li>
</ul>
<h3 id="_3-doctype-的作用" tabindex="-1"><a class="header-anchor" href="#_3-doctype-的作用"><span>3. DOCTYPE 的作用？</span></a></h3>
<p>DOCTYPE 声明位于文档最前面，告诉浏览器以什么标准解析文档。</p>
<h3 id="_4-html-语义化的理解" tabindex="-1"><a class="header-anchor" href="#_4-html-语义化的理解"><span>4. HTML 语义化的理解？</span></a></h3>
<p>语义化 HTML 是指根据内容的结构化程度选择合适的标签，使开发者和机器都能更好地理解内容。</p>
<p>好处：</p>
<ul>
<li>提升可访问性</li>
<li>SEO 友好</li>
<li>便于维护</li>
</ul>
<hr>
<h2 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签"><span>语义化标签</span></a></h2>
<h3 id="_1-常见的语义化标签" tabindex="-1"><a class="header-anchor" href="#_1-常见的语义化标签"><span>1. 常见的语义化标签？</span></a></h3>
<ul>
<li>header：页面或章节的头部</li>
<li>nav：导航链接</li>
<li>main：主要内容</li>
<li>article：文章内容</li>
<li>section：章节</li>
<li>aside：侧边栏</li>
<li>footer：页面或章节的底部</li>
<li>figure/figcaption：媒体内容及其标题</li>
</ul>
<h3 id="_2-div-和-span-的区别" tabindex="-1"><a class="header-anchor" href="#_2-div-和-span-的区别"><span>2. div 和 span 的区别？</span></a></h3>
<ul>
<li>div：块级元素，常用于布局</li>
<li>span：内联元素，常用于文本标记</li>
</ul>
<h3 id="_3-meta-标签的作用" tabindex="-1"><a class="header-anchor" href="#_3-meta-标签的作用"><span>3. meta 标签的作用？</span></a></h3>
<p>meta 标签用于提供页面的元数据，如字符编码、关键字、描述等。</p>
<p>常见属性：</p>
<ul>
<li>charset：字符编码</li>
<li>name/content：页面描述、关键字等</li>
<li>http-equiv：模拟 HTTP 头部字段</li>
</ul>
<hr>
<h2 id="html5-新特性" tabindex="-1"><a class="header-anchor" href="#html5-新特性"><span>HTML5 新特性</span></a></h2>
<h3 id="_1-html5-的新特性" tabindex="-1"><a class="header-anchor" href="#_1-html5-的新特性"><span>1. HTML5 的新特性？</span></a></h3>
<ul>
<li>语义化标签</li>
<li>增强型表单</li>
<li>新的图形标签（canvas、svg）</li>
<li>多媒体标签（audio、video）</li>
<li>地理定位</li>
<li>拖放 API</li>
<li>Web Storage</li>
<li>Web Workers</li>
<li>WebSocket</li>
</ul>
<h3 id="_2-html5-废弃的标签" tabindex="-1"><a class="header-anchor" href="#_2-html5-废弃的标签"><span>2. HTML5 废弃的标签？</span></a></h3>
<ul>
<li>frame、frameset、noframes</li>
<li>font、center、big</li>
<li>strike、tt</li>
<li>applet</li>
</ul>
<h3 id="_3-html5-新增的表单元素" tabindex="-1"><a class="header-anchor" href="#_3-html5-新增的表单元素"><span>3. HTML5 新增的表单元素？</span></a></h3>
<ul>
<li>email、url、number、range、date 等 input 类型</li>
<li>datalist：输入建议列表</li>
<li>keygen：密钥生成器</li>
<li>output：计算结果输出</li>
</ul>
<h3 id="_4-html5-新增的表单属性" tabindex="-1"><a class="header-anchor" href="#_4-html5-新增的表单属性"><span>4. HTML5 新增的表单属性？</span></a></h3>
<ul>
<li>placeholder：占位符</li>
<li>required：必填项</li>
<li>autofocus：自动聚焦</li>
<li>autocomplete：自动完成</li>
<li>min/max：数值范围限制</li>
<li>pattern：正则表达式验证</li>
</ul>
<hr>
<h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单"><span>表单</span></a></h2>
<h3 id="_1-form-标签的重要属性" tabindex="-1"><a class="header-anchor" href="#_1-form-标签的重要属性"><span>1. form 标签的重要属性？</span></a></h3>
<ul>
<li>action：提交地址</li>
<li>method：提交方法（GET/POST）</li>
<li>enctype：编码类型</li>
<li>target：打开方式</li>
</ul>
<h3 id="_2-get-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#_2-get-和-post-的区别"><span>2. GET 和 POST 的区别？</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>GET</th>
<th>POST</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据位置</td>
<td>URL 中</td>
<td>请求体中</td>
</tr>
<tr>
<td>数据长度</td>
<td>有限制</td>
<td>无限制</td>
</tr>
<tr>
<td>安全性</td>
<td>较低</td>
<td>较高</td>
</tr>
<tr>
<td>缓存</td>
<td>可缓存</td>
<td>不缓存</td>
</tr>
<tr>
<td>书签</td>
<td>可收藏</td>
<td>不可收藏</td>
</tr>
</tbody>
</table>
<h3 id="_3-label-标签的作用" tabindex="-1"><a class="header-anchor" href="#_3-label-标签的作用"><span>3. label 标签的作用？</span></a></h3>
<p>label 标签为表单元素定义标注，点击 label 可以聚焦到对应的表单控件。</p>
<p>关联方式：</p>
<ul>
<li>使用 for 属性对应 input 的 id</li>
<li>将 input 放在 label 内部</li>
</ul>
<hr>
<h2 id="多媒体标签" tabindex="-1"><a class="header-anchor" href="#多媒体标签"><span>多媒体标签</span></a></h2>
<h3 id="_1-audio-标签" tabindex="-1"><a class="header-anchor" href="#_1-audio-标签"><span>1. audio 标签？</span></a></h3>
<p>用于播放音频文件。</p>
<p>重要属性：</p>
<ul>
<li>src：音频源</li>
<li>controls：显示控制面板</li>
<li>autoplay：自动播放</li>
<li>loop：循环播放</li>
<li>preload：预加载策略</li>
</ul>
<h3 id="_2-video-标签" tabindex="-1"><a class="header-anchor" href="#_2-video-标签"><span>2. video 标签？</span></a></h3>
<p>用于播放视频文件。</p>
<p>重要属性：</p>
<ul>
<li>src：视频源</li>
<li>controls：显示控制面板</li>
<li>autoplay：自动播放</li>
<li>loop：循环播放</li>
<li>preload：预加载策略</li>
<li>poster：封面图</li>
<li>width/height：宽高</li>
</ul>
<h3 id="_3-source-标签" tabindex="-1"><a class="header-anchor" href="#_3-source-标签"><span>3. source 标签？</span></a></h3>
<p>为 audio 或 video 元素指定多个媒体资源，实现兼容性。</p>
<hr>
<h2 id="web-storage" tabindex="-1"><a class="header-anchor" href="#web-storage"><span>Web Storage</span></a></h2>
<h3 id="_1-cookie、localstorage、sessionstorage-的区别" tabindex="-1"><a class="header-anchor" href="#_1-cookie、localstorage、sessionstorage-的区别"><span>1. Cookie、LocalStorage、SessionStorage 的区别？</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>Cookie</th>
<th>LocalStorage</th>
<th>SessionStorage</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储大小</td>
<td>4KB</td>
<td>5MB~10MB</td>
<td>5MB~10MB</td>
</tr>
<tr>
<td>生命周期</td>
<td>设置过期时间</td>
<td>永久存储</td>
<td>会话结束清除</td>
</tr>
<tr>
<td>与服务端通信</td>
<td>每次请求携带</td>
<td>不参与</td>
<td>不参与</td>
</tr>
<tr>
<td>作用域</td>
<td>同源</td>
<td>同源</td>
<td>同源同窗口</td>
</tr>
</tbody>
</table>
<h3 id="_2-使用场景" tabindex="-1"><a class="header-anchor" href="#_2-使用场景"><span>2. 使用场景？</span></a></h3>
<ul>
<li>Cookie：身份认证、用户偏好设置</li>
<li>LocalStorage：长期存储用户数据</li>
<li>SessionStorage：临时存储表单数据</li>
</ul>
<h3 id="_3-api-方法" tabindex="-1"><a class="header-anchor" href="#_3-api-方法"><span>3. API 方法？</span></a></h3>
<ul>
<li>setItem(key, value)：存储数据</li>
<li>getItem(key)：获取数据</li>
<li>removeItem(key)：删除数据</li>
<li>clear()：清空所有数据</li>
<li>key(index)：根据索引获取键名</li>
</ul>
<hr>
<h2 id="canvas-和-svg" tabindex="-1"><a class="header-anchor" href="#canvas-和-svg"><span>Canvas 和 SVG</span></a></h2>
<h3 id="_1-canvas-和-svg-的区别" tabindex="-1"><a class="header-anchor" href="#_1-canvas-和-svg-的区别"><span>1. Canvas 和 SVG 的区别？</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>Canvas</th>
<th>SVG</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>位图</td>
<td>矢量图</td>
</tr>
<tr>
<td>修改</td>
<td>需要重绘</td>
<td>直接修改元素</td>
</tr>
<tr>
<td>事件处理</td>
<td>无内置事件</td>
<td>支持事件处理</td>
</tr>
<tr>
<td>复杂度</td>
<td>适合游戏、图像处理</td>
<td>适合图表、地图</td>
</tr>
<tr>
<td>缩放</td>
<td>会失真</td>
<td>无损缩放</td>
</tr>
</tbody>
</table>
<h3 id="_2-canvas-的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-canvas-的基本使用"><span>2. Canvas 的基本使用？</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 绘制矩形</span></span>
<span class="line">ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#FF0000'</span><span class="token punctuation">;</span></span>
<span class="line">ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-svg-的基本使用" tabindex="-1"><a class="header-anchor" href="#_3-svg-的基本使用"><span>3. SVG 的基本使用？</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="seo-优化" tabindex="-1"><a class="header-anchor" href="#seo-优化"><span>SEO 优化</span></a></h2>
<h3 id="_1-有利于-seo-的-html-实践" tabindex="-1"><a class="header-anchor" href="#_1-有利于-seo-的-html-实践"><span>1. 有利于 SEO 的 HTML 实践？</span></a></h3>
<ul>
<li>使用语义化标签</li>
<li>合理的标题层级（h1-h6）</li>
<li>alt 属性描述图片内容</li>
<li>meta description 和 keywords</li>
<li>结构化数据标记</li>
</ul>
<h3 id="_2-robots-txt-的作用" tabindex="-1"><a class="header-anchor" href="#_2-robots-txt-的作用"><span>2. robots.txt 的作用？</span></a></h3>
<p>控制搜索引擎爬虫的访问权限。</p>
<h3 id="_3-sitemap-xml-的作用" tabindex="-1"><a class="header-anchor" href="#_3-sitemap-xml-的作用"><span>3. sitemap.xml 的作用？</span></a></h3>
<p>网站地图，帮助搜索引擎更好地抓取网站内容。</p>
<hr>
<h2 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性"><span>安全性</span></a></h2>
<h3 id="_1-xss-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#_1-xss-跨站脚本攻击"><span>1. XSS（跨站脚本攻击）？</span></a></h3>
<p>攻击者在网页中插入恶意脚本代码，当用户浏览网页时执行这些代码。</p>
<p>防范措施：</p>
<ul>
<li>输入过滤和转义</li>
<li>CSP（内容安全策略）</li>
<li>使用 innerText 替代 innerHTML</li>
</ul>
<h3 id="_2-csrf-跨站请求伪造" tabindex="-1"><a class="header-anchor" href="#_2-csrf-跨站请求伪造"><span>2. CSRF（跨站请求伪造）？</span></a></h3>
<p>攻击者诱导用户访问恶意网站，利用用户已登录的身份向目标网站发送恶意请求。</p>
<p>防范措施：</p>
<ul>
<li>验证 Referer</li>
<li>使用 CSRF Token</li>
<li>SameSite Cookie 属性</li>
</ul>
<h3 id="_3-点击劫持" tabindex="-1"><a class="header-anchor" href="#_3-点击劫持"><span>3. 点击劫持？</span></a></h3>
<p>通过透明 iframe 覆盖网页，诱使用户点击看不见的按钮。</p>
<p>防范措施：</p>
<ul>
<li>X-Frame-Options 响应头</li>
<li>CSP 的 frame-ancestors 指令</li>
</ul>
</div></template>


