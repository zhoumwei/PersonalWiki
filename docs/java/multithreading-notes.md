# Java多线程编程学习笔记

## 1. 多线程基础概念

### 1.1 进程与线程
- **进程**：是操作系统分配资源的基本单位，每个进程都有独立的内存空间
- **线程**：是CPU调度的基本单位，同一进程内的线程共享进程的内存空间

### 1.2 线程的优势
1. **提高程序性能**：多线程可以并行处理任务，提高程序执行效率
2. **提高资源利用率**：线程共享进程资源，降低了系统开销
3. **改善用户体验**：避免界面冻结，提高响应性

### 1.3 线程的生命周期
线程在其生命周期中会经历以下状态：
1. **新建(New)**：线程被创建但尚未启动
2. **就绪(Runnable)**：线程已启动，等待CPU调度执行
3. **运行(Running)**：线程正在执行
4. **阻塞(Blocked)**：线程因为某种原因暂停执行
5. **死亡(Dead)**：线程执行完毕或被强制终止

## 2. 线程的创建方式

### 2.1 继承Thread类
```java
public class MyThread extends Thread {
    @Override
    public void run() {
        // 线程执行的代码
        System.out.println("线程执行中...");
    }
}

// 使用
MyThread thread = new MyThread();
thread.start();
```

### 2.2 实现Runnable接口
```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        // 线程执行的代码
        System.out.println("线程执行中...");
    }
}

// 使用
MyRunnable runnable = new MyRunnable();
Thread thread = new Thread(runnable);
thread.start();
```

### 2.3 实现Callable接口
```java
import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class MyCallable implements Callable<String> {
    @Override
    public String call() throws Exception {
        // 线程执行的代码
        return "执行结果";
    }
}

// 使用
MyCallable callable = new MyCallable();
FutureTask<String> futureTask = new FutureTask<>(callable);
Thread thread = new Thread(futureTask);
thread.start();
String result = futureTask.get(); // 获取执行结果
```

### 2.4 使用线程池
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    // 线程执行的代码
    System.out.println("线程执行中...");
});
executor.shutdown();
```

## 3. 线程同步机制

### 3.1 synchronized关键字
synchronized是Java中最基本的同步机制，可以修饰方法或代码块。

#### 修饰实例方法
```java
public class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}
```

#### 修饰静态方法
```java
public class Counter {
    private static int count = 0;
    
    public static synchronized void increment() {
        count++;
    }
    
    public static synchronized int getCount() {
        return count;
    }
}
```

#### 修饰代码块
```java
public class Counter {
    private int count = 0;
    private final Object lock = new Object();
    
    public void increment() {
        synchronized(lock) {
            count++;
        }
    }
}
```

### 3.2 volatile关键字
volatile关键字用于保证变量的可见性，但不能保证原子性。

```java
public class VolatileExample {
    private volatile boolean flag = false;
    
    public void setFlag(boolean flag) {
        this.flag = flag;
    }
    
    public boolean getFlag() {
        return flag;
    }
}
```

### 3.3 Lock接口
Lock接口提供了比synchronized更灵活的锁机制。

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Counter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

### 3.4 ThreadLocal
ThreadLocal为每个线程提供独立的变量副本。

```java
public class ThreadLocalExample {
    private static final ThreadLocal<Integer> threadLocal = new ThreadLocal<Integer>() {
        @Override
        protected Integer initialValue() {
            return 0;
        }
    };
    
    public void increment() {
        threadLocal.set(threadLocal.get() + 1);
    }
    
    public int getValue() {
        return threadLocal.get();
    }
}
```

## 4. 线程间通信

### 4.1 wait/notify机制
```java
public class WaitNotifyExample {
    private final Object lock = new Object();
    private boolean condition = false;
    
    public void waitForCondition() throws InterruptedException {
        synchronized(lock) {
            while (!condition) {
                lock.wait(); // 等待条件满足
            }
            // 条件满足后执行相应操作
        }
    }
    
    public void setCondition() {
        synchronized(lock) {
            condition = true;
            lock.notifyAll(); // 通知等待的线程
        }
    }
}
```

### 4.2 生产者消费者模式
```java
import java.util.LinkedList;
import java.util.Queue;

public class ProducerConsumerExample {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int capacity = 10;
    
    public void produce(int item) throws InterruptedException {
        synchronized(queue) {
            while (queue.size() == capacity) {
                queue.wait(); // 队列满时等待
            }
            queue.offer(item);
            queue.notifyAll(); // 通知消费者
        }
    }
    
    public int consume() throws InterruptedException {
        synchronized(queue) {
            while (queue.isEmpty()) {
                queue.wait(); // 队列空时等待
            }
            int item = queue.poll();
            queue.notifyAll(); // 通知生产者
            return item;
        }
    }
}
```

## 5. 线程安全集合

### 5.1 ConcurrentHashMap
```java
import java.util.concurrent.ConcurrentHashMap;

ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
Integer value = map.get("key");
```

### 5.2 CopyOnWriteArrayList
```java
import java.util.concurrent.CopyOnWriteArrayList;

CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
list.add("item");
String item = list.get(0);
```

### 5.3 BlockingQueue
```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);
queue.put(1); // 阻塞式添加
Integer item = queue.take(); // 阻塞式获取
```

## 6. 线程池

### 6.1 ThreadPoolExecutor
```java
import java.util.concurrent.*;

ThreadPoolExecutor executor = new ThreadPoolExecutor(
    5,                          // 核心线程数
    10,                         // 最大线程数
    60L,                        // 空闲线程存活时间
    TimeUnit.SECONDS,           // 时间单位
    new LinkedBlockingQueue<>(),// 工作队列
    Executors.defaultThreadFactory(), // 线程工厂
    new ThreadPoolExecutor.AbortPolicy() // 拒绝策略
);
```

### 6.2 常见的线程池
```java
// 固定大小线程池
ExecutorService fixedPool = Executors.newFixedThreadPool(5);

// 单线程线程池
ExecutorService singlePool = Executors.newSingleThreadExecutor();

// 缓存线程池
ExecutorService cachedPool = Executors.newCachedThreadPool();

// 定时任务线程池
ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(5);
```

## 7. 并发工具类

### 7.1 CountDownLatch
```java
import java.util.concurrent.CountDownLatch;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int threadCount = 5;
        CountDownLatch latch = new CountDownLatch(threadCount);
        
        for (int i = 0; i < threadCount; i++) {
            new Thread(() -> {
                System.out.println(Thread.currentThread().getName() + " 执行完毕");
                latch.countDown(); // 计数器减1
            }).start();
        }
        
        latch.await(); // 等待所有线程执行完毕
        System.out.println("所有线程执行完毕");
    }
}
```

### 7.2 CyclicBarrier
```java
import java.util.concurrent.CyclicBarrier;

public class CyclicBarrierExample {
    public static void main(String[] args) {
        int threadCount = 5;
        CyclicBarrier barrier = new CyclicBarrier(threadCount, () -> {
            System.out.println("所有线程都到达屏障点");
        });
        
        for (int i = 0; i < threadCount; i++) {
            new Thread(() -> {
                try {
                    System.out.println(Thread.currentThread().getName() + " 到达屏障点");
                    barrier.await(); // 等待其他线程
                    System.out.println(Thread.currentThread().getName() + " 继续执行");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```

### 7.3 Semaphore
```java
import java.util.concurrent.Semaphore;

public class SemaphoreExample {
    public static void main(String[] args) {
        Semaphore semaphore = new Semaphore(3); // 允许3个线程同时访问
        
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                try {
                    semaphore.acquire(); // 获取许可
                    System.out.println(Thread.currentThread().getName() + " 获得许可");
                    Thread.sleep(2000); // 模拟业务处理
                    System.out.println(Thread.currentThread().getName() + " 释放许可");
                    semaphore.release(); // 释放许可
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```

## 8. 原子操作类

### 8.1 AtomicInteger
```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicExample {
    private AtomicInteger atomicInteger = new AtomicInteger(0);
    
    public void increment() {
        atomicInteger.incrementAndGet();
    }
    
    public int getValue() {
        return atomicInteger.get();
    }
}
```

### 8.2 AtomicReference
```java
import java.util.concurrent.atomic.AtomicReference;

public class AtomicReferenceExample {
    private AtomicReference<String> atomicString = new AtomicReference<>("initial");
    
    public void updateString() {
        atomicString.compareAndSet("initial", "updated");
    }
    
    public String getValue() {
        return atomicString.get();
    }
}
```

## 9. 死锁问题

### 9.1 死锁产生的条件
1. **互斥条件**：资源不能被多个线程同时占用
2. **请求和保持条件**：线程已获得部分资源，同时等待其他资源
3. **不剥夺条件**：已获得的资源不能被强制释放
4. **循环等待条件**：存在一种线程资源的循环等待链

### 9.2 死锁示例
```java
public class DeadlockExample {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();
    
    public static void main(String[] args) {
        new Thread(() -> {
            synchronized (lock1) {
                System.out.println("线程1获得lock1");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}
                
                synchronized (lock2) {
                    System.out.println("线程1获得lock2");
                }
            }
        }).start();
        
        new Thread(() -> {
            synchronized (lock2) {
                System.out.println("线程2获得lock2");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {}
                
                synchronized (lock1) {
                    System.out.println("线程2获得lock1");
                }
            }
        }).start();
    }
}
```

### 9.3 避免死锁的方法
1. **避免嵌套锁**：尽量不要同时获取多个锁
2. **按固定顺序获取锁**：所有线程按相同顺序获取锁
3. **设置锁超时时间**：使用tryLock()方法设置超时
4. **使用并发工具类**：使用java.util.concurrent包中的工具类

## 10. 性能优化建议

### 10.1 减少锁的竞争
1. **缩小锁的范围**：只在必要时才持有锁
2. **降低锁的粒度**：使用多个锁替代单一粗粒度锁
3. **使用读写锁**：读多写少的场景使用ReadWriteLock

### 10.2 选择合适的并发工具
1. **无竞争场景**：使用AtomicXxx类
2. **高并发读写**：使用ConcurrentHashMap
3. **批量任务处理**：使用线程池
4. **任务协调**：使用CountDownLatch、CyclicBarrier等工具类

### 10.3 注意线程安全
1. **不可变对象**：使用final关键字创建不可变对象
2. **线程封闭**：使用ThreadLocal实现线程封闭
3. **使用线程安全类**：优先使用java.util.concurrent包中的类

## 总结

Java多线程编程是一个复杂的主题，涉及线程创建、同步、通信等多个方面。掌握这些知识点对于编写高性能、高并发的Java应用程序至关重要。在实际开发中，我们需要根据具体场景选择合适的并发工具和同步机制，同时要注意避免常见的并发问题如死锁、竞态条件等。