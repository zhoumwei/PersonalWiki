<template><div><h1 id="android-面试题" tabindex="-1"><a class="header-anchor" href="#android-面试题"><span>Android 面试题</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#android-%E5%9F%BA%E7%A1%80">Android 基础</a></li>
<li><a href="#activity">Activity</a></li>
<li><a href="#fragment">Fragment</a></li>
<li><a href="#service">Service</a></li>
<li><a href="#broadcastreceiver">BroadcastReceiver</a></li>
<li><a href="#contentprovider">ContentProvider</a></li>
<li><a href="#intent">Intent</a></li>
<li><a href="#view-%E5%92%8C-viewgroup">View 和 ViewGroup</a></li>
<li><a href="#%E5%B8%83%E5%B1%80-layout">布局 Layout</a></li>
<li><a href="#ui-%E6%8E%A7%E4%BB%B6">UI 控件</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8">数据存储</a></li>
<li><a href="#handler-%E6%9C%BA%E5%88%B6">Handler 机制</a></li>
<li><a href="#%E7%BA%BF%E7%A8%8B%E5%92%8C%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86">线程和异步处理</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">性能优化</a></li>
<li><a href="#android-jetpack">Android Jetpack</a></li>
<li><a href="#%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1">架构设计</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1">网络通信</a></li>
<li><a href="#%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD">图片加载</a></li>
<li><a href="#%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A1%86%E6%9E%B6">第三方框架</a></li>
<li><a href="#%E9%80%82%E9%85%8D%E9%97%AE%E9%A2%98">适配问题</a></li>
<li><a href="#anr-%E5%92%8C-%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F">ANR 和 内存泄漏</a></li>
<li><a href="#apk-%E6%89%93%E5%8C%85%E5%92%8C%E7%AD%BE%E5%90%8D">APK 打包和签名</a></li>
<li><a href="#kotlin">Kotlin</a></li>
<li><a href="#%E5%9B%9B%E5%A4%A7%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">四大组件生命周期</a></li>
</ul>
<hr>
<h2 id="android-基础" tabindex="-1"><a class="header-anchor" href="#android-基础"><span>Android 基础</span></a></h2>
<h3 id="_1-什么是-android" tabindex="-1"><a class="header-anchor" href="#_1-什么是-android"><span>1. 什么是 Android？</span></a></h3>
<p>Android 是一个基于 Linux 内核的开源移动设备操作系统，主要用于触摸屏移动设备如智能手机和平板电脑，由 Google 公司主导开发。</p>
<h3 id="_2-android-体系结构" tabindex="-1"><a class="header-anchor" href="#_2-android-体系结构"><span>2. Android 体系结构</span></a></h3>
<p>Android 系统架构分为四层：</p>
<ul>
<li>应用层 (Applications)</li>
<li>应用框架层 (Application Framework)</li>
<li>系统运行库层 (Libraries &amp; Android Runtime)</li>
<li>Linux 内核层 (Linux Kernel)</li>
</ul>
<h3 id="_3-dalvik-虚拟机和-art-的区别" tabindex="-1"><a class="header-anchor" href="#_3-dalvik-虚拟机和-art-的区别"><span>3. Dalvik 虚拟机和 ART 的区别？</span></a></h3>
<ul>
<li><strong>Dalvik</strong>：早期 Android 使用的虚拟机，使用 JIT（即时编译）技术，每次运行都需要编译。</li>
<li><strong>ART</strong>：Android 5.0 开始使用的虚拟机，使用 AOT（预先编译）技术，在安装时就完成应用的编译。</li>
</ul>
<h3 id="_4-android-应用程序结构" tabindex="-1"><a class="header-anchor" href="#_4-android-应用程序结构"><span>4. Android 应用程序结构</span></a></h3>
<p>典型的 Android 应用包含以下组件：</p>
<ul>
<li>src：Java 源代码</li>
<li>res：资源文件</li>
<li>AndroidManifest.xml：配置文件</li>
<li>build.gradle：构建脚本</li>
<li>libs：依赖库</li>
</ul>
<hr>
<h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity"><span>Activity</span></a></h2>
<h3 id="_1-activity-是什么" tabindex="-1"><a class="header-anchor" href="#_1-activity-是什么"><span>1. Activity 是什么？</span></a></h3>
<p>Activity 是 Android 四大组件之一，提供用户界面用于与应用程序交互。它代表了一个屏幕，可以理解为一个页面。</p>
<h3 id="_2-activity-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-activity-生命周期"><span>2. Activity 生命周期</span></a></h3>
<p>Activity 的生命周期包括以下几个主要方法：</p>
<ul>
<li>onCreate()</li>
<li>onStart()</li>
<li>onResume()</li>
<li>onPause()</li>
<li>onStop()</li>
<li>onDestroy()</li>
<li>onRestart()</li>
</ul>
<h3 id="_3-activity-启动模式" tabindex="-1"><a class="header-anchor" href="#_3-activity-启动模式"><span>3. Activity 启动模式</span></a></h3>
<ul>
<li><strong>standard</strong>：标准模式，默认模式，每次启动都会创建一个新的实例</li>
<li><strong>singleTop</strong>：栈顶复用模式，如果位于任务栈顶部则复用，否则新建</li>
<li><strong>singleTask</strong>：栈内复用模式，在整个任务栈中查找是否存在该 Activity 实例，有则复用并清除其上的所有 Activity</li>
<li><strong>singleInstance</strong>：单实例模式，具有此模式的 Activity 只能单独位于一个任务栈中</li>
</ul>
<h3 id="_4-activity-之间的数据传递方式有哪些" tabindex="-1"><a class="header-anchor" href="#_4-activity-之间的数据传递方式有哪些"><span>4. Activity 之间的数据传递方式有哪些？</span></a></h3>
<ul>
<li>Intent 传值：适用于基本数据类型和实现了 Serializable 或 Parcelable 接口的对象</li>
<li>全局变量：通过 Application 类或静态变量</li>
<li>SharedPreferences：适合存储简单的配置信息</li>
<li>文件存储：将数据保存在文件中进行传递</li>
</ul>
<hr>
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment"><span>Fragment</span></a></h2>
<h3 id="_1-fragment-为什么被称为第五大组件" tabindex="-1"><a class="header-anchor" href="#_1-fragment-为什么被称为第五大组件"><span>1. Fragment 为什么被称为第五大组件？</span></a></h3>
<p>虽然 Fragment 不是标准的四大组件，但其重要性不亚于它们，提供了更好的 UI 灵活性和复用性。</p>
<h3 id="_2-fragment-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-fragment-生命周期"><span>2. Fragment 生命周期</span></a></h3>
<p>Fragment 生命周期比 Activity 多了一些独有的回调方法：</p>
<ul>
<li>onAttach()</li>
<li>onCreateView()</li>
<li>onViewCreated()</li>
<li>onActivityCreated()</li>
<li>onDestroyView()</li>
<li>onDetach()</li>
</ul>
<h3 id="_3-fragment-与-activity-的通信方式" tabindex="-1"><a class="header-anchor" href="#_3-fragment-与-activity-的通信方式"><span>3. Fragment 与 Activity 的通信方式</span></a></h3>
<ul>
<li>在 Activity 中调用 Fragment 的公共方法</li>
<li>通过接口回调的方式</li>
<li>使用 EventBus 等事件总线</li>
<li>通过 ViewModel 共享数据（MVVM 架构）</li>
</ul>
<h3 id="_4-fragmentpageradapter-与-fragmentstatepageradapter-区别" tabindex="-1"><a class="header-anchor" href="#_4-fragmentpageradapter-与-fragmentstatepageradapter-区别"><span>4. FragmentPagerAdapter 与 FragmentStatePagerAdapter 区别？</span></a></h3>
<ul>
<li><strong>FragmentPagerAdapter</strong>：适用于固定数量的少量页面，Fragment 实例会保留在内存中</li>
<li><strong>FragmentStatePagerAdapter</strong>：适用于大量页面或页面数动态变化的情况，只保留当前页面，其他页面会被销毁以节省内存</li>
</ul>
<hr>
<h2 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service</span></a></h2>
<h3 id="_1-service-是什么" tabindex="-1"><a class="header-anchor" href="#_1-service-是什么"><span>1. Service 是什么？</span></a></h3>
<p>Service 是 Android 四大组件之一，用于执行长时间运行的操作，但不提供用户界面。</p>
<h3 id="_2-service-的两种启动方式及生命周期" tabindex="-1"><a class="header-anchor" href="#_2-service-的两种启动方式及生命周期"><span>2. Service 的两种启动方式及生命周期</span></a></h3>
<h4 id="startservice-方式" tabindex="-1"><a class="header-anchor" href="#startservice-方式"><span>startService 方式</span></a></h4>
<p>生命周期方法：</p>
<ul>
<li>onCreate()</li>
<li>onStartCommand()</li>
<li>onDestroy()</li>
</ul>
<p>特点：一旦启动，即使启动它的组件被销毁，Service 也会一直运行</p>
<h4 id="bindservice-方式" tabindex="-1"><a class="header-anchor" href="#bindservice-方式"><span>bindService 方式</span></a></h4>
<p>生命周期方法：</p>
<ul>
<li>onCreate()</li>
<li>onBind()</li>
<li>onUnbind()</li>
<li>onDestroy()</li>
</ul>
<p>特点：绑定的服务与调用者绑定，调用者销毁时服务也会自动解绑</p>
<h3 id="_3-intentservice-是什么" tabindex="-1"><a class="header-anchor" href="#_3-intentservice-是什么"><span>3. IntentService 是什么？</span></a></h3>
<p>IntentService 是 Service 的子类，用来处理异步请求。它内部有一个工作线程来处理耗时操作，并且会自动停止服务。</p>
<h3 id="_4-前台服务和后台服务的区别" tabindex="-1"><a class="header-anchor" href="#_4-前台服务和后台服务的区别"><span>4. 前台服务和后台服务的区别？</span></a></h3>
<ul>
<li><strong>前台服务</strong>：显示通知给用户，优先级高，不容易被系统杀死</li>
<li><strong>后台服务</strong>：无通知显示，容易被系统回收</li>
</ul>
<hr>
<h2 id="broadcastreceiver" tabindex="-1"><a class="header-anchor" href="#broadcastreceiver"><span>BroadcastReceiver</span></a></h2>
<h3 id="_1-broadcastreceiver-是什么" tabindex="-1"><a class="header-anchor" href="#_1-broadcastreceiver-是什么"><span>1. BroadcastReceiver 是什么？</span></a></h3>
<p>BroadcastReceiver 是 Android 四大组件之一，用于接收并处理广播消息。</p>
<h3 id="_2-广播的分类" tabindex="-1"><a class="header-anchor" href="#_2-广播的分类"><span>2. 广播的分类</span></a></h3>
<ul>
<li><strong>普通广播</strong>：完全异步，效率高但无法获取返回结果</li>
<li><strong>有序广播</strong>：同步执行，优先级高的接收器先接收到，可中断传播</li>
<li><strong>本地广播</strong>：仅在应用内传播，安全性高</li>
<li><strong>粘性广播</strong>：发送后会一直滞留，新注册的接收器仍能接收到（API 21 后已废弃）</li>
</ul>
<h3 id="_3-动态注册和静态注册的区别" tabindex="-1"><a class="header-anchor" href="#_3-动态注册和静态注册的区别"><span>3. 动态注册和静态注册的区别？</span></a></h3>
<ul>
<li><strong>动态注册</strong>：在代码中注册，灵活性强，随 Context 销毁而注销</li>
<li><strong>静态注册</strong>：在 AndroidManifest.xml 中注册，常驻系统，即使应用未启动也能接收广播</li>
</ul>
<hr>
<h2 id="contentprovider" tabindex="-1"><a class="header-anchor" href="#contentprovider"><span>ContentProvider</span></a></h2>
<h3 id="_1-contentprovider-是什么" tabindex="-1"><a class="header-anchor" href="#_1-contentprovider-是什么"><span>1. ContentProvider 是什么？</span></a></h3>
<p>ContentProvider 是 Android 四大组件之一，用于不同应用程序之间共享数据。</p>
<h3 id="_2-如何访问-contentprovider-中的数据" tabindex="-1"><a class="header-anchor" href="#_2-如何访问-contentprovider-中的数据"><span>2. 如何访问 ContentProvider 中的数据？</span></a></h3>
<p>通过 ContentResolver 对象访问 ContentProvider 提供的数据，常用方法包括：</p>
<ul>
<li>query()</li>
<li>insert()</li>
<li>update()</li>
<li>delete()</li>
</ul>
<h3 id="_3-uri、urimatcher、contenturis-的作用" tabindex="-1"><a class="header-anchor" href="#_3-uri、urimatcher、contenturis-的作用"><span>3. Uri、UriMatcher、ContentUris 的作用？</span></a></h3>
<ul>
<li><strong>Uri</strong>：统一资源标识符，用于唯一标识 ContentProvider 中的数据</li>
<li><strong>UriMatcher</strong>：用于匹配 Uri</li>
<li><strong>ContentUris</strong>：用于获取 Uri 路径后面的 ID 部分</li>
</ul>
<hr>
<h2 id="intent" tabindex="-1"><a class="header-anchor" href="#intent"><span>Intent</span></a></h2>
<h3 id="_1-intent-是什么" tabindex="-1"><a class="header-anchor" href="#_1-intent-是什么"><span>1. Intent 是什么？</span></a></h3>
<p>Intent 是一个消息传递对象，可用于请求其他应用组件的动作。</p>
<h3 id="_2-显式-intent-和隐式-intent-的区别" tabindex="-1"><a class="header-anchor" href="#_2-显式-intent-和隐式-intent-的区别"><span>2. 显式 Intent 和隐式 Intent 的区别？</span></a></h3>
<ul>
<li><strong>显式 Intent</strong>：明确指定目标组件的名称</li>
<li><strong>隐式 Intent</strong>：不指定具体组件，系统根据 Intent Filter 进行匹配</li>
</ul>
<h3 id="_3-intent-filter-是什么" tabindex="-1"><a class="header-anchor" href="#_3-intent-filter-是什么"><span>3. Intent Filter 是什么？</span></a></h3>
<p>Intent Filter 是在 AndroidManifest.xml 中定义的过滤器，用于描述组件可以处理的 Intent 特征。</p>
<hr>
<h2 id="view-和-viewgroup" tabindex="-1"><a class="header-anchor" href="#view-和-viewgroup"><span>View 和 ViewGroup</span></a></h2>
<h3 id="_1-view-和-viewgroup-的区别" tabindex="-1"><a class="header-anchor" href="#_1-view-和-viewgroup-的区别"><span>1. View 和 ViewGroup 的区别？</span></a></h3>
<ul>
<li><strong>View</strong>：所有 UI 组件的基类，表示单个控件</li>
<li><strong>ViewGroup</strong>：View 的子类，可以包含多个 View，作为容器使用</li>
</ul>
<h3 id="_2-view-的绘制流程" tabindex="-1"><a class="header-anchor" href="#_2-view-的绘制流程"><span>2. View 的绘制流程</span></a></h3>
<p>View 的绘制主要包括三个步骤：</p>
<ol>
<li>measure：测量视图大小</li>
<li>layout：确定视图位置</li>
<li>draw：绘制视图内容</li>
</ol>
<h3 id="_3-自定义-view-的流程" tabindex="-1"><a class="header-anchor" href="#_3-自定义-view-的流程"><span>3. 自定义 View 的流程</span></a></h3>
<ol>
<li>继承 View 或 ViewGroup</li>
<li>重写构造函数</li>
<li>重写 onMeasure() 方法（需要时）</li>
<li>重写 onDraw() 方法（View）或 dispatchDraw() 方法（ViewGroup）</li>
<li>添加自定义属性（可选）</li>
</ol>
<hr>
<h2 id="布局-layout" tabindex="-1"><a class="header-anchor" href="#布局-layout"><span>布局 Layout</span></a></h2>
<h3 id="_1-常见布局类型" tabindex="-1"><a class="header-anchor" href="#_1-常见布局类型"><span>1. 常见布局类型</span></a></h3>
<ul>
<li>LinearLayout：线性布局</li>
<li>RelativeLayout：相对布局</li>
<li>FrameLayout：帧布局</li>
<li>ConstraintLayout：约束布局</li>
<li>GridLayout：网格布局</li>
<li>CoordinatorLayout：协调布局</li>
</ul>
<h3 id="_2-constraintlayout-的优势" tabindex="-1"><a class="header-anchor" href="#_2-constraintlayout-的优势"><span>2. ConstraintLayout 的优势？</span></a></h3>
<ul>
<li>扁平化的视图结构，提高渲染性能</li>
<li>更灵活的约束关系设置</li>
<li>支持动画和过渡效果</li>
<li>可替代复杂的嵌套布局</li>
</ul>
<h3 id="_3-include、merge、viewstub-标签的作用" tabindex="-1"><a class="header-anchor" href="#_3-include、merge、viewstub-标签的作用"><span>3. include、merge、ViewStub 标签的作用？</span></a></h3>
<ul>
<li><strong>include</strong>：复用布局</li>
<li><strong>merge</strong>：减少布局层级嵌套</li>
<li><strong>ViewStub</strong>：按需加载布局，节省资源</li>
</ul>
<hr>
<h2 id="ui-控件" tabindex="-1"><a class="header-anchor" href="#ui-控件"><span>UI 控件</span></a></h2>
<h3 id="_1-listview-的优化方案" tabindex="-1"><a class="header-anchor" href="#_1-listview-的优化方案"><span>1. ListView 的优化方案</span></a></h3>
<ul>
<li>复用 convertView</li>
<li>使用 ViewHolder 模式</li>
<li>分页加载</li>
<li>图片懒加载</li>
<li>数据缓存</li>
</ul>
<h3 id="_2-recyclerview-与-listview-的区别" tabindex="-1"><a class="header-anchor" href="#_2-recyclerview-与-listview-的区别"><span>2. RecyclerView 与 ListView 的区别？</span></a></h3>
<ul>
<li>ViewHolder 模式强制实现</li>
<li>更灵活的布局管理器</li>
<li>支持局部刷新</li>
<li>更好的动画支持</li>
<li>更容易实现拖拽和侧滑删除等功能</li>
</ul>
<h3 id="_3-viewpager-的原理" tabindex="-1"><a class="header-anchor" href="#_3-viewpager-的原理"><span>3. ViewPager 的原理？</span></a></h3>
<p>ViewPager 结合 PagerAdapter 使用，内部维护一个缓存页面列表，通过 Scroller 实现页面切换的滑动效果。</p>
<hr>
<h2 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储"><span>数据存储</span></a></h2>
<h3 id="_1-android-提供的数据存储方式" tabindex="-1"><a class="header-anchor" href="#_1-android-提供的数据存储方式"><span>1. Android 提供的数据存储方式</span></a></h3>
<ul>
<li>SharedPreferences：轻量级键值对存储</li>
<li>文件存储：内部存储和外部存储</li>
<li>SQLite 数据库：轻量级关系型数据库</li>
<li>ContentProvider：跨应用数据共享</li>
<li>网络存储：通过网络将数据存储到远程服务器</li>
</ul>
<h3 id="_2-sharedpreferences-的优缺点" tabindex="-1"><a class="header-anchor" href="#_2-sharedpreferences-的优缺点"><span>2. SharedPreferences 的优缺点？</span></a></h3>
<p>优点：</p>
<ul>
<li>使用简单</li>
<li>数据读取速度快</li>
</ul>
<p>缺点：</p>
<ul>
<li>只能存储简单数据类型</li>
<li>线程安全问题</li>
<li>全量写入效率低</li>
</ul>
<h3 id="_3-sqlite-升级如何处理" tabindex="-1"><a class="header-anchor" href="#_3-sqlite-升级如何处理"><span>3. SQLite 升级如何处理？</span></a></h3>
<ul>
<li>onUpgrade() 方法中处理版本升级逻辑</li>
<li>通过 ALTER TABLE 等语句修改表结构</li>
<li>注意数据迁移和兼容性处理</li>
</ul>
<hr>
<h2 id="handler-机制" tabindex="-1"><a class="header-anchor" href="#handler-机制"><span>Handler 机制</span></a></h2>
<h3 id="_1-handler-的作用" tabindex="-1"><a class="header-anchor" href="#_1-handler-的作用"><span>1. Handler 的作用？</span></a></h3>
<p>Handler 主要用于在不同线程间传递消息，解决线程间通信问题。</p>
<h3 id="_2-handler-机制原理" tabindex="-1"><a class="header-anchor" href="#_2-handler-机制原理"><span>2. Handler 机制原理？</span></a></h3>
<p>Handler 机制包含四个核心组件：</p>
<ul>
<li>Handler：消息处理者</li>
<li>Message：消息载体</li>
<li>MessageQueue：消息队列</li>
<li>Looper：消息循环</li>
</ul>
<h3 id="_3-子线程中使用-handler-的注意事项" tabindex="-1"><a class="header-anchor" href="#_3-子线程中使用-handler-的注意事项"><span>3. 子线程中使用 Handler 的注意事项？</span></a></h3>
<p>需要手动创建 Looper：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Handler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Looper</span><span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-handler-引起的内存泄漏及解决方案" tabindex="-1"><a class="header-anchor" href="#_4-handler-引起的内存泄漏及解决方案"><span>4. Handler 引起的内存泄漏及解决方案？</span></a></h3>
<p>原因：非静态内部类持有外部类引用
解决方案：</p>
<ul>
<li>使用静态内部类 + WeakReference</li>
<li>在 onDestroy 中移除所有消息和回调</li>
</ul>
<hr>
<h2 id="线程和异步处理" tabindex="-1"><a class="header-anchor" href="#线程和异步处理"><span>线程和异步处理</span></a></h2>
<h3 id="_1-android-中的线程模型" tabindex="-1"><a class="header-anchor" href="#_1-android-中的线程模型"><span>1. Android 中的线程模型？</span></a></h3>
<p>Android 中主线程负责 UI 更新，耗时操作应在子线程执行，避免 ANR。</p>
<h3 id="_2-asynctask-的优缺点" tabindex="-1"><a class="header-anchor" href="#_2-asynctask-的优缺点"><span>2. AsyncTask 的优缺点？</span></a></h3>
<p>优点：</p>
<ul>
<li>使用简单</li>
<li>封装了线程池和 Handler</li>
</ul>
<p>缺点：</p>
<ul>
<li>生命周期问题</li>
<li>在 Android 11 中已被废弃</li>
<li>处理不当易引起内存泄漏</li>
</ul>
<h3 id="_3-线程池的优点" tabindex="-1"><a class="header-anchor" href="#_3-线程池的优点"><span>3. 线程池的优点？</span></a></h3>
<ul>
<li>重用线程，减少创建和销毁开销</li>
<li>精确控制最大并发数</li>
<li>提供更多功能如定时、定期执行等</li>
</ul>
<h3 id="_4-intentservice-vs-service-thread" tabindex="-1"><a class="header-anchor" href="#_4-intentservice-vs-service-thread"><span>4. IntentService vs Service + Thread？</span></a></h3>
<ul>
<li>IntentService 内部封装了 HandlerThread，适用于处理单一异步任务</li>
<li>Service + Thread 需要自己管理线程，更灵活但也更复杂</li>
</ul>
<hr>
<h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="_1-布局优化" tabindex="-1"><a class="header-anchor" href="#_1-布局优化"><span>1. 布局优化</span></a></h3>
<ul>
<li>减少布局嵌套层次</li>
<li>使用 include 复用布局</li>
<li>使用 merge 减少层级</li>
<li>使用 ViewStub 按需加载</li>
</ul>
<h3 id="_2-绘制优化" tabindex="-1"><a class="header-anchor" href="#_2-绘制优化"><span>2. 绘制优化</span></a></h3>
<ul>
<li>onDraw 方法中避免创建对象</li>
<li>使用 canvas.clipRect() 帮助系统识别可见区域</li>
</ul>
<h3 id="_3-内存优化" tabindex="-1"><a class="header-anchor" href="#_3-内存优化"><span>3. 内存优化</span></a></h3>
<ul>
<li>避免内存泄漏</li>
<li>使用优化的数据结构</li>
<li>及时释放资源</li>
</ul>
<h3 id="_4-启动速度优化" tabindex="-1"><a class="header-anchor" href="#_4-启动速度优化"><span>4. 启动速度优化</span></a></h3>
<ul>
<li>减少 Application 和首屏 Activity 的初始化操作</li>
<li>使用异步初始化</li>
<li>延迟初始化非必要组件</li>
</ul>
<h3 id="_5-apk-瘦身" tabindex="-1"><a class="header-anchor" href="#_5-apk-瘦身"><span>5. APK 瘦身</span></a></h3>
<ul>
<li>移除无用资源</li>
<li>使用混淆</li>
<li>资源压缩</li>
<li>so 库精简</li>
</ul>
<hr>
<h2 id="android-jetpack" tabindex="-1"><a class="header-anchor" href="#android-jetpack"><span>Android Jetpack</span></a></h2>
<h3 id="_1-什么是-android-jetpack" tabindex="-1"><a class="header-anchor" href="#_1-什么是-android-jetpack"><span>1. 什么是 Android Jetpack？</span></a></h3>
<p>Android Jetpack 是一套组件、工具和指南，可以帮助开发者遵循最佳实践，减少样板代码，简化开发。</p>
<h3 id="_2-常用的-jetpack-组件" tabindex="-1"><a class="header-anchor" href="#_2-常用的-jetpack-组件"><span>2. 常用的 Jetpack 组件</span></a></h3>
<ul>
<li>Lifecycle：管理组件生命周期</li>
<li>LiveData：可感知生命周期的数据持有者</li>
<li>ViewModel：管理 UI 相关数据</li>
<li>Room：SQLite 抽象层</li>
<li>Navigation：导航组件</li>
<li>Paging：分页加载数据</li>
<li>WorkManager：后台任务调度</li>
</ul>
<h3 id="_3-viewmodel-的作用" tabindex="-1"><a class="header-anchor" href="#_3-viewmodel-的作用"><span>3. ViewModel 的作用？</span></a></h3>
<p>ViewModel 用于存储和管理与 UI 相关的数据，在配置变更（如屏幕旋转）时数据不会丢失。</p>
<hr>
<h2 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计"><span>架构设计</span></a></h2>
<h3 id="_1-mvc、mvp、mvvm-模式对比" tabindex="-1"><a class="header-anchor" href="#_1-mvc、mvp、mvvm-模式对比"><span>1. MVC、MVP、MVVM 模式对比</span></a></h3>
<ul>
<li><strong>MVC</strong>：Model-View-Controller，View 和 Controller 联系紧密</li>
<li><strong>MVP</strong>：Model-View-Presenter，Presenter 解耦了 View 和 Model</li>
<li><strong>MVVM</strong>：Model-View-ViewModel，通过数据绑定实现 View 和 ViewModel 的解耦</li>
</ul>
<h3 id="_2-clean-architecture" tabindex="-1"><a class="header-anchor" href="#_2-clean-architecture"><span>2. Clean Architecture</span></a></h3>
<p>Clean Architecture 将项目分为三层：</p>
<ul>
<li>表现层（Presentation Layer）</li>
<li>领域层（Domain Layer）</li>
<li>数据层（Data Layer）</li>
</ul>
<p>每层都有明确的职责，便于测试和维护。</p>
<hr>
<h2 id="网络通信" tabindex="-1"><a class="header-anchor" href="#网络通信"><span>网络通信</span></a></h2>
<h3 id="_1-android-中常用的网络框架" tabindex="-1"><a class="header-anchor" href="#_1-android-中常用的网络框架"><span>1. Android 中常用的网络框架</span></a></h3>
<ul>
<li>OkHttp：高效的 HTTP 客户端</li>
<li>Retrofit：RESTful API 客户端</li>
<li>Volley：Google 推出的网络通信框架（现已较少使用）</li>
</ul>
<h3 id="_2-retrofit-的优势" tabindex="-1"><a class="header-anchor" href="#_2-retrofit-的优势"><span>2. Retrofit 的优势？</span></a></h3>
<ul>
<li>基于注解，使用简洁</li>
<li>支持多种数据解析器</li>
<li>与 RxJava 很好地结合</li>
<li>性能优秀</li>
</ul>
<h3 id="_3-网络请求中的加密方式" tabindex="-1"><a class="header-anchor" href="#_3-网络请求中的加密方式"><span>3. 网络请求中的加密方式？</span></a></h3>
<ul>
<li>HTTPS：HTTP + SSL/TLS 加密传输</li>
<li>数据字段加密：如 AES、RSA 等算法</li>
<li>签名验证：防止数据篡改</li>
</ul>
<hr>
<h2 id="图片加载" tabindex="-1"><a class="header-anchor" href="#图片加载"><span>图片加载</span></a></h2>
<h3 id="_1-常用图片加载框架" tabindex="-1"><a class="header-anchor" href="#_1-常用图片加载框架"><span>1. 常用图片加载框架</span></a></h3>
<ul>
<li>Glide：Google 推荐，功能强大</li>
<li>Picasso：Square 开源，简洁易用</li>
<li>Fresco：Facebook 开源，适合加载大量图片</li>
</ul>
<h3 id="_2-图片加载优化策略" tabindex="-1"><a class="header-anchor" href="#_2-图片加载优化策略"><span>2. 图片加载优化策略？</span></a></h3>
<ul>
<li>图片压缩</li>
<li>内存缓存和磁盘缓存</li>
<li>图片复用</li>
<li>预加载</li>
</ul>
<hr>
<h2 id="第三方框架" tabindex="-1"><a class="header-anchor" href="#第三方框架"><span>第三方框架</span></a></h2>
<h3 id="_1-常用的第三方库" tabindex="-1"><a class="header-anchor" href="#_1-常用的第三方库"><span>1. 常用的第三方库</span></a></h3>
<ul>
<li>ButterKnife/Dagger/Hilt：依赖注入</li>
<li>RxJava/RxAndroid：响应式编程</li>
<li>EventBus：事件总线</li>
<li>GreenDao/Realm：数据库框架</li>
</ul>
<h3 id="_2-依赖注入的优势" tabindex="-1"><a class="header-anchor" href="#_2-依赖注入的优势"><span>2. 依赖注入的优势？</span></a></h3>
<ul>
<li>解耦组件间的依赖关系</li>
<li>提高代码可测试性</li>
<li>简化对象创建过程</li>
</ul>
<hr>
<h2 id="适配问题" tabindex="-1"><a class="header-anchor" href="#适配问题"><span>适配问题</span></a></h2>
<h3 id="_1-屏幕适配方案" tabindex="-1"><a class="header-anchor" href="#_1-屏幕适配方案"><span>1. 屏幕适配方案</span></a></h3>
<ul>
<li>dp 适配：使用密度无关像素</li>
<li>限定符适配：values-sw 文件夹</li>
<li>刘海屏适配：Android P 以上版本 API</li>
<li>今日头条适配方案：修改 density 值</li>
</ul>
<h3 id="_2-权限适配" tabindex="-1"><a class="header-anchor" href="#_2-权限适配"><span>2. 权限适配</span></a></h3>
<ul>
<li>Android 6.0 运行时权限申请</li>
<li>Android 10 分区存储适配</li>
</ul>
<hr>
<h2 id="anr-和-内存泄漏" tabindex="-1"><a class="header-anchor" href="#anr-和-内存泄漏"><span>ANR 和 内存泄漏</span></a></h2>
<h3 id="_1-anr-出现的场景" tabindex="-1"><a class="header-anchor" href="#_1-anr-出现的场景"><span>1. ANR 出现的场景？</span></a></h3>
<ul>
<li>Activity 在 5 秒内没有响应输入事件</li>
<li>BroadcastReceiver 在 10 秒内没有执行完毕</li>
<li>Service 在 20 秒内没有执行完毕</li>
</ul>
<h3 id="_2-如何分析-anr" tabindex="-1"><a class="header-anchor" href="#_2-如何分析-anr"><span>2. 如何分析 ANR？</span></a></h3>
<ul>
<li>查看 /data/anr/traces.txt 日志</li>
<li>使用 adb 命令导出 ANR 日志</li>
<li>分析主线程是否被阻塞</li>
</ul>
<h3 id="_3-内存泄漏检测工具" tabindex="-1"><a class="header-anchor" href="#_3-内存泄漏检测工具"><span>3. 内存泄漏检测工具？</span></a></h3>
<ul>
<li>LeakCanary：Square 开源的内存泄漏检测工具</li>
<li>MAT：Eclipse Memory Analyzer</li>
<li>Android Studio Profiler</li>
</ul>
<hr>
<h2 id="apk-打包和签名" tabindex="-1"><a class="header-anchor" href="#apk-打包和签名"><span>APK 打包和签名</span></a></h2>
<h3 id="_1-apk-打包流程" tabindex="-1"><a class="header-anchor" href="#_1-apk-打包流程"><span>1. APK 打包流程？</span></a></h3>
<ol>
<li>通过 AAPT 打包资源文件生成 R.java 文件</li>
<li>处理 aidl 文件生成相应 java 文件</li>
<li>通过 Java Compiler 编译 R.java、Java 文件为 .class 文件</li>
<li>通过 dex 命令将 .class 文件转换成 .dex 文件</li>
<li>通过 apkbuilder 工具将资源文件、dex 文件打包成未签名的 apk</li>
<li>使用 jarsigner 对未签名的 apk 进行签名</li>
<li>使用 zipalign 对 apk 进行对齐处理</li>
</ol>
<h3 id="_2-签名的作用" tabindex="-1"><a class="header-anchor" href="#_2-签名的作用"><span>2. 签名的作用？</span></a></h3>
<ul>
<li>应用升级：相同签名的应用才能覆盖安装</li>
<li>应用共享：相同签名的应用可以共享数据</li>
<li>权限申请：部分权限需要相同签名才能申请</li>
</ul>
<hr>
<h2 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin"><span>Kotlin</span></a></h2>
<h3 id="_1-kotlin-相对于-java-的优势" tabindex="-1"><a class="header-anchor" href="#_1-kotlin-相对于-java-的优势"><span>1. Kotlin 相对于 Java 的优势？</span></a></h3>
<ul>
<li>空安全</li>
<li>扩展函数</li>
<li>数据类</li>
<li>Lambda 表达式</li>
<li>协程支持</li>
</ul>
<h3 id="_2-协程是什么" tabindex="-1"><a class="header-anchor" href="#_2-协程是什么"><span>2. 协程是什么？</span></a></h3>
<p>协程是一种轻量级的线程，可以在单个线程中实现并发操作，避免了线程切换的开销。</p>
<h3 id="_3-let、apply、run、also、with-的区别" tabindex="-1"><a class="header-anchor" href="#_3-let、apply、run、also、with-的区别"><span>3. let、apply、run、also、with 的区别？</span></a></h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>函数体中 this</th>
<th>返回值</th>
<th>扩展函数</th>
</tr>
</thead>
<tbody>
<tr>
<td>let</td>
<td>是 receiver 对象</td>
<td>函数块最后一行或 Unit</td>
<td>是</td>
</tr>
<tr>
<td>run</td>
<td>是 receiver 对象</td>
<td>函数块最后一行或 Unit</td>
<td>是</td>
</tr>
<tr>
<td>also</td>
<td>是调用者本身</td>
<td>调用者本身</td>
<td>是</td>
</tr>
<tr>
<td>apply</td>
<td>是 receiver 对象</td>
<td>receiver 对象</td>
<td>是</td>
</tr>
<tr>
<td>with</td>
<td>是 receiver 对象</td>
<td>函数块最后一行或 Unit</td>
<td>否</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="四大组件生命周期" tabindex="-1"><a class="header-anchor" href="#四大组件生命周期"><span>四大组件生命周期</span></a></h2>
<h3 id="_1-activity-生命周期图示" tabindex="-1"><a class="header-anchor" href="#_1-activity-生命周期图示"><span>1. Activity 生命周期图示</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">onCreate() -> onStart() -> onResume() -> Running -> onPause() -> onStop() -> onDestroy()</span>
<span class="line">                                      ↑              ↓         ↑          ↓</span>
<span class="line">                                   Back key    Home key  Another Activity covers</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-service-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-service-生命周期"><span>2. Service 生命周期</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">startService(): onCreate() -> onStartCommand() -> onDestroy()</span>
<span class="line">bindService(): onCreate() -> onBind() -> onUnbind() -> onDestroy()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-fragment-生命周期与-activity-生命周期的关系" tabindex="-1"><a class="header-anchor" href="#_3-fragment-生命周期与-activity-生命周期的关系"><span>3. Fragment 生命周期与 Activity 生命周期的关系</span></a></h3>
<p>Fragment 的生命周期受宿主 Activity 影响，同时有自己的特有方法，两者结合形成完整的生命周期。</p>
<hr>
</div></template>


