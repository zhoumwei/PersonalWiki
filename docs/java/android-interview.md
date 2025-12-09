# Android 面试题

## 目录
- [Android 基础](#android-基础)
- [Activity](#activity)
- [Fragment](#fragment)
- [Service](#service)
- [BroadcastReceiver](#broadcastreceiver)
- [ContentProvider](#contentprovider)
- [Intent](#intent)
- [View 和 ViewGroup](#view-和-viewgroup)
- [布局 Layout](#布局-layout)
- [UI 控件](#ui-控件)
- [数据存储](#数据存储)
- [Handler 机制](#handler-机制)
- [线程和异步处理](#线程和异步处理)
- [性能优化](#性能优化)
- [Android Jetpack](#android-jetpack)
- [架构设计](#架构设计)
- [网络通信](#网络通信)
- [图片加载](#图片加载)
- [第三方框架](#第三方框架)
- [适配问题](#适配问题)
- [ANR 和 内存泄漏](#anr-和-内存泄漏)
- [APK 打包和签名](#apk-打包和签名)
- [Kotlin](#kotlin)
- [四大组件生命周期](#四大组件生命周期)

---

## Android 基础

### 1. 什么是 Android？

Android 是一个基于 Linux 内核的开源移动设备操作系统，主要用于触摸屏移动设备如智能手机和平板电脑，由 Google 公司主导开发。

### 2. Android 体系结构

Android 系统架构分为四层：
- 应用层 (Applications)
- 应用框架层 (Application Framework)
- 系统运行库层 (Libraries & Android Runtime)
- Linux 内核层 (Linux Kernel)

### 3. Dalvik 虚拟机和 ART 的区别？

- **Dalvik**：早期 Android 使用的虚拟机，使用 JIT（即时编译）技术，每次运行都需要编译。
- **ART**：Android 5.0 开始使用的虚拟机，使用 AOT（预先编译）技术，在安装时就完成应用的编译。

### 4. Android 应用程序结构

典型的 Android 应用包含以下组件：
- src：Java 源代码
- res：资源文件
- AndroidManifest.xml：配置文件
- build.gradle：构建脚本
- libs：依赖库

---

## Activity

### 1. Activity 是什么？

Activity 是 Android 四大组件之一，提供用户界面用于与应用程序交互。它代表了一个屏幕，可以理解为一个页面。

### 2. Activity 生命周期

Activity 的生命周期包括以下几个主要方法：
- onCreate()
- onStart()
- onResume()
- onPause()
- onStop()
- onDestroy()
- onRestart()

### 3. Activity 启动模式

- **standard**：标准模式，默认模式，每次启动都会创建一个新的实例
- **singleTop**：栈顶复用模式，如果位于任务栈顶部则复用，否则新建
- **singleTask**：栈内复用模式，在整个任务栈中查找是否存在该 Activity 实例，有则复用并清除其上的所有 Activity
- **singleInstance**：单实例模式，具有此模式的 Activity 只能单独位于一个任务栈中

### 4. Activity 之间的数据传递方式有哪些？

- Intent 传值：适用于基本数据类型和实现了 Serializable 或 Parcelable 接口的对象
- 全局变量：通过 Application 类或静态变量
- SharedPreferences：适合存储简单的配置信息
- 文件存储：将数据保存在文件中进行传递

---

## Fragment

### 1. Fragment 为什么被称为第五大组件？

虽然 Fragment 不是标准的四大组件，但其重要性不亚于它们，提供了更好的 UI 灵活性和复用性。

### 2. Fragment 生命周期

Fragment 生命周期比 Activity 多了一些独有的回调方法：
- onAttach()
- onCreateView()
- onViewCreated()
- onActivityCreated()
- onDestroyView()
- onDetach()

### 3. Fragment 与 Activity 的通信方式

- 在 Activity 中调用 Fragment 的公共方法
- 通过接口回调的方式
- 使用 EventBus 等事件总线
- 通过 ViewModel 共享数据（MVVM 架构）

### 4. FragmentPagerAdapter 与 FragmentStatePagerAdapter 区别？

- **FragmentPagerAdapter**：适用于固定数量的少量页面，Fragment 实例会保留在内存中
- **FragmentStatePagerAdapter**：适用于大量页面或页面数动态变化的情况，只保留当前页面，其他页面会被销毁以节省内存

---

## Service

### 1. Service 是什么？

Service 是 Android 四大组件之一，用于执行长时间运行的操作，但不提供用户界面。

### 2. Service 的两种启动方式及生命周期

#### startService 方式
生命周期方法：
- onCreate()
- onStartCommand()
- onDestroy()

特点：一旦启动，即使启动它的组件被销毁，Service 也会一直运行

#### bindService 方式
生命周期方法：
- onCreate()
- onBind()
- onUnbind()
- onDestroy()

特点：绑定的服务与调用者绑定，调用者销毁时服务也会自动解绑

### 3. IntentService 是什么？

IntentService 是 Service 的子类，用来处理异步请求。它内部有一个工作线程来处理耗时操作，并且会自动停止服务。

### 4. 前台服务和后台服务的区别？

- **前台服务**：显示通知给用户，优先级高，不容易被系统杀死
- **后台服务**：无通知显示，容易被系统回收

---

## BroadcastReceiver

### 1. BroadcastReceiver 是什么？

BroadcastReceiver 是 Android 四大组件之一，用于接收并处理广播消息。

### 2. 广播的分类

- **普通广播**：完全异步，效率高但无法获取返回结果
- **有序广播**：同步执行，优先级高的接收器先接收到，可中断传播
- **本地广播**：仅在应用内传播，安全性高
- **粘性广播**：发送后会一直滞留，新注册的接收器仍能接收到（API 21 后已废弃）

### 3. 动态注册和静态注册的区别？

- **动态注册**：在代码中注册，灵活性强，随 Context 销毁而注销
- **静态注册**：在 AndroidManifest.xml 中注册，常驻系统，即使应用未启动也能接收广播

---

## ContentProvider

### 1. ContentProvider 是什么？

ContentProvider 是 Android 四大组件之一，用于不同应用程序之间共享数据。

### 2. 如何访问 ContentProvider 中的数据？

通过 ContentResolver 对象访问 ContentProvider 提供的数据，常用方法包括：
- query()
- insert()
- update()
- delete()

### 3. Uri、UriMatcher、ContentUris 的作用？

- **Uri**：统一资源标识符，用于唯一标识 ContentProvider 中的数据
- **UriMatcher**：用于匹配 Uri
- **ContentUris**：用于获取 Uri 路径后面的 ID 部分

---

## Intent

### 1. Intent 是什么？

Intent 是一个消息传递对象，可用于请求其他应用组件的动作。

### 2. 显式 Intent 和隐式 Intent 的区别？

- **显式 Intent**：明确指定目标组件的名称
- **隐式 Intent**：不指定具体组件，系统根据 Intent Filter 进行匹配

### 3. Intent Filter 是什么？

Intent Filter 是在 AndroidManifest.xml 中定义的过滤器，用于描述组件可以处理的 Intent 特征。

---

## View 和 ViewGroup

### 1. View 和 ViewGroup 的区别？

- **View**：所有 UI 组件的基类，表示单个控件
- **ViewGroup**：View 的子类，可以包含多个 View，作为容器使用

### 2. View 的绘制流程

View 的绘制主要包括三个步骤：
1. measure：测量视图大小
2. layout：确定视图位置
3. draw：绘制视图内容

### 3. 自定义 View 的流程

1. 继承 View 或 ViewGroup
2. 重写构造函数
3. 重写 onMeasure() 方法（需要时）
4. 重写 onDraw() 方法（View）或 dispatchDraw() 方法（ViewGroup）
5. 添加自定义属性（可选）

---

## 布局 Layout

### 1. 常见布局类型

- LinearLayout：线性布局
- RelativeLayout：相对布局
- FrameLayout：帧布局
- ConstraintLayout：约束布局
- GridLayout：网格布局
- CoordinatorLayout：协调布局

### 2. ConstraintLayout 的优势？

- 扁平化的视图结构，提高渲染性能
- 更灵活的约束关系设置
- 支持动画和过渡效果
- 可替代复杂的嵌套布局

### 3. include、merge、ViewStub 标签的作用？

- **include**：复用布局
- **merge**：减少布局层级嵌套
- **ViewStub**：按需加载布局，节省资源

---

## UI 控件

### 1. ListView 的优化方案

- 复用 convertView
- 使用 ViewHolder 模式
- 分页加载
- 图片懒加载
- 数据缓存

### 2. RecyclerView 与 ListView 的区别？

- ViewHolder 模式强制实现
- 更灵活的布局管理器
- 支持局部刷新
- 更好的动画支持
- 更容易实现拖拽和侧滑删除等功能

### 3. ViewPager 的原理？

ViewPager 结合 PagerAdapter 使用，内部维护一个缓存页面列表，通过 Scroller 实现页面切换的滑动效果。

---

## 数据存储

### 1. Android 提供的数据存储方式

- SharedPreferences：轻量级键值对存储
- 文件存储：内部存储和外部存储
- SQLite 数据库：轻量级关系型数据库
- ContentProvider：跨应用数据共享
- 网络存储：通过网络将数据存储到远程服务器

### 2. SharedPreferences 的优缺点？

优点：
- 使用简单
- 数据读取速度快

缺点：
- 只能存储简单数据类型
- 线程安全问题
- 全量写入效率低

### 3. SQLite 升级如何处理？

- onUpgrade() 方法中处理版本升级逻辑
- 通过 ALTER TABLE 等语句修改表结构
- 注意数据迁移和兼容性处理

---

## Handler 机制

### 1. Handler 的作用？

Handler 主要用于在不同线程间传递消息，解决线程间通信问题。

### 2. Handler 机制原理？

Handler 机制包含四个核心组件：
- Handler：消息处理者
- Message：消息载体
- MessageQueue：消息队列
- Looper：消息循环

### 3. 子线程中使用 Handler 的注意事项？

需要手动创建 Looper：
```java
Looper.prepare();
Handler handler = new Handler();
Looper.loop();
```

### 4. Handler 引起的内存泄漏及解决方案？

原因：非静态内部类持有外部类引用
解决方案：
- 使用静态内部类 + WeakReference
- 在 onDestroy 中移除所有消息和回调

---

## 线程和异步处理

### 1. Android 中的线程模型？

Android 中主线程负责 UI 更新，耗时操作应在子线程执行，避免 ANR。

### 2. AsyncTask 的优缺点？

优点：
- 使用简单
- 封装了线程池和 Handler

缺点：
- 生命周期问题
- 在 Android 11 中已被废弃
- 处理不当易引起内存泄漏

### 3. 线程池的优点？

- 重用线程，减少创建和销毁开销
- 精确控制最大并发数
- 提供更多功能如定时、定期执行等

### 4. IntentService vs Service + Thread？

- IntentService 内部封装了 HandlerThread，适用于处理单一异步任务
- Service + Thread 需要自己管理线程，更灵活但也更复杂

---

## 性能优化

### 1. 布局优化

- 减少布局嵌套层次
- 使用 include 复用布局
- 使用 merge 减少层级
- 使用 ViewStub 按需加载

### 2. 绘制优化

- onDraw 方法中避免创建对象
- 使用 canvas.clipRect() 帮助系统识别可见区域

### 3. 内存优化

- 避免内存泄漏
- 使用优化的数据结构
- 及时释放资源

### 4. 启动速度优化

- 减少 Application 和首屏 Activity 的初始化操作
- 使用异步初始化
- 延迟初始化非必要组件

### 5. APK 瘦身

- 移除无用资源
- 使用混淆
- 资源压缩
- so 库精简

---

## Android Jetpack

### 1. 什么是 Android Jetpack？

Android Jetpack 是一套组件、工具和指南，可以帮助开发者遵循最佳实践，减少样板代码，简化开发。

### 2. 常用的 Jetpack 组件

- Lifecycle：管理组件生命周期
- LiveData：可感知生命周期的数据持有者
- ViewModel：管理 UI 相关数据
- Room：SQLite 抽象层
- Navigation：导航组件
- Paging：分页加载数据
- WorkManager：后台任务调度

### 3. ViewModel 的作用？

ViewModel 用于存储和管理与 UI 相关的数据，在配置变更（如屏幕旋转）时数据不会丢失。

---

## 架构设计

### 1. MVC、MVP、MVVM 模式对比

- **MVC**：Model-View-Controller，View 和 Controller 联系紧密
- **MVP**：Model-View-Presenter，Presenter 解耦了 View 和 Model
- **MVVM**：Model-View-ViewModel，通过数据绑定实现 View 和 ViewModel 的解耦

### 2. Clean Architecture

Clean Architecture 将项目分为三层：
- 表现层（Presentation Layer）
- 领域层（Domain Layer）
- 数据层（Data Layer）

每层都有明确的职责，便于测试和维护。

---

## 网络通信

### 1. Android 中常用的网络框架

- OkHttp：高效的 HTTP 客户端
- Retrofit：RESTful API 客户端
- Volley：Google 推出的网络通信框架（现已较少使用）

### 2. Retrofit 的优势？

- 基于注解，使用简洁
- 支持多种数据解析器
- 与 RxJava 很好地结合
- 性能优秀

### 3. 网络请求中的加密方式？

- HTTPS：HTTP + SSL/TLS 加密传输
- 数据字段加密：如 AES、RSA 等算法
- 签名验证：防止数据篡改

---

## 图片加载

### 1. 常用图片加载框架

- Glide：Google 推荐，功能强大
- Picasso：Square 开源，简洁易用
- Fresco：Facebook 开源，适合加载大量图片

### 2. 图片加载优化策略？

- 图片压缩
- 内存缓存和磁盘缓存
- 图片复用
- 预加载

---

## 第三方框架

### 1. 常用的第三方库

- ButterKnife/Dagger/Hilt：依赖注入
- RxJava/RxAndroid：响应式编程
- EventBus：事件总线
- GreenDao/Realm：数据库框架

### 2. 依赖注入的优势？

- 解耦组件间的依赖关系
- 提高代码可测试性
- 简化对象创建过程

---

## 适配问题

### 1. 屏幕适配方案

- dp 适配：使用密度无关像素
- 限定符适配：values-sw 文件夹
- 刘海屏适配：Android P 以上版本 API
- 今日头条适配方案：修改 density 值

### 2. 权限适配

- Android 6.0 运行时权限申请
- Android 10 分区存储适配

---

## ANR 和 内存泄漏

### 1. ANR 出现的场景？

- Activity 在 5 秒内没有响应输入事件
- BroadcastReceiver 在 10 秒内没有执行完毕
- Service 在 20 秒内没有执行完毕

### 2. 如何分析 ANR？

- 查看 /data/anr/traces.txt 日志
- 使用 adb 命令导出 ANR 日志
- 分析主线程是否被阻塞

### 3. 内存泄漏检测工具？

- LeakCanary：Square 开源的内存泄漏检测工具
- MAT：Eclipse Memory Analyzer
- Android Studio Profiler

---

## APK 打包和签名

### 1. APK 打包流程？

1. 通过 AAPT 打包资源文件生成 R.java 文件
2. 处理 aidl 文件生成相应 java 文件
3. 通过 Java Compiler 编译 R.java、Java 文件为 .class 文件
4. 通过 dex 命令将 .class 文件转换成 .dex 文件
5. 通过 apkbuilder 工具将资源文件、dex 文件打包成未签名的 apk
6. 使用 jarsigner 对未签名的 apk 进行签名
7. 使用 zipalign 对 apk 进行对齐处理

### 2. 签名的作用？

- 应用升级：相同签名的应用才能覆盖安装
- 应用共享：相同签名的应用可以共享数据
- 权限申请：部分权限需要相同签名才能申请

---

## Kotlin

### 1. Kotlin 相对于 Java 的优势？

- 空安全
- 扩展函数
- 数据类
- Lambda 表达式
- 协程支持

### 2. 协程是什么？

协程是一种轻量级的线程，可以在单个线程中实现并发操作，避免了线程切换的开销。

### 3. let、apply、run、also、with 的区别？

| 函数 | 函数体中 this | 返回值 | 扩展函数 |
|------|---------------|--------|----------|
| let | 是 receiver 对象 | 函数块最后一行或 Unit | 是 |
| run | 是 receiver 对象 | 函数块最后一行或 Unit | 是 |
| also | 是调用者本身 | 调用者本身 | 是 |
| apply | 是 receiver 对象 | receiver 对象 | 是 |
| with | 是 receiver 对象 | 函数块最后一行或 Unit | 否 |

---

## 四大组件生命周期

### 1. Activity 生命周期图示

```
onCreate() -> onStart() -> onResume() -> Running -> onPause() -> onStop() -> onDestroy()
                                      ↑              ↓         ↑          ↓
                                   Back key    Home key  Another Activity covers
```

### 2. Service 生命周期

```
startService(): onCreate() -> onStartCommand() -> onDestroy()
bindService(): onCreate() -> onBind() -> onUnbind() -> onDestroy()
```

### 3. Fragment 生命周期与 Activity 生命周期的关系

Fragment 的生命周期受宿主 Activity 影响，同时有自己的特有方法，两者结合形成完整的生命周期。

---