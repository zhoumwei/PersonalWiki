# CSS 面试题

## 目录
- [基础概念](#基础概念)
- [选择器](#选择器)
- [盒模型](#盒模型)
- [定位](#定位)
- [浮动](#浮动)
- [BFC](#bfc)
- [弹性盒子 Flexbox](#弹性盒子-flexbox)
- [网格布局 Grid](#网格布局-grid)
- [响应式设计](#响应式设计)
- [CSS3 新特性](#css3-新特性)
- [动画](#动画)
- [预处理器](#预处理器)
- [性能优化](#性能优化)

---

## 基础概念

### 1. 什么是 CSS？

CSS（Cascading Style Sheets）层叠样式表，用于控制网页的外观和布局。

### 2. CSS 的引入方式？

- 内联样式：直接写在 HTML 元素的 style 属性中
- 内部样式：写在 `<style>` 标签中
- 外部样式：通过 `<link>` 标签引入外部 CSS 文件
- 导入样式：使用 @import 导入样式

### 3. CSS 优先级？

优先级从高到低：
1. !important
2. 内联样式
3. ID 选择器
4. 类选择器、属性选择器、伪类选择器
5. 元素选择器、伪元素选择器
6. 通配符选择器

计算公式：
- 内联样式：1000
- ID 选择器：100
- 类选择器：10
- 元素选择器：1

### 4. CSS 继承？

某些 CSS 属性会被子元素继承，如 color、font-size 等。

---

## 选择器

### 1. CSS 选择器有哪些？

- 元素选择器：div {}
- 类选择器：.className {}
- ID 选择器：#idName {}
- 后代选择器：div p {}
- 子选择器：div > p {}
- 相邻兄弟选择器：h1 + p {}
- 通用兄弟选择器：h1 ~ p {}
- 属性选择器：input[type="text"] {}
- 伪类选择器：a:hover {}
- 伪元素选择器：p::first-line {}

### 2. 伪类和伪元素的区别？

- 伪类：表示元素的特定状态，如 :hover、:active
- 伪元素：创建文档树之外的内容，如 ::before、::after

### 3. nth-child 和 nth-of-type 的区别？

- nth-child：选择父元素下的第 n 个子元素
- nth-of-type：选择父元素下同类型的第 n 个元素

---

## 盒模型

### 1. 什么是盒模型？

每个 HTML 元素都可以看作一个矩形盒子，由四部分组成：
- content（内容）
- padding（内边距）
- border（边框）
- margin（外边距）

### 2. 标准盒模型和怪异盒模型？

- 标准盒模型：width = content width
- 怪异盒模型：width = content width + padding + border

### 3. box-sizing 属性？

- content-box：标准盒模型
- border-box：怪异盒模型

### 4. margin 塌陷？

父子元素或兄弟元素的垂直 margin 会发生合并，取较大值。

解决方案：
- 父元素设置 border 或 padding
- 父元素设置 overflow: hidden
- 父元素使用 flex 布局

---

## 定位

### 1. position 属性值？

- static：默认值，正常文档流
- relative：相对定位，相对于自身原来位置
- absolute：绝对定位，相对于最近的已定位祖先元素
- fixed：固定定位，相对于浏览器窗口
- sticky：粘性定位，结合 relative 和 fixed

### 2. z-index 层叠上下文？

z-index 只对定位元素有效，数值越大层级越高。

层叠顺序（从底到顶）：
1. 根元素背景和边框
2. 普通流中的块级元素
3. 浮动块
4. 普通流中的内联元素
5. 定位元素

---

## 浮动

### 1. float 属性值？

- left：左浮动
- right：右浮动
- none：不浮动

### 2. 浮动的影响？

- 脱离文档流
- 包围塌陷

### 3. 清除浮动的方法？

- clear 属性
- 伪元素清除法
- overflow: hidden
- 父元素也设置浮动

---

## BFC

### 1. 什么是 BFC？

BFC（Block Formatting Context）块级格式化上下文，是页面上的一个独立渲染区域。

### 2. BFC 的触发条件？

- 根元素
- float 不为 none
- position 为 absolute 或 fixed
- display 为 inline-block、table-cell、table-caption
- overflow 不为 visible

### 3. BFC 的作用？

- 清除浮动
- 防止 margin 塌陷
- 自适应两栏布局

---

## 弹性盒子 Flexbox

### 1. Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

### 2. 容器属性？

- flex-direction：主轴方向
- flex-wrap：换行方式
- flex-flow：direction 和 wrap 的简写
- justify-content：主轴对齐方式
- align-items：交叉轴对齐方式
- align-content：多根轴线的对齐方式

### 3. 项目属性？

- order：排列顺序
- flex-grow：放大比例
- flex-shrink：缩小比例
- flex-basis：占据空间
- flex：grow, shrink, basis 的简写
- align-self：单独设置对齐方式

---

## 网格布局 Grid

### 1. Grid 布局是什么？

CSS Grid Layout 是 CSS 中最强大的布局系统，是一个二维布局系统。

### 2. 容器属性？

- grid-template-columns/grid-template-rows：定义行列大小
- grid-template-areas：定义网格区域
- grid-template：上述属性的简写
- grid-column-gap/grid-row-gap：定义行列间距
- grid-gap：上述属性的简写
- justify-items：水平对齐方式
- align-items：垂直对齐方式
- justify-content：整体水平对齐方式
- align-content：整体垂直对齐方式
- grid-auto-columns/grid-auto-rows：隐式网格轨道大小
- grid-auto-flow：自动放置算法

### 3. 项目属性？

- grid-column-start/grid-column-end：列起始和结束位置
- grid-row-start/grid-row-end：行起始和结束位置
- grid-column/grid-row：上述属性的简写
- grid-area：grid-column 和 grid-row 的简写
- justify-self：水平对齐方式
- align-self：垂直对齐方式

---

## 响应式设计

### 1. 什么是响应式设计？

响应式设计是一种网页设计方法，使网页能够在不同尺寸的设备上良好显示。

### 2. 实现方式？

- 媒体查询（Media Queries）
- 弹性网格布局
- 弹性图片
- 设置 viewport

### 3. 媒体查询？

```css
@media screen and (max-width: 768px) {
  /* 当屏幕宽度小于等于 768px 时应用 */
}
```

### 4. rem 和 em 的区别？

- em：相对于父元素字体大小
- rem：相对于根元素字体大小

---

## CSS3 新特性

### 1. 边框？

- border-radius：圆角
- box-shadow：阴影
- border-image：边框图像

### 2. 背景？

- background-size：背景尺寸
- background-origin：背景起始位置
- background-clip：背景裁剪区域
- 多背景图片

### 3. 渐变？

- linear-gradient：线性渐变
- radial-gradient：径向渐变

### 4. 过渡？

transition 属性：
- transition-property：过渡属性
- transition-duration：过渡时间
- transition-timing-function：过渡函数
- transition-delay：过渡延迟

### 5. 变换？

transform 属性：
- translate：位移
- scale：缩放
- rotate：旋转
- skew：倾斜

---

## 动画

### 1. CSS 动画？

通过 @keyframes 规则创建动画：
```css
@keyframes move {
  0% { left: 0; }
  100% { left: 100px; }
}

.element {
  animation: move 2s ease-in-out infinite;
}
```

### 2. animation 属性？

- animation-name：动画名称
- animation-duration：动画持续时间
- animation-timing-function：动画速度曲线
- animation-delay：动画延迟时间
- animation-iteration-count：动画播放次数
- animation-direction：动画播放方向
- animation-fill-mode：动画结束后的状态
- animation-play-state：动画播放状态

---

## 预处理器

### 1. 什么是 CSS 预处理器？

CSS 预处理器是一种特殊的语法，可以增强 CSS 的功能，然后再编译成正常的 CSS。

### 2. 常见的预处理器？

- Sass/SCSS
- Less
- Stylus

### 3. 预处理器的优势？

- 嵌套语法
- 变量
- 混合（Mixins）
- 函数
- 继承
- 模块化

---

## 性能优化

### 1. CSS 优化策略？

- 压缩 CSS 文件
- 合并 CSS 文件
- 使用 CDN
- 避免 CSS 表达式
- 选择器优化
- 避免使用 @import
- 使用外链 CSS

### 2. 关键渲染路径优化？

- 内联关键 CSS
- 异步加载非关键 CSS
- 媒体查询加载

### 3. CSS Sprites？

将多个小图标合并成一张大图，通过 background-position 控制显示哪个图标。

### 4. 字体优化？

- 使用 font-display 控制字体加载行为
- 优先使用 woff2 格式
- 预加载关键字体