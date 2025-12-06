# Java基础面试题及答案

## Java语言基础

### 1. Java语言有哪些特点？
答：Java语言具有以下主要特点：
1. **简单性**：语法类似C++但去除了容易混淆的特性，如指针操作、多继承等
2. **面向对象**：支持封装、继承、多态等面向对象特性
3. **分布式**：支持网络编程，提供了丰富的网络应用编程接口
4. **健壮性**：强制类型检查，提供异常处理机制，具有垃圾回收机制
5. **安全性**：提供安全管理器和字节码验证器，防止恶意代码攻击
6. **平台无关性**：通过JVM实现"一次编写，到处运行"
7. **可移植性**：Java的数据类型大小是固定的，不依赖于具体平台
8. **解释执行**：Java字节码可以在任何实现了JVM的平台上解释执行
9. **高性能**：通过即时编译器(JIT)将热点代码编译为本地机器码
10. **多线程**：内置多线程支持
11. **动态性**：Java程序可以在运行时加载和链接新的类

### 2. JDK、JRE和JVM的区别？
答：
- **JVM**(Java Virtual Machine)：Java虚拟机，是Java平台无关性的核心，负责执行字节码
- **JRE**(Java Runtime Environment)：Java运行时环境，包含JVM和运行Java程序所需的核心类库
- **JDK**(Java Development Kit)：Java开发工具包，包含JRE和开发工具(如编译器、调试器等)

三者的关系：JDK > JRE > JVM

### 3. 什么是字节码？采用字节码的好处是什么？
答：字节码是Java源代码经过编译器编译后生成的中间代码，是一种与平台无关的二进制码。

采用字节码的好处：
1. **平台无关性**：字节码可以在任何安装了JVM的平台上运行
2. **安全性**：字节码在执行前会经过验证，防止恶意代码执行
3. **性能优化**：JVM可以对字节码进行优化，如即时编译(JIT)
4. **动态性**：支持动态加载和链接类

### 4. Java和C++的区别？
答：
| 特性 | Java | C++ |
|------|------|-----|
| 内存管理 | 自动垃圾回收 | 手动管理内存 |
| 平台相关性 | 平台无关 | 平台相关 |
| 多重继承 | 不支持类的多重继承，但支持接口的多重实现 | 支持多重继承 |
| 指针 | 不支持指针操作 | 支持指针操作 |
| 运算符重载 | 不支持 | 支持 |
| 预处理器 | 不支持宏定义 | 支持宏定义 |
| goto语句 | 不支持 | 支持 |

## 面向对象编程

### 5. 面向对象的三大特性是什么？
答：面向对象的三大特性是：
1. **封装**(Encapsulation)：隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高代码复用性和安全性
2. **继承**(Inheritance)：子类可以继承父类的属性和方法，提高代码复用性，使类与类之间产生关系
3. **多态**(Polymorphism)：同一个对象在程序不同时刻体现的不同状态，提高程序的扩展性和维护性

### 6. 什么是重载(Overloading)和重写(Overriding)？
答：
**重载**(Overloading)：
- 发生在同一类中
- 方法名相同，参数列表不同(参数类型、个数、顺序)
- 返回值类型可以不同
- 访问修饰符可以不同
- 在编译时根据参数列表决定调用哪个方法

**重写**(Overriding)：
- 发生在父子类中
- 方法名、参数列表、返回值类型都相同
- 访问修饰符不能更低(如父类为protected，子类不能为private)
- 抛出的异常不能更大
- 在运行时根据对象的实际类型决定调用哪个方法

### 7. 接口和抽象类的区别？
答：

| 特性 | 接口(Interface) | 抽象类(Abstract Class) |
|------|----------------|------------------------|
| 关键字 | implements | extends |
| 构造方法 | 不能有 | 可以有 |
| 成员变量 | 只能是常量(public static final) | 可以有普通成员变量 |
| 方法 | JDK8前只能是抽象方法，JDK8后可以有默认方法和静态方法 | 可以有抽象方法和普通方法 |
| 实现数量 | 可以实现多个接口 | 只能继承一个抽象类 |
| 访问修饰符 | 默认是public | 可以有各种访问修饰符 |

### 8. equals()和==的区别？
答：
- **==**：
  - 基本数据类型：比较值是否相等
  - 引用数据类型：比较两个对象的地址是否相同(即是否指向同一个对象)
- **equals()**：
  - 不能比较基本数据类型
  - Object类中的equals()方法默认使用==比较，但很多类重写了该方法，如String、Integer等，用于比较对象的内容是否相等

### 9. hashCode()和equals()的关系？
答：
1. **约定**：
   - 如果两个对象通过equals()比较相等，则它们的hashCode()必须相等
   - 如果两个对象的hashCode()相等，它们通过equals()比较不一定相等
   - 如果两个对象的hashCode()不相等，它们通过equals()比较一定不相等

2. **重写规则**：
   - 重写equals()方法时，通常也需要重写hashCode()方法
   - 保证相等的对象具有相同的哈希码

## Java集合框架

### 10. Java集合框架的整体结构？
答：Java集合框架主要由两大接口派生而出：Collection和Map

Collection接口：
- **List**：有序、可重复
  - ArrayList：基于数组实现，查询快，增删慢
  - LinkedList：基于链表实现，增删快，查询慢
  - Vector：线程安全的ArrayList
- **Set**：无序、不可重复
  - HashSet：基于HashMap实现
  - TreeSet：基于TreeMap实现，可以排序
  - LinkedHashSet：保持插入顺序
- **Queue**：队列
  - LinkedList：可以作为队列使用
  - PriorityQueue：优先级队列

Map接口：
- HashMap：基于哈希表实现，线程不安全
- TreeMap：基于红黑树实现，可以排序
- LinkedHashMap：保持插入顺序
- Hashtable：线程安全的HashMap
- ConcurrentHashMap：线程安全的HashMap，性能优于Hashtable

### 11. ArrayList和LinkedList的区别？
答：

| 特性 | ArrayList | LinkedList |
|------|-----------|------------|
| 底层实现 | 动态数组 | 双向链表 |
| 查询效率 | O(1) | O(n) |
| 增删效率 | O(n) | O(1) |
| 内存占用 | 较少 | 较多(存储前后节点引用) |
| 适用场景 | 频繁查询、较少增删 | 频繁增删、较少查询 |

### 12. HashMap的实现原理？
答：HashMap是基于哈希表的Map接口实现，允许null键和null值，不保证映射的顺序。

JDK1.8之前的实现：
- 数组+链表的结构
- 通过key的hashCode经过扰动函数处理得到哈希值
- 通过(n-1)&hash判断当前元素存放的位置(数组下标)
- 如果当前位置存在元素，就判断该元素与要存入元素的hash值和key是否相同，相同则覆盖，不同就拉链法解决冲突

JDK1.8的优化：
- 当链表长度大于阈值(默认为8)时，将链表转换为红黑树
- 当红黑树节点少于阈值(默认为6)时，又会转回链表
- 这样做的好处是优化了极端情况下的查询效率，从O(n)变为O(logn)

### 13. ConcurrentHashMap的实现原理？
答：ConcurrentHashMap是线程安全的HashMap，在JDK1.7和JDK1.8有不同的实现方式：

JDK1.7：
- 使用分段锁(Segment)机制
- 将数据分成一段一段的存储，给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问
- Segment继承ReentrantLock，用来充当锁的角色

JDK1.8：
- 取消了Segment分段锁，采用CAS+Synchronized来保证并发安全
- 数据结构跟HashMap1.8的结构一样，数组+链表+红黑树
- synchronized只锁定当前链表或红黑树的首节点，这样只要hash不冲突，就不会产生并发问题

## 异常处理

### 14. Java异常体系结构？
答：Java异常体系以Throwable为根类：
```
Throwable
├── Error(错误)
│   ├── VirtualMachineError
│   ├── IOError
│   └── ...
└── Exception(异常)
    ├── RuntimeException(运行时异常)
    │   ├── NullPointerException
    │   ├── IndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   └── ...
    └── CheckedException(检查异常)
        ├── IOException
        ├── SQLException
        └── ...
```

### 15. Error和Exception的区别？
答：
- **Error**：
  - 表示JVM无法处理的严重问题
  - 程序不应该捕获或处理这类异常
  - 如OutOfMemoryError、StackOverflowError等
- **Exception**：
  - 表示程序可以处理的异常
  - 可以被捕获并处理
  - 分为检查异常(CheckedException)和运行时异常(RuntimeException)

### 16. throw和throws的区别？
答：
- **throw**：
  - 在方法体内使用，用于抛出一个具体的异常对象
  - 后面跟的是异常类的实例
  - 例如：`throw new IllegalArgumentException("参数不合法");`
- **throws**：
  - 在方法声明时使用，用于声明该方法可能抛出的异常
  - 后面跟的是异常类名
  - 例如：`public void readFile() throws IOException {}`

## 泛型

### 17. 什么是泛型？有什么优点？
答：泛型是JDK1.5引入的特性，允许在定义类、接口和方法时使用类型形参。

优点：
1. **类型安全**：在编译时检查类型安全，避免运行时ClassCastException
2. **消除强制类型转换**：不需要显式的类型转换
3. **提高代码复用性**：同一个类或方法可以处理多种类型的数据

### 18. 泛型中的PECS原则是什么？
答：PECS是Producer Extends Consumer Super的缩写：
- **PE**：如果需要一个只读的泛型集合(生产者)，应该使用<? extends T>
- **CS**：如果需要一个只写的泛型集合(消费者)，应该使用<? super T>

这样设计的原则是为了保证类型安全。

## IO/NIO

### 19. BIO、NIO、AIO的区别？
答：
- **BIO**(Blocking IO)：
  - 同步阻塞IO
  - 一个连接对应一个线程
  - 适用于连接数目比较小且固定的架构

- **NIO**(Non-blocking IO)：
  - 同步非阻塞IO
  - 一个线程处理多个连接
  - 通过Selector轮询注册在其上的Channel，实现一个线程处理多个连接

- **AIO**(Asynchronous IO)：
  - 异步非阻塞IO
  - 引入了异步通道的概念，采用了Proactor模式
  - 有效的请求才启动线程，特点是先由操作系统完成后才通知服务端启动线程去处理

### 20. NIO的核心组件有哪些？
答：NIO的核心组件包括：
1. **Channel**(通道)：表示到实体(如硬件设备、文件、网络套接字)的开放连接
2. **Buffer**(缓冲区)：本质上是一个容器对象，提供对数据的结构化访问以及在缓冲区和通道进行交互
3. **Selector**(选择器)：用于监听多个Channel的事件，实现单线程管理多个Channel

## 反射

### 21. 什么是反射？有什么作用？
答：反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性。

作用：
1. 在运行时判断任意一个对象所属的类
2. 在运行时构造任意一个类的对象
3. 在运行时判断任意一个类所具有的成员变量和方法
4. 在运行时调用任意一个对象的方法
5. 生成动态代理

### 22. 反射的优缺点？
答：
**优点**：
1. 运行期类型的判断，动态加载类
2. 提高了程序的灵活性和扩展性

**缺点**：
1. 性能开销大：反射操作涉及动态解析，JVM无法对这些代码进行优化
2. 安全限制：反射可能破坏封装性
3. 模糊程序内部逻辑：代码可读性下降，维护困难

## 注解

### 23. 什么是注解？有哪些内置注解？
答：注解是JDK1.5引入的特性，是一种元数据，提供有关程序但不属于程序本身的数据。

常用的内置注解：
1. **@Override**：检查该方法是否是重写方法
2. **@Deprecated**：标记过时的元素
3. **@SuppressWarnings**：抑制编译器警告
4. **@FunctionalInterface**：标识函数式接口(JDK8)

### 24. 元注解有哪些？
答：元注解是用于注解其他注解的注解：
1. **@Retention**：指定注解的保留策略(SOURCE/CLASS/RUNTIME)
2. **@Target**：指定注解可以应用的目标类型
3. **@Documented**：标记注解应该被javadoc工具记录
4. **@Inherited**：标记注解可以被继承
5. **@Repeatable**：标记注解可以重复使用(JDK8)

## Java 8新特性

### 25. Lambda表达式是什么？有什么优势？
答：Lambda表达式是JDK8引入的重要特性，是一种匿名函数，可以不需要名称，但有参数列表、函数主体、返回类型和可能抛出的异常列表。

优势：
1. **简洁性**：代码更加简洁
2. **函数式编程**：支持函数式编程风格
3. **并行处理**：结合Stream API可以轻松实现并行处理

### 26. Stream API有什么作用？
答：Stream API是JDK8引入的用来处理集合的API，提供了一种高效且易于使用的处理数据的方式。

特点：
1. **无存储**：Stream不是数据结构，不保存数据
2. **函数式**：对Stream的任何修改都不会修改背后的数据源
3. **惰性求值**：许多Stream操作都是惰性的，只有在结果真正需要时才会执行
4. **可消费性**：Stream只能被消费一次，一旦遍历完就失效

## JVM相关

### 27. Java程序的执行过程？
答：Java程序的执行过程如下：
1. 编写Java源代码(.java文件)
2. 使用javac命令编译源代码生成字节码文件(.class文件)
3. JVM中的类加载器加载.class文件
4. JVM中的执行引擎执行字节码，将字节码翻译成机器码在操作系统上运行

### 28. 什么是类加载机制？
答：类加载机制是指虚拟机把描述类的数据从Class文件加载到内存，并对数据进行校验、转换解析和初始化，最终形成可以被虚拟机直接使用的Java类型的过程。

类加载过程包括：
1. **加载**：通过类的全限定名获取定义此类的二进制字节流，并将静态存储结构转化为方法区的运行时数据结构，在内存中生成代表这个类的Class对象
2. **验证**：确保Class文件的字节流中包含的信息符合当前虚拟机的要求
3. **准备**：为类变量分配内存并设置类变量初始值
4. **解析**：将常量池内的符号引用替换为直接引用
5. **初始化**：执行类构造器<clinit>()方法

## 设计模式

### 29. 常见的设计模式有哪些？
答：常见的设计模式包括：
**创建型模式**：
- 单例模式(Singleton)
- 工厂方法模式(Factory Method)
- 抽象工厂模式(Abstract Factory)
- 建造者模式(Builder)
- 原型模式(Prototype)

**结构型模式**：
- 适配器模式(Adapter)
- 装饰器模式(Decorator)
- 代理模式(Proxy)
- 外观模式(Facade)
- 桥接模式(Bridge)
- 组合模式(Composite)
- 享元模式(Flyweight)

**行为型模式**：
- 策略模式(Strategy)
- 模板方法模式(Template Method)
- 观察者模式(Observer)
- 迭代器模式(Iterator)
- 责任链模式(Chain of Responsibility)
- 命令模式(Command)
- 备忘录模式(Memento)
- 状态模式(State)
- 访问者模式(Visitor)
- 中介者模式(Mediator)
- 解释器模式(Interpreter)

### 30. 单例模式有几种实现方式？
答：单例模式有多种实现方式：

1. **饿汉式**：
```java
public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        return INSTANCE;
    }
}
```

2. **懒汉式(线程不安全)**：
```java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

3. **懒汉式(线程安全)**：
```java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

4. **双重检查锁定**：
```java
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

5. **静态内部类**：
```java
public class Singleton {
    private Singleton() {}
    
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

6. **枚举**：
```java
public enum Singleton {
    INSTANCE;
    
    public void doSomething() {
        // 业务方法
    }
}
```

## 总结

以上是Java基础相关的常见面试题及参考答案。这些知识点涵盖了Java语言的核心概念，是Java程序员必须掌握的基础知识。在准备面试时，不仅要记住这些知识点，还要理解其背后的原理和应用场景。