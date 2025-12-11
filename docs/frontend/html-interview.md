# HTML 面试题

## 目录
- [基础概念](#基础概念)
- [语义化标签](#语义化标签)
- [HTML5 新特性](#html5-新特性)
- [表单](#表单)
- [多媒体标签](#多媒体标签)
- [Web Storage](#web-storage)
- [Canvas 和 SVG](#canvas-和-svg)
- [SEO 优化](#seo-优化)
- [安全性](#安全性)

---

## 基础概念

### 1. 什么是 HTML？

HTML（HyperText Markup Language）超文本标记语言，是构成 Web 世界的基础，用于创建网页结构。

### 2. HTML、XML、XHTML 的区别？

- HTML：超文本标记语言，语法较宽松
- XML：可扩展标记语言，语法严格
- XHTML：可扩展超文本标记语言，是 HTML 和 XML 的结合，语法严格

### 3. DOCTYPE 的作用？

DOCTYPE 声明位于文档最前面，告诉浏览器以什么标准解析文档。

### 4. HTML 语义化的理解？

语义化 HTML 是指根据内容的结构化程度选择合适的标签，使开发者和机器都能更好地理解内容。

好处：
- 提升可访问性
- SEO 友好
- 便于维护

---

## 语义化标签

### 1. 常见的语义化标签？

- header：页面或章节的头部
- nav：导航链接
- main：主要内容
- article：文章内容
- section：章节
- aside：侧边栏
- footer：页面或章节的底部
- figure/figcaption：媒体内容及其标题

### 2. div 和 span 的区别？

- div：块级元素，常用于布局
- span：内联元素，常用于文本标记

### 3. meta 标签的作用？

meta 标签用于提供页面的元数据，如字符编码、关键字、描述等。

常见属性：
- charset：字符编码
- name/content：页面描述、关键字等
- http-equiv：模拟 HTTP 头部字段

---

## HTML5 新特性

### 1. HTML5 的新特性？

- 语义化标签
- 增强型表单
- 新的图形标签（canvas、svg）
- 多媒体标签（audio、video）
- 地理定位
- 拖放 API
- Web Storage
- Web Workers
- WebSocket

### 2. HTML5 废弃的标签？

- frame、frameset、noframes
- font、center、big
- strike、tt
- applet

### 3. HTML5 新增的表单元素？

- email、url、number、range、date 等 input 类型
- datalist：输入建议列表
- keygen：密钥生成器
- output：计算结果输出

### 4. HTML5 新增的表单属性？

- placeholder：占位符
- required：必填项
- autofocus：自动聚焦
- autocomplete：自动完成
- min/max：数值范围限制
- pattern：正则表达式验证

---

## 表单

### 1. form 标签的重要属性？

- action：提交地址
- method：提交方法（GET/POST）
- enctype：编码类型
- target：打开方式

### 2. GET 和 POST 的区别？

| 特性 | GET | POST |
|------|-----|------|
| 数据位置 | URL 中 | 请求体中 |
| 数据长度 | 有限制 | 无限制 |
| 安全性 | 较低 | 较高 |
| 缓存 | 可缓存 | 不缓存 |
| 书签 | 可收藏 | 不可收藏 |

### 3. label 标签的作用？

label 标签为表单元素定义标注，点击 label 可以聚焦到对应的表单控件。

关联方式：
- 使用 for 属性对应 input 的 id
- 将 input 放在 label 内部

---

## 多媒体标签

### 1. audio 标签？

用于播放音频文件。

重要属性：
- src：音频源
- controls：显示控制面板
- autoplay：自动播放
- loop：循环播放
- preload：预加载策略

### 2. video 标签？

用于播放视频文件。

重要属性：
- src：视频源
- controls：显示控制面板
- autoplay：自动播放
- loop：循环播放
- preload：预加载策略
- poster：封面图
- width/height：宽高

### 3. source 标签？

为 audio 或 video 元素指定多个媒体资源，实现兼容性。

---

## Web Storage

### 1. Cookie、LocalStorage、SessionStorage 的区别？

| 特性 | Cookie | LocalStorage | SessionStorage |
|------|--------|--------------|----------------|
| 存储大小 | 4KB | 5MB~10MB | 5MB~10MB |
| 生命周期 | 设置过期时间 | 永久存储 | 会话结束清除 |
| 与服务端通信 | 每次请求携带 | 不参与 | 不参与 |
| 作用域 | 同源 | 同源 | 同源同窗口 |

### 2. 使用场景？

- Cookie：身份认证、用户偏好设置
- LocalStorage：长期存储用户数据
- SessionStorage：临时存储表单数据

### 3. API 方法？

- setItem(key, value)：存储数据
- getItem(key)：获取数据
- removeItem(key)：删除数据
- clear()：清空所有数据
- key(index)：根据索引获取键名

---

## Canvas 和 SVG

### 1. Canvas 和 SVG 的区别？

| 特性 | Canvas | SVG |
|------|--------|-----|
| 类型 | 位图 | 矢量图 |
| 修改 | 需要重绘 | 直接修改元素 |
| 事件处理 | 无内置事件 | 支持事件处理 |
| 复杂度 | 适合游戏、图像处理 | 适合图表、地图 |
| 缩放 | 会失真 | 无损缩放 |

### 2. Canvas 的基本使用？

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 绘制矩形
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 150, 75);
```

### 3. SVG 的基本使用？

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---

## SEO 优化

### 1. 有利于 SEO 的 HTML 实践？

- 使用语义化标签
- 合理的标题层级（h1-h6）
- alt 属性描述图片内容
- meta description 和 keywords
- 结构化数据标记

### 2. robots.txt 的作用？

控制搜索引擎爬虫的访问权限。

### 3. sitemap.xml 的作用？

网站地图，帮助搜索引擎更好地抓取网站内容。

---

## 安全性

### 1. XSS（跨站脚本攻击）？

攻击者在网页中插入恶意脚本代码，当用户浏览网页时执行这些代码。

防范措施：
- 输入过滤和转义
- CSP（内容安全策略）
- 使用 innerText 替代 innerHTML

### 2. CSRF（跨站请求伪造）？

攻击者诱导用户访问恶意网站，利用用户已登录的身份向目标网站发送恶意请求。

防范措施：
- 验证 Referer
- 使用 CSRF Token
- SameSite Cookie 属性

### 3. 点击劫持？

通过透明 iframe 覆盖网页，诱使用户点击看不见的按钮。

防范措施：
- X-Frame-Options 响应头
- CSP 的 frame-ancestors 指令