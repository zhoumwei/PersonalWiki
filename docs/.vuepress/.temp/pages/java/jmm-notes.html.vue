<template><div><h1 id="java内存模型-jmm" tabindex="-1"><a class="header-anchor" href="#java内存模型-jmm"><span>Java内存模型(JMM)</span></a></h1>
<p>Java内存模型(Java Memory Model，JMM)是Java虚拟机规范中定义的一种抽象规范，用于屏蔽各种硬件和操作系统的内存访问差异，实现Java程序在各个平台下都能达到一致的内存访问效果。</p>
<h2 id="_1-jmm基础概念" tabindex="-1"><a class="header-anchor" href="#_1-jmm基础概念"><span>1. JMM基础概念</span></a></h2>
<h3 id="_1-1-主内存与工作内存" tabindex="-1"><a class="header-anchor" href="#_1-1-主内存与工作内存"><span>1.1 主内存与工作内存</span></a></h3>
<p>Java内存模型规定了所有的变量都存储在主内存(Main Memory)中，每条线程还有自己的工作内存(Working Memory)，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存中的数据。</p>
<ul>
<li><strong>主内存</strong>(Main Memory)：存储Java实例对象、静态变量等共享数据</li>
<li><strong>工作内存</strong>(Working Memory)：每个线程私有的内存区域，存储该线程使用到的变量副本</li>
</ul>
<h3 id="_1-2-内存交互操作" tabindex="-1"><a class="header-anchor" href="#_1-2-内存交互操作"><span>1.2 内存交互操作</span></a></h3>
<p>Java内存模型定义了8种操作来完成主内存和工作内存之间的交互协议：</p>
<ol>
<li><strong>lock</strong>(锁定)：作用于主内存的变量，标识为线程独占状态</li>
<li><strong>unlock</strong>(解锁)：作用于主内存的变量，释放锁定状态</li>
<li><strong>read</strong>(读取)：从主内存传输变量值到工作内存</li>
<li><strong>load</strong>(载入)：把read操作得到的变量值放入工作内存的变量副本中</li>
<li><strong>use</strong>(使用)：把工作内存中的变量值传递给执行引擎</li>
<li><strong>assign</strong>(赋值)：把执行引擎接收到的值赋给工作内存中的变量</li>
<li><strong>store</strong>(存储)：把工作内存中的变量值传送到主内存</li>
<li><strong>write</strong>(写入)：把store操作得到的值放入主内存的变量中</li>
</ol>
<h2 id="_2-内存模型三大特性" tabindex="-1"><a class="header-anchor" href="#_2-内存模型三大特性"><span>2. 内存模型三大特性</span></a></h2>
<h3 id="_2-1-原子性-atomicity" tabindex="-1"><a class="header-anchor" href="#_2-1-原子性-atomicity"><span>2.1 原子性(Atomicity)</span></a></h3>
<p>原子性指的是一个操作要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。</p>
<p>Java内存模型保证了基本数据类型的访问读写具有原子性，但对于64位的数据类型(long和double)在未声明volatile的情况下，允许虚拟机将其划分为两次32位的操作来进行。</p>
<h3 id="_2-2-可见性-visibility" tabindex="-1"><a class="header-anchor" href="#_2-2-可见性-visibility"><span>2.2 可见性(Visibility)</span></a></h3>
<p>可见性是指当一个线程修改了共享变量的值时，其他线程能够立即得知这个修改。</p>
<p>Java提供了三种方式实现可见性：</p>
<ol>
<li><strong>volatile</strong>：保证新值能立即同步到主内存，并且每次使用前立即从主内存刷新</li>
<li><strong>synchronized</strong>：对一个变量执行unlock操作之前，必须先把此变量同步回主内存中</li>
<li><strong>final</strong>：被final修饰的字段在构造器中一旦初始化完成，并且构造器没有把this引用传递出去，那么在其他线程中就能看见final字段的值</li>
</ol>
<h3 id="_2-3-有序性-ordering" tabindex="-1"><a class="header-anchor" href="#_2-3-有序性-ordering"><span>2.3 有序性(Ordering)</span></a></h3>
<p>Java程序中，如果在本线程内观察，所有的操作都是有序的；如果在一个线程中观察另一个线程，所有的操作都是无序的。</p>
<p>Java通过以下方式保证有序性：</p>
<ol>
<li><strong>volatile关键字</strong>：禁止指令重排序</li>
<li><strong>synchronized关键字</strong>：保证同一时刻只允许一个线程对其进行lock操作</li>
</ol>
<h2 id="_3-happens-before原则" tabindex="-1"><a class="header-anchor" href="#_3-happens-before原则"><span>3. happens-before原则</span></a></h2>
<p>happens-before是Java内存模型中最重要的规则之一，它是判断数据是否存在竞争、线程是否安全的主要依据。</p>
<h3 id="_3-1-八大happens-before规则" tabindex="-1"><a class="header-anchor" href="#_3-1-八大happens-before规则"><span>3.1 八大happens-before规则</span></a></h3>
<ol>
<li><strong>程序次序规则</strong>：一个线程内按照代码顺序，书写在前面的操作先行发生于书写在后面的操作</li>
<li><strong>管程锁定规则</strong>：一个unlock操作先行发生于后面对同一个锁的lock操作</li>
<li><strong>volatile变量规则</strong>：对一个volatile变量的写操作先行发生于后面对这个变量的读操作</li>
<li><strong>线程启动规则</strong>：Thread对象的start()方法先行发生于此线程的每一个动作</li>
<li><strong>线程终止规则</strong>：线程中所有的操作都先行发生于对此线程的终止检测</li>
<li><strong>线程中断规则</strong>：对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生</li>
<li><strong>对象终结规则</strong>：一个对象的初始化完成先行发生于它的finalize()方法的开始</li>
<li><strong>传递性</strong>：如果操作A先行发生于操作B，操作B先行发生于操作C，那就可以得出操作A先行发生于操作C的结论</li>
</ol>
<h2 id="_4-volatile关键字详解" tabindex="-1"><a class="header-anchor" href="#_4-volatile关键字详解"><span>4. volatile关键字详解</span></a></h2>
<h3 id="_4-1-volatile的特性" tabindex="-1"><a class="header-anchor" href="#_4-1-volatile的特性"><span>4.1 volatile的特性</span></a></h3>
<ol>
<li><strong>保证可见性</strong>：对一个volatile变量的读，总是能看到任意线程对这个volatile变量最后的写入</li>
<li><strong>禁止指令重排序</strong>：volatile禁止编译器和处理器对volatile变量与普通变量重排序</li>
</ol>
<h3 id="_4-2-volatile的使用场景" tabindex="-1"><a class="header-anchor" href="#_4-2-volatile的使用场景"><span>4.2 volatile的使用场景</span></a></h3>
<ol>
<li>状态标记量</li>
<li>双重检查锁定(DCL)</li>
<li>独立观察</li>
</ol>
<h3 id="_4-3-volatile无法保证原子性" tabindex="-1"><a class="header-anchor" href="#_4-3-volatile无法保证原子性"><span>4.3 volatile无法保证原子性</span></a></h3>
<p>虽然volatile可以保证单次读/写的原子性，但不能保证复合操作的原子性。</p>
<h2 id="_5-synchronized关键字详解" tabindex="-1"><a class="header-anchor" href="#_5-synchronized关键字详解"><span>5. synchronized关键字详解</span></a></h2>
<h3 id="_5-1-synchronized的作用" tabindex="-1"><a class="header-anchor" href="#_5-1-synchronized的作用"><span>5.1 synchronized的作用</span></a></h3>
<p>synchronized关键字是Java中解决并发问题最常用的方法，它可以保证方法或代码块操作的原子性、可见性和有序性。</p>
<h3 id="_5-2-synchronized的三种应用方式" tabindex="-1"><a class="header-anchor" href="#_5-2-synchronized的三种应用方式"><span>5.2 synchronized的三种应用方式</span></a></h3>
<ol>
<li><strong>修饰实例方法</strong>：作用于当前实例加锁</li>
<li><strong>修饰静态方法</strong>：作用于当前类加锁</li>
<li><strong>修饰代码块</strong>：指定加锁对象，对给定对象加锁</li>
</ol>
<h3 id="_5-3-synchronized的实现原理" tabindex="-1"><a class="header-anchor" href="#_5-3-synchronized的实现原理"><span>5.3 synchronized的实现原理</span></a></h3>
<p>synchronized通过对象监视器(Monitor)实现，在进入同步代码块时获取监视器，在退出同步代码块时释放监视器。</p>
<h2 id="_6-final关键字与内存模型" tabindex="-1"><a class="header-anchor" href="#_6-final关键字与内存模型"><span>6. final关键字与内存模型</span></a></h2>
<p>final关键字也是Java内存模型中重要的一部分，它提供了特殊的语义保证：</p>
<ol>
<li>在构造函数内对一个final域的写入，与随后把这个被构造对象的引用赋值给一个引用变量，这两个操作之间不能重排序</li>
<li>初次读一个包含final域的对象的引用，与随后初次读这个final域，这两个操作之间不能重排序</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Java内存模型是理解Java并发编程的基础，掌握好JMM的相关概念对于编写正确的并发程序至关重要。通过合理运用volatile、synchronized和final等关键字，我们可以构建出高效且安全的并发程序。</p>
</div></template>


