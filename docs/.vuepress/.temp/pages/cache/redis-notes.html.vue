<template><div><h1 id="redis-面试题及答案" tabindex="-1"><a class="header-anchor" href="#redis-面试题及答案"><span>Redis 面试题及答案</span></a></h1>
<h2 id="哨兵模式" tabindex="-1"><a class="header-anchor" href="#哨兵模式"><span>哨兵模式</span></a></h2>
<h3 id="_1-redis哨兵-sentinel-是什么-有什么作用" tabindex="-1"><a class="header-anchor" href="#_1-redis哨兵-sentinel-是什么-有什么作用"><span>1. Redis哨兵（Sentinel）是什么？有什么作用？</span></a></h3>
<p>Redis Sentinel是Redis官方提供的高可用解决方案。它是一个分布式系统，用于监控Redis主从节点的运行状态，并在主节点故障时自动进行故障转移。</p>
<p>主要功能：</p>
<ul>
<li>监控：持续检查主从节点是否正常工作</li>
<li>通知：当被监控的Redis实例出现问题时，可以通过API通知管理员或其他应用程序</li>
<li>自动故障转移：当主节点不能正常工作时，Sentinel会开始自动故障转移操作，将某个从节点提升为主节点</li>
<li>配置提供者：客户端连接到Sentinel获取当前Redis主节点地址</li>
</ul>
<h3 id="_2-redis哨兵的工作原理是什么" tabindex="-1"><a class="header-anchor" href="#_2-redis哨兵的工作原理是什么"><span>2. Redis哨兵的工作原理是什么？</span></a></h3>
<ol>
<li>多个Sentinel进程协同工作，共同维护主从节点的状态</li>
<li>每个Sentinel定期向主从节点发送PING命令检测其存活状态</li>
<li>当主节点在指定时间内无响应时，Sentinel会将其标记为主观下线</li>
<li>当多数Sentinel都认为主节点主观下线时，则标记为主节点客观下线</li>
<li>Sentinel选举出一个领导者负责故障转移</li>
<li>将其中一个从节点提升为新的主节点</li>
<li>让其他从节点复制新的主节点</li>
<li>更新相关的配置信息</li>
</ol>
<h3 id="_3-redis哨兵的配置需要注意哪些要点" tabindex="-1"><a class="header-anchor" href="#_3-redis哨兵的配置需要注意哪些要点"><span>3. Redis哨兵的配置需要注意哪些要点？</span></a></h3>
<ol>
<li>至少需要3个Sentinel实例才能保证健壮性</li>
<li>各Sentinel实例应该分布在不同的物理机器上</li>
<li>quorum值设置合理，一般为N/2+1（N为Sentinel总数）</li>
<li>down-after-milliseconds参数需根据网络环境调整</li>
<li>parallel-syncs参数控制同时进行同步的从节点数量</li>
</ol>
<h2 id="集群模式" tabindex="-1"><a class="header-anchor" href="#集群模式"><span>集群模式</span></a></h2>
<h3 id="_4-redis-cluster的原理是什么" tabindex="-1"><a class="header-anchor" href="#_4-redis-cluster的原理是什么"><span>4. Redis Cluster的原理是什么？</span></a></h3>
<p>Redis Cluster是Redis提供的分布式解决方案，采用去中心化的架构。</p>
<p>核心概念：</p>
<ul>
<li>数据分片：使用哈希槽（hash slot）机制，共16384个槽位</li>
<li>节点间通信：通过Gossip协议交换状态信息</li>
<li>主从复制：每个分片可以有多个副本以提高可用性</li>
<li>故障检测与恢复：基于多数派原则判断节点状态</li>
</ul>
<h3 id="_5-redis-cluster如何实现数据分布" tabindex="-1"><a class="header-anchor" href="#_5-redis-cluster如何实现数据分布"><span>5. Redis Cluster如何实现数据分布？</span></a></h3>
<p>Redis Cluster采用哈希槽（hash slot）的方式实现数据分布：</p>
<ol>
<li>Redis Cluster将所有数据划分为16384个槽(slot)</li>
<li>每个键通过CRC16算法计算得到一个哈希值，再对16384取模确定对应的槽位</li>
<li>每个节点负责一部分槽位，通过配置将槽位分配给不同节点</li>
<li>客户端可以直接连接任意节点，节点会指引客户端转向正确的节点</li>
</ol>
<h3 id="_6-redis-cluster如何处理故障转移" tabindex="-1"><a class="header-anchor" href="#_6-redis-cluster如何处理故障转移"><span>6. Redis Cluster如何处理故障转移？</span></a></h3>
<ol>
<li>节点通过ping/pong消息交换状态信息</li>
<li>当主节点在指定时间内无响应，从节点会标记其为pfail（可能失效）</li>
<li>当半数以上持有该主节点的从节点也认为其失效时，标记为fail（确认失效）</li>
<li>从节点发起选举，获得大多数投票的从节点成为新的主节点</li>
<li>新主节点接管原主节点的槽位，集群继续对外服务</li>
</ol>
<h2 id="缓存设计" tabindex="-1"><a class="header-anchor" href="#缓存设计"><span>缓存设计</span></a></h2>
<h3 id="_7-缓存穿透、缓存击穿、缓存雪崩分别是什么-如何解决" tabindex="-1"><a class="header-anchor" href="#_7-缓存穿透、缓存击穿、缓存雪崩分别是什么-如何解决"><span>7. 缓存穿透、缓存击穿、缓存雪崩分别是什么？如何解决？</span></a></h3>
<p><strong>缓存穿透</strong>：
现象：查询一个不存在的数据，由于缓存没有命中，请求落到数据库，数据库也没有该数据，导致每次请求都会查询数据库。
解决方案：</p>
<ul>
<li>布隆过滤器：在缓存之前加布隆过滤器，快速判断一个key是否存在</li>
<li>缓存空对象：即使数据不存在，也在缓存中存储一个空值，但要设置较短的过期时间</li>
</ul>
<p><strong>缓存击穿</strong>：
现象：热点key在过期的一瞬间，大量请求涌入，直接打到数据库上。
解决方案：</p>
<ul>
<li>设置热点数据永不过期</li>
<li>加互斥锁：当缓存失效时，只让一个线程去加载数据，其他线程等待</li>
</ul>
<p><strong>缓存雪崩</strong>：
现象：大量缓存在同一时间失效，或者Redis实例宕机，导致大量请求直接打到数据库。
解决方案：</p>
<ul>
<li>设置不同的过期时间：给缓存的过期时间加上随机值</li>
<li>限流降级：在应用层做限流措施</li>
<li>构建高可用架构：使用Redis集群或主从架构</li>
</ul>
<h3 id="_8-redis的淘汰策略有哪些" tabindex="-1"><a class="header-anchor" href="#_8-redis的淘汰策略有哪些"><span>8. Redis的淘汰策略有哪些？</span></a></h3>
<p>Redis提供了多种内存淘汰策略：</p>
<ol>
<li><strong>noeviction</strong>：默认策略，不淘汰任何数据，内存不足时返回错误</li>
<li><strong>allkeys-lru</strong>：从所有key中使用LRU算法淘汰最近最少使用的key</li>
<li><strong>volatile-lru</strong>：仅从设置了过期时间的key中使用LRU算法淘汰</li>
<li><strong>allkeys-random</strong>：从所有key中随机淘汰</li>
<li><strong>volatile-random</strong>：仅从设置了过期时间的key中随机淘汰</li>
<li><strong>volatile-ttl</strong>：仅从设置了过期时间的key中淘汰TTL最小的key</li>
<li><strong>allkeys-lfu</strong>：从所有key中使用LFU算法淘汰最不经常使用的key</li>
<li><strong>volatile-lfu</strong>：仅从设置了过期时间的key中使用LFU算法淘汰</li>
</ol>
<h3 id="_9-redis的持久化机制有哪些-各有什么优缺点" tabindex="-1"><a class="header-anchor" href="#_9-redis的持久化机制有哪些-各有什么优缺点"><span>9. Redis的持久化机制有哪些？各有什么优缺点？</span></a></h3>
<p><strong>RDB（Redis Database）</strong>：
优点：</p>
<ul>
<li>文件紧凑，适合备份和灾难恢复</li>
<li>恢复大数据集速度快</li>
<li>对性能影响较小</li>
</ul>
<p>缺点：</p>
<ul>
<li>数据安全性较低，容易丢失数据</li>
<li>fork子进程消耗内存</li>
</ul>
<p><strong>AOF（Append Only File）</strong>：
优点：</p>
<ul>
<li>数据安全性更高，最多丢失1秒的数据（在每秒fsync模式下）</li>
<li>可读性强，便于分析和修复</li>
</ul>
<p>缺点：</p>
<ul>
<li>文件体积通常比RDB大</li>
<li>恢复速度慢于RDB</li>
<li>性能可能受到fsync策略的影响</li>
</ul>
<h3 id="_10-如何设计一个高并发的缓存架构" tabindex="-1"><a class="header-anchor" href="#_10-如何设计一个高并发的缓存架构"><span>10. 如何设计一个高并发的缓存架构？</span></a></h3>
<ol>
<li>
<p><strong>选择合适的缓存更新策略</strong>：</p>
<ul>
<li>Cache Aside Pattern（旁路缓存）：应用代码管理缓存和数据库</li>
<li>Read/Write Through Pattern：由缓存组件负责管理数据加载</li>
<li>Write Behind Pattern：异步批量写入数据库</li>
</ul>
</li>
<li>
<p><strong>合理设置缓存粒度</strong>：</p>
<ul>
<li>粗粒度缓存：减少网络开销，但可能导致数据冗余</li>
<li>细粒度缓存：精确控制，但增加网络开销</li>
</ul>
</li>
<li>
<p><strong>使用多级缓存</strong>：</p>
<ul>
<li>本地缓存（如Caffeine）+ 分布式缓存（Redis）</li>
<li>提高访问速度，减轻网络压力</li>
</ul>
</li>
<li>
<p><strong>构建高可用架构</strong>：</p>
<ul>
<li>使用Redis集群或哨兵模式</li>
<li>合理规划分片策略</li>
<li>设置合适的主从复制机制</li>
</ul>
</li>
<li>
<p><strong>监控和运维</strong>：</p>
<ul>
<li>实时监控缓存命中率</li>
<li>设置告警机制</li>
<li>定期清理无效缓存</li>
</ul>
</li>
</ol>
<h2 id="redis-核心知识点笔记" tabindex="-1"><a class="header-anchor" href="#redis-核心知识点笔记"><span>Redis 核心知识点笔记</span></a></h2>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>Redis（Remote Dictionary Server）是一个开源的、基于键值对的内存数据结构存储系统，可以用作数据库、缓存和消息中间件。它支持多种数据结构，如字符串(String)、哈希(Hash)、列表(List)、集合(Set)、有序集合(Sorted Set)等。</p>
<h2 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性"><span>核心特性</span></a></h2>
<h3 id="内存存储" tabindex="-1"><a class="header-anchor" href="#内存存储"><span>内存存储</span></a></h3>
<p>Redis将所有数据存储在内存中，因此具有极高的读写性能，通常每秒可以处理超过10万次读写操作。</p>
<h3 id="持久化机制" tabindex="-1"><a class="header-anchor" href="#持久化机制"><span>持久化机制</span></a></h3>
<p>虽然数据存储在内存中，但Redis提供了两种持久化机制：</p>
<ol>
<li><strong>RDB（Redis Database Backup）</strong>：在指定时间间隔内生成数据快照</li>
<li><strong>AOF（Append Only File）</strong>：记录每次写操作命令，通过重放命令恢复数据</li>
</ol>
<h3 id="单线程模型" tabindex="-1"><a class="header-anchor" href="#单线程模型"><span>单线程模型</span></a></h3>
<p>Redis采用单线程处理客户端请求，避免了多线程的上下文切换开销，同时也保证了操作的原子性。</p>
<h2 id="数据类型详解" tabindex="-1"><a class="header-anchor" href="#数据类型详解"><span>数据类型详解</span></a></h2>
<h3 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串"><span>String（字符串）</span></a></h3>
<p>最基本的数据类型，可以存储字符串、整数或浮点数。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 设置字符串</span>
<span class="line">SET name &quot;John&quot;</span>
<span class="line"></span>
<span class="line"># 获取字符串</span>
<span class="line">GET name</span>
<span class="line"></span>
<span class="line"># 数值操作</span>
<span class="line">INCR counter</span>
<span class="line">DECR counter</span>
<span class="line">INCRBY counter 10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash-哈希" tabindex="-1"><a class="header-anchor" href="#hash-哈希"><span>Hash（哈希）</span></a></h3>
<p>键值对集合，特别适合存储对象。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 设置哈希字段</span>
<span class="line">HSET user:1000 name &quot;John&quot;</span>
<span class="line">HSET user:1000 email &quot;john@example.com&quot;</span>
<span class="line"></span>
<span class="line"># 获取哈希字段</span>
<span class="line">HGET user:1000 name</span>
<span class="line">HGETALL user:1000</span>
<span class="line"></span>
<span class="line"># 批量设置</span>
<span class="line">HMSET user:1001 name &quot;Jane&quot; email &quot;jane@example.com&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表"><span>List（列表）</span></a></h3>
<p>双向链表实现，可以从两端插入或弹出元素。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 从左侧插入</span>
<span class="line">LPUSH mylist &quot;item1&quot;</span>
<span class="line">LPUSH mylist &quot;item2&quot;</span>
<span class="line"></span>
<span class="line"># 从右侧插入</span>
<span class="line">RPUSH mylist &quot;item3&quot;</span>
<span class="line"></span>
<span class="line"># 弹出元素</span>
<span class="line">LPOP mylist</span>
<span class="line">RPOP mylist</span>
<span class="line"></span>
<span class="line"># 获取列表范围</span>
<span class="line">LRANGE mylist 0 -1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合"><span>Set（集合）</span></a></h3>
<p>无序且不重复的字符串集合。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 添加元素</span>
<span class="line">SADD myset &quot;item1&quot;</span>
<span class="line">SADD myset &quot;item2&quot;</span>
<span class="line">SADD myset &quot;item3&quot;</span>
<span class="line"></span>
<span class="line"># 检查元素是否存在</span>
<span class="line">SISMEMBER myset &quot;item1&quot;</span>
<span class="line"></span>
<span class="line"># 获取所有元素</span>
<span class="line">SMEMBERS myset</span>
<span class="line"></span>
<span class="line"># 集合运算</span>
<span class="line">SINTER set1 set2  # 交集</span>
<span class="line">SUNION set1 set2  # 并集</span>
<span class="line">SDIFF set1 set2   # 差集</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorted-set-有序集合" tabindex="-1"><a class="header-anchor" href="#sorted-set-有序集合"><span>Sorted Set（有序集合）</span></a></h3>
<p>每个元素关联一个分数(score)，根据分数自动排序。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 添加元素</span>
<span class="line">ZADD leaderboard 100 &quot;player1&quot;</span>
<span class="line">ZADD leaderboard 200 &quot;player2&quot;</span>
<span class="line">ZADD leaderboard 150 &quot;player3&quot;</span>
<span class="line"></span>
<span class="line"># 获取排名</span>
<span class="line">ZRANK leaderboard &quot;player2&quot;</span>
<span class="line"></span>
<span class="line"># 获取范围内元素</span>
<span class="line">ZRANGE leaderboard 0 -1 WITHSCORES</span>
<span class="line"></span>
<span class="line"># 按分数获取元素</span>
<span class="line">ZREVRANGEBYSCORE leaderboard +inf 150</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级特性" tabindex="-1"><a class="header-anchor" href="#高级特性"><span>高级特性</span></a></h2>
<h3 id="发布订阅" tabindex="-1"><a class="header-anchor" href="#发布订阅"><span>发布订阅</span></a></h3>
<p>Redis实现了发布订阅模式，可用于消息传递。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line"># 订阅频道</span>
<span class="line">SUBSCRIBE news</span>
<span class="line"></span>
<span class="line"># 发布消息</span>
<span class="line">PUBLISH news &quot;Hello World!&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h3>
<p>Redis支持简单的事务操作，通过MULTI、EXEC、DISCARD和WATCH命令实现。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line">MULTI</span>
<span class="line">SET key1 &quot;value1&quot;</span>
<span class="line">SET key2 &quot;value2&quot;</span>
<span class="line">EXEC</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua脚本" tabindex="-1"><a class="header-anchor" href="#lua脚本"><span>Lua脚本</span></a></h3>
<p>可以使用Lua脚本在服务器端原子性地执行多个命令。</p>
<div class="language-redis line-numbers-mode" data-highlighter="prismjs" data-ext="redis"><pre v-pre><code><span class="line">EVAL &quot;return {KEYS[1],ARGV[1]}&quot; 1 &quot;key&quot; &quot;hello&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline"><span>Pipeline</span></a></h3>
<p>客户端可以通过管道一次发送多个命令，减少网络往返时间。</p>
<h2 id="部署与配置" tabindex="-1"><a class="header-anchor" href="#部署与配置"><span>部署与配置</span></a></h2>
<h3 id="主从复制" tabindex="-1"><a class="header-anchor" href="#主从复制"><span>主从复制</span></a></h3>
<p>Redis支持主从复制，可以实现读写分离和数据冗余。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 从节点配置</span></span>
<span class="line">slaveof master_ip master_port</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="哨兵模式-1" tabindex="-1"><a class="header-anchor" href="#哨兵模式-1"><span>哨兵模式</span></a></h3>
<p>Sentinel用于监控Redis实例，实现自动故障转移。</p>
<h3 id="集群模式-1" tabindex="-1"><a class="header-anchor" href="#集群模式-1"><span>集群模式</span></a></h3>
<p>Redis Cluster提供数据分片和高可用性。</p>
<h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="内存优化" tabindex="-1"><a class="header-anchor" href="#内存优化"><span>内存优化</span></a></h3>
<ol>
<li><strong>使用合适的数据结构</strong>：例如用Hash代替多个String键</li>
<li><strong>启用压缩</strong>：对大型值启用LZF压缩</li>
<li><strong>设置过期时间</strong>：使用EXPIRE命令自动删除不需要的数据</li>
</ol>
<h3 id="配置优化" tabindex="-1"><a class="header-anchor" href="#配置优化"><span>配置优化</span></a></h3>
<div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf"><pre v-pre><code><span class="line"># 最大内存限制</span>
<span class="line">maxmemory 2gb</span>
<span class="line"></span>
<span class="line"># 内存淘汰策略</span>
<span class="line">maxmemory-policy allkeys-lru</span>
<span class="line"></span>
<span class="line"># 启用AOF持久化</span>
<span class="line">appendonly yes</span>
<span class="line"></span>
<span class="line"># AOF同步策略</span>
<span class="line">appendfsync everysec</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


