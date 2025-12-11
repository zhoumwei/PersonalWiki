---
layout: doc
title: Java虚拟机(JVM)学习笔记
---

# Java虚拟机(JVM)

Java虚拟机(JVM)是Java程序的运行环境，负责执行Java字节码。它是Java语言跨平台特性的核心实现，也是Java性能优化的关键所在。

## 1. JVM体系结构

### 1.1 类加载子系统(Class Loader SubSystem)
类加载子系统负责从文件系统或者网络中加载Class文件，ClassLoader是其实现机制。

#### 类加载器分类：
1. **Bootstrap ClassLoader**(启动类加载器)：加载JVM自身需要的类，如rt.jar
2. **Extension ClassLoader**(扩展类加载器)：加载jre/lib/ext目录下的类库
3. **Application ClassLoader**(应用程序类加载器)：加载CLASSPATH下的用户类
4. **Custom ClassLoader**(自定义类加载器)：用户自定义的类加载器

#### 双亲委派机制：
类加载器在加载类时采用双亲委派模式，即当一个类加载器收到类加载请求时，首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器完成。

### 1.2 运行时数据区(Runtime Data Area)
JVM在运行Java程序时会把它所管理的内存划分为若干个不同的数据区域：

1. **程序计数器**(Program Counter Register)：记录当前线程执行的字节码行号
2. **Java虚拟机栈**(Java Virtual Machine Stacks)：存储局部变量表、操作数栈、动态链接、方法出口等信息
3. **本地方法栈**(Native Method Stacks)：为虚拟机使用到的Native方法服务
4. **Java堆**(Java Heap)：存放对象实例，是垃圾收集器管理的主要区域
5. **方法区**(Method Area)：存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据

### 1.3 执行引擎(Execution Engine)
执行引擎负责执行字节码：
1. **解释器**(Interpreter)：逐行解释执行字节码
2. **即时编译器**(JIT Compiler)：将热点代码编译成本地机器码
3. **垃圾回收器**(Garbage Collector)：自动回收不再使用的对象

## 2. JVM内存模型详解

### 2.1 程序计数器(Program Counter Register)
- 占用内存很小
- 线程私有
- 唯一一个不会出现OutOfMemoryError的内存区域

### 2.2 Java虚拟机栈(Java Virtual Machine Stacks)
- 线程私有
- 生命周期与线程相同
- 描述的是Java方法执行的内存模型：每个方法执行的同时都会创建一个栈帧(Stack Frame)用于存储局部变量表、操作数栈、动态链接、方法出口等信息

可能出现的异常：
- **StackOverflowError**：线程请求的栈深度大于虚拟机所允许的深度
- **OutOfMemoryError**：扩展时无法申请到足够的内存

### 2.3 本地方法栈(Native Method Stacks)
- 为虚拟机使用到的Native方法服务
- 异常类型与虚拟机栈相同

### 2.4 Java堆(Java Heap)
- JVM管理的最大一块内存
- 线程共享
- 存放几乎所有的对象实例
- 是垃圾收集器管理的主要区域

### 2.5 方法区(Method Area)
- 线程共享
- 存储类信息、常量、静态变量、即时编译器编译后的代码等数据
- 在HotSpot虚拟机中称为"永久代"(Permanent Generation)
- 在JDK 8及以后版本中，被元空间(Metaspace)取代

### 2.6 运行时常量池(Runtime Constant Pool)
- 是方法区的一部分
- 存放编译期生成的各种字面量和符号引用

## 3. JVM垃圾回收机制(GC)

### 3.1 对象存活判定算法

1. **引用计数算法**(Reference Counting)
   - 给对象添加一个引用计数器，每当有一个地方引用它时，计数器加1；引用失效时减1
   - 缺点：难以解决循环引用问题

2. **可达性分析算法**(Reachability Analysis)
   - 通过一系列称为"GC Roots"的对象作为起始点，向下搜索，搜索所走过的路径称为引用链
   - 当一个对象到GC Roots没有任何引用链相连，则证明此对象不可用

### 3.2 GC Roots对象包括：
- 虚拟机栈中引用的对象
- 方法区中类静态属性引用的对象
- 方法区中常量引用的对象
- 本地方法栈中JNI引用的对象

### 3.3 垃圾收集算法

1. **标记-清除算法**(Mark-Sweep)
   - 分为标记和清除两个阶段
   - 缺点：效率不高，会产生内存碎片

2. **复制算法**(Copying)
   - 将可用内存按容量划分为大小相等的两块，每次只使用其中一块
   - 适用于新生代

3. **标记-整理算法**(Mark-Compact)
   - 标记过程与标记-清除算法一样，但后续步骤是让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存
   - 适用于老年代

4. **分代收集算法**(Generational Collection)
   - 根据对象存活周期的不同将内存划分为几块
   - 一般是把Java堆分为新生代和老年代

### 3.4 垃圾收集器

1. **Serial收集器**：单线程收集器
2. **ParNew收集器**：Serial收集器的多线程版本
3. **Parallel Scavenge收集器**：注重吞吐量的收集器
4. **Serial Old收集器**：Serial收集器的老年代版本
5. **Parallel Old收集器**：Parallel Scavenge收集器的老年代版本
6. **CMS收集器**(Concurrent Mark Sweep)：以获取最短回收停顿时间为目标的收集器
7. **G1收集器**(Garbage First)：面向服务端应用的垃圾收集器

## 4. JVM性能调优

### 4.1 JVM参数设置

#### 堆内存相关参数：
- **-Xms**：初始堆大小
- **-Xmx**：最大堆大小
- **-Xmn**：新生代大小
- **-XX:NewRatio**：老年代与新生代的比例
- **-XX:SurvivorRatio**：Eden区与Survivor区的比例

#### 垃圾收集器相关参数：
- **-XX:+UseSerialGC**：使用Serial+Serial Old收集器
- **-XX:+UseParNewGC**：使用ParNew+Serial Old收集器
- **-XX:+UseParallelGC**：使用Parallel Scavenge+Parallel Old收集器
- **-XX:+UseConcMarkSweepGC**：使用ParNew+CMS+Serial Old收集器
- **-XX:+UseG1GC**：使用G1收集器

#### GC日志相关参数：
- **-XX:+PrintGC**：打印GC信息
- **-XX:+PrintGCDetails**：打印详细的GC信息
- **-XX:+PrintGCTimeStamps**：打印GC时间戳

### 4.2 性能监控工具

1. **jps**：显示指定系统内所有的HotSpot虚拟机进程
2. **jstat**：监视虚拟机各种运行状态信息
3. **jinfo**：实时查看和调整虚拟机各项参数
4. **jmap**：生成堆转储快照
5. **jhat**：分析堆转储快照
6. **jstack**：生成虚拟机当前时刻的线程快照
7. **VisualVM**：可视化故障诊断工具

## 5. JVM类加载机制

### 5.1 类加载时机
类从被加载到虚拟机内存中开始，到卸载出内存为止，整个生命周期包括：
1. 加载(Loading)
2. 验证(Verification)
3. 准备(Preparation)
4. 解析(Resolution)
5. 初始化(Initialization)
6. 使用(Using)
7. 卸载(Unloading)

其中验证、准备、解析统称为连接(Linking)。

### 5.2 类初始化触发条件
主动引用会导致类的初始化：
1. 遇到new、getstatic、putstatic或invokestatic这4条字节码指令时
2. 使用java.lang.reflect包的方法对类进行反射调用时
3. 初始化一个类时，发现其父类还没有进行过初始化
4. 调用main方法的主类会在执行前初始化
5. 当使用JDK 1.7的动态语言支持时，如果一个java.lang.invoke.MethodHandle实例最后的解析结果REF_getStatic、REF_putStatic、REF_invokeStatic的方法句柄，并且这个方法句柄所对应的类没有进行过初始化

### 5.3 类加载过程详解

1. **加载**：
   - 通过类的全限定名获取定义此类的二进制字节流
   - 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构
   - 在内存中生成一个代表这个类的java.lang.Class对象

2. **验证**：
   - 文件格式验证
   - 元数据验证
   - 字节码验证
   - 符号引用验证

3. **准备**：
   - 为类变量分配内存并设置类变量初始值

4. **解析**：
   - 将常量池内的符号引用替换为直接引用

5. **初始化**：
   - 执行类构造器&lt;clinit&gt;()方法

## 总结

JVM是Java生态系统的核心组件，深入了解其内部机制有助于我们编写更高效的Java程序，更好地进行性能调优和故障排查。掌握JVM的工作原理不仅能帮助我们在开发过程中避免常见的性能陷阱，还能在遇到复杂问题时提供有力的技术支撑。